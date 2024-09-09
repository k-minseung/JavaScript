// document 객체를 대상으로 하는 이벤트 리스너를 추가한다.
//이벤트의 종류는 DOMContentLoaded이다.
// DOMContentLoaded : 문서의 콘텐츠 로딩이 완료되었음을 의미하는 이벤트
document.addEventListener('DOMContentLoaded',

    //html 코드가 로딩된 다음 처리할 작업
    function (e) {
        //input태그를 찾아 button변수에 저장
        let button = document.querySelectorAll('input')
        //button변수에 이벤트리스너 s추가
        //이벤트 종류는 'input'

        button[0].addEventListener('input',
            function (e) {
                //콘솔에 입력창의 값을 출력
                console.log(e.target.value);
            });

        button[1].addEventListener('input',
            function (e) {
                //콘솔에 입력창의 값을 출력
                console.log(e.target.value);
            });
    })

// p태그에서 인라인 이벤트 모델로 호출할 함수를 정의한다.

// 함수의 이름은 h1
// alert()씌워 hi이라는 글자를 출력
function hi() {
    alert("hi");
}






