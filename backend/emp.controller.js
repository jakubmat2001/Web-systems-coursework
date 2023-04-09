import Emp from './emp.models.js'
import lodash from 'lodash'
import errorHandler from './dbErrorHandler.js'

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

const read = (req, res) => {
req.profile.hashed_password = undefined
req.profile.salt = undefined
return res.json(req.profile)
}

const update = async (req, res) => {
try {
    let emp = req.profile
    emp = lodash.extend(emp, req.body)
    emp.updated = Date.now()
    await emp.save()
    emp.hashed_password = undefined
    emp.salt = undefined
    res.json(emp)
} catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err)
    })
}
}

// emp.controller.js
const remove = async (req, res) => {
  try {
    let emp = req.profile;
    let deletedemp = await Emp.deleteOne({ _id: emp._id });
    deletedemp.hashed_password = undefined;
    deletedemp.salt = undefined;
    res.json(deletedemp);
  } catch (err) {
    console.log("error occurred");
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
  empByID,
  read,
  list,
  remove,
  update,
}
