const mysql=require("mysql")

module.exports=()=>{

    return mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"router587",
        database:"news_portal_nodejs"

    });
}