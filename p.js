const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.
console.log(people);
console.log(people.person2.name);
console.log(people.person2.salary);

//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)
// ;"strict"
for(let person in people) {
console.log(person);
console.log(people[person].salary);
console.log(people[person].name);
}

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//? job'i developer olanlarin dob degerlerini yazdiriniz.

for(let key of Object.keys(people)){

    console.log(key);
}
for(let v of Object.values(people)){

    console.log(v);
}
for(let [k, v] of Object.entries(people)){

    console.log("KEY:", k, "VALUE:",v.job)
}

Object.keys(people).forEach((p)=>console.log(p))
Object.values(people).forEach((p)=>console.log(p))


//?developerlwein dob değerleri
const dobs = Object.values(people).filter((p)=> p.job ==="developer").map(p=> p.dob)
console.log(dobs)


 
  const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 }
  ]
  console.log(team);
  console.log(team[1]);
  team.push({name:"ahmet", surname:"yılmaz",age:28, job:"tester"})
  console.log(team);
  