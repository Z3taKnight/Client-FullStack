//const dbutil=require('../config/database.js')
var tunnel = require('tunnel-ssh');
var MongoClient = require('mongodb').MongoClient;
var ObjectId=require('mongodb').ObjectId;
 
async function getCart(req,res){
  try {
    var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
      if(error){
      console.log(error)
      }
      MongoClient.connect("mongodb://localhost:27018", function(err, db){
  var myDB = db.db("Group6");
  var coll = myDB.collection("cart")
  console.log("connected")
  console.log("coll obtained")
  //  arr=coll.find();
 
  //  arr.forEach(item=>{
  //    console.log(item)
  //  })
  //  res.json(arr)
  coll.find().toArray()
        .then(data => {
            console.log(data) //"value"
            res.send(data)
            server.close()
        });
        // setTimeout(function(){
        //   server.close();
        // },10000);
 
});
//MongoClient.disconnect()
});
// Use a listener to handle errors outside the callback
server.on('error', function(err){
   console.error('Something bad happened:', err);
});
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
   
   // console.log("coll obtained")
   
}


async function addCart(req,res){
    try {
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("cart")
    console.log("connected",req.body)
    console.log("coll obtained")
    var id=req.body._id
    var n=req.body.uname
    var e=req.body.uemail
    var p=req.body.products
    var a=req.body.amount
 
    coll.insertOne({_id:id,uname:n,uemail:e,products:p,amount:a})
          .then(data => {
              console.log(data) //"value"
              res.send("Inserted: "+id)
              server.close()
          });
 
  });
  });
  // Use a listener to handle errors outside the callback
  server.on('error', function(err){
     console.error('Something bad happened:', err);
  });
        } catch (err) {
          res.status(500).json({ error: err.message })
        }
     // console.log("coll obtained")
     
  }

async function updateCart(req,res){
    try {
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("cart")
    console.log("connected",req.body)
    console.log("coll obtained")
    console.log(req.params.id);
    var id=parseInt(req.params.id.substring(1))
    console.log("updating id: ",id)
    var id=req.body._id
    var n=req.body.uname
    var e=req.body.uemail
    var p=req.body.products
    var a=req.body.amount
 
    coll.updateOne({_id:id},{$set:{_id:id,uname:n,uemail:e,products:p,amount:a}})
          .then(data => {
              console.log(data) //"value"
              res.send("Updated: "+id)
              server.close()
          });
 
  });
  });
  // Use a listener to handle errors outside the callback
  server.on('error', function(err){
     console.error('Something bad happened:', err);
  });
        } catch (err) {
          res.status(500).json({ error: err.message })
        }
     
     
     // console.log("coll obtained")
     
  }



async function deleteCart(req,res){
    try {
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("cart")
    console.log("connected")
    console.log("coll obtained") 
    var uid=parseInt(req.params.id.substring(1))//comes in the url
    console.log(uid)
    coll.deleteOne({ "_id" : uid })//import required here for ObjectId from mongodb library
          .then(data => {
              console.log(data) //"value"
              res.send("Deleted:"+data) 
              server.close()
          });
   
  });
  });
  // Use a listener to handle errors outside the callback
  server.on('error', function(err){
     console.error('Something bad happened:', err);
  });
        } catch (err) {
          res.status(500).json({ error: err.message })
        }
     
     // console.log("coll obtained")
   
}

async function getCartById(req,res){
  try {
    var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
      if(error){
      console.log(error)
      }
      MongoClient.connect("mongodb://localhost:27018", function(err, db){
  var myDB = db.db("Group6");
  var coll = myDB.collection("cart")
  console.log("connected",req.body)
  console.log("coll obtained")
  console.log(req.params.id);
  var id=parseInt(req.params.id.substring(1))
  console.log("getting id: ",id)
  coll.findOne({_id:id})
        .then(data => {
            console.log(data) //"value"
            res.send(data)
            server.close()
        });

});
});
// Use a listener to handle errors outside the callback
server.on('error', function(err){
   console.error('Something bad happened:', err);
});
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
   
   
   // console.log("coll obtained")
   
}
  





module.exports={getCart,addCart,updateCart,deleteCart,getCartById}