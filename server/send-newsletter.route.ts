import {USER_SUBSCRIPTIONS} from "./in-memory-db";

const webpush = require('web-push');


export function sendNewsletter(req: any, res: any) {

    console.log('Total subscriptions', USER_SUBSCRIPTIONS.length);

    // sample notification payload
    const notificationPayload = {
        "notification": {
            "title": "Angular New Notification",
            "body": "New server update available!",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
    };


 webpush
   .sendNotification(USER_SUBSCRIPTIONS[0], JSON.stringify(notificationPayload))
   .then(() =>
     res.status(200).json({ message: "Newsletter sent successfully." })
   )
   .catch((err:any) => {
     console.error("Error sending notification, reason: ", err);
     res.sendStatus(500);
   });






}

