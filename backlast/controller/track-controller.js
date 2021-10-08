const db = require('../DataBase/db')

module.exports.createProject = async function(req, res){
  let newProject = {name: req.body.name, time: req.body.time, user:req.body.user}
  try{
    db.query(`INSERT INTO "Tracker_Projects" ("Name_of_Project", "user", "time") values ($1, $2, $3)`, [newProject.name, newProject.user, newProject.time])
    console.log(newProject.name)
    console.log(newProject.user)

  }catch (err) {
      console.log(err);
    }


}
module.exports.trackContrl = async function(req, res){
  let Tracking = {stopTime: req.body.t, nameof:req.body.n }
  console.log("papapap==== "+Tracking.nameof)
  try{
    db.query(`UPDATE "Tracker_Projects" SET "qurent_time" =  $1 WHERE "Name_of_Project"= $2 `, [Tracking.stopTime, Tracking.nameof])
  
  }catch (err) {
    console.log(err);
  }


  
}