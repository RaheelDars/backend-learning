// const std1={
//     name:"Raheel",
//     age:21,
//     marks:25,
//     getmarks:function(){
//         return this.marks
//     }
// }
// const std2={
//     name:"Dani",
//     age:22,
//     marks:22,
//     getmarks:function(){
//         return this.marks
//     }
// }
// const std3={
//     name:"Abdullah",
//     age:21,
//     marks:23,
//     getmarks:function(){
//         return this.marks
//     }
// }
// const std4={
//     name:"Ali",
//     age:20,
//     marks:27,
//     getmarks:function(){
//         return this.marks
//     }
// }


//Factory Function  AND solution ha upper wala ka 
// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
            // console.log(`Hey my nme is ${name}`);//
//         },
//     }
//     return  person
// }
// let p1=PersonMaker("raheel",21)
// console.log(p1);


//Constructors- it doesnot return anything and start with Captial Letters
// function Person(name,age){
//    this.name=name;
//    this.age=age;

// }
// Person.prototype.talk=function(){
//     console.log(`Hey my name is ${this.name}`);
    
// }
// let p1=new Person("Dani",22)
// console.log(p1);
// let p2=new Person("Ali",21)


//Classes
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//        console.log(`Hey my name is ${this.name}`);

//     }
// }
// let p1=new Person("Ali",22)




//Problem?
// class Student{
//     constructor(name,age,marks){
//         this.name=name;
//         this.age=age;
//         this.marks=marks
//     }
//     talk(){
//        console.log(`Hey my name is ${this.name}`);

//     }
// }
// let std1=new Student("Ali",21,90);

// class Teacher{
//     constructor(name,age,subj){
//         this.name=name;
//         this.age=age;
//         this.subj=subj
//     }
//     talk(){
//        console.log(`Hey my name is ${this.name}`);

//     }
// }


//solution upper wali classes ka Student & Teacher ka 
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
       console.log(`Hey my name is ${this.name}`);

    }
 }


 class Student extends Person{
    constructor(name,age,marks){
        super(name,age) //Parent constructer is being called
         this.marks=marks
    }

}
// let std1=new Student("Ali",21,90);

class Teacher extends Person{
    constructor(name,age,subj){
        super(name,age)
        this.subj=subj

    }
  
}
