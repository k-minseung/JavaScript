// 조건문
// 조건에 따라 컴퓨터가 어떻게 행동해야 하는지 명령을 결정하는 문법

// 자바에서 조건식에 넣었던 것 
// 비교연산자, 논리 연산자
// js는 0, null,'',undefined->모두 false 로 인식 , 그 이외의 값은 true로 인식
// if(조건식){
//     수행할 명령
// }

if(3){ //1이상의 데이터는 true 반환
    console.log('실행문출력')
}


// if(조건식){
//     수행할 명령
// } else{
//     수행할 명령
// }

// if(조건식){
//     수행할 명령
// } else if{
//     수행할 명령
// } else{
//     수행할 명령
// }

// switch 문
// 여러 케이스 중 하나를 선택
var a =3 ;
var String;
switch(a){
    case 1:
        String = '1선택'
        break;
    case 2:
        String = '2선택'
        break;
    case 3:
        String = '3선택'
        break;
}
console.log(String)

















