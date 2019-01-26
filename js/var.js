var subjectAreas = [
  { code: "ANTH", name: "Anthropology" },
  { code: "ASTR", name: "Astronomy" },
  { code: "ASTU", name: "Arts Studies" },
  { code: "BIOL", name: "Biology" },
  { code: "COMM", name: "Commerce" },
  { code: "CPSC", name: "Computer Science" },
  { code: "EOSC", name: "Earth and Ocean Sciences" },
  { code: "FNH", name: "Food, Nutrition and Health" },
  { code: "GEOG", name: "Geography" },
  { code: "HIST", name: "History" },
  { code: "POLI", name: "Political Science" },
  { code: "THTR", name: "Theatre" }
];

var skillGroups = {
  writing: "communication",
  collaboration: "communication",

  language: "culture",
  "ethnic-studies": "culture",

  art: "creativity",
  performance: "creativity",

  "field-methods": "research",
  "experimental-methods": "research",

  computing: "logic",
  mathematics: "logic"
};

var courseSkills = {
  "ANTH 210": { "ethnic-studies": 2, writing: 1 },
  "ANTH 217": { "ethnic-studies": 2, writing: 1 },
  "ANTH 407": { "field-methods": 2, "ethnic-studies": 1 },
  "ANTH 418": { mathematics: 2, "ethnic-studies": 1 },
  "ARTH 101": { art: 2, writing: 1 },
  "ARTH 102": { art: 2, writing: 1 },
  "ARTH 225": { art: 2, writing: 1 },
  "ARTH 226": { art: 2, writing: 1 },
  "ARTH 227": { art: 2, writing: 1 },
  "ARTH 251": { art: 2, writing: 1 },
  "ASTR 101": { mathematics: 2, "experimental-methods": 1 },
  "ASTR 102": { mathematics: 2, "experimental-methods": 1 },
  "ASTR 310": { mathematics: 2, "experimental-methods": 1 },
  "ASTR 311": { mathematics: 2, "experimental-methods": 1 },
  "ASTR 406": { mathematics: 2, "experimental-methods": 1 },
  "ASTU 210": { collaboration: 2, "ethnic-studies": 1 },
  "ASTU 360": { collaboration: 2, "field-methods": 1 },
  "BIOL 140": { "experimental-methods": 2, collaboration: 1 },
  "BIOL 300": { "experimental-methods": 2, collaboration: 1 },
  "BIOL 301": { "experimental-methods": 2, mathematics: 1 },
  "CHEM 121": { "experimental-methods": 2, mathematics: 1 },
  "COMM 100": { collaboration: 2, writing: 1 },
  "COMM 204": { collaboration: 2, writing: 1 },
  "COMM 205": { collaboration: 2, writing: 1 },
  "COMM 438": { collaboration: 2, writing: 1 },
  "CPSC 110": { computing: 2, mathematics: 1 },
  "CPSC 121": { mathematics: 2, computing: 1 },
  "CPSC 344": { collaboration: 2, computing: 1 },
  "ENGL 100": { writing: 2, language: 1 },
  "ENGL 110": { writing: 2, language: 1 },
  "ENGL 112": { writing: 2, language: 1 },
  "ENGL 222": { writing: 2, language: 1 },
  "EOSC 310": { "field-methods": 1, writing: 2 },
  "EOSC 311": { "field-methods": 2, writing: 1 },
  "EOSC 314": { "field-methods": 2, collaboration: 1 },
  "EOSC 315": { "field-methods": 2, collaboration: 1 },
  "FNH 330": { "ethnic-studies": 2, "experimental-methods": 1 },
  "GEOG 311": { "field-methods": 2, writing: 1 },
  "GEOG 327": { collaboration: 2, writing: 1 },
  "GEOG 328": { collaboration: 2, writing: 1 },
  "GERM 100": { language: 2, writing: 1 },
  "HIST 350": { "ethnic-studies": 3, writing: 3 },
  "MATH 100": { mathematics: 3 },
  "MATH 101": { mathematics: 3 },
  "PHYS 101": { mathematics: 2, "experimental-methods": 1 },
  "PHYS 102": { mathematics: 2, "experimental-methods": 1 },
  "POLI 100": { collaboration: 2, writing: 1 },
  "POLI 101": { collaboration: 2, writing: 1 },
  "THTR 130": { collaboration: 2, performance: 1 },
  "VISA 110": { art: 3 },
  "VISA 180": { art: 3 },
  "VISA 183": { art: 3 },
  "VISA 210": { art: 3 },
  "VISA 220": { art: 3 },
  "VISA 230": { art: 3 },
  "VISA 240": { art: 2, computing: 1 },
  "VISA 241": { art: 2, computing: 1 },
  "VISA 250": { art: 2, collaboration: 1 }
};

