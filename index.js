const faker = require('faker');
const fs = require('fs');
const prompt = require('prompt');

console.log('---------------------------------------------------')
console.log('------------Address Randomizer made by:------------')
console.log('------------Discord: @cactus jack#0001-------------')
console.log('------------Twitter: @stroworld--------------------')
console.log('---------------------------------------------------')

console.log('\nPlease select one of the options for randomization below. The ABCD is the randomized part of the address.\n')
console.log('Option 1: ABCD 5183 Copalot St\n')
console.log('Option 2: 5183 ABCD Copalot St\n')
console.log('Option 3: 5183 Copalot ABCD St\n')
console.log('Option 4: 5183 Copalot St ABCD\n')
console.log('Please enter 1, 2, 3, or 4 in the "Option" prompt below.\n')
console.log('In "Catchall", enter your catchall WITHOUT the @.')
console.log('In "Phone Area Code", enter your phone area code ONLY (EX: 305 is the area code for Miami.')

function randomLetters(input) {
    let length = ''
    let result = ''
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let array = []
    if (input === 'addy') {
        array = ['3', '4']
        length = array[Math.floor(Math.random() * array.length)]
    }
    for (let i = 0; i < length; i++ ) {
       result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}
function randomNumbers(input) {
    let length = ''
    let result = ''
    let array = []
    let numbers = '0123456789'
    if (input === 'apt') {
        array = ['2', '3', '4', '5']
        length = array[Math.floor(Math.random() * array.length)]
    }
    if (input === 'phone') {
        length = '7'
    }
    if (input === 'catchall') {
        length = '8'
    }
    for (let i = 0; i < length; i++ ) {
       result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
}
function randomLine2() {
    let array = ['Apt', 'Room', 'Unit', 'Suite', 'Floor']
    return array[Math.floor(Math.random() * array.length)]
}

prompt.get(['Option'], function (e, r) {
prompt.start();
    fs.writeFileSync('name.txt', '')
    fs.writeFileSync('addy.txt', '')
    fs.writeFileSync('apt.txt', '')
    fs.writeFileSync('catchall.txt', '')
    fs.writeFileSync('phone.txt', '')
    if (r.Option == 1) {
        prompt.get(['Address Line 1', 'Catchall','Phone Area Code','Quantity'], function (err, r) {
            prompt.start();
            console.log(`Success! Your information was randomized ${r.Quantity} times! Please see the txt files for a list of your randomized information.`)
            for (repeat = 0; repeat < r.Quantity; repeat++) {
                let random = {}
                random.name = `${faker.name.firstName()} ${faker.name.lastName()}\n`
                random.address = `${randomLetters('addy')} ${r['Address Line 1']}\n`
                random.apt = `${randomLine2()} ${randomNumbers('apt')}\n`
                random.catchall = `${faker.name.firstName()}${(randomNumbers('catchall')).toLowerCase()}@${r.Catchall}\n`
                random.phone_number = `${r['Phone Area Code']}${randomNumbers('phone')}\n`
                fs.appendFileSync('name.txt', random.name)
                fs.appendFileSync('addy.txt', random.address)
                fs.appendFileSync('apt.txt', random.apt)
                fs.appendFileSync('catchall.txt', random.catchall)
                fs.appendFileSync('phone.txt', random.phone_number)
            }
        })
    } else if (r.Option === 2) {
        prompt.get(['House Number', 'Street', 'Apartment Length', 'Catchall', 'Phone Area Code', 'Quantity'], function (e, r) {
        prompt.start();
            console.log(`Success! Your information was randomized ${r.Quantity} times! Please see the txt files for a list of your randomized information.`)
            for (repeat = 0; repeat < r.Quantity; repeat++) {
                random.name = `${faker.name.firstName()} ${faker.name.lastName()}\n`
                random.address = `${r['House Number']} ${randomLetters('addy')} ${r.Street}\n`
                random.apt = `${randomLine2()} ${randomNumbers('apt')}\n`
                random.catchall = `${faker.name.firstName()}${(randomLetters('catchall')).toLowerCase()}@${r.Catchall}\n`
                random.phone_number = `${r['Phone Area Code']}${randomNumbers('phone')}\n`
                fs.appendFileSync('name.txt', random.name)
                fs.appendFileSync('addy.txt', random.address)
                fs.appendFileSync('apt.txt', random.apt)
                fs.appendFileSync('catchall.txt', random.catchall)
                fs.appendFileSync('phone.txt', random.phone_number)
            }
        })
    } else if (r.Option === 3) {
        console.log('\nNote: Street Suffix is the "St, Dr, Ave, etc." part of your address.  Street Name is the actual name of your street.\n')
        prompt.get(['House Number', 'Street Name', 'Street Suffix', 'Apartment Length', 'Catchall', 'Phone Area Code', 'Quantity'], function (e, r) {
            prompt.start();
            console.log(`Success! Your information was randomized ${r.Quantity} times! Please see the txt files for a list of your randomized information.`)
            for (repeat = 0; repeat < r.Quantity; repeat++) {
                random.name = `${faker.name.firstName()} ${faker.name.lastName()}\n`
                random.address = `${r['House Number']} ${r['Street Name']} ${randomLetters('addy')} ${r['Street Suffix']}\n`
                random.apt = `${randomLine2()} ${randomNumbers('apt')}\n`
                random.catchall = `${faker.name.firstName()}${(randomLetters('catchall')).toLowerCase()}@${r.Catchall}\n`
                random.phone_number = `${r['Phone Area Code']}${randomNumbers('phone')}\n`
                fs.appendFileSync('name.txt', random.name)
                fs.appendFileSync('addy.txt', random.address)
                fs.appendFileSync('apt.txt', random.apt)
                fs.appendFileSync('catchall.txt', random.catchall)
                fs.appendFileSync('phone.txt', random.phone_number)
            }
        })
    } else if (r.Option === 4) {
        prompt.get(['Address Line 1','Quantity', 'Apartment Length', 'Catchall', 'Phone Area Code'], function (e, r) {
            prompt.start();
            console.log(`Success! Your information was randomized ${r.Quantity} times! Please see the txt files for a list of your randomized information.`)
            for (repeat = 0; repeat < r.Quantity; repeat++) {
                random.name = `${faker.name.firstName()} ${faker.name.lastName()}\n`
                random.address = `${r['Address Line 1']} ${randomLetters('addy')}\n`
                random.apt = `${randomLine2()} ${randomNumbers('apt')}\n`
                random.catchall = `${faker.name.firstName()}${(randomLetters('catchall')).toLowerCase()}@${r.Catchall}\n`
                random.phone_number = `${r['Phone Area Code']}${randomNumbers('phone')}\n`
                fs.appendFileSync('name.txt', random.name)
                fs.appendFileSync('addy.txt', random.address)
                fs.appendFileSync('apt.txt', random.apt)
                fs.appendFileSync('catchall.txt', random.catchall)
                fs.appendFileSync('phone.txt', random.phone_number)
            }
        })
    }
})