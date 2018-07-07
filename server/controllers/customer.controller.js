import Customer from '../models/customer';

export function addCustomer(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }
  const newCustomer = new Customer(req.body.post);
  newCustomer.title = sanitizeHtml(newCustomer.title);
  newCustomer.firstName = '123';
  newCustomer.lastName = '123';
  newCustomer.telephone = '123';
  newCustomer.email = '123';
  newCustomer.car = '123';
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

