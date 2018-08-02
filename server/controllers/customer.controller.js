import Customer from '../models/customer';
import {saveEvent} from './event.controller';
import {sendEmail} from "./email.controller";
import sanitizeHtml from 'sanitize-html';
import cuid from 'cuid';

export function addCustomer(req, res) {
  if (!req.body) {
    res.status(403).end();
  }
  const newCustomer = new Customer(req.body.customer);
  newCustomer.title = sanitizeHtml(newCustomer.title);
  newCustomer.firstName = sanitizeHtml(newCustomer.firstName);
  newCustomer.lastName = sanitizeHtml(newCustomer.lastName);
  newCustomer.telephone = sanitizeHtml(newCustomer.telephone);
  newCustomer.email = sanitizeHtml(newCustomer.email);
  newCustomer.car = sanitizeHtml(newCustomer.car);
  newCustomer.cuid = cuid();
  newCustomer.searchValue = newCustomer.firstName.toLowerCase() + newCustomer.lastName.toLowerCase() + newCustomer.email.toLowerCase();
  newCustomer.save((err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("returning response");
      saveEvent("New Customer Added", newCustomer.cuid);
      res.json({customer: response});
    }
  });
}

export function getCustomers(req, res) {
  Customer.find().sort('-dateAdded').limit(50).exec((err, customers) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({customers});
    }
  });
}

export function searchCustomer(req, res) {
  Customer.find().or({
    searchValue: {$regex: req.body.searchAction.term}
  }).limit(50).exec((err, customers) => {
    console.log("FOUND RESPONSE:");
    console.log(customers);
    saveEvent("Search Result found with " + customers.length, null);
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({customers});
    }
  });
}

export function deleteCustomer(req, res) {
  console.log("trying to delete customer with: " + req.body.customer.email);
  Customer.findOne({email: req.body.customer.email}).exec((err, customer) => {
    if (err) {
      saveEvent("Error on delete on email: " + customer.email, customer.cuid);
      res.status(500).send(err);
    } else {
      saveEvent("Delete Customer with email: " + customer.email, customer.cuid);
      customer.remove(() => {
        res.status(200).end();
      });
    }
  });
}

