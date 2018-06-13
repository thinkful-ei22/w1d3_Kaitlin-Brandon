'use strict';

// 1. makeStudentReport

function makeStudentsReport(data) {
  let strArray = [];
  for (const key in data) { 
    const value = data[key]; 
    //console.log(value.name); 
    strArray.push(`${value.name}: ${value.grade}`);
    //console.log(strArray);
  }
  return strArray;
}
  

/* From here down, you are not expected to 
     understand.... for now :)  
     
     Nothing to see here!
     
  */
  
// tests
  
function testIt() {
  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];
  
  const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];
  
  const results = makeStudentsReport(testData);
  
  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `makeStudentsReport` must return an array');
    return;
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' +
          testData.length +
          ' but `makeStudentsReport` returned array of length ' +
          results.length
    );
    return;
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (
      !results.find(function(item) {
        return item === expect;
      })
    ) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' + 'producing expected strings'
      );
      return;
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}
  
testIt();

// 2. Enroll in summer school

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  let newArray = [];
  for (let i = 0; i < students.length; i++) {
    students.status = 'In Summer School';
    const value = students[key];
    newArray.push(students[i]);
  }
  return newArray;
}

/* From here down, you are not expected to understand.... for now :)
Nothing to see here!

*/

// tests

function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology',
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics',
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science',
    },
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return;
  }
  var result = testData.every(function(student) {
    var match = results.find(function(_student) {
      return (
        _student.name === student.name &&
      _student.course === student.course &&
      _student.status.toLowerCase() === 'in summer school'
      );
    });
    return match !== undefined;
  });
  if (!result) {
    console.error(
      'FAILURE: `enrollSummerSchool` should return ' +
      'original key/value pairs for each student, and ' +
      'update `status` to "In Summer school": ' +
      JSON.stringify(results)
    );
  } else {
    console.info('SUCCESS: `enrollSummerSchool` is working');
  }
}

testIt();