var courses = [
  "ANTH 210",
  "ANTH 217",
  "ANTH 407",
  "ANTH 418",
  "ARTH 101",
  "ARTH 102",
  "ARTH 225",
  "ARTH 226",
  "ARTH 227",
  "ARTH 251",
  "ASTR 101",
  "ASTR 102",
  "ASTR 310",
  "ASTR 311",
  "ASTR 406",
  "ASTU 210",
  "ASTU 360",
  "BIOL 140",
  "BIOL 300",
  "BIOL 301",
  "CHEM 121",
  "COMM 100",
  "COMM 204",
  "COMM 205",
  "COMM 438",
  "CPSC 110",
  "CPSC 121",
  "CPSC 344",
  "ENGL 100",
  "ENGL 110",
  "ENGL 112",
  "ENGL 222",
  "EOSC 310",
  "EOSC 311",
  "EOSC 314",
  "EOSC 315",
  "FNH 330",
  "GEOG 311",
  "GEOG 327",
  "GEOG 328",
  "GERM 100",
  "HIST 350",
  "MATH 100",
  "MATH 101",
  "PHYS 101",
  "PHYS 102",
  "POLI 100",
  "POLI 101",
  "THTR 130",
  "VISA 110",
  "VISA 180",
  "VISA 183",
  "VISA 210",
  "VISA 220",
  "VISA 230",
  "VISA 240",
  "VISA 241",
  "VISA 250"
];

