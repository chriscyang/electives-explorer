// -----------------------------------------------------------------------------
// PRESET USER PROFILES
// -----------------------------------------------------------------------------

var user1 = [
    "ARTH 101", "ARTH 102", "ARTH 225", "ARTH 226", "ARTH 227", "ARTH 251",
    "ENGL 100", "ENGL 222", "GERM 100", "VISA 110", "VISA 180", "VISA 183",
    "VISA 210", "VISA 220", "VISA 230", "VISA 240", "VISA 241", "VISA 250",
];

var user2 = [
    "BIOL 140", "CPSC 110", "CPSC 121", "ENGL 110", "ENGL 112", "MATH 100",
    "MATH 101", "PHYS 101", "PHYS 102",
];

var userCourses = user2;

// -----------------------------------------------------------------------------
// CHART DATA
// -----------------------------------------------------------------------------

var chartConfig = {
    w           : 250,
    h           : 250,
    maxValue    : 0.6,
    levels      : 5,
    ExtraWidthX : 300,
}

// Actual values for axes are kept here.
var data = [

    // Preview (Red)
    [
        { axis  : "Communication", value : 0 },
        { axis  : "Culture",       value : 0 },
        { axis  : "Creativity",    value : 0 },
        { axis  : "Research",      value : 0 },
        { axis  : "Logic",         value : 0 },
    ],

    // Current (Blue)
    [
        { axis  : "Communication", value : 0 },
        { axis  : "Culture",       value : 0 },
        { axis  : "Creativity",    value : 0 },
        { axis  : "Research",      value : 0 },
        { axis  : "Logic",         value : 0 },
    ],

    // Max
    [
        { axis  : "Communication", value : 0 },
        { axis  : "Culture",       value : 0 },
        { axis  : "Creativity",    value : 0 },
        { axis  : "Research",      value : 0 },
        { axis  : "Logic",         value : 0 },
    ]
];

// Current values.
var curCommunication = 0;
var curCulture       = 0;
var curCreativity    = 0;
var curResearch      = 0;
var curLogic         = 0;

// Preview values.
var preCommunication = 0;
var preCulture       = 0;
var preCreativity    = 0;
var preResearch      = 0;
var preLogic         = 0;

// -----------------------------------------------------------------------------
// INITIALIZERS
// -----------------------------------------------------------------------------

function initSkillProfile() {

    // Reset internal values.
    initCurrentVals();
    initPreviewVals();

    // Reset progress bars.
    $.each($(".progress-bar"), function() {
        $(this).attr("aria-valuenow", 0);
        $(this).css("width", "0%");
    });

    // Reset course lists.
    $(".courses-body").find("ul").html("");

    // Go through each of the user's courses and add them to the skill profile.
    for (var i in userCourses) {
        if (userCourses[i] in courseSkills) {
            for (var skill in courseSkills[userCourses[i]]) {
                var curVal = parseInt($("#" + skill).attr("aria-valuenow"));
                var addVal = courseSkills[userCourses[i]][skill];
                var newVal = curVal + addVal;

                updateVals(skill, addVal, "cur");

                $("#" + skill).attr("aria-valuenow", newVal);
                $("#" + skill).css("width", newVal / 120 * 100 + "%");
                $("#courses-" + skill).find("ul").append("<li>" + userCourses[i] + "</li>");
            }
        }
    }

    // Indicate if a course list is empty.
    $.each($(".courses-body"), function() {
        if (!$(this).find("ul").text()) {
            $(this).find("ul").append("<li>No courses applied to this skill.</li>");
        }
    });

    // Draw the chart.
    updateAxis(data[1], "cur");
    updateMax();
    radarChart.draw("#radar-chart", data, chartConfig);
}

function initCurrentVals() {
    curCommunication = 0;
    curCulture       = 0;
    curCreativity    = 0;
    curResearch      = 0;
    curLogic         = 0;
}

function initPreviewVals() {
    preCommunication = curCommunication;
    preCulture       = curCulture;
    preCreativity    = curCreativity;
    preResearch      = curResearch;
    preLogic         = curLogic;
}

/**
 * The maximum value for the chart is always the same as the points of the
 * skill group with the most points.
 */
function updateMax() {
    var newMax = Math.max.apply(Math,
        [curCommunication, curCulture, curCreativity, curResearch, curLogic]);
    for (var i in data[2]) {
        data[2][i].value = newMax;
    }
    chartConfig.maxValue = newMax;
}

// -----------------------------------------------------------------------------
// SEARCH & RESULTS
// -----------------------------------------------------------------------------

function search(searchSubj, searchYear, searchSkills) {

    // Reset search results.
    $("#initial-message").hide();
    $("#results-table").DataTable().destroy();
    $("#results-table").find("tbody").html("");

    // Go through each course and determine if they match the search criteria.
    for (var i in courses) {
        var code = courses[i];
        var course = courseDetails[code];

        // Skip a course if it's already added by the user.
        if ($.inArray(code, userCourses) > -1) {
            continue;
        }

        // Skip a course if its details are not available.
        if (!course) {
            continue;
        }

        // Match subject area.
        if (searchSubj) {
            if (course["subj"] != searchSubj) {
                continue;
            }
        }

        // Match year level.
        if (searchYear) {
            if ($.inArray(course["year"].toString(), searchYear) === -1) {
                continue;
            }
        }

        // Match skills.
        var skills = [];
        for (var skill in courseSkills[code]) {
            skills.push({
                "skill"  : skill,
                "points" : courseSkills[code][skill],
            });
        }
        if (searchSkills) {
            var matchSkills = false;
            for (var j in skills) {
                if ($.inArray(skills[j]["skill"], searchSkills) > - 1) {
                    matchSkills = true;
                }
            }
            if (!matchSkills) {
                continue;
            }
        }

        // Add the course to the results table.
        $("#results-table").find("tbody").append(courseRow(code, course, skills));
    }

    displayResults();
}

