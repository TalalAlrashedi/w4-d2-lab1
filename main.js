let even = 25;

for (let i = 0; i <= even; i++) {
  if (i % 2 === 0) {
    console.log(`it's even ${i}`);
    console.log("--------------------------");
  }
}

// • باستعمال for loop  احسب تربيع الاعداد من 1 - 10.

for (let i = 1; i <= 10; i++) {
  let squareNum = i * i;
  console.log(`${squareNum}`);
}
console.log("--------------------------");

// • باستعمال loop قم بطباعة الاعداد الفردية من 1 - 20 .

let oddNum = 20;

for (let i = 1; i <= oddNum; i++) {
  if (i % 2 !== 0) {
    console.log(`it's odd ${i}`);
  }
}
console.log("--------------------------");

let n = 10;
let a = 0;
let b = 1;

for (let i = 0; i < n; i++) {
  let total = a + b;
  console.log(total);
  a = b;
  b = total;
}

console.log("--------------------------");

for (let i = 1; i <= 10; i++) {
  let squareNum2 = i * i;
  console.log(squareNum2);
}

console.log("--------------------------");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 10; j++) {
    let multyNum = i * j;
    console.log(`${i} × ${j} = ${multyNum}`);
  }
}
