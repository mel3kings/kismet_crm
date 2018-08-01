import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customer = new Schema({
  title: { type: 'String', required: true },
  firstName: { type: 'String', required: true },
  lastName: {type: 'String', required: true},
  telephone: {type: 'String', required: true},
  email: {type:'String', required: true, unique: true},
  car: {type:'String', required: true},
  cuid: {type: 'String', required: true},
  dateAdded: { type: 'Date', default: Date.now, required: true },
  searchValue: {type: 'String' , required: false},
  regoDate: { type: 'Date', default: Date.now, required: false },
  firstReminderDate: { type: 'Date', default: Date.now, required: false },
});

export default mongoose.model('Customer', customer);
