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
}

function stop_create_PTag_1sec(){
  clearInterval(timer);
}