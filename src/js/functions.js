//리스트 지우기 함수
function deleteList() {
	$("#random_nickname_list").empty();
}

//버튼 활성화/비활성화 선택
const btn_endisable = document.getElementById("auto_create");
const btn_stop_endisable = document.getElementById("stop_create");

//사이트 전환
//변수 지정
const iframe_id = document.getElementById("iframes");
//리그오브레전드
function lol_opgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://www.op.gg/?hl=ko_KR";
	}
	else if(localStorage.getItem('language') == 'en') {
		iframe_id.src = "https://www.op.gg/?hl=en_US";
	}
	else if(localStorage.getItem('language') == 'ja') {
		iframe_id.src = "https://www.op.gg/?hl=ja_JP";
	}
	else if(localStorage.getItem('language') == 'zh_CN') {
		iframe_id.src = "https://www.op.gg/?hl=zh_CN";
	}
	else if(localStorage.getItem('language') == 'zh_TW') {
		iframe_id.src = "https://www.op.gg/?hl=zh_TW";
	}
}

function lol_dakgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://poro.gg/?hl=ko-KR";
	}
	else {
		iframe_id.src = "https://poro.gg/?hl=en-US";
	}
}

function lol() {
	if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 1) {
		lol_opgg_lang();
	}
	else if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 1) {
		lol_dakgg_lang();
	}
}

//op.gg site
function lol_opgg() {
	lol_opgg_lang();
}

//dak.gg site
function lol_dakgg() {
	lol_dakgg_lang();
}

//전략적 팀 전투(롤토체스)
function tft_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://lolchess.gg/?hl=ko-KR";
	}
	else if(localStorage.getItem('language') == 'en') {
		iframe_id.src = "https://lolchess.gg/?hl=en-US";
	}
	else if(localStorage.getItem('language') == 'ja') {
		iframe_id.src = "https://lolchess.gg/?hl=ja-JP";
	}
	else {
		iframe_id.src = "https://lolchess.gg/?hl=en-US";
	}
}

function tft() {
	tft_lang();
}

//오버워치2
function ow2_opgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://overwatch.op.gg";
	}
	else {
		
		iframe_id.src = "https://overwatch.op.gg";
	}
}

function ow2() {
	if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 1) {
		ow2_opgg_lang();
	}
	else if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 1) {
		ow2_overbuff();
	}
}

function ow2_overbuff() {
	iframe_id.src = "https://www.overbuff.com";
}

//배틀그라운드
function pubg() {
	if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 1) {
		pubg_opgg();
	}
	else if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 2) {
		pubg_dakgg();
	}
}

//op.gg site
//language apply
function pubg_opgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "http://pubg.op.gg/?hl=ko_KR";
	}
	else if(localStorage.getItem('language') == 'en') {
		iframe_id.src = "http://pubg.op.gg/?hl=en_US";
	}
	else if(localStorage.getItem('language') == 'ja') {
		iframe_id.src = "http://pubg.op.gg/?hl=ja_JP";
	}
	else if(localStorage.getItem('language') == 'zh-CN' || localStorage.getItem('language') == 'zh-TW') {
		iframe_id.src = "http://pubg.op.gg/?hl=zh_CN";
	}
}

function pubg_dakgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://dak.gg/pubg?hl=ko-KR";
	}
	else if(localStorage.getItem('language') == 'en') {
		iframe_id.src = "https://dak.gg/pubg?hl=en-US";
	}
	else if(localStorage.getItem('language') == 'ja') {
		iframe_id.src = "https://dak.gg/pubg?hl=ja-JP";
	}
	else if(localStorage.getItem('language') == 'zh-CN') {
		iframe_id.src = "https://dak.gg/pubg?hl=zh-CN";
	}
	else if(localStorage.getItem('language') == 'zh-TW') {
		iframe_id.src = "https://dak.gg/pubg?hl=zh-TW";
	}
}

function pubg_opgg() {
	pubg_opgg_lang();
}

//dak.gg site
function pubg_dakgg() {
	pubg_dakgg_lang();
}

//발로란트
//apply language
function valorant_opgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://valorant.op.gg/?hl=ko";
	}
	else if(localStorage.getItem('language') == 'en') {
		iframe_id.src = "https://valorant.op.gg/?hl=en";
	}
	else if(localStorage.getItem('language') == 'ja') {
		iframe_id.src = "https://valorant.op.gg/?hl=ja-JP";
	}
	else {
		iframe_id.src = "https://valorant.op.gg/?hl=en-US";
	}
}

function valorant_dakgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://dak.gg/valorant";
	}
	else {
		iframe_id.src = "https://dak.gg/valorant/en";
	}
}

function valorant() {
	if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 1) {
		valorant_opgg_lang();
	}
	else if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 2) {
		valorant_dakgg_lang();
	}
}

//op.gg site
function valorant_opgg() {
	valorant_opgg_lang();
}

//dak.gg site
function valorant_dakgg() {
	valorant_dakgg_lang();
}

//메이플스토리
function maple() {
	iframe_id.src = "https://maple.gg";
}

//이터널 리턴
//apply language
function eternal_return_opgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://er.op.gg/?l=ko";
	}
	else {
		iframe_id.src = "https://er.op.gg/?l=en";
	}
}

function eternal_return_dakgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://dak.gg/er";
	}
	else {
		iframe_id.src = "https://dak.gg/er/en";
	}
}

function eternal_return() {
	if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 1) {
		eternal_return_opgg_lang();
	}
	else if(Math.floor( ( Math.random() * (3 - 1) + 1 ) ) == 2) {
		eternal_return_dakgg_lang();
	}
}

//op.gg site
function eternal_return_opgg() {
	eternal_return_opgg_lang();
}

//dak.gg site
function eternal_return_dakgg() {
	eternal_return_dakgg_lang();
}

//레전드 오브 룬테라
//apply language
function legends_of_runeterra_dakgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://dak.gg/lor/?hl=ko-KR";
	}
	else if(localStorage.getItem('language') == 'en') {
		iframe_id.src = "https://dak.gg/lor/?hl=en-US";
	}
	else if(localStorage.getItem('language') == 'ja') {
		iframe_id.src = "https://dak.gg/lor/?hl=ja-JP";
	}
	else if(localStorage.getItem('language') == 'zh-TW' || localStorage.getItem('language') == 'zh-CN') {
		iframe_id.src = "https://dak.gg/lor/?hl=zh-TW";
	}
}

function legends_of_runeterra() {
	legends_of_runeterra_dakgg_lang();
}

//에이펙스 레전드
//apply language
function apex_legends_dakgg_lang() {
	if(localStorage.getItem('language') == 'ko') {
		iframe_id.src = "https://dak.gg/apex?hl=ko-KR";
	}
	else if(localStorage.getItem('language') == 'en') {
		iframe_id.src = "https://dak.gg/apex?hl=en-US";
	}
	else if(localStorage.getItem('language') == 'ja') {
		iframe_id.src = "https://dak.gg/apex?hl=ja-JP";
	}
	else {
		iframe_id.src = "https://dak.gg/apex?hl=en-US";
	}
}

function apex_legends() {
	apex_legends_dakgg_lang();
}