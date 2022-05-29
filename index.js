// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const Name=["Monica", "Wendy"];
const email=["monica@dingdong.com", "wendy@dingdong.com"];
const gender=["Female", "Male"];
const isHavePet = ["Yes", "No"];
const age=[17, 23];

// const educationMonica = {
//     education1: {name: "SD 01", city: "Jakarta", graduate: 2016},
//     education2: {name: "SMP 02", city: "Jakarta", graduate: 2019},
//     education3: {name: "SMA 03", city: "Tangerang", graduate: null}
// };
// const educationWendy = {
//     education1: {name: "SD 02", city: "Jakarta", graduate: 2010},
//     education2: {name: "SMP 03", city: "Bogor", graduate: 2013},
//     education3: {name: "SMA 01", city: "Surabaya", graduate: 2016},
//     education4: {name: "Universitas Maju", city: "Tangerang", graduate: null}
// };

const educationMonica=[
    {name: "SD 01", city: "Jakarta", graduate: 2016},
    {name: "SMP 02", city: "Jakarta", graduate: 2019},
    {name: "SMA 03", city: "Tangerang", graduate: null}
];
const educationWendy=[
    {name: "SD 02", city: "Jakarta", graduate: 2010},
    {name: "SMP 03", city: "Bogor", graduate: 2013},
    {name: "SMA 01", city: "Surabaya", graduate: 2016},
    {name: "Universitas Maju", city: "Tangerang", graduate: null}
];

const education = [educationMonica, educationWendy];
// const education= [[{
//     name: "SD 01 ",
//     city: "Jakarta",
//     graduate: 2016 
// }, {
//     name: "SMP 02",
//     city: "Jakarta",
//     graduate: 2019
// }, {
//     name: "SMA 03",
//     city: "Tangerang",
//     graduate:""
// }], [{
//     name: "SD 02",
//     city: "Jakarta",
//     graduate: 2010
// }, {
//     name: "SMP 03",
//     city: "Bogor",
//     graduate: 2013
// }, {
//     name: "SMA 01",
//     city: "Surabaya",
//     graduate: 2016
// }, {
//     name: "Universitas Maju",
//     city: "Tangerang",
//     graduate: ""
// }]];

let favoriteColor = [["Yellow", "Pink", "White", "Purple"],["Blue", "Black", "Grey"]];
let favoriteRestaurant=[["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"],
["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]];

const firstUser = {
    name: Name[0],
    gender: gender[0],
    age: age[0],
    email: email[0], 
    favoriteColor: [...new Set(favoriteColor[0])], 
    isHavePet: isHavePet[0],
    // education: [education[0][0], education[0][1],education[0][2]],
    // education: [educationMonica.education1,educationMonica.education2,educationMonica.education3],
    education: education[0],
    favoriteRestaurant: [...new Set(favoriteRestaurant[0])]
};

const secondUser = {
    name: Name[1],
    gender: gender[1],
    age: age[1],
    email: email[1], 
    favoriteColor: [...new Set(favoriteColor[1])], 
    isHavePet: isHavePet[1],
    // education: [education[1][0], education[1][1],education[1][2],education[1][3]],
    // education: [educationWendy.education1,educationWendy.education2,educationWendy.education3,educationWendy.education4],
    education: education[1],
    favoriteRestaurant: [...new Set(favoriteRestaurant[1])]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];
// console.log(JSON.stringify(firstUser.education, null, 2));
// console.log(JSON.stringify(secondUser.education, null, 2));

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};