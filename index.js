var express = require('express');
var app = express();

const port= process.env.PORT || 3000;

app.get("/toto", function(req, res){
    res.send("Salut toto!")
});

app.get("/form", (req, res) => {
    res.send(req)
});


app.listen(port, function(){
    console.log('serveur listening on port : '+port);
})

//POST : creer anot
//GET : renvoie une anot
//GET : toutes les anots
//GET : toutes les anots pour une URI