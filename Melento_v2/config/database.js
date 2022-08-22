var tunnel = require('tunnel-ssh');
var MongoClient = require('mongodb').MongoClient;
function mongoclientConnect(collName){
   
    //map port from remote 3306 to localhost 3306
    var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
       if(error){
       console.log(error)
       }
       MongoClient.connect("mongodb://localhost:27018", function(err, db){
   var myDB = db.db("Group6");
   var coll = myDB.collection(collName)
   console.log("connected")
   console.log("coll obtained")
    arrProd=coll.find();
 
    arrProd.forEach(p=>{
      console.log(p)
    })
   return coll
});
});
// Use a listener to handle errors outside the callback
server.on('error', function(err){
    console.error('Something bad happened:', err);
});
}
 
mongoclientConnect("products")