function courseRow(code, course, skills) {
    var name = course["name"];
    var term = course["term"];
    var days = course["days"];
    var time = course["time"];
    var cred = course["cred"];

    var skillLabels = "";
    for (var i in skills) {
        skillLabels += "<span class='label label-pill label-primary skill-label'>" +
                        toTitleCase(skills[i]["skill"]) + " +" + skills[i]["points"] + "</span>";
    }

    var preBtn = "<input type='button' class='btn btn-default btn-xs btn-actions btn-pre'" +
                 "value='Preview Skill Profile' onclick='previewCourse(this)' />";
    var addBtn = "<input type='button' class='btn btn-default btn-xs btn-actions btn-add'" +
                 "value='Add to Worklist' onclick='addCourse(this)' />";
    var sscBtn = "<input type='button' class='btn btn-default btn-xs btn-actions btn-ssc'" +
                 "value='View on SSC' disabled />";

    var courseRow = "<tr name='" + code + "'>" +
                    "<td>" + code + "<br>" + name + "<br>" + skillLabels + "</td>" +
                    "<td class='centered-cell'>" + term + "</td>" +
                    "<td class='centered-cell'>" + days + "</td>" +
                    "<td>"                       + time + "</td>" +
                    "<td class='centered-cell'>" + cred + "</td>" +
                    "<td>" + preBtn + addBtn + sscBtn + "</td>" +
                    "</tr>";
    return courseRow;
}

function displayResults() {
    if (!$("#results-table").find("tbody").html()) {
        $("#initial-message").hide();
        $("#no-results-message").show();
        $("#results-table").hide();
    } else {
        $("#initial-message").hide();
        $("#no-results-message").hide();
        $("#results-table").show();
        $("#results-table").DataTable({
            "autoWidth" : false,
            "columns" : [
                { "width" : "100%" },
                { "width" : "100%" },
                { "width" : "100%" },
                { "width" : "100%" },
                { "width" : "100%" },
                { "width" : "100%" },
            ],
        });
    }
}

// -----------------------------------------------------------------------------
// PREVIEW COURSE
// -----------------------------------------------------------------------------

function previewCourse(preBtn) {
    closePreview();

    var courseRow = $(preBtn).closest("tr");
    var course = $(courseRow).attr("name");

    $(courseRow).addClass("previewing");
    previewSkillProfile(course);

    $(preBtn).attr("value", "Close Preview");
    $(preBtn).attr("onclick", "closePreview();");

    $(".radar-chart-series-0").show();
}

function closePreview() {
    $(".preview-bar").remove();
    $(".previewing").removeClass("previewing");

    $(".btn-pre").attr("value", "Preview Skill Profile");
    $(".btn-pre").attr("onclick", "previewCourse(this);");

    $('.radar-chart-series-0').hide();
}

function previewSkillProfile(course) {
    initPreviewVals();

    // Use a deep copy to current data.
    var preData = $.extend(true, [], data);

    var skills = courseSkills[course];

    $.each(skills, function(skill, points) {
        updateVals(skill, points, "pre");

        $("#tab-" + skillGroups[skill]).addClass("previewing");
        var previewBar = "<div class='progress-bar progress-bar-striped progress-bar-danger active preview-bar'" +
                         "aria-valuemin='0' aria-valuemax='120' aria-valuenow='" + points + "'" +
                         "style='width: " + points / 120 * 100 + "%;'></div>";
        $("#" + skill).parent().append(previewBar);
    });

    updateAxis(preData[0], "pre");
    radarChart.draw("#radar-chart", preData, chartConfig);
}

// -----------------------------------------------------------------------------
// ADD COURSE
// -----------------------------------------------------------------------------

function addCourse(addBtn) {
    closePreview();

    var courseRow = $(addBtn).closest("tr");
    var course = $(courseRow).attr("name");

    userCourses.push(course);
    initSkillProfile();

    $(courseRow).hide();
    var confirmationBody = "Course <b>" + course +"</b>" +
                           " has been successfully added to your worklist." + "<br>" +
                           "<span id='confirmation-icon' class='glyphicon glyphicon-ok-circle'></span>";
    $("#confirmation-body").html(confirmationBody);
    $("#confirmation").modal();
}

function undoAddCourse() {
    var course = userCourses.pop();
    var courseRow = $("[name='" + course + "']");

    initSkillProfile();

    $(courseRow).show();
    $("#confirmation").modal("hide");
}

// -----------------------------------------------------------------------------
// CHART UPDATERS
// -----------------------------------------------------------------------------

/**
 * Updates a given axis on the chart.
 */
function updateAxis(data, prefix) {
    data[0].value = window[prefix + "Communication"];
    data[1].value = window[prefix + "Culture"];
    data[2].value = window[prefix + "Creativity"];
    data[3].value = window[prefix + "Research"];
    data[4].value = window[prefix + "Logic"];
}

/**
 * Updates internal values for the chart.
 */
function updateVals(skill, val, prefix) {
    window[prefix + toTitleCase(skillGroups[skill])] += val;
}

// -----------------------------------------------------------------------------
// HELPERS
// -----------------------------------------------------------------------------

/**
 * Adapted from:
 * http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991#196991
 */
function toTitleCase(string) {
    return string.replace(/-/g, " ")
                 .replace(/\w\S*/g, function(x) {
                    return x.charAt(0).toUpperCase() + x.substr(1).toLowerCase();
                 });
}
