console.log('---------------------------------------------------')
console.log('------------Address Randomizer made by:------------')
console.log('------------Discord: @cactus jack#0001-------------')
console.log('------------Twitter: @stroworld--------------------')
console.log('---------------------------------------------------')
console.log('')


const fs = require('fs');
const prompt = require('prompt');
prompt.get(['AddressLine1','Quantity'], function (err, result) {

prompt.start();
console.log(`Success! Your address was randomized ${result.Quantity} times!  Please see addy.txt for a list of your randomized addresses.`)

fs.writeFileSync('addy.txt', `Success! Your address was randomized ${result.Quantity} times!\n\n\n`)

for (repeat = 0; repeat < result.Quantity; repeat++) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    let randomizedaddress = text +  " " + result.AddressLine1 + "\n"
    fs.appendFileSync('addy.txt', randomizedaddress)
}
});
