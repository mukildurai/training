//rest operator and spread operator
// rest operator in array destructing
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);   
console.log(second); 
console.log(rest);   


//ithe object vachiyum  panalam  destructing ku
const person = {
  name2: 'John',
  age: 30,
  city: 'New York'
};
const { name2,... city } = person;
console.log(name2);
console.log(city);

//spread operator 2  method eruku
list=['tom' ,'cruise','holand','tony', "robrt","rock"]
newstudent =["dinesh","anad","ajay","madhav",...list] 
console.log(newstudent);

cmbine1=[...list,newstudent]
cmbine=[...list,...newstudent]
console.log(cmbine);
console.log(cmbine1);
