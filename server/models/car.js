import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const car = new Schema({
    make: {type: 'String', required: true},
    model: {type: 'String', required: true},
    year: {type: 'String', required: false},
    month: {type: 'String', required: false},
    customer_cuid: {type: 'String', required: true},
    dateAdded: { type: 'Date', default: Date.now, required: true },
    car_cuid: {type: 'String', required: true},
  }
);

export default mongoose.model('Car', car);
