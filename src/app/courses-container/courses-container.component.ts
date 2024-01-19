import { Component, OnInit, computed, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { CourseCardComponent } from "../course-card/course-card.component";
import { Course } from "../model/course";
import { COURSES } from "../db-data";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-courses-container",
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: "./courses-container.component.html",
  styleUrl: "./courses-container.component.scss",
})
export class CoursesContainerComponent {
  courses$: Observable<Course[]>;
  courses: Course[] = [];
  display: boolean = false;
  counterSignal = signal(0);
  drivedCounter = computed(() => {
    const drivedCounter = this.counterSignal();
    return drivedCounter * 10;
  });

  constructor(private http: HttpClient, private swUpdate: SwUpdate) {
    this.courses$ = this.http.get("/api/courses") as Observable<Course[]>;
    swUpdate.versionUpdates.subscribe(async (evt) => {
      console.log("UpdateService: versionUpdates", evt);
      switch (evt.type) {
        case "VERSION_DETECTED":
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case "VERSION_READY":
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(
            `New app version ready for use: ${evt.latestVersion.hash}`
          );
          await swUpdate.activateUpdate();
          location.reload();
          break;
        case "VERSION_INSTALLATION_FAILED":
          console.log(
            `Failed to install app version '${evt.version.hash}': ${evt.error}`
          );
          break;
      }
    });
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
    this.counterSignal.update((val) => val + 1);
  }
}
