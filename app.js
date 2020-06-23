// //Ch 21 - 25

// //Task 1
// var fname = prompt("Please enter your first name");
// var lname = prompt("Please enter your last name");
// var fullName = fname + " " + lname;
// alert("Hello " + fullName);

// //Task 2
// var model=prompt("Please enter your favorite mobile phone model");
// document.write("My favorite phone is " + model);
// document.write("</br>");
// document.write("Length of string: " + model.length);

// //Task 3
// var stringVar = "Pakistani"
// document.write("String: " + stringVar)
// document.write("</br>");
// document.write("Index of 'n': " + stringVar.indexOf('n'));

// //Task 4
// var helloWorld = "Hello World"
// document.write("String: " + helloWorld)
// document.write("</br>");
// document.write("Last index of 'n': " + helloWorld.lastIndexOf('l'));

// //Task 5
// var stringVar = "Pakistani"
// document.write("String: " + stringVar)
// document.write("</br>")
// document.write("Character at index 3: " + stringVar[3])

// //Task 6
// var fname = prompt("Please enter your first name");
// var lname = prompt("Please enter your last name");
// var fullName = fname.concat(" " + lname);
// alert("Hello " + fullName);

// //Task 7
// var city = "Hyderabad";
// document.write("City: " + city)
// document.write("</br>")
// document.write("After replacement :" + city.replace("Hyder","Islam"))


// //Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + message)
// document.write("</br>")
// document.write("After replacement: " + message.replace(/and/g,"&"))

// //Task 9
// var string472 = "472"
// document.write("Value: " + string472 + "</br>")
// document.write("Type: " + typeof(string472)+ "</br>")
// var num472 = parseInt(string472)
// document.write("Value: " + num472+ "</br>")
// document.write("Type: " + typeof(num472)+ "</br>")

// //Task 10
// var userInput = prompt("Please enter a string")
// document.write("User input: " + userInput + "</br>")
// document.write("Upper case: " + userInput.toUpperCase())

//Task 11
// var userInput = prompt("Please enter a string")
// var lowerCase = userInput.toLowerCase()
// lowerCase = lowerCase[0].toUpperCase() + lowerCase.slice(1)
// for (var i=0;i<lowerCase.length;i++) {
//     if(lowerCase[i]==" "){
//         lowerCase=lowerCase.slice(0,i) + " " + lowerCase[i+1].toUpperCase() + lowerCase.slice(i+2)
//     }
// }
// document.write("User input: " + userInput + "</br>")
// document.write("Title case: " + lowerCase)

//Task 12
// var num = 35.36;
// document.write("Number:" + num + "</br>")
// num.toString
// var str = num.toString()
// document.write(typeof(str))
// str=str.split(".")
// document.write("Result: " + str.join(""))


//Task 13
// var userName = prompt("Please enter user name")
// for (var i=0; i<userName.length; i++) {
//     if (userName.charCodeAt(i)==33 || userName.charCodeAt(i)==44 || userName.charCodeAt(i)==46 || userName.charCodeAt(i)==64) {
//         userName=prompt("Please enter a valid username")
//         for (var i=0; i<userName.length; i++) {
//             if (userName.charCodeAt(i)==33 || userName.charCodeAt(i)==44 || userName.charCodeAt(i)==46 || userName.charCodeAt(i)==64) {
//                 userName=prompt("Please enter a valid username")
//             }
//         }
//     }
// }
// document.write("User name is: " + userName)

//Task 14
// var a = ["cookie", "applepie", "cake", "chips", "patties"]
// var user = prompt("What do you want")
// user = user.toLowerCase()
// if(a.indexOf(user)!=-1){
//     document.write(user + " is available at index " + a.indexOf(user) + " at our bakery")
// }
// else {
//     document.write("Sorry " + user + " is not available")
// }

