// const person={
//     firstname:"Udit",
//     age:24,
//     location:{
//         city:"Gainesville",
//         state:"FL",
//         temp:27
//     }
// }

// const {firstname,age}=person
// const {city,state,temp}=person.location

// console.log(`${firstname} is ${age}`)

// console.log(`It is ${temp} in ${city}, ${state}`)

// const book={
//     title: "Ego",
//     author: "ABV",
//     publisher: {
//         name: "SomeCompany"
//     }
// };

// const {title:bookname,author}=book

// const {name="Unkown Company"}=book.publisher

// console.log(`${bookname} by ${author} is published by ${name}`)

///// ARRAY DESTRUCT

const address=['1299 S Juniper Street', "Philadelphia", "PS","19147"];

const [street,city,state,zip]= address

console.log(`you are in ${street+city+state+zip}`)
