var cl = console.log;
//alert("Hello js");

//1  How many characters are in the string "JavaScript"?
let str1 = "JavaScript";
let result1 = str1.length;
info1 = document.getElementById("info1").innerHTML = result1;
cl(result1);

/// 2 What letter is at position 4 in "OpenAI"?
let str2 = "OpenAI";
let result2 = str2.charAt(3);
info2 = document.getElementById("info2").innerHTML = result2;
cl(result2)

 //3 Does "Hello world" begin with "Hello"?
let str3 = "Hello";
let result3 = str3.startsWith("Hello");
info3 = document.getElementById("info3").innerHTML = result3;
cl(result3);

 
// 4 Convert the string "hello" entirely to uppercase letters. What is the result?
let str4 = "hello";
let result4 = str4.toUpperCase("hello");
info4 = document.getElementById("info4").innerHTML = result4;
cl(result4);


  //5  Remove any spaces before or after " Hello ". What remains?
let str5 = " Hello ";
let result5 = str5.trim(" Hello ");
info5 = document.getElementById("info5").innerHTML = result5;
cl(result5);
  
  // 6 Find the position of the first "a" in "banana". What is the index?
  
let str6 = "a";
let result6 = str6.indexOf("a");
info6 = document.getElementById("info6").innerHTML = result6;
cl(result6);
  
  
  // 7 Check if "JavaScript" contains the word "Script". Is it true or false?
  
let str7 = "JavaScript" ;
let result7 = str7.includes("Script");
info7 = document.getElementById("info7").innerHTML = result7;
cl(result7);


 // 8 Repeat the word "repeat" three times in a row without spaces. What do you get?
  
let str8 = "repeat" ;
let result8 = str8.repeat(3);
info8 = document.getElementById("info8").innerHTML = result8;
cl(result8);
  
  
 // 9 What letter is at the third position in "apple"?
  
let str9 = "apple" ;
let result9 = str9.charAt(2);
info9 = document.getElementById("info9").innerHTML = result9;
cl(result9);
  
  
  
  
  //10  Change all letters in "Bat" to lowercase. What is the output?
 let str10 = "Bat" ;
let result10 = str10.toLowerCase("Bat");
info10= document.getElementById("info10").innerHTML = result10;
cl(result10);
  
  
  
   // 11 Break "apple,banana,grape" into parts wherever there is a comma. What array do you get?
   
  let str11 = "apple,banana,grape" ;
let result11 = str11.split(",");
info11= document.getElementById("info11").innerHTML = result11;
cl(result11);
   
   
   // 12 Remove spaces from either end of " JavaScript " and then change all letters to lowercase.
// What is the result?
 let str12 = " JavaScript ";
let result12 = str12.trimEnd(" JavaScript ").toLowerCase("JavaScript");
info12= document.getElementById("info12").innerHTML = result12;
cl(result12);


 // 13 Find where "ss" first appears in "Mississippi". What is the position?
 let str13 = "Mississippi";
let result13 = str13.indexOf("ss");
info13= document.getElementById("info13").innerHTML = result13;
cl(result13);
 
 
  // 14 Extract letters from position 3 up to but not including position 6 in "Programming". Which letters?
 let str14 = "Programming";
let result14 = str14.slice(3,6);
info14= document.getElementById("info14").innerHTML = result14;
cl(result14);
   
   
   // Does "hello world" begin with "wor"? Answer true or false.
 let str15 = "hello world";
let result15 = str15.startsWith("wor");
info15 = document.getElementById("info15").innerHTML = result15;
cl(result15);
   
   
   
   // 16 What is the last letter in "ChatGPT"?
 let str16 = "ChatGPT";
let result16 = str16.charAt(6);
info16 = document.getElementById("info16").innerHTML = result16;
cl(result16);



   // 17 Replace "World" with "JavaScript" in "Hello World". What does the sentence become?
 let str17 = "Hello World";
let result17 = str17.replace("World", "JavaScript");
info17 = document.getElementById("info17").innerHTML = result17;
cl(result17);
  
  
  
  //18 Add zeroes to the start of "12345" until the string is 8 characters long. What is the resulting string?
