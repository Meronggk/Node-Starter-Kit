
const express = require('express');
const app = express();
const port = 9090;

const trainees = [
    { name: 'Levi', region: 'north-west' },
    { name: 'Meron', region: 'north-west' },
    { name: 'Anosh', region: 'north-west' },
];



app.get('/', function(request, response){
console.log('hi, how are you');
response.send('this is okay');
});

app.get('/trainees', function(request, response){
    console.log('recieved');
    response.send(trainees);
})

app.listen(port, function(){
    console.log('my app is good');
});