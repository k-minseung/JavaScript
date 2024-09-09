document.addEventListener("DOMContentLoaded", function(e){
    let keydown = document.querySelector("#keydown");
    keydown.addEventListener("keydown",function(e){
        //key라는 키는 누른 버튼에 대한 정보를 가지고 있다
        console.log(e.key);
        //q를 눌렀을 때 this is Q 라는 경고창 띄우기
        if(e.key === "q"|| e.key ==="Q"){
            alert("This is Q")
        }
    })

    //change의 경우 내용이 변경되고 포커스가 벗어나면 적용
    let change = document.querySelector("#change");
    change.addEventListener("change",function(e){
        console.log(e.target.value);
    })

    let input = document.querySelector("#input");
    input.addEventListener("input",function(e){
        console.log(e.target.value);
    })
})