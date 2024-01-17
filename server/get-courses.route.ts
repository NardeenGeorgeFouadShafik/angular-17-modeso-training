import {Request, Response} from 'express';
import {COURSES} from '../src/app/db-data';
import { Course } from '../src/app/model/course';


export function getAllCourses(req: Request, res: Response) {


    res.status(200).json(COURSES);


}


export function getCourseById(req: Request, res: Response) {

    const courseId = req.params['id'];

    const courses: Course[] = COURSES;

    const course = courses.find(course => (course.id == parseInt(courseId)));

    res.status(200).json(course);
}
