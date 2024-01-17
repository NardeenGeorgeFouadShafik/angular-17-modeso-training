import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { COURSES } from './db-data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;
  courses: Course[] = [];
  display: boolean = false;
  counterSignal = signal(0);
  drivedCounter = computed(() => {
    const drivedCounter = this.counterSignal();
    return drivedCounter * 10;
  })
  constructor(private http: HttpClient) {
    this.courses$ = this.http.get(
      "http://localhost:9000/api/courses"
    ) as Observable<Course[]>;
  }

  title = "angular-core-training";

  ngOnInit(): void {}
  onEditCourse() {
    /*
}
    const newCourse = { ...this.courses$[0] };
    newCourse.description = 'test';
    this.courses$[0] = newCourse;*/
  }
  showData() {
    this.display = true;
  }

    increment() {
  this.counterSignal.update(val=>val+1)
}
}