let str18 = "12345";
let result18 = str18.padStart(8,0);
info18 = document.getElementById("info18").innerHTML = result18;
cl(result18);

// What is the numerical character code of the first letter in "javaScript is fun"?
let str19 = "javaScript is fun";
let result19 = str19.charCodeAt(0);
info19 = document.getElementById("info19").innerHTML = result19;
cl(result19);


// Extract the letters starting from position 1 up to position 3 in "OpenAI". Which letters?
 let str20 = "OpenAI";
let result20 = str20.slice(1,4);
info20 = document.getElementById("info20").innerHTML = result20;
cl(result20);
   
// Split "Sun-Mon-Tue" at the dashes, then choose the second item in the list. What is it?
 let str21 = "Sun-Mon-Tue";
let result21 = str21.split("-")[1];
info21 = document.getElementById("info21").innerHTML = result21;
cl(result21);
   
 
 
 // Count how many words there are in "Hello from the other side" when splitting by spaces.
// How many?
let str22 = "Hello from the other side";
let result22 = str22.split(" ").length;
info22 = document.getElementById("info22").innerHTML = result22;
cl(result22);


// Remove spaces before and after " test string " and measure how long the result is. What length?
 let str23 = " test string ";
let result23 = str23.trim(" test string ").length;
info23 = document.getElementById("info23").innerHTML = result23;
cl(result23);

 
 
 // Find the last position of the letter "a" in "banana". What is it?
 let str24 = "banana";
let result24 = str24.lastIndexOf("a");
info24 = document.getElementById("info24").innerHTML = result24;
cl(result24);

 
// Does "abc123" include the exact substring "ABC"? Yes or no?
let str25 = "abc123";
let result25 = str24.includes("ABC");
info25 = document.getElementById("info25").innerHTML = result25;
cl(result25);


// Extract the letters between position 2 and 4 in the string "abcdef". Which letters?
let str26 = "abcdef";
let result26 = str26.slice(2,4);
info26 = document.getElementById("info26").innerHTML = result26;
cl(result26);


// Change all spaces in "a b c" to underscores. What does the string become?
let str27 = "a b c";
let result27 = str27.split(' ').join("_");
info27 = document.getElementById("info27").innerHTML = result27;
cl(result27);

   
   
   
 // Change all letters in "Amazing!" to lowercase. What is the output?
 let str28 = "Amazing!";
let result28 = str28.toLowerCase("Amazing!");
info28 = document.getElementById("info28").innerHTML = result28;
cl(result28);

 
 // Break "foo|bar|baz" apart at the vertical bars. How many parts do you get?
 let str29 = "foo|bar|baz";
let result29 = str29.split("|").length;
info29 = document.getElementById("info29").innerHTML = result29;
cl(result29);


   // Join "Hello", " " and "World" together into one string. What is it?
let str30 = "";
let result30 = str30.concat("Hello"," ", "World");
info30 = document.getElementById("info30").innerHTML = result30;
cl(result30);
   
   
   // Change "quick" to "slow" within the string "quick brown fox". What is the new string?
 let str31 = "quick brown fox";
let result31 = str31.replace("quick","slow");
info31 = document.getElementById("info31").innerHTML = result31;
cl(result31);
   
   
   // Find how many times the letter "a" occurs in "abracadabra". How many times?
 let str32 = "abracadabra";
let result32 = str32.split("a").length-1;
info32 = document.getElementById("info32").innerHTML = result32;
cl(result32);
   
   
   // Add stars to "Cat" to increase its length to 5 characters total. What does it look like?
   
 let str33 = "Cat";
let result33 = str33.padStart(5, "*");
info33 = document.getElementById("info33").innerHTML = result33;
cl(result33);
   
   // Count the total number of letters in "supercalifragilisticexpialidocious". What number?
 let str34 = "supercalifragilisticexpialidocious";
let result34 = str34.length;
info34 = document.getElementById("info34").innerHTML = result34;
cl(result34);
   
   // Find the middle letter in "abcde". Which one?
let str35 = "abcde";
let middleIndex = Math.floor (str35.length/2);
let result35 = str35[middleIndex];
info35 = document.getElementById("info35").innerHTML = result35;
cl(result35);


