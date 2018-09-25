const fs = require('fs');
const config = JSON.parse(fs.readFileSync('addressconfig.json'));
const quantity = config.numberoftimes;
const addressline1 = config.address.address_line_1


for (repeat = 0; repeat < quantity; repeat++) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    let randomizedaddress = text + addressline1
    console.log(randomizedaddress)

  fs.writeFile('addy.txt', randomizedaddress, function (err) {
    if (err) 
        return console.log(err);
    console.log('check addy.txt');
});
}
