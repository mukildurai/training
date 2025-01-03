/* array =[
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

//arrow function

arrowfun =(students)=>{
    return students;

}
console.log(arrowfun(['kec','m']))

//destructing
var marks =[90,32,43]
var [m1,m2]=marks;
console.log(m1,m2);

//ternary operator
a=10;
out=(a%2==0)?'even':'odd'
console.log(a +" is "+ out);
//spread operator 2  method eruku
list=['tom' ,'cruise','holand','tony', "robrt","rock"]
newstudent =["dinesh","anad","ajay","madhav",...list] 
cmbine1=[...list,newstudent]
cmbine=[...list,...newstudent]
console.log(cmbine);
console.log(cmbine1);
//scope 
const pi=3.14;
var a9=5;
console.log (pi);
console.log (a9);
{
var a9=10;
let b9=3;
console.log(b9);
console.log(a9);
}

console.log(a9);
//hoisting
console.log(a11);
let a11=100;
console.log(a11) ;
//output refrence error
/*

console.log(a11);
let a11=100;
console.log(a11) ;
//output refrence erro


*/

/*

console.log(a11);
var a11=100;
console.log(a11) ;
//output  undefined 100





 // for eac
 array=[1,2,3,4,5]
 array.forEach((element,index) => {
    console.log(element,index)
    
 });
 
type1.forEach((Element,index)=>{
    console.log(Element,index);
});      
  
 type1={
    "name":"mukil",
     "age":20,
    "movie":'iron man 2' 
}
    
   async function name1() {
    setTimeout(() => {
        
        console.log("mukil");
    }, 2000);  
    console.log( await "mukil"); 
    
    
   }
    arrowfunc =async()=>{
        setTimeout(() => {
            console.log ("mukilan");
        }, 4000);
        console.log( await "mukilan");


    }
arrowfunc();  
   name1();
   
  // location finder
  function locationfinder(){
    let train=8;
    return new Promise((resolve,reject)=>{
        if(train ==7 )
        {
            resolve("resovle");
        
        
        }
        else{
            reject("reject");
        }
        
    })


  }

 
 locationfinder().then((resolve)=>{
    console.log(resolve);
 }).catch((err)=>{
    console.log(err);
 })
 */
 async function likecode(){
    return new Promise((like)=>{
       like("like comment Posted  successfuly");
        
    })
 }
async function commentcode(){
    return new Promise((commentpost)=>{
       commentpost("comment Posted  successfuly");
        
    })
}

 async function createpost(){
    var post=new Promise((cpost)=>{
        cpost("post created succesfully")
  
  
    })
    var [post,comment,like]=await Promise.all([post,commentcode(),likecode()]);
    console.log(post);
    console.log(comment);
    console.log(like);
}

createpost();