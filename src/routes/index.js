const mainRoutes = require("express").Router();
const produkRoutes=require("./produkRoutes");
const authRoutes = require("./authRoutes");

mainRoutes.use("/produk", produkRoutes);
mainRoutes.use("/auth", authRoutes);

module.exports=mainRoutes;