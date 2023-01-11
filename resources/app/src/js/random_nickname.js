//랜덤의 한글 2글자 생성 함수
function random_hangul() {
  return String.fromCharCode( 44031 + Math.ceil( 11172 * Math.random() ) );
}

//리스트 지우기 함수
function deleteList() {
  $("#random_nickname_list").empty();
} 

//자동 스크롤
const log = document.getElementById("random_nickname_list");

log.isScrollBottom = true;

log.addEventListener("scroll", (event) => {
  if (event.target.scrollHeight - event.target.scrollTop == event.target.clientHeight) {
    log.isScrollBottom = true;
  } else {
    log.isScrollBottom = false;
  }
});

//버튼 활성화/비활성화 선택
const btn_endisable = document.getElementById('auto_create');

let pTagCount = 1;

function create_pTag(){
  let tagArea = document.getElementById('random_nickname_list');
  let new_pTag = document.createElement('p');
  
  new_pTag.setAttribute('class', 'pTag');
  var s = '';
  for( var j=0; j<2; j++ ) s += random_hangul();
  new_pTag.innerHTML = s;
  
  tagArea.appendChild(new_pTag);
  
  pTagCount++;
  
  if (log.isScrollBottom == false) {
    log.scrollTop = log.scrollHeight;
  }
}

function create_pTag10(){
  for (var i=0; i<10; i++) {
    create_pTag();
}
}

//타이머
let timer;

function create_pTag_1sec(){
  timer = setInterval(create_pTag, 1000);
  btn_endisable.innerText = '자동 생성 중...';
  btn_endisable.disabled = true;
}

function stop_create_PTag_1sec(){
  clearInterval(timer);
  btn_endisable.innerText = '1초마다 생성!';
  btn_endisable.disabled = false;
}