// Does "Mocha" end with "cha"? Answer true or false.
let str36 = "Mocha";
let result36 = str36.endsWith("cha");
info36 = document.getElementById("info36").innerHTML = result36;
cl(result36);

   // Take the last two characters from "2021 12 31". What are these?
let str37 = "2021 12 31";
let result37 = str37.split(" ").pop();
info37 = document.getElementById("info37").innerHTML = result37;
cl(result37);
   
   // What is the length of an empty string ""?
   
let str38 = "";
let result38 = str38.length;
info38 = document.getElementById("info38").innerHTML = result38;
cl(result38);
   
  // Remove spaces only from the start of the string " spaced ". What remains?
 let str39 = " spaced ";
let result39 = str39.trimStart(" spaced ") ;
info39 = document.getElementById("info39").innerHTML = result39;
cl(result39);

  // In the string "appleapple", what letter is at position 3?
 let str40 = "appleapple";
let result40 = str40.charAt(3) ;
info40 = document.getElementById("info40").innerHTML = result40;
cl(result40);
   
   // Find how many "a" characters are in "abracadabra". Number?
 let str41 = "abracadabra";
let result41 = str41.split("a").length-1 ;
info41 = document.getElementById("info41").innerHTML = result41;
cl(result41);
   
   
   // Convert "Lörem Ïpsum" to a form that separates letters and accents. How might it look?
 let str42 = "Lörem Ïpsum";
let result42 = str42.split(",");
info42 = document.getElementById("info42").innerHTML = result42;
cl(result42);
   

  // Replace number sequences in "hello123bye" with a "#". What is the result?
  let str43 = "hello123bye";
let result43 = str43.replace("123", "#");
info43 = document.getElementById("info43").innerHTML = result43;
cl(result43);


  // What is the code number for the emoji at the start of "😀face"?
let smile = "😀face";
let result44 = smile.codePointAt(0);
info44 = document.getElementById("info44").innerHTML = result44;
cl(result44);
  
//Simplify "one two two three three three" by removing consecutive duplicate words. Result?
// let smile = "😀face";
// let result44 = smile.codePointAt(0);
// info44 = document.getElementById("info44").innerHTML = result44;
// cl(result44);
   
   // What is the length after trimming spaces and non-breaking spaces in " \u00A0Hi\u00A0 "?
let str45  = " \u00A0Hi\u00A0 ";
let result45 = str45.trim(" \u00A0Hi\u00A0 ").length;
info45 = document.getElementById("info45").innerHTML = result45;
cl(result45);
   
   // Convert "Café" to English letters only by removing accents. Result?
 let str46  = "Café";
let result46 = str46.trim("Café");
info46 = document.getElementById("info46").innerHTML = result46;
cl(result46);
   
   
// Replace all forms of "the" with "a" in "The cat sat on the mat". Result?
let str47  = "The cat sat on the mat";
let result47 = str47.replace("The" , "the").replace("the", "a");
info47 = document.getElementById("info47").innerHTML = result47;
cl(result47);
   
// Separate "foo,bar,baz" at commas. What list results?
let str48  = "foo,bar,baz";
let result48 = str48.split(",");
info48 = document.getElementById("info48").innerHTML = result48;
cl(result48);

// Take the last 3 letters of "OpenAI". What are they?
let str49  = "OpenAI";
let result49 = str49.slice(3, 6);
info49 = document.getElementById("info49").innerHTML = result49;
cl(result49);

// Reverse the parts in "a-b-c-d" separated by dashes and join them with underscores.
// Result?
let str50  = "a-b-c-d";
let result50 =str50.split("-").reverse().join("_");
info50 = document.getElementById("info50").innerHTML = result50;
cl(result50);

// Reverse the letters of "abba". What is the result?
let str51  = "abba";
let result51 =str51.split("-").reverse().join("_");
info51 = document.getElementById("info51").innerHTML = result51;
cl(result51);

