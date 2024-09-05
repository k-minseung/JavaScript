// 산술연산자
let l1=10;
let l2=7;
console.log(l1+l2);
console.log(l1-l2);
console.log(l1*l2);
console.log(l1/l2);
console.log(l1%l2);

// 대입연산자
// 데이터를 변수에 저장할 때 사용
let A = 3;
let B = A;
console.log('B : '+B);

// 복합대입연산자
// A += B	A = A + B
// A *= B	A = A * B
// A /= B	A = A / B
// A %= B	A = A % B

// 증감연산자
// 증가연산자(++) - 숫자형 데이터를 1씩 증가
//  ++변수; 또는 변수++;
// 감소연산자(--) - 숫자형 데이터를 1씩 감소
//  변수--; 또는 --변수; 
var a=5;
var b = ++a;
console.log(b);
var b = a++;
console.log(b);

// 비교연산자
// >, <, >=, <=, ==, != 
var a =10;
var b = 5;
console.log(a>b);
//같다를 비교할 때
console.log('== : ' + (10 == '10')); // == 은 값이 일치하면 true
console.log('=== : ' + (10 === '10')); // === 은 값과 데이터 타입이 일치할 때 true
//같지않다를 비교할 때
console.log('!= : ' + (10 != '10')); 
console.log('!== : ' + (10 !== '10')); 

// 논리연산자
// && || !
console.log(true&&false);
console.log(true||false);
console.log(!true);

