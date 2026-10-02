// Helper analytics functions
// class avarage[cite: 4]
export function calculateClassAverage(students, courseId) {
    let totalGrade = 0;
    let count = 0;

    students.forEach(student => {
        const course = student.courses.find(c => c.courseId === courseId);
        if (course) {
            totalGrade += course.grade;
            count++;
        }
    });

    return count > 0 ? (totalGrade / count).toFixed(2) : 0;
}

// finding the higher one [cite: 4]
export function findTopStudent(students) {
    if (students.length === 0) return null;

    return students.reduce((topStudent, currentStudent) => {
        return currentStudent.getAverage() > topStudent.getAverage() ? currentStudent : topStudent;
    });
}

// Higher-Order Function[cite: 2, 4]
export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}
