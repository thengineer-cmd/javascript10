let tony={name:"Sohel",LastName:"Ansari",Friends:["Shri","Rishabh","Auti"],
age:21,address:{
    State: "Mumbai",
    Country:"India"
},
SaysHi:function fn(){

    console.log('Im Sohel Ansari');
    return "Part of joury to end the world";

},





}
//console.log(tony);
// console.log(tony.name);
// console.log(tony.age);
// console.log(tony.Friends[1]);
// console.log(tony.SaysHi());

// console.log(tony["name"]);
// console.log(tony['age']);
// console.log(tony['Friends']['1']);
// console.log(tony['SaysHi']());
// for(let key in tony){
//     console.log(key);
// }
let krr=Object.keys(tony);
console.log(krr);