import { Student } from './models.js';
import { fetchStudents } from './database.js';
import {
    calculateClassAverage,
    findTopStudent,
    filterStudents
} from './analytics.js';

// [cite: 2]
fetchStudents((rawData) => {
    // converting [cite: 2]
    const students = rawData.map(
        item => new Student(item.id, item.name, item.courses)
    );

    // 2. Immutability test[cite: 2]
    console.log("Testing Immutability:");
    console.log(`Original ID: ${students[0].id}`);
    console.log("Attempting to change ID to 999...");

    // [cite: 2]
    try {
        students[0].id = 999;
    } catch (e) {
        // If strict mode is on maybe it send a error
    }

    console.log(`Final ID: ${students[0].id} (Success: ID did not change)\n`);

    // 3. Analyz report[cite: 2, 8]
    console.log("--- Analytics Report ---");

    // Course 101 avarage[cite: 2, 8]
    const avg101 = calculateClassAverage(students, 101);
    console.log(`Class Average for Course 101: ${avg101}`);

    // Best student[cite: 2, 8]
    const topStudent = findTopStudent(students);
    console.log(`Top Student: ${topStudent.name} (Average: ${topStudent.getAverage().toFixed(1)})`);

    // Who takes Course 102
    const course102Students = filterStudents(students, student =>
        student.courses.some(c => c.courseId === 102)
    );

    const names102 = course102Students.map(s => s.name).join(', ');
    console.log(`Students in Course 102: ${names102}`);
});