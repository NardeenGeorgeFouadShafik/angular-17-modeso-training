


import {USER_SUBSCRIPTIONS} from "./in-memory-db";



export function addPushSubscriber(req:any, res:any) {

    const sub = req.body;

    console.log('Received Subscription on the server: ', sub);

    USER_SUBSCRIPTIONS.push(sub);
    console.log(USER_SUBSCRIPTIONS)
    res.status(200).json({message: "Subscription added successfully."});
}