//Task 15
// var pass = prompt("Please enter your password")
// var check;
// var numberSomewhere = false;
// var alphabetShomewhere = false;
// while (pass.length<6 || (pass.charCodeAt(0)>=48 && pass.charCodeAt(0)<=57) && numberSomewhere==false && alphabetShomewhere==false){
//     pass = prompt("Please enter a valid password")
//     for (var i =0; i<pass.length;i++) {
//         if (pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57) {
//             numberSomewhere=true
//         }
//     }
//     for (var i =0; i<pass.length;i++) {
//         if ((pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90) || (pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=122)) {
//             alphabetShomewhere=true
//         }
//     }
// }
// document.write("Password is valid")

//Task 16
// var university = "University of Karachi";
// var splitArray = university.split(" ")
// for (var i = 0; i<splitArray.length;i++) {
//     for (var j=0; j<splitArray[i].length; j++){
//         document.write(splitArray[i][j] + "</br>")
//     }
//     document.write("</br>")
// }

//Task 17
// var userInput = prompt("Please enter a string")
// document.write("User input: " + userInput + "</br>")
// document.write("Last character: " + userInput[userInput.length-1])

//Task 18
// var str = "The quick brown fox jumps over the lazy dog"
// document.write("Text: " + str + "</br>")
// str = str.toLowerCase()
// var check = "the"
// var counter = 0; 
// for (var i =0; i<str.length; i++){
//     if ((str[i]+str[i+1]+str[i+2])=="the"){
//         counter+=1
//     }
// }
// document.write("There are " + counter + " occurences of the word 'the")


// //Ch 26 - 30

// //Task 1
// var posInt = prompt("Please enter a positive integer")
// document.write("Number: " + posInt + "</br>")
// document.write("Round off value: " + Math.round(posInt) + "</br>")
// document.write("Ceil: " + Math.ceil(posInt) + "</br>")
// document.write("Floor: " + Math.floor(posInt) + "</br>")

// //Task 2
// var negFlt = prompt("Please enter a negative floating point number")
// document.write("Number: " + negFlt + "</br>")
// document.write("Round off value: " + Math.round(negFlt) + "</br>")
// document.write("Ceil: " + Math.ceil(negFlt) + "</br>")
// document.write("Floor: " + Math.floor(negFlt) + "</br>")

// //Task 3
// var num = prompt("Please enter a number")
// document.write("Absolute value of the number is: " + Math.abs(num))

// //Task 4
// document.write("The dice threw: " + Math.floor(Math.random()*6+1))

// //Task 5
// var num = Math.floor(Math.random()*2+1)
// if (num==1){
//     document.write("Heads")
// }
// else {
//     document.write("Tails")
// }

// //Task 6
// document.write("Random number between 1 and 100: " + Math.floor(Math.random()*100+1))

// //Task 7
// var weight = prompt("Please enter your weight")
// document.write("The weight is " + parseFloat(weight) + " kilograms")

// //Task 8
// var secretNumber = Math.floor(Math.random()*10+1)
// var userInput;
// while (userInput!=secretNumber) {
//     userInput=prompt("Please enter a number between 1 and 100")
// }
// document.write("Congratulations you guessed the secret number")


// //Ch 31 - 34

// //Task 1
// document.write(new Date())

// //Task 2
// var dateNow = new Date()
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// document.write("The month is: " + months[dateNow.getMonth()])

// //Task 3
// var dateNow = new Date()
// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// document.write("Today is " + days[dateNow.getDay()])

// //Task 4
// var dateNow = new Date()
// if (dateNow.getDate()==0 || dateNow.getDay()==6){
//     document.write("It's Fun day")
// }
// else {
//     document.write("It's a weekday")
// }

// //Task 5
// var dateNow = new Date()
// if (dateNow.getDate()<16) {
//     document.write("First fifteen days of the month")
// }
// else {
//     document.write("Last days of the month")
// }

// //Task 6
// var dateNow = new Date()
// document.write("Current Date: " + dateNow + "</br>")
// document.write("Elapsed milliseconds since January 1, 1970: " + dateNow.getTime() + "</br>")
// document.write("Elapsed minutes since January 1, 1970: " + dateNow.getTime()/1000/60 + "</br>")

