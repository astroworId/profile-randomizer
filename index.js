console.log('---------------------------------------------------')
console.log('------------Address Randomizer made by:------------')
console.log('------------Discord: @cactus jack#0001-------------')
console.log('------------Twitter: @stroworld--------------------')
console.log('---------------------------------------------------')
console.log('')





const fs = require('fs');
const prompt = require('prompt');
console.log("\nPlease select one of the options for randomization below. The ABCD is the randomized part of the address.\n")
console.log("Option 1: ABCD 5183 Copalot St\n")
console.log("Option 2: 5183 ABCD Copalot St\n")
console.log("Option 3: 5183 Copalot ABCD St\n")
console.log("Option 4: 5183 Copalot St ABCD\n")
console.log("Please enter 1, 2, 3, or 4. below\n")
prompt.get(['Option'], function (err, result) {
prompt.start();
    if (result.Option == 1) {
        prompt.get(['AddressLine1','Quantity'], function (err, result) {

        prompt.start();
        console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized addresses.`)
        fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n\n`)

            for (repeat = 0; repeat < result.Quantity; repeat++) {
                var randomstring = "";
                var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
                for (var i = 0; i < 4; i++)
                    randomstring += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    
                let randomizedaddress = randomstring +  " " + result.AddressLine1 + "\n"
                fs.appendFileSync('addy.txt', randomizedaddress)
                }
             });
        } else if (result.Option == 2) {
            prompt.get(['HouseNumber','Street','Quantity'], function (err, result) {

                prompt.start();
                console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized addresses.`)
                fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n\n`)
        
                    for (repeat = 0; repeat < result.Quantity; repeat++) {
                        var randomstring = "";
                        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          
                        for (var i = 0; i < 4; i++)
                            randomstring += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            
                        let randomizedaddress = result.HouseNumber + " " + randomstring +  " " + result.Street + "\n"
                        fs.appendFileSync('addy.txt', randomizedaddress)
                        }
                     });
                } else if (result.Option == 3) {
                    console.log("\nNote: Street Suffix is the 'St, Dr, Ave, etc.' part of your address.  Street Name is the actual name of your street.\n")
                    prompt.get(['HouseNumber','StreetName','StreetSuffix','Quantity'], function (err, result) {

                        prompt.start();
                        console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized addresses.`)
                        fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n\n`)
                
                            for (repeat = 0; repeat < result.Quantity; repeat++) {
                                var randomstring = "";
                                var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                  
                                for (var i = 0; i < 4; i++)
                                    randomstring += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    
                                let randomizedaddress = result.HouseNumber + " "+ result.StreetName + " " + randomstring +  " " + result.StreetSuffix + "\n"
                                fs.appendFileSync('addy.txt', randomizedaddress)
                                }
                             });
                        } else if (result.Option == 4) {
                            prompt.get(['AddressLine1','Quantity'], function (err, result) {

                                prompt.start();
                                console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized addresses.`)
                                fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n\n`)
                        
                                    for (repeat = 0; repeat < result.Quantity; repeat++) {
                                        var randomstring = "";
                                        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                          
                                        for (var i = 0; i < 4; i++)
                                            randomstring += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                            
                                        let randomizedaddress = result.AddressLine1 + " " + randomstring + "\n"
                                        fs.appendFileSync('addy.txt', randomizedaddress)
                                        }
                                     });
                        }
            }
);