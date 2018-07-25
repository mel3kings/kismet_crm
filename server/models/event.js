import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const event = new Schema({
  car_cuid: {type: 'String', required: false},
  customer_cuid: {type: 'String', required: false},
  event_details:{type: 'String', required: false},
  date_done: { type: 'Date', default: Date.now, required: true },
  amount: {type:'Number', required: false},
  employee: {type: 'String', required: false},
  }
);

export default mongoose.model('Event', event);
