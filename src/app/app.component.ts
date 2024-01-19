import {
  Component,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CourseCardComponent } from "./course-card/course-card.component";
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CourseCardComponent, CommonModule, RouterModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate) {
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

  ngOnInit(): void { }
}
