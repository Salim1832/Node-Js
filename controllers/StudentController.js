//Import data model student
const Student = require("../models/Student");

class StudentController {

    async index(req, res) {
        const students = await Student.all();
        const data = {
            message : "Menampilkan semua Student",
            data : students,
        };
        res.status(200).json(data);

    }

    // Student.all(function(results) {
    //     const data = {
    //         message : "Menampilkan data Students",
    //         data : results
    //     };
    //     res.json(data);
    // });

    async store(req, res,) {
        const students = await Student.create(req.body);
            // name: req.body.name,
            // nim: req.body.nim,
            // email: req.body.email,
            // jurusan: req.body.jurusan
        
        const data = {
            message : `Menambahkan data student`,
            data : students,
        };

        res.status(200).json(data);
    }

    update(req, res) {
        const {id} = req.params;
        const {name} = req.body;

        const data = {
            message : `Mengedit data student ${id}, nama ${name} `,
            data : students
        }
        
        students[id] = name;
        res.json(data);
    }

    destroy(req, res) {
        const {id} = req.params;
        const {name} = req.body;

        const data = {
            message : `Menghapus data student id ${id}`,
            data : students
        }
        
        students.splice(id, 1) ;
        res.json(data);
    }
}

const object = new StudentController();

//export object
module.exports = object;