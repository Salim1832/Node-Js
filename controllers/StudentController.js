//Import data student
const students = require("../data/students");

class StudentController {

    index(req, res) {
        const data = {
            message : "Menampilkan data Students",
            data : students
        }
        res.json(data);
    }

    store(req, res) {
        const {name} = req.body;
        
        const data = {
            message : `Menambahkan data student ${name}`,
            data : students
        }

        students.push(name);
        res.json(data);
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