import express from 'express'
import empCtrl from './emp.controller.js'

const router = express.Router()

router.route('/api/users')
  .get(empCtrl.list)
  .post(empCtrl.create)

router.route('/api/users/:userId')
  .get(empCtrl.read)
  .put(empCtrl.update)
  .delete(empCtrl.remove)

  router.route('/api/users/:userName')
  .get(empCtrl.read)
  .put(empCtrl.update)
  .delete(empCtrl.remove)

  router.param('empId', empCtrl.empByID)
  router.param('empName', empCtrl.empByName)

export default router
