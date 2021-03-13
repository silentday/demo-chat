const fs = require('fs');

const userFile = 'src/assets/users.json';
const newUserFile = 'src/assets/newUsers.json';

console.log('Reading ' + userFile);
fs.readFile(userFile, 'utf8', (err, data) => {
  if(err) {
    console.log("Unable to read file because: " + err)
  } else {
    const file = JSON.parse(data);
    const users = file.results;
    users.forEach(user => {
      // normalize first and last name strings
      var firstName = user.name.first.toLowerCase();
      var lastName = user.name.last.toLowerCase();
      // captilaize the first letter of each name field
      firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
      lastName = lastName.charAt(0).toUpperCase() + firstName.slice(1)
      user.chatName = firstName + lastName
    });

    const newResults = JSON.stringify(users);
    console.log('Writting ' + newUserFile);
    fs.writeFile(newUserFile, newResults, 'utf8', (err) => {
      if(err){
        console.log("Something went horribly wrong writting this file: " + err);
      } else {
        console.log('SUCCESS! ' + newUserFile + ' written successfully.')
      }
    })
  }
});