var courseDetails = {
  "ANTH 210": {
    subj: "ANTH",
    year: 2,
    name: "Eating Culture",
    term: "1",
    days: ["T", "Th"],
    time: "14:00 - 15:30",
    cred: 3
  },
  "ANTH 217": {
    subj: "ANTH",
    year: 2,
    name: "Culture and Communication",
    term: "1",
    days: ["T", "Th"],
    time: "12:30 - 14:00",
    cred: 3
  },
  "ANTH 407": {
    subj: "ANTH",
    year: 4,
    name: "Principles of Field Work",
    term: "2",
    days: ["T", "Th"],
    time: "15:30 - 17:00",
    cred: 3
  },
  "ANTH 418": {
    subj: "ANTH",
    year: 4,
    name: "Anthropological Statistics",
    term: "1",
    days: ["M", "W", "F"],
    time: "15:00 - 16:00",
    cred: 3
  },
  "ASTR 101": {
    subj: "ASTR",
    year: 1,
    name: "Introduction to the Solar System",
    term: "1",
    days: ["M", "W", "F"],
    time: "12:00 - 13:00",
    cred: 3
  },
  "ASTR 102": {
    subj: "ASTR",
    year: 1,
    name: "Introduction to Stars and Galaxies",
    term: "2",
    days: ["M", "W", "F"],
    time: "12:00 - 13:00",
    cred: 3
  },
  "ASTR 310": {
    subj: "ASTR",
    year: 3,
    name: "Exploring the Universe I: The Solar System",
    term: "1",
    days: ["M", "W", "F"],
    time: "12:00 - 13:00",
    cred: 3
  },
  "ASTR 311": {
    subj: "ASTR",
    year: 3,
    name: "Exploring the Universe II: Stars and Galaxies",
    term: "2",
    days: ["M", "W", "F"],
    time: "12:00 - 13:00",
    cred: 3
  },
  "ASTR 406": {
    subj: "ASTR",
    year: 4,
    name: "High-Energy Astrophysics",
    term: "2",
    days: ["M", "W", "F"],
    time: "13:00 - 14:00",
    cred: 3
  },
  "ASTU 210": {
    subj: "ASTU",
    year: 2,
    name: "Global Citizenship, Part 1: Introduction",
    term: "2",
    days: ["T", "Th"],
    time: "13:00 - 14:30",
    cred: 3
  },
  "ASTU 360": {
    subj: "ASTU",
    year: 3,
    name: "Community-Based Research and Knowledge Creation",
    term: "2",
    days: ["M", "W", "F"],
    time: "10:00 - 11:00",
    cred: 3
  },
  "BIOL 300": {
    subj: "BIOL",
    year: 3,
    name: "Fundamentals of Biostatistics",
    term: "1",
    days: ["T", "Th"],
    time: "14:00 - 15:30",
    cred: 3
  },
  "BIOL 301": {
    subj: "BIOL",
    year: 3,
    name: "Biomathematics",
    term: "1",
    days: ["T", "Th"],
    time: "08:00 - 09:30",
    cred: 3
  },
  "COMM 100": {
    subj: "COMM",
    year: 1,
    name: "Introduction to Business",
    term: "2",
    days: ["M", "W", "F"],
    time: "09:00 - 10:00",
    cred: 3
  },
  "COMM 204": {
    subj: "COMM",
    year: 2,
    name: "Logistics and Operations Management",
    term: "2",
    days: ["M", "F"],
    time: "08:30 - 10:00",
    cred: 3
  },
  "COMM 205": {
    subj: "COMM",
    year: 2,
    name: "Introduction to Management Information Systems",
    term: "1",
    days: ["W", "F"],
    time: "08:30 - 10:00",
    cred: 3
  },
  "COMM 438": {
    subj: "COMM",
    year: 4,
    name: "Management of Information Systems",
    term: "1",
    days: ["T", "Th"],
    time: "09:30 - 11:00",
    cred: 3
  },
  "CPSC 344": {
    subj: "CPSC",
    year: 3,
    name: "Introduction to Human Computer Interaction Methods",
    term: "1",
    days: ["M", "W"],
    time: "16:00 - 17:30",
    cred: 3
  },
  "EOSC 310": {
    subj: "EOSC",
    year: 3,
    name: "The Earth and the Solar System",
    term: "A",
    days: "N/A",
    time: "N/A",
    cred: 3
  },
  "EOSC 311": {
    subj: "EOSC",
    year: 3,
    name: "The Earth and its Resources",
    term: "C",
    days: "N/A",
    time: "N/A",
    cred: 3
  },
  "EOSC 314": {
    subj: "EOSC",
    year: 3,
    name: "The Ocean Environment",
    term: "A",
    days: "N/A",
    time: "N/A",
    cred: 3
  },
  "EOSC 315": {
    subj: "EOSC",
    year: 3,
    name: "The Ocean Ecosystem",
    term: "2",
    days: ["M", "W", "F"],
    time: "14:00 - 15:00",
    cred: 3
  },
  "FNH 330": {
    subj: "FNH",
    year: 3,
    name: "Introduction to Wine Science 1",
    term: "1",
    days: ["T", "Th"],
    time: "16:00 - 17:00",
    cred: 3
  },
  "GEOG 311": {
    subj: "GEOG",
    year: 3,
    name: "Urban Environments",
    term: "2",
    days: ["T", "Th"],
    time: "14:00 - 15:30",
    cred: 3
  },
  "GEOG 327": {
    subj: "GEOG",
    year: 3,
    name: "Creating Canada",
    term: "1",
    days: ["T", "Th"],
    time: "12:30 - 14:00",
    cred: 3
  },
  "GEOG 328": {
    subj: "GEOG",
    year: 3,
    name: "Constructing Canada",
    term: "2",
    days: ["T", "Th"],
    time: "09:30 - 11:00",
    cred: 3
  },
  "HIST 350": {
    subj: "HIST",
    year: 3,
    name: "The Soviet Union",
    term: "2",
    days: ["M"],
    time: "18:00 - 21:00",
    cred: 6
  },
  "POLI 100": {
    subj: "POLI",
    year: 1,
    name: "Introduction to Politics",
    term: "1",
    days: ["T", "Th"],
    time: "11:00 - 12:30",
    cred: 3
  },
  "POLI 101": {
    subj: "POLI",
    year: 1,
    name: "The Government of Canada",
    term: "1",
    days: ["M", "W", "F"],
    time: "11:00 - 12:00",
    cred: 3
  },
  "THTR 130": {
    subj: "THTR",
    year: 1,
    name: "Introduction to Stage Acting",
    term: "1",
    days: ["M", "W", "F"],
    time: "10:00 - 11:00",
    cred: 3
  }
};
