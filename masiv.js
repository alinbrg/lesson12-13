let array1 = [1,2,5.6,"hello","world",true];
for(let index in array1){
   console.log("ინდექსი - " + index + " მნიშვნელობა " + array1[index]);
}
// მასივის ელემენტების ინფორმაციას გამოიტანს

// მასივის ელემენტების სტრიქონულ ტიპად ჩაწერა, იმ შემთხვევაში თუ join - ს პარამეტრად არაფერს მივუთიტებთ, ელემენტები ერთმანეთისგან გამოიყოფიან მძიმით.
let array2 = [1,2,5.6,"hello","world",true];
console.log(array2.join()); // შედეგი : 1,2,5.6,hello,world,true  

// ხოლო თუ მივუთითებთ მაშინ ელემენტები გამოიყოფა მითითებული სიმბოლოთი:
var array3 = [1,2,5.6,"hello","world",true];
console.log(array3.join("|")); // შედეგი : 1|2|5.6|hello|world|true

// მასივს ალაგებს უკუთანმიმდევრობით (ახალ მასივს არ ქმნის):
var array4 = [1,2,5.6,"hello","world",true];
console.log(array4.reverse()); // შედეგი : true,world,hello,5.6,2,1

// მასივის ელემენტების ანბანის მიხედვით დალაგება (ახალ მასივს არ ქმნის). ციფრებსაც განიხილავს როგორც სტრიქონებს
var array5 = [100,111,22,222,5,"hello","world",true];
console.log(array5.sort()); // შედეგი : 100,111,22,222,5,hello,true,world

// მასივს ამატებს ელემენტებს ბოლოში.
var array6 = [100,111,22,222,5,"hello","world",true];
console.log(array6.concat("false","javascript")); // შედეგი : 100,111,22,222,5,hello,world,true,false,javascript

// მასივის ფრაგმენტის ამოღება, გადაეცემა ორი პარამეტრი: პირველი პარამეტრის მნიშვნელობის ინდექსიდან იწყებს ამოჭრას და მეორე პარამეტრის წინა ელემენტით ასრულებს, ანუ მეორე პარამეტრის ინდექსიანი ელემენტი არ შედის ამოჭრილ მასივში. თუ მხოლოდ ერთ პარამეტრს მივუთითებთ მაშინ ამოჭრის ამ პარამეტრიდან მასივის ბოლომდე. თუ უარყოფით მნიშვნელობებს მივუთითებთ პარამეტრად მაშინ ბოლოდან ამოჭრის .
var array7 = ["a","b","c","d","e","f"];
console.log(array7.slice(2,4)); // შედეგი : c,d
console.log(array7.slice(2)); // შედეგი : c,d,e,f
console.log(array7.slice(-2)); // შედეგი : e,f
console.log(array7.slice(-3,-2)); // შედეგი : d
console.log(array7)

// ეთითება მინიმუმ ორი ელემენტი. პირველი უჩვენებს თუ მასივის რომელი ელემენტიდან დაიწყოს ამოჭრა, ხოლო მეორე უჩვენებს საწყისი ელემენტიდან რამდენი შემდეგი ელემენტი უნდა ამოიჭრას. ამის შემდეგ კი ქმნის ახალ მასივს რომელშიც თავსდება ამოჭრილი ელემენტები.
var array8 = ["a","b","c","d","e","f"];
array8.splice(2,2);
console.log(array8); // შედეგი : a,b,e,f

// ახალი ელემენტების დამატება მასივის ბოლოში (ეს და ამის შემდეგ განხილული მეთოდებიც ცვლიან საწყის მასივს !!!) აბრუნებს ახალი მასივის სიგრძეს     Array.unshift()
var array9 = ["a","b","c","d","e","f"];
array9.push(1,2,3);
console.log(array9); // შედეგი : a,b,c,d,e,f,1,2,3

// მასივის ბოლო ელემენტის წაშლა (აბრუნებს წაშლილ ელემენტს)  Array.shift()
var array10 = ["a","b","c","d","e","f"];
array10.pop();
console.log(array10); // შედეგი : a,b,c,d,e

// მასივის კონკრეტული ელემენტის მნიშვნელობის წასაშლელად გამოიყენება delete
// var array11 = ["a","b","c","d","e","f"];
// delete.array11[2]   //?? doesnt work??
// console.log(array11); // შედეგი : a,b,,d,e,f,1,2
// ანუ თავად ელემენტი არ იშლება უბრალოდ მისი მნიშვნელობა ხდება undefined
// აქედან გამომდინარე არ იცვლება არც მასივის სიგრძე

// იმის გასაგებად ცვლადში მოქცეულია თუ არა მასივი გამოიყენება Array.isArray().
var array12 = ["a","b","c","d","e","f"];
var is = Array.isArray(array12);
console.log(is); // შედეგი true