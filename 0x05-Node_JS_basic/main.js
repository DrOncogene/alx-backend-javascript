const countStudents = require('./3-read_file_async');

countStudents("dat.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
