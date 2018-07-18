import {Router} from 'express';
import * as PostController from '../controllers/post.controller';
import * as CustomerController from '../controllers/customer.controller';

const router = new Router();

router.route('/posts').get(PostController.getPosts);
router.route('/posts/:cuid').get(PostController.getPost);
router.route('/posts').post(PostController.addPost);
router.route('/posts/:cuid').delete(PostController.deletePost);

router.route('/customers').get(CustomerController.getCustomers);
router.route('/addCustomer').post(CustomerController.addCustomer);
router.route('/deleteCustomer').post(CustomerController.deleteCustomer);
export default router;
