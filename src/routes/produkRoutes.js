const produkRoutes = require("express").Router();
const produkController=require("../controllers/produkController");
const produk = require("../models/produk");
const authMiddleware = require("../helpers/authMiddleware");

produkRoutes.get("/", produkController.getAllProduk);
produkRoutes.post("/", produkController.postProduk);;
produkRoutes.get("/:id", produkController.getProdukByid);
produkRoutes.put("/:id", produkController.updateProdukByid);
produkRoutes.delete("/:id", produkController.deleteProduk);

module.exports=produkRoutes;