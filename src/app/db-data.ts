import { Course } from "./model/course";

export const COURSES: Course[] = [
  {
    id: 1,
    description: "Angular Core Deep Dive",
    iconUrl:
      "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
    longDescription:
      "A detailed walk-through of the most important part of Angular - the Core and Common modules",
    lessonsCount: 10,
    category: undefined,
  },
  {
    id: 2,
    description: "RxJs In Practice Course",
    iconUrl:
      "https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png",
    longDescription:
      "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
    category: "BEGINNER",
    lessonsCount: 10,
  },

  {
    id: 3,
    description: "NgRx In Depth",
    longDescription:
      "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
    iconUrl:
      "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png",
    category: "ADVANCED",
    lessonsCount: 10,
  },

  {
    id: 4,
    description: "Angular for Beginners",
    iconUrl:
      "https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png",
    longDescription:
      "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
    category: "BEGINNER",
    lessonsCount: 10,
  },
  {
    id: 5,
    description: "Angular Security Course",
    longDescription:
      "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
    iconUrl:
      "https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png",
    category: "ADVANCED",
    lessonsCount: 11,
  },
  {
    id: 6,
    description: "Angular PWA Course",
    longDescription:
      "Learn Angular Progressive Web Applications, build the future of the Web Today.",
    iconUrl:
      "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png",
    category: "ADVANCED",
    lessonsCount: 8,
  },
];

export function findCourseById(courseId: number) {
  return COURSES.find((course) => course.id == courseId);
}
