



/*******************************session 20************************* */
/******************************task1***************************** */
// var match_shick_numbers = +prompt("enter the number of matches");
// var match_stick_homes = +prompt("enter the number of match homes");
// function matches(match_shick_numbers,match_stick_homes) {
//     if (isNaN(match_shick_numbers)||isNaN(match_stick_homes)) {
//         console.error("invalid input");
//         return
//     }
//     else{
//        console.log((match_shick_numbers*match_stick_homes)-(match_stick_homes-1));
//     }
    
// }
// matches(match_shick_numbers,match_stick_homes);
/******************************task2***************************** */
// var arr = ["true","false","true","false","true","true"];

// function only_true_values(arr) {
//     for (var i = 0; i<arr.length; i++) {
//         // console.log(arr[i]);
//         if(arr[i]=="true"){
//             console.log(arr[i]);
//         }
//     }

// }
// only_true_values(arr);

/******************************task3***************************** */

// var letter = prompt("enter what is the letter you wanna check : ");
// var number = +prompt("enter the number : ");

// function premeter(letter , number) {
//     if (letter=="s") {
//         console.log("the permeter of the square :"+4*number);
//     }
//     else if(letter=="c"){
//         var radius = +prompt("enter the radius of the circle : ")
//         console.log("the premeter of the circle: "+2*(22/7)*radius);
//     }
//     else{
//         console.error("unvalid input please try again");
//     }
// }
// premeter(letter , number)

/******************************task4***************************** */
// var arr = [1,2,3,4,5,6,7];
// var sum = 0;
// function sum_of_array_even(arr,sum) {
//     for (var i = 0; i<arr.length; i++){
//         if (arr[i]%2==0) {
//         console.log(arr[i]);
//         sum=sum+arr[i];
//     }
// }

// console.log("the sum of the even numbers is an array : "+sum);
// }
// sum_of_array_even(arr,sum);













/**************************session 21*************************** */
/******************************task1***************************** */
// var str = prompt("enter the letters");
// function lowercase_search(str) {
//     if (!isNaN(str)) {
//         console.error("this is a number");
//     }
//     else{
//         for(let i = 0 ; i<str.length; i++){
//            var letter=str[i];
//             if (letter===letter.toLowerCase()) {
//                 console.log(letter);
//             }
//         }
        
//     }
   
//     }
// lowercase_search(str);
/******************************task2***************************** */
// var person = {
//     name: "Ahmed",
//     age: 50,
//     gender: "male",
//    city: ["Egypt", "Alexandria"],
//     married: true,
//     sons: [
//             {name: "mohamed", age: 30},
//             {name: "ashraf", age: 20},
//             {name: "mai", age: 15}
//         ],
// }

// function movie_theater(person) {
//     var data =" ";
//     data +="your name is : "+person.name+" you age is : "+person.age+" your gender is : "+person.age;
//     console.log(data);
//     if (person.married) {
//         if (person.sons&&person.sons.length>0) {
//             for (var i = 0; i < person.sons.length; i++){
//                 if (person.sons[i].age>25) {
//                     console.log("sorry "+person.sons[i].name+ " have not any discount");
//                 }
//                 else if (person.sons[i].age<25&&person.sons[i].age>16) {
//                     console.log(person.sons[i].name+ " have 10% discount");

//                 }
//                 else if (person.sons[i].age<16) {
//                     console.log(person.sons[i].name+ " have 25% discount");
//                 }
//             }
//             console.log("total tickets are : "+(3*100)+(90)+(75));
//         }
//         else {
//             console.log("you don't have any sons total ticket for two persons : "+2*100);
//         }
//     }
//     else{
//         console.log("hmmm your are sigle !"+1*100);
//     } 
// }
// movie_theater(person);






// var person = {
//     name: "ali",
//     age: 50,
//     gender: "male",
//     country: ["egypt", "usa"],
//     married: true,
//     sons: [
//         { one: "mohammed", gender: "male" },
//         { one: "alyaa", gender: "female" },
//     ],
// };

// function person_check(person) {
//     if (person.married) {
//         for (var i = 0; i <= person.sons.length; i++) {
//             if (person.sons[i] == 0) {
//                 console.error("he didn't have sons ?!!!!!");
//             }
//             console.log("the name of the first is "+person.sons.one+"");
//         }
//         console.log("he have sons ! what is great");
//     } else {
//         console.log("he is not married");
//     }
// }
// person_check(person);



