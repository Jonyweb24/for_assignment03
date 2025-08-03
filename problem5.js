// { name: string , roll: number ,department: string  }

// উপরের অব্জেক্ট এর Structure টি লক্ষ্য করো।  ph university তে  পড়া student এর Data   student  নামের একটা ভ্যারিয়েবলে সেইভ করা আছে  ।  তোমাকে এমন একটা প্রোগ্রাম লিখতে হবে যেটা   student  অব্জেক্ট এর ডাটা এর উপর ভিত্তি করে  একটা ইমেইল  জেনারেট করে দেবে। ইমেইল টা হবে ঠিক নিচের স্ট্রাকচারে
// name
// roll
// .
// department
// @ph.ac.bd

// নিচের আউটপুট গুলো লক্ষ্য করো।
// Value of  Student ( object )
// Output (string)
// { name: "jhanku" , roll: 1014 ,department: "cse"  }
// jhanku1014.cse@ph.ac.bd
// { name: "monu" , roll: 99,department: "eee"  }
// monu99.eee@ph.ac.bd
// { name: "mewo" , roll: 96 ,department: "cse"  }
// mewo96.cse@ph.ac.bd

// নিচের কোড স্নিপেট টি কপি করো ,  প্রোগ্রাম টি কে  কমপ্লিট করো  এবং console.log করে ঠিক যেভাবে আউটুপুট দেখাতে বলা হয়েছে সে আউটপুট দেখাও
// /** Problem 05 - ( PH Email Generator )  */
// var student= { name: "jhanku" , roll: 1014 ,department: "cse" };
//write your code here


 var student;

 var student1= {
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


 
