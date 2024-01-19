import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CoursesContainerComponent } from "./courses-container/courses-container.component";

const routeConfig: Routes = [
  {
    path: "",
    component: CoursesContainerComponent,
    title: "Home page",
  },
];

export default routeConfig;
