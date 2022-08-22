//const dbutil=require('../config/database.js')
/*var tunnel = require('tunnel-ssh');
var MongoClient = require('mongodb').MongoClient;
 
async function listSuppliers(req,res){
  try {
    var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
      if(error){
      console.log(error)
      }
      MongoClient.connect("mongodb://localhost:27018", function(err, db){
  var myDB = db.db("Group6");
  var coll = myDB.collection("suppliers")
  console.log("connected")
  console.log("coll obtained")
  //  arr=coll.find();
 
  //  arr.forEach(item=>{
  //    console.log(item)
  //  })
  //  res.json(arr)
  coll.find().toArray()
        .then(data => {
            console.log(data[0]) //"value"
            res.send(data)
            server.close();
        });
 
});
});

async function addSuppliers(req,res){
    try {
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("suppliers")
    console.log("connected",req.body)
    console.log("coll obtained")
    var id=31
    var sN=req.body.sName
    var sL=req.body.sLocation
    var sC=req.body.sContact
    var sE=req.body.sEmail
    var manu=req.body.manufacturers
 
    coll.insertOne({_id:id,sName:sN,sLocation:sL,sContact:sC,sEmail:sE,manufacturers:manu})
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

// Use a listener to handle errors outside the callback

server.on('error', function(err){
   console.error('Something bad happened:', err);
});
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
   
   
   // console.log("coll obtained")
   
}


 
module.exports={listSuppliers,addSuppliers}

*/

var tunnel = require('tunnel-ssh');
var MongoClient = require('mongodb').MongoClient;
 
async function listSuppliers(req,res){
  try {
    var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
      if(error){
      console.log(error)
      }
      MongoClient.connect("mongodb://localhost:27018", function(err, db){
  var myDB = db.db("Group6");
  var coll = myDB.collection("suppliers")
  console.log("connected")
  console.log("coll obtained")

  //  arr=coll.find();
 
  //  arr.forEach(item=>{
  //    console.log(item)
  //  })
  //  res.json(arr)
  coll.find().toArray()
        .then(data => {
          console.log('wow');
            console.log(data) //"value"
            res.send(data)
            server.close()
        });
        // setTimeout(function(){
        //   server.close();
        // },20000);
      //  db.close()
});

});
// Use a listener to handle errors outside the callback
server.on('error', function(err){
   console.error('Something bad happened:', err);
});
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
}
 
 
async function addSuppliers(req,res){
    try {
      var count=0;
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("suppliers")
    console.log("connected",req.body)
    console.log("coll obtained")
    var id=req.body._id
    var sN=req.body.sName
    var sL=req.body.sLocation
    var sC=req.body.sContact
    var sE=req.body.sEmail
    count=count+1;
    var manu=req.body.manufacturers
 
    coll.insertOne({_id:id,sName:sN,sLocation:sL,sContact:sC,sEmail:sE,manufacturers:manu})
          .then(data => {
              console.log(data) //"value"
              res.send("Inserted: "+id)
              server.close()
          });
         setTimeout(function(){
          if(count>1){
           server.close();
           }
          },20000); 
       //   db.close()
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
 
  async function updateSuppliers(req,res){
    try {
      var count=0;
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("suppliers")
    console.log("connected",req.body)
    console.log("coll obtained")
    var id=parseInt(req.params.id)
    console.log("updating id: ",id)
    var sN=req.body.sName
    var sL=req.body.sLocation
    var sC=req.body.sContact
    var sE=req.body.sEmail
    var manu=req.body.manufacturers
 
    coll.updateOne({_id:id},{$set:{sName:sN,sLocation:sL,sContact:sC,sEmail:sE,manufacturers:manu}})
          .then(data => {
              console.log(data) //"value"
              res.send("Updated: "+id)
              server.close()
          });
          setTimeout(function(){
            if(count>1){
              server.close();
              }
          },20000);
        //  db.close()
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

  async function deleteSuppliers(req,res){
    try {
      var count=0;
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("suppliers")
    console.log("connected")
    console.log("coll obtained")
    var did=parseInt(req.params.id)//comes in the url
    console.log(did)
    coll.deleteOne({ "_id" : did })//import required here for ObjectId from mongodb library
          .then(data => {
            
              console.log(data) //"value"
              res.send("Deleted:"+data)
              server.close()
          });
          setTimeout(function(){
            if(count>1){
              server.close();
              }
          },20000);
       //   db.close()
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
  
 
module.exports={listSuppliers,addSuppliers,updateSuppliers,deleteSuppliers}