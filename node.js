const file = require('fs');
const exp = require('express');
const req = require('express/lib/request');
const app = exp();
const path = require('path');
const mongoose = require('mongoose');
const { urlencoded } = require('express'); 
const port = 80;
const homeHtml = file.readFileSync('personal.html');
const skillsHtml = file.readFileSync('skills.html');
const contactHtml = file.readFileSync('contact.html');
const blogsHtml = file.readFileSync('blogs.html');
// mongoose.connect('mongodb://localhost/newcart');
// let db = mongoose.connection;
// db.once('open',function(){
//     console.log('you are connected');
// })

app.use('/static',exp.static('static'));
app.use('/img',exp.static('img'));
app.use('/java',exp.static('java'))
app.use(urlencoded());

app.get('/',(req,res)=>{
    res.header('content-type','text/html')
    res.send(homeHtml);
})

app.get('/contact',(req,res)=>{
    res.header('content-type','text/html');
    res.send(contactHtml);
})

app.post('/formSubmitted',(req,res)=>{
    name1 = req.body.name;
    email = req.body.email;
    phoneNo = req.body.phoneNo;
    more = req.body.more;
    if(name1.length>1 && email.length>5 && phoneNo.length==10){
        res.send("your form submitted")
        console.log(req.body);
        console.log('name :'+name1);
        console.log('email :'+email);
        console.log('phoneNo :'+phoneNo);
        console.log('more :'+more);
    }
})

app.get('/blogs',(req,res)=>{
    res.header('content-type','text/html');
    res.send(blogsHtml);
})

app.get('/skills',(req,res)=>{
    res.header('content-type','text/html');
    res.send(skillsHtml);
})
app.listen(port,()=>{
    console.log('despacito')
})

// [{rating:3.5},{rating:4.0},{rating:3.6}]

// ($or:[{rating:3.5},{rating:4}])
// $ sign whenever using some any type of maths operatior while finding the data in mongodb or mongo mongod
// [{name:'satyamesh',surname:'mali',rating:3.5},{name:'shivam',surname:'mali',rating:4.5}]


// insertOne , insertMany , deleteOne , deleteMany , find (in find and all the case all the maths operator can be used with the help of the $ sign so make sure to use 
// the dollar sign as it prominent)

// find

// complete mongodb is of objects as in java.

// CRUD priciple