import { Component, computed, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "../course-card/course-card.component";
import { Course } from "../model/course";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NotificationService } from '../services/notification.service';

@Component({
  selector: "app-courses-container",
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: "./courses-container.component.html",
  styleUrl: "./courses-container.component.scss",
})
export class CoursesContainerComponent {
  courses$?: Observable<Course[]>;
  courses: Course[] = [];
  display: boolean = false;
  counterSignal = signal(0);
  drivedCounter = computed(() => {
    const drivedCounter = this.counterSignal();
    return drivedCounter * 10;
  });
  promptEvent: any;
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  title = "angular-core-training";

  ngOnInit(): void {
    this.courses$ = this.http.get("/api/courses") as Observable<Course[]>;
    window.addEventListener("beforeinstallprompt", (event) => {
      console.log(event);
      this.promptEvent = event;
    });
  }
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
    this.counterSignal.update((val) => val + 1);
  }
  sendNotification() {
    this.notificationService.send().subscribe();
  }
  install() {
    this.promptEvent.prompt();
  }
}
