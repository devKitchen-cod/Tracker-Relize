
const jwt = require('jsonwebtoken')
const keys = require('../keys/key')
const db = require('../DataBase/db')

module.exports.createUser = async function(req, res){

    let newPerson = {name:req.body.name, email: req.body.email, password: req.body.password, role: 1}
    console.log('========= '+newPerson.email)
    try {
      const verify_email = await VerifyEmail(newPerson.email)
      if(newPerson.email==='admin@gmail.com'){ newPerson = {name:req.body.name, email: req.body.email, password: req.body.password, role: 2}}
      if(verify_email === false){
        db.query(`INSERT INTO "users" (name, user_email, user_password, role) values ($1, $2, $3, $4)`, [newPerson.name, newPerson.email, newPerson.password, newPerson.role])
  
        const token = jwt.sign({email: newPerson.email, password: newPerson.password}, keys.jwt, {expiresIn: 60 * 60 }) //create token
        res.status(200).json({
        token: token
       }) 
       
      }
      else{ res.status(404).json({ message: "email is already exist" })}      
    } catch (err) {
      console.log(err);
    }
  }

  const VerifyEmail = async (req, res) => {
    const result = req 
    console.log(result)
    let checked_email =await (db.query(`SELECT user_email FROM "users" WHERE user_email = $1;`, [result]));
    if((await checked_email).rowCount === 0) {return false}
    return true
  }

  module.exports.VerifyToken = async (req, res) =>{
    try{
      const header = await req.headers['authorization']
 
      const decoded_Token = await decodeToken(header,res)
 
      const user ={email:decoded_Token.email, password:decoded_Token.password}
 
      if(await CheckToken(user)){
        res.status(200).json({ token: header })
        next()   
      }else{res.status(404).json({ message: 'User is not found' })}    
 
    }catch(err){res.status(404).json({ message: 'User is not found'})} 
  }

  CheckToken = async function(req,res){
    const request = req
    let check = (client.query(`SELECT user_email, user_password FROM "users"  WHERE user_email = $1 AND user_password = $2;`, [request.email, request.password]))
    if((await request).rowCount==0)return false
    return true
  }

  decodeToken = async function(req,res){
    const result = await req
    try{
      const decodeToken = jwt.decode(result)
      const res ={email:decodeToken.email, password:decodeToken.password}
      return res
    }catch(err){
      console.log('Error '+err)
    }
  }
