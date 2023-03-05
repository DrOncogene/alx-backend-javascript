const fs = require('fs');

function countStudents(path) {
  try {
    const db = fs.readFileSync(path, {encoding: 'utf-8'});
    const students = db.split('\n').slice(1);
    const numOfStudents = students.length;
    if (students[numOfStudents - 1] === '') {
      students.pop();
    }
    console.log(`Number of students: ${students.length}`);

    const studentsByFields = {};
    for (const student of students) {
      const studentArray = student.split(',');
      const field = studentArray[3];
      if (field in studentsByFields) {
        studentsByFields[field].push(studentArray[0]);
      } else {
        studentsByFields[field] = [studentArray[0]];
      }
    }

    for (const field in studentsByFields) {
      const list = studentsByFields[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
