//Import data model student
const { json } = require("express/lib/response");
const Student = require("../models/Student");

class StudentController {

    async index(req, res) {
        const students = await Student.all();
        const data = {
            message : "Menampilkan semua Student",
            data : students,
        };
        res.status(201).json(data);

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

    async update(req, res) {
        const {id} = req.params;
        
        const student = await Student.find(id);

        if (student) {
            //update data
            const studentUpdate = await Student.update(id, req.body);

            const data = {
                message: "Mengedit data student",
                data: studentUpdate,
            };
            res.status(200).json(data);
        } else {
            const data = {
                message: "Data tidak ada",
            };
            res.status(404).json(data);
        };
    }

   async destroy(req, res) {
        const {id} = req.params;
        const student = await Student.find(id);

        if (student) {
            //hapus nama
            await Student.delete(id);

            const data = { 
                message: "Mengahapus data student",
            };
            res.status(200).json(data);
        } else {
            // data tidak ada
            const data = {
                message:  "Data Tidak ada",
            };
            res.status(404).json(data);
        };
    }

    async show(req, res) {
        //cari id
        // jika ada, kirim datanya
        //jika tidak ada, kirim tidak ada

        const {id} = req.params;

        const student = await Student.find(id);

        if (student) {
            const data = {
                message: "Melihat data student",
                data: student,
            };
            res.status(200).json(data);
        } else {
            const data = {
                message: "Data tidak ada",
            };
            res.status(404).json(data);
        }
    }
}

const object = new StudentController();

//export object
module.exports = object;