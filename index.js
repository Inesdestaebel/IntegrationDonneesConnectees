var express = require('express');
var app = express();
const fs = require('fs');
const { addListener } = require('process');

const port= process.env.PORT || 3000;

const annotations = JSON.parse(fs.readFileSync('./annotations.json'))

app.get("/toto", function(req, res){
    res.send("Salut toto!")
});

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html")
})

app.get("/form1", (req, res) => { 
  const annotation = annotations[req.query.annotationName]
  const annot = req.query.languages
  if(annot=="html"){

  }
  res.status(200).send(annotation)
});

app.get("/form2", (req, res) => { 
    res.status(200).send(annotations)
  });

  app.get("/form3", (req, res) => { 
    data = {}
    for (anot in annotations){
        if (annotations[anot]['URI']==req.query.URIannotations){
            data+=JSON.stringify(annotations[anot])
    }
}
    res.status(200).send(data)

  });

app.get("/form", (req, res) => {
    const annotationName = "annotation" + (Object.keys(annotations).length + 1 )
    annotations[annotationName] = {"URI":req.query.URI,
    "annotation":req.query.annotation}
    fs.writeFileSync('./annotations.json', JSON.stringify(annotations))
    res.status(200).send("Votre annotation a bien été reçue.")
});


app.listen(port, function(){
    console.log('serveur listening on port : '+port);
})
