import * as express from 'express';
import { Application } from 'express';
import { getAllCourses } from './server/get-courses.route';
import { saveCourse } from './server/save-course.route';
import { addPushSubscriber } from './server/add-push-subscriber.route';
import { sendNewsletter } from './server/send-newsletter.route';
const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  "BBS6UACOCvGimKmBQafg9V3GgpXTCsZUgR8Nn-Lss6jw566Y0NH7hTnw9Xuq8HbXBpPswhb-68HT0X_nXssU6D4",
  "84gH3V0A0A4WSUYFZuhazCB03y2LkY_XOtJ7pBWewSU"
);
const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express.default();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);
app.route("/api/notifications").post(addPushSubscriber);

app.route("/api/newsletter").post(sendNewsletter);


const httpServer = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:9000'
  );
});
