import Emp from './emp.models.js'
import jwt from 'jsonwebtoken'
import config from './db_config.js'
import expressJwt from 'express-jwt';

const signin = async (req, res) => {
    try {
        let emp = await Emp.findOne({
          "email": req.body.email
        })
        if (!emp)
          return res.status(401).json({
            error: "Employee not found"
          })
    
        if (!emp.authenticate(req.body.password)) {
          return res.status(401).send({
            error: "Email and password don't match."
          })
        }
    
        const token = jwt.sign({
          _id: emp._id
        }, config.jwtSecret)
    
        res.cookie("t", token, {
          expire: new Date() + 9999
        })
    
        return res.json({
          token,
          emp: {
            _id: emp._id,
            name: emp.name,
            email: emp.email
          }
        })
    
      } catch (err) {   
        return res.status(401).json({
          error: "Could not sign in"
        })
      }     
}


const signout = (req, res) => {
    res.clearCookie("t")
    return res.status(200).json({
      message: "signed out"
    })  
}

const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth',
    algorithms: ['HS256']
  });


  
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!(authorized)) {
      return res.status(403).json({
        error: "Employee is not authorized"
      })
    }
    next()
  }
  
  

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization
}