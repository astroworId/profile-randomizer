const fs = require('fs');
const prompt = require('prompt');
prompt.get(['addressline','quantity'], function (err, result) {
  console.log('Address Line 1: ' + result.addressline);
  console.log('Quantity: ' + result.quantity);

prompt.start();
console.log(`Success! Your address was randomized ${quantity} times!  Please see addy.txt for a list of your randomized addresses.`)

fs.writeFileSync('addy.txt', `Success! Your address was randomized ${quantity} times!\n\n\n`)

for (repeat = 0; repeat < result.quantity; repeat++) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    let randomizedaddress = text +  " " + result.addressline
    fs.appendFileSync('addy.txt', randomizedaddress)
}
});
