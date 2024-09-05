// 타입캐스팅
// 데이터 타입의 종류를 바꾸는 행위
// String()
console.log(String(3)+1);
// Number()
console.log(Number(3)+1);
console.log(Number(false));
console.log(Number('abc'));  // nan = Not a  Number
// Boolean()
console.log(Boolean(0))
console.log(Boolean(1)) // 1보다 크면 true 로 반환
console.log(Boolean(NaN))
console.log(Boolean('asv')) // 문자열을 넣어도 true로 반환
console.log(Boolean('false')) //false 같지만 문자열이므로 true


// 인덱싱과 슬라이싱
// index : 0부터 순차적으로 증가하는 정수값
// 인덱싱은 데이터를 분석하여 우리가 원하는 순서에 위치한 데이터를 뽑는것
console.log("abcde"[2]);
console.log('abcde'[5]);

// slice 슬라이스
// 여러개의 값으로 자르고 싶다면 slice 메서드를 이용한다.
console.log('abcdefgh'.slice(3,5)); // 3번쨰 자리부터 5번째 자리 전까지의 값만 반환