// Remove commas from "12,345.67". What remains?
let str52  = "12,345.67";
let result52 =str52.split("");
info52 = document.getElementById("info52").innerHTML = result52;
cl(result52);


 // Add 'x' characters to the start of " string " to reach a length of 12. What is the new string?

let str53  = " string ";
let result53 =str53.trim(" string ").padStart(12, "x");
info53 = document.getElementById("info53").innerHTML = result53;
cl(result53);

// How many letters are in "🚀Rocket" including the rocket emoji?
let str54 = "🚀Rocket" ;
let result54 =str54.length;           
info54 = document.getElementById("info54").innerHTML = result54;
cl(result54);

   // Repeat the word "repeat" zero times. What is the output?
let str55 = "repeat" ;
let result55 =str55.repeat(0);           
info55 = document.getElementById("info55").innerHTML = result55;
cl(result55);
   
   
   // Replace all digits in "abc123" with stars. Result?
 let str56 = "abc123" ;
let result56 =str56.replace("123", "***");           
info56 = document.getElementById("info56").innerHTML = result56;
cl(result56);
   
   // Replace every "ba" substring in "foobarbaz" with "**". Result?
   let str57 = "foobarbaz" ;
let result57=str57.replace("ba", "**");           
info57 = document.getElementById("info57").innerHTML = result57;
cl(result57);


 // Remove all uppercase letters from "UPPER lower". What remains?
let str58 = "UPPER lower" ;
let result58 =str58.slice(6, 11);           
info58 = document.getElementById("info58").innerHTML = result58;
cl(result58);


// Extract from "wisdom" starting at letter 3 up to the second last letter. What is the result?
let str59 = "wisdom" ;
let result59 =str59.slice(2, -1);
info59 = document.getElementById("info59").innerHTML = result59;
cl(result59);

// Decide if a string contains emoji characters. Expected output: true or false depending on input.
// let str60 = "wisdom" ;
// let result60 =str60.substring(2, 5);
// info59 = document.getElementById("info59").innerHTML = result59;
// cl(result59);
 // Standardize different representations of a stringʼs letters and accents consistently. Output: normalized string.
  // let str60 = "wisdom" ;
// let result60 =str60.normalize("NFC");
// info60 = document.getElementById("info60").innerHTML = result60;
// cl(result60);
   
   // Change "hello world" to capitalized words with smaller words in lowercase. Result:
 // let str60 = "hello world";
// let result60 =str60.split(" ");
//info60 = document.getElementById("info60").innerHTML = result60;
// cl(result60);


 // Explain the difference when extracting parts of a string using negative numbers and how they are treated. Result: Negative numbers count from the end in one case but are treated as zero in another.
 let str60  = "JavaScript";
 let result60 =str60.slice(-6);//Script;
 //let result60 = str60.slice(0, -6)//Java
 //let result60 =str60.substring(-6);//JavaScript;
// let result60 = str60.substring(0, -6)//(0, 0)
info60 = document.getElementById("info60").innerHTML = result60;
cl(result60);
// Remove all HTML tags like <p>, <b> from a string to keep text only. Output example: "Hello world"
// How do you make special characters safe for use in searching patterns? Output: the characters preceded by escape marks.

//Count how many tixmes each letter appears in "hello". Output: {h:1, e:1, l:2, o:1 
let str61 = "hello";
let counts = {};

for (let ch of str61) {
  counts[ch] = (counts[ch] || 0) + 1;
}
info61 = document.getElementById("info61").innerHTML = counts;
cl(counts);


//Remove spaces around text but keep any emoji intact like " 😀 smile ". Output: "😀 smile"

let str62 = " 😀smile " ;
let result62 = str62.trim();           
info62 = document.getElementById("info62").innerHTML = result62;
cl(result62);

/// 64 Reverse the order of words in "hello world today" but keep each wordʼs letters in order.
///Output: "today world hello"
let str64 = "hello world today" ;
let result64 = str64.split("").reverse().join('');           
info64 = document.getElementById("info64").innerHTML = result64;
cl(result64);

//Decide if a string contains emoji characters. Expected output: true or false depending on input.
let str65 = "😀face";
let result65 = str65.includes("😀");
info65 =document.getElementById("info65").innerHTML = result65;
cl(result65)