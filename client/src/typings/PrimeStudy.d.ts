namespace PS
{
    type UserID = number;
    type ClassID = number;
    type TimeTableID = number;
    type StudentID = number;
    type SubjectID = number;
    type LessonID = number;
    type SubmissionID = number;

    interface User
    {
        id: UserID;
        first_name: string;
        last_name: string;
        class_id: ClassID;
    }

    interface Student extends Person
    {
        id: StudentID;
        order_in_class: number;
        created: Date;
        class_id: ClassID;
        user_id: UserID;
    }

    interface Teacher extends Person
    {
        id: TeacherID;
        user_id: UserID;
        classes: ClassID[];
    }

    interface Class
    {
        title: string;
        students: UserID[];
        teachers: TeacherID[];
    }

    interface Subject
    {
        id: SubjectID;
        name: string;
        color: string;
    }

    interface Lesson
    {
        id: LessonID;
        title: string;
        youtube_src: string;
        content: string;
        requirements: string;
        date: Date;
        submission_due: Date;
    }

    interface Submission
    {
        id: SubmissionID;
        uploads: string[];
        lesson_id: LessonID;
        student_id: StudentID;
        checked: boolean;
        submitted: Date;
        feedback: string[];
    }
}
