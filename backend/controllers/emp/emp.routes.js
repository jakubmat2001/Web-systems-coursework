import express from 'express'
import empCtrl from './emp.controller.js'
import authCtrl from '../auth/auth.controller.js'

const router = express.Router()

router.route('/api/emps')
  .get(empCtrl.list)
  .post(empCtrl.create)

router.param('empId', empCtrl.empByID)

router.route('/api/emps/:empId')
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, empCtrl.read)

export default router
