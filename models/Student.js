//Import db
const res = require("express/lib/response");
const db = require("../config/database");

//Buat Model Student
class Student {
    static all(){
        //Lakukan query untuk ambil data
       return new Promise((resolve, reject) => {
        const sql = "SELECT * From students";
        db.query(sql, (err,results) => {
            console.log(results);
            resolve(results);
        });
       });
    }

    static async create(data){
        const id = await new Promise((resolve, reject) =>{
            const sql = `INSERT INTO students SET ?`;
            db.query(sql,data,(err,results)=>{
                resolve(results.insertId);
            });
        });
        
        // return new Promise((resolve, reject) => {
        //     const sql = 'SELECT * FROM students WHERE id = ?';
        //     db.query(sql, id, (err,results) => {
        //         // console.log(results.insertId);
        //         resolve(results);
        //     });
        // });
        const student = await this.find(id);
        return student
        
    }

    static find(id){
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM students WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        //update data
        await new Promise((resolve, reject) =>{
            const sql = `UPDATE students SET ? WHERE id = ?`;
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });
        //select data by id
        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        //query delete
        return new Promise ((resolve, reject) => {
            //query sql
            const sql = "DELETE * FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    



    
}
// const sql = "SELECT * From students";
//         db.query(sql, (err,results) => {
//             callback(results);
//         });

//export model
module.exports = Student;

