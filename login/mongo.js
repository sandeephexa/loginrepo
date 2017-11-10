var mongodb = require("mongodb"); 
mongodb.MongoClient.connect("mongodb://admin:admin123@ds251845.mlab.com:51845/sandymongo", function (err, database) {
if (err) {
console.log(err);
process.exit(1);
}
// Save database object from the callback for reuse.
db = database;
db.collection("students").insertMany(result, function (err, response) {
res.json({ file: "uploaded" });
});
db.close();
});