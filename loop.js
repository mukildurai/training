array =[
    2, 4,5,[40.6, 45.3],'a','true',"black"
]
console.log(array);
for(var x in array){
    console.log(x);
    console.log(array[x]);
}
for (var y of array){
    console.log(y);
}
objtype1={
     "name":"mukil",
  "age":20
}
console.log(objtype1);
objtype={}
console.log(objtype);
objtype["movie"]='iron man 2'
objtype['value']='1000 cr'
console.log(objtype.movie);
console.log(objtype['movie']);
//assingment operator
var a=10;
var b=10;
var c=a+b;
console.log(c);
//arithmatic operator
var d =2;
var e=23;
var f=d-e;
console.log(f);
//comparison operator 
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result);

var ac=10;
var bc='10';
if(ac==bc){
    console.log(ac+"=="+bc);
}
else console.log(ac+"!=="+bc);
//logical operator
var ab=3;
var bb=20;
if(ab==ab&&bb==ab){
    console.log("true");
}
else{
    console.log("false");
}
//bitwise operator 
var bit=10;
console.log(2<<bit)



arrowfun =(students)=>{
    return students;

}
console.log(arrowfun(['kec','m']))