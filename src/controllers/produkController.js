const{produk} = require("../models");
const produkRoutes = require("../routes/produkRoutes");
module.exports ={
    getAllProduk :(req,res)=>{
        produk.findAll()
        .then((data)=>{
            res.send({
                msg : "success",
                status : 200,
                data
            })
        })
        .catch ((er)=>{
            res.send({
                msg : "error",
                status : 500,
                err,
            })
        })
    },
    postProduk : (req, res)=>{
        let{body}=req;
        produk.create(body)
        .then((data)=>{
            res.status(200).send({
                msg : "success post produk Heaven Light",
                status : 200,
                data,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg : "failed post produk Heaven Light",
                status : 500,
                err,
            })
        })
    },
    getProdukByid:(req,res)=>{
        let {id} = req.params;
        produk.findOne({
            where : {id},
        })
        .then((data)=>{
            res.status(200).send({
                msg : "success get produk Heaven Light by id",
                dtatus : 200,
                data,                
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg : "failed get produk Heaven Light by id",
                status : 500,
                err,
            })
        })
    },
    updateProdukByid : async (req, res)=>{
        let{id}=req.params;
        let{body}=req;
        const findProduk = await produk.findOne({
            where:{id}
        })
        if(findProduk === null){
            res.status(404).send({
                msg : "failed update produk Heaven Light ",
                status : 404,
                error : "data not found"
            })
            
        }
        produk.update(body,{
            where : {id}
        })
        .then((data)=>{
            console.log(findProduk);
            deleteOBJ = {...findProduk.data, ...body};
            res.status(200).send({
                msg : "success update produk Heaven Light by id",
                status :  200,
                deleteOBJ
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg : "failed update produk Heaven Light by id",
                status : 500,
                err,
            })
        })
    },
    deleteProduk : async(req,res)=>{
        let {id}=req.params;
        const findProduk = await produk.findOne({
            where : {id}
        })
        if(findProduk === null){
            res.status(404).send({
                msg : "failed delete produk Heaven Light",
                status : 404,
                error : "data not found"
            })
        }
        produk.destroy({
            where:{id}
        })
        .then((data)=>{
            res.status(200).send({
                msg : "success delete produk Heaven Light by id",
                status : 200,
                findProduk,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg : "failed delete produk Heaven Light by id",
                status : 500,
                err,
            })
        })
    }
}