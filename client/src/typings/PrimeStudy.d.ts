namespace PS
{
    type PersonID = string;
    type ClassID = string;
    type TimeTableID = string;

    interface Person
    {
        id: PersonID;
        name: string;
        full_name: string;
        classes: ClassID[];
    }

    interface Student extends Person
    {

    }

    interface Teacher extends Person
    {
    }

    interface TimeTable
    {
        class_id: ClassID;
    }

    interface Class
    {
        students: PersonID[];
        teacher: Person;
        time_table: TimeTableID;
    }
}
