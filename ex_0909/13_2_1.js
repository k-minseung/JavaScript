document.addEventListener("DOMContentLoaded", function(e){
    let button = document.querySelector('input')
    let p = document.querySelector('p')

    //button을 클릭했을 때
    button.addEventListener('click',function(e){
        //p태그의 들어있는 내용을 수정
        //textContent : 태그에 들어있는 Content의 내용을 반환하는구나
        p.textContent = "Js로 입력함"
    })
})