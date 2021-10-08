
const jwt = require('jsonwebtoken')
const keys = require('../keys/key')
const db = require('../DataBase/db')


module.exports.loginUser = async function(req, res){
  console.log("login")
  let loginPerson = {email: req.body.email, password: req.body.password}
  console.log("try to login " + loginPerson.email)
  //проверка наличия аккаунта 
  const verify_email = await VerifyEmail(loginPerson.email)
  console.log("result of chek EMAIL == " + verify_email)
  //проверка правильности пароля 
  const verify_password = await VerifyPassword(loginPerson.password)
  console.log("result of chek PASSWORD == " +verify_password)
  try{
    if(verify_email === true && verify_password === true){
    const token = jwt.sign({email: loginPerson.email, password: loginPerson.password}, keys.jwt, {expiresIn: 60 * 60 }) //create token
    res.status(200).json({
      token: token
     }) 
  }}catch(err){console.log(err);}
  

}
const VerifyEmail = async (req, res) => {
  const result = req 
  console.log(result)
  let checked_email =await (db.query(`SELECT user_email FROM "users" WHERE user_email = $1;`, [result]));
  if((await checked_email).rowCount === 0) {return false}
  return true
}
const VerifyPassword = async (req, res) => {
  const result = req 
  console.log(result)
  let checked_email =await (db.query(`SELECT user_password FROM "users" WHERE user_password = $1;`, [result]));
  if((await checked_email).rowCount === 0) {return false}
  return true
}