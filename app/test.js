

const fs = require('fs')

const bit1 = fs.readFile('../logs/neutron.log', 'utf-8', (err, data)=>{
    if(err){
        console.log('error:', err);
    }
    else{
        console.log(data)  }
})
console.log(bit1)