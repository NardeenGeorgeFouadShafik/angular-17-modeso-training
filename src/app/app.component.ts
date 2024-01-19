import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CourseCardComponent } from "./course-card/course-card.component";
import { SwPush, SwUpdate } from "@angular/service-worker";
import { NotificationService } from "./services/notification.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CourseCardComponent, CommonModule, RouterModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  constructor(
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private notificationService: NotificationService
  ) {
    this.swUpdate.versionUpdates.subscribe(async (evt) => {
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
          //await swUpdate.activateUpdate();
          // location.reload();
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

  async ngOnInit(): Promise<void> {
    const sub = await this.swPush.requestSubscription({
      serverPublicKey:
        "BBS6UACOCvGimKmBQafg9V3GgpXTCsZUgR8Nn-Lss6jw566Y0NH7hTnw9Xuq8HbXBpPswhb-68HT0X_nXssU6D4",
    });
    console.log(sub);
    this.notificationService
      .addPushSubscriber(sub)
      .subscribe(() => console.log("subscriber added "));
  }
}
