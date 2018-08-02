import Event from '../models/event';
import cuid from 'cuid';

export function saveEvent(eventDetails, customer_cuid ="0", type="admin"){
  console.log("Recieved event :" + eventDetails);
  const event = new Event();
  event.event_details = eventDetails;
  event.customer_cuid = customer_cuid;
  event.cuid = cuid();
  event.type = type;
  event.save((err, response) =>{
    if(err){
      console.log("Unable to save event!");
    }
    console.log(response);
  });

}

export function getLatestEvents(req, res){
  Event.find().sort('-date_done').limit(50).exec((err, events)=>{
    if(err){
      res.status(500).send(err);
    }else{
      res.json({events});
    }
  })
}
