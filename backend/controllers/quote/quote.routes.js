import express from 'express';
import quoteCtrl from './quote.controller.js';
import authCtrl from '../auth/auth.controller.js';

const router = express.Router();

//routes for first and the second porjects
router.route('/api/quotes')
  .get(quoteCtrl.list)
  //this ensures that a valid token after an employee is signed-in is detected, except for in our signin route where we're not supposed to have it
  .post(authCtrl.requireSignin.unless({ path: ['/api/auth/signin'] }), authCtrl.setProfile, quoteCtrl.create);

router.param('quoteId', quoteCtrl.quoteByID);

//get's employee's info, authorizes them if successful and performs either update/read/remove functions from controller page
router.route('/api/quotes/:quoteId')
  .put(authCtrl.requireSignin, authCtrl.setProfile, authCtrl.hasAuthorization, quoteCtrl.update)
  .get(authCtrl.requireSignin, authCtrl.setProfile, authCtrl.hasAuthorization, quoteCtrl.read)
  .delete(authCtrl.requireSignin, authCtrl.setProfile, authCtrl.hasAuthorization, quoteCtrl.remove);

router.route('/api/quotes2')
  .get(quoteCtrl.list2)
  .post(authCtrl.requireSignin.unless({ path: ['/api/auth/signin'] }), authCtrl.setProfile, quoteCtrl.create2);

router.route('/api/quotes2/:quoteId2')
  .put(authCtrl.requireSignin, authCtrl.setProfile, authCtrl.hasAuthorization, quoteCtrl.update2)
  .get(authCtrl.requireSignin, authCtrl.setProfile, authCtrl.hasAuthorization, quoteCtrl.read2)
  .delete(authCtrl.requireSignin, authCtrl.setProfile, authCtrl.hasAuthorization, quoteCtrl.remove2);

router.param('quoteId2', quoteCtrl.quoteByID2);


router.route('/api/auth/signin')
  .post(quoteCtrl.create);

export default router;



