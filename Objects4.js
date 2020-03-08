// Nesting objects and arrays

const student = {
    firstName: "Israel",
    lastName: "Mendoza",
    strengths: ["Music", "English", "French", "Python programming"],
    exams: {
        midterm: 92,
        final: 82
    }
};

console.log(`Students's first name: ${student.firstName}`);
console.log(`Students's last name: ${student.lastName}`);
console.log("Student's strengths: ");
for (let i=0; i<student.strengths.length; i++){
    console.log(`\t${student.strengths[i]}`)
}
console.log("Student's grades: ")
console.log(`\tMidterm: ${student.exams.midterm}`);
console.log(`\tFinal: ${student.exams.final}`);
console.log(`\tFINAL GRADE: ${(student.exams.midterm + student.exams.final) / 2}`)