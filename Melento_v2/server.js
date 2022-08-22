const fs = require('fs').promises
const path = require('path')
const express = require('express')//npm i express --save
 
const port = process.env.PORT || 3000
 
const app = express()
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

 
const productscontroller=require('./controllers/productscontroller')
const userscontroller=require('./controllers/userscontroller')
const cartcontroller=require('./controllers/cartcontroller')
const manufacturercontroller=require('./controllers/manufacturercontroller')
const suppliercontroller=require('./controllers/suppliercontroller')
app.get('/users', userscontroller.getUsers)
app.get('/users/:id', userscontroller.getUsersById)
app.post('/users',userscontroller.addUsers)
app.put('/users:id',userscontroller.updateUser)
app.delete('/users/:id',userscontroller.deleteUser)
//---------------Cart------------------//
app.get('/cart',cartcontroller.getCart)
app.get('/cart/:id',cartcontroller.getCartById)
app.post('/cart',cartcontroller.addCart)
app.put('/cart/:id',cartcontroller.updateCart)
app.delete('/cart/:id',cartcontroller.deleteCart)
//--------------Products-----------------//
app.get('/products', productscontroller.listProducts)
app.get('/products/:id',productscontroller.getProductById)
//---------------Manufacturers----------//
app.get('/manufacturers', manufacturercontroller.listManufacturer)
app.post('/manufacturers', manufacturercontroller.addManufacturer)
app.put('/manufacturers/:id', manufacturercontroller.updateManufacturer)
app.delete('/manufacturers/:id', manufacturercontroller.deleteManufacturer)
//------------------Suppliers-----------------//
app.get('/suppliers', suppliercontroller.listSuppliers)
app.post('/suppliers', suppliercontroller.addSuppliers)
app.put('/suppliers/:id',suppliercontroller.updateSuppliers)
app.delete('/suppliers/:id',suppliercontroller.deleteSuppliers)
app.listen(port, () => console.log(`Server listening on port ${port}`))
