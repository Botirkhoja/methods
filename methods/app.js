// const sonlar = [1,2,3,4,5];
// const sonlar2 = [6,7,8,9,10];

// const result = sonlar.concat(sonlar2);


// console.log(result);



const ismlar = ["Ibrohimjon", "Ikromjon", "Islom", "Akbar"];

const result = ismlar.indexOf("Ikromjon");

console.log(result);



const Moshina = ["BMW", "Merc", "Matiz", "Cobolot"];
const index = Moshina.indexOf("BMW");

console.log(index);



const array = [5, 12, 8, 130, 44];

const found = array.find(el => el > 7);
console.log(found);



const Jadval = [
    {name: "Ikrom", baho: 5 },
    {name: "Abduvali", baho: 4 },
    {name: "Sherzod", baho: 3 },
];

function Nomm (birnima){
    return birnima.name === "Sherzod"
};

console.log(Jadval.find(Nomm));



const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

  staffsDetails.forEach((staffsDetails) => {
    let sentence = `Mening ismim ${staffsDetails.name} va men ${staffsDetails.age} daman. Men oyiga ${staffsDetails.salary} topaman`;
    console.log(sentence);
  });