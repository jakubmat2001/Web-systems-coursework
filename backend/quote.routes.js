import express from 'express';
import quoteCtrl from './quote.controller.js';
import authCtrl from './auth.controller.js';

const router = express.Router();


router.route('/api/quotes')
  .get(quoteCtrl.list)
  //this ensures that a valid token after an employee is signed-in is detected, except for in our signin route where we're not supposed to have it
  .post(authCtrl.requireSignin.unless({ path: ['/api/auth/signin'] }), authCtrl.setProfile, quoteCtrl.create);


router.param('quoteId', quoteCtrl.quoteByID);

router.route('/api/quotes/:quoteId')
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, quoteCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, quoteCtrl.remove);

router.route('/api/auth/signin') 
  .post(quoteCtrl.create);

export default router;


