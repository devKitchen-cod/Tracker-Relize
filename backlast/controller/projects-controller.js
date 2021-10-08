const db = require('../DataBase/db')

module.exports.getProject = async function (req, res){
    let newProject =  req.body.email
    console.log("=====" + newProject)

    let res1 = await db.query(`select "id", "Name_of_Project", "time", "qurent_time" from "Tracker_Projects" where "user"=$1`,[newProject])
    console.log('asdas',res1.rows)
    res.send(res1.rows)
}
