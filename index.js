const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
const quantity = config.numberoftimes;
const addressline1 = config.address.address_line_1
const prompt = require('prompt');
prompt.get(['addressline'], function (err, result) {
console.log('Address Line 1: ' + `result.addressline \n`);

prompt.start();
console.log(`Success! Your address was randomized ${quantity} times!  Please see addy.txt for a list of your randomized addresses.`)

fs.writeFileSync('addy.txt', `Success! Your address was randomized ${quantity} times!\n\n\n`)

for (repeat = 0; repeat < quantity; repeat++) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    let randomizedaddress = text + str(result.addressline)
    fs.appendFileSync('addy.txt', randomizedaddress)
}
});
