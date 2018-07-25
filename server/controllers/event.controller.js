import Event from '../models/event';
import cuid from 'cuid';

export function saveEvent(eventDetails, customer_cuid){
  console.log("Recieved event :" + eventDetails);
  const event = new Event();
  event.event_details = eventDetails;
  event.customer_cuid = customer_cuid;
  event.cuid = cuid();
  event.save((err, response) =>{
    if(err){
      console.log("Unable to save event!");
    }
    console.log(response);
  });

}
