let userName=prompt(`Enter your name`)
if(!userName){
    userName = prompt(`Enter name`)};
if(userName){
    userName = userName.trim();
    userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase()};
    
while(!userName || userName !== null) { userName = prompt("Enter name")};
console.log(userName);

let surname = prompt(`Enter your Surname`)
if(!surname){
    surname=prompt(`Enter surname`)}
if(surname) {
    surname=surname.trim();
    surname=surname[0].toUpperCase+userName.slice(1).toLowerCase();}
while(!surname|| surname !==null){surname = prompt(`Enter surensme`)};
console.log(surname);

let email = prompt('Enter email')
if(!email){
    email=prompt(`Enter email`)}
if(email) email = email.replaceAll('',` `).trim();
while(!email ||  !email.includes(`@`)+ email.startsWith(`@`)+email.endsWith(`@`)){
      email = prompt(`Enter email`)};
console.log(email);

let yearOfBirth = prompt (`Enter year`)

if(yearOfBirth)yearOfBirth=yearOfBirth.replaceAll(` `,``)
while(!yearOfBirth || isNaN(yearOfBirth)){
       yearOfBirth = prompt(`Enter year`)};
console.log(yearOfBirth);

let age = new Date().getFullYear() - yearOfBirth; 
console.log(age)


let fullname = userName+surname;
console.log(fullname);

document.write ('<ul>')

if(fullname)document.write( 
  `<li> Full name: fullname </li>` );
if(email)document.write(
   `<li>Email: email</li>`) ;
if(age)document.write(
    `<li>Age: age '</li>`)
('</ul>');