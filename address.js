const fs = require('fs');
const config = JSON.parse(fs.readFileSync('addressconfig.json'));
const quantity = config.numberoftimes;
const addressline1 = config.address.address_line_1

fs.writeFileSync('addy.txt', `Success! Your address was randomized ${quantity} times!\n\n\n`)

console.log('-------------------------------------------')
console.log("-------Made by:----------------------------")
console.log('-------Discord: @cactus jack#0001----------')
console.log('-------Twitter: @stroworld-----------------')
console.log('-------------------------------------------')
console.log('')


for (repeat = 0; repeat < quantity; repeat++) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    let randomizedaddress = text + addressline1
    fs.appendFileSync('addy.txt', randomizedaddress)
}
console.log(`Success! Your address was randomized ${quantity} times!  Please see addy.txt for a list of your randomized addresses.`)
