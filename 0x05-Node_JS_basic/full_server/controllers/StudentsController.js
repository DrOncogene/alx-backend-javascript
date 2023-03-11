import { readDatabase } from '../utils';

export class StudentsController {
  static async getAllStudents(req, resp, next) {
    let resText = 'This is the list of our students\n';
    const students = await readDatabase(process.argv[2])
      .then(res => res)
      .catch(error => {
        resp.status(500).send(error.message);
      });
    if (students === undefined) {
      return;
    }
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const list = students[field];
        resText += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
      }
    }
    resp.resText = resText.slice(0, -1);
    next();
  }

  static async getAllStudentsByMajor(req, resp, next) {
    const major = req.params.major;
    if (major !== 'SWE' && major !== 'CS') {
      resp.status(500).send('Major parameter must be CS or SWE');
    }
    const studentsInField = await readDatabase(process.argv[2])
      .then(res => res[major])
      .catch(error => {
        resp.status(500).send(error.message);
      });
      if (studentsInField === undefined) {
        return;
      }
    resp.resText = `List: ${studentsInField.join(', ')}`;
    next();
  }
}
