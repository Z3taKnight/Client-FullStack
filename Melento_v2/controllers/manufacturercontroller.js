var tunnel = require('tunnel-ssh');
var MongoClient = require('mongodb').MongoClient;
//const utilencrypt=require('../services/encrypt_password')
 
async function listManufacturer(req,res){
  try {
    var count=0;
    var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
      if(error){
      console.log(error)
      }
      MongoClient.connect("mongodb://localhost:27018", function(err, db){
  var myDB = db.db("Group6");
  var coll = myDB.collection("manufacturers")
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
        setTimeout(function(){
          if(count>1){
            server.close();
          }
        },30000);
        //db.close()
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
async function addManufacturer(req,res){
  console.log("adding"+req.method)
    try {
      var count=0;
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        //count=count+1;
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("manufacturers")
    console.log("connected",req.body)
    console.log("coll obtained")
    var id=req.body._id
    var mN=req.body.mName
    var mL=req.body.loc
    var mP=req.body.phn
    var pC=req.body.pointOfContact
    var mE=req.body.email
    count=count+1;
    coll.insertOne({_id:id,mName:mN,loc:mL,phn:mP,pointOfContact:pC,email:mE})
          .then(data => {
              console.log(data) //"value"
              res.send("Inserted: "+id)
              server.close()
          });
          setTimeout(function(){
            if(count>=1){
              server.close();
            }
          },30000);
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
  async function updateManufacturer(req,res){
    try {
      var count=1;
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("manufacturers")
    console.log("connected",req.body)
    console.log("coll obtained")
    var id=parseInt(req.params.id)
    console.log("updating id: ",id)
    var mN=req.body.mName
    var mL=req.body.loc
    var mP=req.body.phn
    var pC=req.body.pointOfContact
    var mE=req.body.email
    count=count+1;
    coll.updateOne({_id:id},{$set:{mName:mN,loc:mL,phn:mP,pointOfContact:pC,email:mE}})
          .then(data => {
              console.log(data) //"value"
              res.send("Updated: "+id)
              server.close()
          });
          setTimeout(function(){
            if(count>1){
              server.close();
            }
          },30000);
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
  async function deleteManufacturer(req,res){
    try {
      //var count=0;
      var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
        if(error){
        console.log(error)
        }
        MongoClient.connect("mongodb://localhost:27018", function(err, db){
    var myDB = db.db("Group6");
    var coll = myDB.collection("manufacturers")
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
           //setTimeout(function(){
          //   //if(count>1){
               //server.close();
          //  // } 
           //},30000);
  });
  //MongoClient.close()
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
  
  // async function addSuppliers(req,res){
  //   try {
  //     var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
  //       if(error){
  //       console.log(error)
  //       }
  //       MongoClient.connect("mongodb://localhost:27018", function(err, db){
  //   var myDB = db.db("KekkarTest");
  //   var coll = myDB.collection("suppliers")
  //   console.log("connected",req.body)
  //   console.log("coll obtained")
  //   var id=req.body.id
  //   var sN=req.body.sName
  //   //////////////////////////
  //   sN=utilencrypt.encryptPassword(sN)
  //   console.log("Encrypted sName "+sN)

  //   var decryptedSupplierName=utilencrypt.decryptPassword(sN)
  //   console.log("Decrypted sName: "+decryptedSupplierName)
  //   ////
  //   var sL=req.body.sLocation
  //   var sC=req.body.sContact
  //   var sE=req.body.sEmail
  //   var manu=req.body.manufacturers

  //   coll.insertOne({_id:id,sName:sN,sLocation:sL,sContact:sC,sEmail:sE,manufacturers:manu})
  //         .then(data => {
  //             console.log(data) //"value"
  //             res.send("Inserted: "+id)
  //             server.close()
  //         });
  
  // });
  // });
  // // Use a listener to handle errors outside the callback
  // server.on('error', function(err){
  //    console.error('Something bad happened:', err);
  // });
  //       } catch (err) {
  //         res.status(500).json({ error: err.message })
  //       }
      
      
  //    // console.log("coll obtained")
      
  // }
module.exports={listManufacturer,addManufacturer,updateManufacturer,deleteManufacturer}
