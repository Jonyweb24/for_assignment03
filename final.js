/** Problem -01 ( Divide the Asset ) */
var area = 100;

if (area > 0 && area <= 100) {
  var rahimArea = area / 2;
  console.log(rahimArea);
} else {
  var karimArea = area / 2;
  console.log(karimArea);
}

// starting problem -02
/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;

if (money > 25000 && money <= 45000) {
  console.log("Laptop");
} else if (money >= 10000 && money <= 25000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

// starting problem -03
/** Problem -03 ( Medicine Planner ) */
var lastDay = 15;


for (var lastDay = 1; lastDay <= 15; lastDay++) {
  if (lastDay % 3 === 0) {
    console.log(`${lastDay} - mdeicine`);
  } else {
    console.log(`${lastDay} - rest`);
  }
}

// starting problem -04
/** Problem 04 - (Delete / Store) */
var fileName = [
  "result.pdf",
  "data.docx",
  "pdfData.jpg",
  "#exp.mp4",
  "docx.txt",
  "docx.xpdf",
  "slipdf.txt",
];

for (var i = 0; i < fileName.length; i++) {
  var file = fileName[i];

  if (
    file.endsWith(".pdf") ||
    file.endsWith(".docx") ||
    file.endsWith(".mp4")
  ) {
    console.log(`${file}        - Store`);
  } else if (
    file.endsWith(".jpg") ||
    file.endsWith(".xpdf") ||
    file.endsWith(".txt")
  ) {
    console.log(`${file}      - Delete`);
  }
}

// starting problem -05
// /** Problem 05 - ( PH Email Generator )  */
// var student= { name: "jhanku" , roll: 1014 ,department: "cse" };
//write your code here

var student;

var student1 = {
  name: "jhankar",
  roll: 1014,
  department: "cse",
};

var student2 = {
  name: "monu",
  roll: 99,
  department: "eee",
};
var student3 = {
  name: "mewo",
  roll: 96,
  department: "cse",
};

console.log(
  student1.name + student1.roll + "." + student1.department + "@ph.ac.bd"
);
console.log(
  student2.name + student2.roll + "." + student2.department + "@ph.ac.bd"
);
console.log(
  student3.name + student3.roll + "." + student3.department + "@ph.ac.bd"
);

// starting problem -06
/** Problem 06 :  (Current Salary )  */

var experience = 40;
var startingSalary = 30000;

var currentSalary = startingSalary;

for (var i = 1; i <= experience; i++) {
  var startingSalary = currentSalary + (currentSalary * 5) / 100;
  currentSalary += (currentSalary * 5) / 100;
}


if (
  startingSalary > 0 &&
  startingSalary <= 10 ** 6 &&
  experience > 0 &&
  experience <= 50
) {
  console.log(startingSalary.toFixed(2));
} else {
  console.log(startingSalary.toFixed(2));
}

