const fs = require('fs');
const config = JSON.parse(fs.readFileSync('addressconfig.json'));
const quantity = config.numberoftimes;
const addressline1 = config.address.address_line_1
var fs = require('fs');
var stream = fs.createWriteStream("my_file.txt");




for (repeat = 0; repeat < quantity; repeat++) {
  function randomize() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text + addressline1;
    stream.write("text+addressline1\n");
    }
  }
  stream.end();
  console.log(randomize());

