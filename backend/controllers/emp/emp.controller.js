import Emp from './emp.models.js'
import errorHandler from '../dbErrorHandler.js'

//create an employee account
const create = async (req, res) => {
    const emp = new Emp(req.body)
    try {
      await emp.save()
      return res.status(200).json({
        message: "Successfully signed up!"
      })
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }

//list all the employees
const list = async (req, res) => {
try {
    let emps = await Emp.find().select('name email updated created')
    res.json(emps)
} catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err)
    })
}
}

//find an employee by id
const empByID = async (req, res, next, id) => {
    try {
      let emp = await Emp.findById(id)
      if (!emp)
        return res.status('400').json({
          error: "employee not found"
        })
      req.profile = emp
      next()
    } catch (err) {
      return res.status('400').json({
        error: "Could not retrieve employee"
      })
    }
  }

//sanitize the sensitive fields and read the data
const read = (req, res) => {
req.profile.hashed_password = undefined
req.profile.salt = undefined
return res.json(req.profile)
}


export default {
  create,
  empByID,
  read,
  list,
}