// //Task 7
// var dateNow = new Date()
// if (dateNow.getHours()<12) {
//     document.write("It's AM")
// }
// else {
//     document.write("It's PM")
// }

// //Task 8
// var laterDate = new Date("December 31, 2020")
// document.write("Last day of the year is: " + laterDate)

// //Task 9
// var firstRamzan = new Date("April 24, 2020")
// var milliSecondsPassed = Date.now() - firstRamzan
// document.write("Days passed since first Ramzan: " + Math.ceil(milliSecondsPassed/1000/60/60/24)) 

// //Task 10
// var begining2020 = new Date("January 01, 2020")
// var referenceDate = new Date("June 01, 2020")
// document.write("On " + referenceDate + " " + ((referenceDate-begining2020)/1000/60/60/24) + " days have passed since " + begining2020)

// //Task 11
// var currentDate = new Date()
// document.write("Current date: " + new Date(currentDate.setHours(currentDate.getHours()+1)) + "</br>" + "One our ago it was: " + new Date(currentDate.setHours(currentDate.getHours()-1)))

// //Task 12
// var currentDate = new Date()
// var hundredBack = new Date(currentDate.setFullYear(currentDate.getFullYear()-100))
// document. write("Current date: " + new Date(Date.now()) + "</br>" +  "100 years back the date was: " + hundredBack)

// //Task 13
// var age = prompt("Please enter your age")
// var currentDate = new Date()
// document.write("Your bith year is: " + (currentDate.getFullYear()-age))

// //Task 14
// var customerName = prompt("Please enter customer name")
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var currentMonth = months[new Date().getMonth()]
// var numberOfUnits = parseFloat(prompt("Please enter number of units"))
// var chargesPerUnit = parseFloat(prompt("Please enter charges per unit"))
// var netAmountPayable = parseFloat(numberOfUnits*chargesPerUnit)
// var latePaymentSurcharge = parseFloat(prompt("Please enter the late payment surcharge"))
// var grossAmountPayable = parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)

// document.write("K-Electric Bill </br>")
// document.write("Customer Name: " + customerName + "</br>")
// document.write("Current month: " + currentMonth + "</br>")
// document.write("Number of units: " + numberOfUnits.toFixed(2) + "</br>")
// document.write("Charges per unit: " + chargesPerUnit.toFixed(2) + "</br>")
// document.write("Net amount payable: " + netAmountPayable.toFixed(2) + "</br>")
// document.write("Late payment surcharge:" + latePaymentSurcharge.toFixed(2) + "</br>")
// document.write("Gross amount payable: " + grossAmountPayable.toFixed(2) + "</br>")


// //Ch 35-38

// //Task 1
// function displayTime() {
//     document.write(new Date())
// }
// displayTime()

// //Task 2
// function greetUser(fname,lname) {
//     document.write("Hello " + fname + " " + lname)
// }
// var firstName = prompt("Please enter your first name")
// var lastName = prompt("Please enter your last name")
// greetUser(firstName,lastName)

// //Task 3
// function addNumbers(first,second) {
//     document.write("The sum is " + (first + second))
// }
// var firstNumber = parseFloat(prompt("Please enter your first number"))
// var lastNumber = parseFloat(prompt("Please enter your last number"))
// addNumbers(firstNumber,lastNumber)

// //Task 4
// function mathsFunction(num1,num2,op) {
//     if (op=="+"){
//         return (num1+num2)
//     }
//     if (op=="-"){
//         return(num1-num2)
//     }
//     if (op=="*"){
//         return(num1*num2)
//     }
//     if (op=="/"){
//         return(num1/num2)
//     }
//     if (op=="%"){
//         return(num1%num2)
//     }
//     else {
//         return("Please enter a correct operator")
//     }
// }
// var num1 = parseFloat(prompt("Please enter the first number"))
// var num2 = parseFloat(prompt("Please enter the second number"))
// var operator = prompt("what operation do you want to perform")
// document.write("The result is: " + mathsFunction(num1,num2,operator))

