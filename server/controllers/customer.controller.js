import Customer from '../models/customer';
import sanitizeHtml from 'sanitize-html';
export function addCustomer(req, res) {
  if (!req.body) {
    res.status(403).end();
  }
  console.log(req.body);
  const newCustomer = new Customer(req.body.customer);
  newCustomer.title = sanitizeHtml(newCustomer.title);
  newCustomer.firstName = sanitizeHtml(newCustomer.firstName);
  newCustomer.lastName = sanitizeHtml(newCustomer.lastName);
  newCustomer.telephone = sanitizeHtml(newCustomer.telephone);
  newCustomer.email = sanitizeHtml(newCustomer.email);
  newCustomer.car = sanitizeHtml(newCustomer.car);
  newCustomer.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

export function getCustomers(req, res) {
  Customer.find().sort('-dateAdded').exec((err, customers) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ customers });
  });
}

