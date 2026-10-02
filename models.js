// Model structures for Student class
export class Student {
    constructor(id, name, courses = []) {
        //(read-only) [cite: 5]
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,     //[cite: 5]
            configurable: false, // [cite: 5]
            enumerable: true
        });

        this.name = name;
        this.courses = courses; //[{ courseId: 101, grade: 90 }, ...][cite: 5]
    }

    //[cite: 5]
    addCourse(courseId, grade) {
        this.courses.push({ courseId, grade });
    }

    //
    getAverage() {
        if (this.courses.length === 0) return 0;
        const total = this.courses.reduce((sum, course) => sum + course.grade, 0);
        return total / this.courses.length;
    }
}