// //Task 5
// function square(x) {
//     return(x*x)
// }
// var input = parseFloat(prompt("Please enter a number"))
// document.write("The square of " + input + " is " + square(input))

// //Task 6
// function factorial(x) {
//     for (i=x-1;i>0;i--) {
//         x*=i
//         document.write(x + "</br>")
//     }
//     return x
// }
// var input = parseFloat(prompt("Please enter a number"))
// document.write("The factorial of " + input + " is " + factorial(input))

// //Task 7
// function count(start,end) {
//     for (i=start;i<=end;i++) {
//         document.write(i + "</br>")
//     }
// }
// var start = parseFloat(prompt("Please enter starting number"))
// var end = parseFloat(prompt("Please enter ending number"))
// count(start,end)

// //Task 8
// function hypotenuse(b,p) {
//     function square() {
//         var b2 = b*b
//         var p2 = p*p
//         return [b2, p2]
//     }
//     square(b,p)
//     var h = Math.sqrt(square()[0]+square()[1])
//     return h
// }
// var perpendicular = parseFloat(prompt("Please enter a value for perpendicular"))
// var base = parseFloat(prompt("Please enter a value for base"))
// document.write("The hypotenuse is: " + hypotenuse(perpendicular,base))

// //Task 9
// function area(w,h) {
//     return w*h
// }
// var width = 5 
// var height = 8
// document.write("Area from values: " + area(9, 6))
// document.write("</br>")
// document.write("Area from variables: " + area(width, height))

// //Task 10
// function checkPalindrome(word){
//     var palindrome = true 
// for (i=0;i<=word.length;i++) {
//     if (word[i]!=word[word.length-i-1]){
//         palindrome=false
//     }
// }
// if (palindrome==false) {
//     document.write("The word is not a palindrome")
// }
// else {
//     document.write("The word is a palindrome")
// }
// }
// var word = prompt("Please enter a word to check if it's a palindrome")
// checkPalindrome(word)

// //Task 11
// function occurenceCheck(s,w) {
//     var str = s.toLowerCase()
//     var check = w
//     var counter = 0; 
//     for (var i =0; i<str.length; i++){
//         if ((str[i]+str[i+1]+str[i+2])==check){
//             counter+=1
//         }
//     }
//     document.write("Text: " + str + "</br>")
//     document.write("There are " + counter + " occurences of the word '" + check+"'")
// }
// var str = prompt("Please enter a string")
// var word = prompt("Please enter the word to check occurences of")
// occurenceCheck(str,word)

// //Task 12
// function longestWord(str) {
//     var stringArray=str.split(" ")
//     var longestWord=""
//     stringArray.map((val,index)=>{
//         if(val.length>longestWord.length){
//             longestWord=val
//         }
//     })
//     return longestWord
// }
// var stringToCheck = prompt("Please enter a string to get its longest word")
// document.write("The longest word in the given string is: " + longestWord(stringToCheck))

// //Task 13
// function occurenceCheck(s,l) {
//     var str = s.toLowerCase()
//     var check = l
//     var counter = 0; 
//     for (var i =0; i<str.length; i++){
//         if (str[i]==check){
//             counter+=1
//         }
//     }
//     document.write("Text: " + str + "</br>")
//     document.write("There are " + counter + " occurences of the letter '" + check+"'")
// }
// var str = prompt("Please enter a string")
// var letter = prompt("Please enter the letter to check occurences of")
// occurenceCheck(str,letter)

//Task 14
function calcCircumference(r) {
    document.write("The circumference is " + (2*Math.PI*r).toFixed(2))
    document.write("</br>")
}
function calcArea(r){
    document.write("The area is " + (Math.PI*r*r).toFixed(2))
    document.write("</br>")
}
var radius = parseFloat(prompt("Please enter the radius of the circle"))
calcCircumference(radius)
calcArea(radius)
