console.log('---------------------------------------------------')
console.log('------------Address Randomizer made by:------------')
console.log('------------Discord: @cactus jack#0001-------------')
console.log('------------Twitter: @stroworld--------------------')
console.log('---------------------------------------------------')
console.log('')
var faker = require('faker');
console.log(faker.fake("{{name.firstName}}, {{name.lastName}}"))


// yes i realize now that i could shorten the script a lot, maybe later tho after i do csv
const fs = require('fs');
const prompt = require('prompt');
console.log("\nPlease select one of the options for randomization below. The ABCD is the randomized part of the address.\n")
console.log("Option 1: ABCD 5183 Copalot St\n")
console.log("Option 2: 5183 ABCD Copalot St\n")
console.log("Option 3: 5183 Copalot ABCD St\n")
console.log("Option 4: 5183 Copalot St ABCD\n")
console.log("Please enter 1, 2, 3, or 4. below\n")
console.log("In 'ApartmentLength', enter the how many numbers you would like in your randomized apartment.")
console.log("In 'Catchall', enter your catchall WITHOUT the @.")
console.log("In 'PhoneAreaCode', enter your phone area code ONLY (EX: 305 is the area code for Miami.")
prompt.get(['Option'], function (err, result) {
prompt.start();
    if (result.Option == 1) {
        prompt.get(['AddressLine1', 'ApartmentLength', 'Catchall','PhoneAreaCode','Quantity'], function (err, result) {
        prompt.start();
        console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized address(es).`)
        fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n`)
        console.log(`Success! Your apartment was randomized ${result.Quantity} times! Please see apt.txt for a list of your randomized apartment(s).`)
        fs.writeFileSync(`apt.txt`, `Success! Your apartment was randomized ${result.Quantity} times!\n\n`)
        console.log(`Success! Your catchall was randomized ${result.Quantity} times! Please see catchall.txt for a list of your randomized email(s).`)
        fs.writeFileSync(`catchall.txt`, `Success! Your catchall was randomized ${result.Quantity} times!\n\n`)
        console.log(`Success! Your phone number was randomized ${result.Quantity} times! Please see phone.txt for a list of your randomized phone number(s).`)
        fs.writeFileSync(`phone.txt`, `Success! Your phone number was randomized ${result.Quantity} times!\n\n`)
        console.log(`Success! Your name was randomized ${result.Quantity} times! Please see name.txt for a list of your randomized name(s).`)
        fs.writeFileSync(`name.txt`, `Success! Your name was randomized ${result.Quantity} times!\n\n`)
        
       
            for (repeat = 0; repeat < result.Quantity; repeat++) {
                var randomstring = "";
                var randomnumbers = "";
                var randomlowercase = "";
                var randomphonenumbers = "";
                var randomName = "";
                var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var numbers = "0123456789";
                var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
  
                for (var i = 0; i < 4; i++)
                    randomstring += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                for (var i = 0; i < result.ApartmentLength; i++)
                    randomnumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
                for (var i = 0; i < 10; i++)
                    randomlowercase += lowercaseletters.charAt(Math.floor(Math.random() * lowercaseletters.length));
                for (var i = 0; i < 7; i++)
                    randomphonenumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
                randomName += faker.name.firstName() + " " + faker.name.lastName() + "\n"
    
                let randomizedaddress = randomstring +  " " + result.AddressLine1 + "\n"
                let randomizedapt = "Apt" + " " + randomnumbers + "\n"
                let randomcatchall = randomlowercase + "@" + result.Catchall + "\n"
                let randomphone = result.PhoneAreaCode + randomphonenumbers + "\n"
                fs.appendFileSync('addy.txt', randomizedaddress)
                fs.appendFileSync('apt.txt', randomizedapt)
                fs.appendFileSync('catchall.txt', randomcatchall)
                fs.appendFileSync('phone.txt', randomphone)
                fs.appendFileSync('name.txt', randomName)
                }
             });
        
        } else if (result.Option == 2) {
            prompt.get(['HouseNumber', 'Street', 'ApartmentLength', 'Catchall', 'PhoneAreaCode', 'Quantity'], function (err, result) {

                prompt.start();
                console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized addresses.`)
                fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n`)
                console.log(`Success! Your apartment was randomized ${result.Quantity} times! Please see apt.txt for a list of your randomized apartment(s).`)
                fs.writeFileSync(`apt.txt`, `Success! Your apartment was randomized ${result.Quantity} times!\n\n`)
                console.log(`Success! Your catchall was randomized ${result.Quantity} times! Please see catchall.txt for a list of your randomized email(s).`)
                fs.writeFileSync(`catchall.txt`, `Success! Your catchall was randomized ${result.Quantity} times!\n\n`)
                console.log(`Success! Your phone number was randomized ${result.Quantity} times! Please see phone.txt for a list of your randomized phone number(s).`)
                fs.writeFileSync(`phone.txt`, `Success! Your phone number was randomized ${result.Quantity} times!\n\n`)
                console.log(`Success! Your name was randomized ${result.Quantity} times! Please see name.txt for a list of your randomized name(s).`)
                fs.writeFileSync(`name.txt`, `Success! Your name was randomized ${result.Quantity} times!\n\n`)
        
                    for (repeat = 0; repeat < result.Quantity; repeat++) {
                        var randomstring = "";
                        var randomnumbers = "";
                        var randomlowercase = "";
                        var randomphonenumbers = "";
                        var randomName = "";
                        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                        var numbers = "0123456789";
                        var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
  
          
                        for (var i = 0; i < 4; i++)
                            randomstring += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                        for (var i = 0; i < result.ApartmentLength; i++)
                            randomnumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
                        for (var i = 0; i < 10; i++)
                            randomlowercase += lowercaseletters.charAt(Math.floor(Math.random() * lowercaseletters.length));
                        for (var i = 0; i < 7; i++)
                            randomphonenumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
                        randomName += faker.name.firstName() + " " + faker.name.lastName() + "\n"
            
                        let randomizedaddress = result.HouseNumber + " " + randomstring +  " " + result.Street + "\n"
                        let randomizedapt = "Apt" + " " + randomnumbers + "\n"
                        let randomcatchall = randomlowercase + "@" + result.Catchall + "\n"
                        let randomphone = result.PhoneAreaCode + randomphonenumbers + "\n"
                        fs.appendFileSync('addy.txt', randomizedaddress)
                        fs.appendFileSync('apt.txt', randomizedapt)
                        fs.appendFileSync('catchall.txt', randomcatchall)
                        fs.appendFileSync('phone.txt', randomphone)
                        fs.appendFileSync('name.txt', randomName)
                        }
                     });
                } else if (result.Option == 3) {
                    console.log("\nNote: Street Suffix is the 'St, Dr, Ave, etc.' part of your address.  Street Name is the actual name of your street.\n")
                    prompt.get(['HouseNumber', 'StreetName', 'StreetSuffix', 'ApartmentLength', 'Catchall', 'PhoneAreaCode', 'Quantity'], function (err, result) {

                        prompt.start();
                        console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized addresses.`)
                        fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n\n`)
                        console.log(`Success! Your apartment was randomized ${result.Quantity} times! Please see apt.txt for a list of your randomized apartment(s).`)
                        fs.writeFileSync(`apt.txt`, `Success! Your apartment was randomized ${result.Quantity} times!\n\n\n`)
                        console.log(`Success! Your catchall was randomized ${result.Quantity} times! Please see catchall.txt for a list of your randomized email(s).`)
                        fs.writeFileSync(`catchall.txt`, `Success! Your catchall was randomized ${result.Quantity} times!\n\n\n`)
                        console.log(`Success! Your phone number was randomized ${result.Quantity} times! Please see phone.txt for a list of your randomized phone number(s).`)
                        fs.writeFileSync(`phone.txt`, `Success! Your phone number was randomized ${result.Quantity} times!\n\n\n`)
                        console.log(`Success! Your name was randomized ${result.Quantity} times! Please see name.txt for a list of your randomized name(s).`)
                        fs.writeFileSync(`name.txt`, `Success! Your name was randomized ${result.Quantity} times!\n\n`)
                
                            for (repeat = 0; repeat < result.Quantity; repeat++) {
                                var randomstring = "";
                                var randomnumbers = "";
                                var randomlowercase = "";
                                var randomphonenumbers = "";
                                var randomName = "";
                                var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                var numbers = "0123456789";
                                var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
                  
                                for (var i = 0; i < 4; i++)
                                    randomstring += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                                for (var i = 0; i < result.ApartmentLength; i++)
                                    randomnumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
                                for (var i = 0; i < 10; i++)
                                    randomlowercase += lowercaseletters.charAt(Math.floor(Math.random() * lowercaseletters.length));
                                for (var i = 0; i < 7; i++)
                                    randomphonenumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
                                randomName += faker.name.firstName() + " " + faker.name.lastName() + "\n"
                    
                                let randomizedaddress = result.HouseNumber + " "+ result.StreetName + " " + randomstring +  " " + result.StreetSuffix + "\n"
                                let randomizedapt = "Apt" + " " + randomnumbers + "\n"
                                let randomcatchall = randomlowercase + "@" + result.Catchall + "\n"
                                let randomphone = result.PhoneAreaCode + randomphonenumbers + "\n"
                                fs.appendFileSync('addy.txt', randomizedaddress)
                                fs.appendFileSync('apt.txt', randomizedapt)
                                fs.appendFileSync('catchall.txt', randomcatchall)
                                fs.appendFileSync('phone.txt', randomphone)
                                fs.appendFileSync('name.txt', randomName)
                                }
                             });
                        } else if (result.Option == 4) {
                            prompt.get(['AddressLine1','Quantity', 'ApartmentLength', 'Catchall', 'PhoneAreaCode'], function (err, result) {

                                prompt.start();
                                console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized addresses.`)
                                fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n\n`)
                                console.log(`Success! Your address was randomized ${result.Quantity} times! Please see addy.txt for a list of your randomized addresses.`)
                                fs.writeFileSync(`addy.txt`, `Success! Your address was randomized ${result.Quantity} times!\n\n\n`)
                                console.log(`Success! Your apartment was randomized ${result.Quantity} times! Please see apt.txt for a list of your randomized apartment(s).`)
                                fs.writeFileSync(`apt.txt`, `Success! Your apartment was randomized ${result.Quantity} times!\n\n\n`)
                                console.log(`Success! Your catchall was randomized ${result.Quantity} times! Please see catchall.txt for a list of your randomized email(s).`)
                                fs.writeFileSync(`catchall.txt`, `Success! Your catchall was randomized ${result.Quantity} times!\n\n\n`)
                                console.log(`Success! Your phone number was randomized ${result.Quantity} times! Please see phone.txt for a list of your randomized phone number(s).`)
                                fs.writeFileSync(`phone.txt`, `Success! Your phone number was randomized ${result.Quantity} times!\n\n\n`)
                                console.log(`Success! Your name was randomized ${result.Quantity} times! Please see name.txt for a list of your randomized name(s).`)
                                fs.writeFileSync(`name.txt`, `Success! Your name was randomized ${result.Quantity} times!\n\n`)
                        
                                    for (repeat = 0; repeat < result.Quantity; repeat++) {
                                        var randomstring = "";
                                        var randomnumbers = "";
                                        var randomlowercase = "";
                                        var randomphonenumbers = "";
                                        var randomName = "";
                                        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                        var numbers = "0123456789";
                                        var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
                          
                                        for (var i = 0; i < 4; i++)
                                            randomstring += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                                        for (var i = 0; i < result.ApartmentLength; i++)
                                            randomnumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
                                        for (var i = 0; i < 10; i++)
                                            randomlowercase += lowercaseletters.charAt(Math.floor(Math.random() * lowercaseletters.length));
                                        for (var i = 0; i < 7; i++)
                                            randomphonenumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
                                           randomName += faker.name.firstName() + " " + faker.name.lastName() + "\n"
                            
                                        let randomizedaddress = result.HouseNumber + " "+ result.StreetName + " " + randomstring +  " " + result.StreetSuffix + "\n"
                                        let randomizedapt = "Apt" + " " + randomnumbers + "\n"
                                        let randomcatchall = randomlowercase + "@" + result.Catchall + "\n"
                                        let randomphone = result.PhoneAreaCode + randomphonenumbers + "\n"
                                        fs.appendFileSync('addy.txt', randomizedaddress)
                                        fs.appendFileSync('apt.txt', randomizedapt)
                                        fs.appendFileSync('catchall.txt', randomcatchall)
                                        fs.appendFileSync('phone.txt', randomphone)
                                        fs.appendFileSync('name.txt', randomName)
                                        }
                                     });
                        }
             },
      
);