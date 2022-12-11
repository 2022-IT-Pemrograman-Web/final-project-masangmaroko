const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
const db = require('../config/database')

const karyawan = db.collection('karyawan')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=> {
    console.log("udah jalan")
})

app.get("/inpo", async(req,res)=>{
    res.send({
        status: true,
        message: "from backend"
    })
})

app.get("/karyawan", async(req, res)=>{
    try {
        let karyawans = []
        await karyawan.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                let id = doc.id
                karyawans.push({id, ...doc.data()})
            })
            res.send(karyawans)
        })
    }
    catch(err){
        console.log(err)
    }
})
app.post("/api/post",async(req,res)=>{
    await karyawan.add({
        nama: req.body.nama,
        email: req.body.email,
        tempat_lahir: req.body.tempat_lahir
    })
    // console.log(req.body)
    // res.send("sukses")
    res.send({
        message: "berhasil ditambahkan"
    })
})