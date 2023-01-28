//선택한 테마 값 가져와 처리하기
function ThemehandleOnChange(e) {
    // 선택된 데이터 가져오기
    const value = e.value;
    
    // 선택된 데이터 저장하기
    if(value == "lightmode") {
        localStorage.setItem('darkmode', "lightmode");
        apply_alert();
    }
    else if(value == "darkmode") {
        localStorage.setItem('darkmode', "darkmode");
        apply_alert();
    }
    else if(value == "darkmode_black") {
        localStorage.setItem('darkmode', "darkmode_black");
        apply_alert();
    }
    else {
        localStorage.setItem('darkmode', "lightmode");
        apply_alert();
    }
}

//선택한 언어 값 가져와 처리하기
function LanguagehandleOnChange(e) {
    // 선택된 데이터 가져오기
    const value = e.value;
    
    // 선택된 데이터 저장하기
    if(value == "korean") {
        localStorage.setItem('language', "ko");
        localStorage.removeItem("first_run_warning_alert");
        apply_alert();
    }
    else if(value == "english") {
        localStorage.setItem('language', "en");
        localStorage.removeItem("first_run_warning_alert");
        apply_alert();
    }
    else if(value == "japanese") {
        localStorage.setItem('language', "ja");
        localStorage.removeItem("first_run_warning_alert");
        apply_alert();
    }
    else if(value == "chinese_simplified") {
        localStorage.setItem('language', "zh-CN");
        localStorage.removeItem("first_run_warning_alert");
        apply_alert();
    }
    else if(value == "chinese_traditional") {
        localStorage.setItem('language', "zh-TW");
        localStorage.removeItem("first_run_warning_alert");
        apply_alert();
    }
    else {
        localStorage.setItem('language', "en");
        localStorage.removeItem("first_run_warning_alert");
        apply_alert();
    }
}

//선택한 언어 값 가져와 처리하기
function CreateLanguagehandleOnChange(e) {
    // 선택된 데이터 가져오기
    const value = e.value;
    
    // 선택된 데이터 저장하기
    if(value == "hangul") {
        localStorage.setItem('create_lang', "hangul");
        apply_alert();
    }
    else if(value == "number") {
        localStorage.setItem('create_lang', "number");
        apply_alert();
    }
    else if(value == "alphabet_small") {
        localStorage.setItem('create_lang', "alphabet_small");
        apply_alert();
    }
    else if(value == "alphabet_big") {
        localStorage.setItem('create_lang', "alphabet_big");
        apply_alert();
    }
    else if(value == "alphabet_big_small") {
        localStorage.setItem('create_lang', "alphabet_big_small");
        apply_alert();
    }
    else if(value == "alphabet_number") {
        localStorage.setItem('create_lang', "alphabet_number");
        apply_alert();
    }
    else if(value == "alphabet_big_small_number") {
        localStorage.setItem('create_lang', "alphabet_big_small_number");
        apply_alert();
    }
    else if(value == "hiragana") {
        localStorage.setItem('create_lang', "hiragana");
        apply_alert();
    }
    else if(value == "katakana") {
        localStorage.setItem('create_lang', "katakana");
        apply_alert();
    }
    else if(value == "hiragana_katakana") {
        localStorage.setItem('create_lang', "hiragana_katakana");
        apply_alert();
    }
    else if(value == "hanja") {
        localStorage.setItem('create_lang', "hanja");
        apply_alert();
    }
    else if(value == "emoji") {
        localStorage.setItem('create_lang', "emoji");
        apply_alert();
    }
    else {
        localStorage.setItem('create_lang', "hangul");
        apply_alert();
    }
}

//선택한 언어 값 가져와 처리하기
function CreateNicknameCounthandleOnChange(e) {
    // 선택된 데이터 가져오기
    const value = e.value;
    
    // 선택된 데이터 저장하기
    if(value == "1") {
        localStorage.setItem('create_nickname_count', "1");
        apply_alert();
    }
    else if(value == "2") {
        localStorage.setItem('create_nickname_count', "2");
        apply_alert();
    }
    else if(value == "3") {
        localStorage.setItem('create_nickname_count', "3");
        apply_alert();
    }
	else if(value == "4") {
		localStorage.setItem('create_nickname_count', "4");
		apply_alert();
	}
	else if(value == "5") {
		localStorage.setItem('create_nickname_count', "5");
		apply_alert();
	}
	else if(value == "6") {
		localStorage.setItem('create_nickname_count', "6");
		apply_alert();
	}
	else if(value == "7") {
		localStorage.setItem('create_nickname_count', "7");
		apply_alert();
	}
	else if(value == "8") {
		localStorage.setItem('create_nickname_count', "8");
		apply_alert();
	}
	else if(value == "9") {
		localStorage.setItem('create_nickname_count', "9");
		apply_alert();
	}
	else if(value == "10") {
		localStorage.setItem('create_nickname_count', "10");
		apply_alert();
	}
	else if(value == "11") {
		localStorage.setItem('create_nickname_count', "11");
		apply_alert();
	}
	else if(value == "12") {
		localStorage.setItem('create_nickname_count', "12");
		apply_alert();
	}
	else if(value == "13") {
		localStorage.setItem('create_nickname_count', "13");
		apply_alert();
	}
	else if(value == "14") {
		localStorage.setItem('create_nickname_count', "14");
		apply_alert();
	}
	else if(value == "15") {
		localStorage.setItem('create_nickname_count', "15");
		apply_alert();
	}
}

if(localStorage.getItem("darkmode") == "lightmode") {
	var current_theme = lightmode;
}
else if(localStorage.getItem("darkmode") == "darkmode") {
	var current_theme = darkmode;
}
else if(localStorage.getItem("darkmode") == "darkmode_black") {
	var current_theme = darkmode_black;
}

if(localStorage.getItem("language") == "ko") {
	var current_program_language = korean;
}
else if(localStorage.getItem("language") == "en") {
	var current_program_language = english;
}
else if(localStorage.getItem("language") == "ja") {
	var current_program_language = japanese;
}
else if(localStorage.getItem("language") == "zh-CN") {
	var current_program_language = chinese_simplified;
}
else if(localStorage.getItem("language") == "zh-TW") {
	var current_program_language = chinese_traditional;
}

if(localStorage.getItem("create_lang") == "hangul") {
	var current_create_language = hangul;
}
else if(localStorage.getItem("create_lang") == "number") {
	var current_create_language = number;
}
else if(localStorage.getItem("create_lang") == "alphabet_small") {
	var current_create_language = alphabet_small;
}
else if(localStorage.getItem("create_lang") == "alphabet_big") {
	var current_create_language = alphabet_big;
}
else if(localStorage.getItem("create_lang") == "alphabet_big_small") {
	var current_create_language = alphabet_big_small;
}
else if(localStorage.getItem("create_lang") == "alphabet_number") {
	var current_create_language = alphabet_number;
}
else if(localStorage.getItem("create_lang") == "alphabet_big_small_number") {
	var current_create_language = alphabet_big_small_number;
}
else if(localStorage.getItem("create_lang") == "hiragana") {
	var current_create_language = hiragana;
}
else if(localStorage.getItem("create_lang") == "katakana") {
	var current_create_language = katakana;
}
else if(localStorage.getItem("create_lang") == "hiragana_katakana") {
	var current_create_language = hiragana_katakana;
}
else if(localStorage.getItem("create_lang") == "hanja") {
	var current_create_language = hanja;
}
else if(localStorage.getItem("create_lang") == "emoji") {
	var current_create_language = emoji;
}

if(localStorage.getItem("create_nickname_count") == 1) {
	var current_create_nickname_count = 1;
}
else if(localStorage.getItem("create_nickname_count") == 2) {
	var current_create_nickname_count = 2;
}
else if(localStorage.getItem("create_nickname_count") == 3) {
	var current_create_nickname_count = 3;
}
else if(localStorage.getItem("create_nickname_count") == 4) {
	var current_create_nickname_count = 4;
}
else if(localStorage.getItem("create_nickname_count") == 5) {
	var current_create_nickname_count = 5;
}
else if(localStorage.getItem("create_nickname_count") == 6) {
	var current_create_nickname_count = 6;
}
else if(localStorage.getItem("create_nickname_count") == 7) {
	var current_create_nickname_count = 7;
}
else if(localStorage.getItem("create_nickname_count") == 8) {
	var current_create_nickname_count = 8;
}
else if(localStorage.getItem("create_nickname_count") == 9) {
	var current_create_nickname_count = 9;
}
else if(localStorage.getItem("create_nickname_count") == 10) {
	var current_create_nickname_count = 10;
}
else if(localStorage.getItem("create_nickname_count") == 11) {
	var current_create_nickname_count = 11;
}
else if(localStorage.getItem("create_nickname_count") == 12) {
	var current_create_nickname_count = 12;
}
else if(localStorage.getItem("create_nickname_count") == 13) {
	var current_create_nickname_count = 13;
}
else if(localStorage.getItem("create_nickname_count") == 14) {
	var current_create_nickname_count = 14;
}
else if(localStorage.getItem("create_nickname_count") == 15) {
	var current_create_nickname_count = 15;
}

//Title
if(localStorage.getItem('create_lang') == "hangul") {
	var current_create_language_title = "ko";
}
else if(localStorage.getItem('create_lang') == "alphabet_small") {
	var current_create_language_title = "en";
}
else if(localStorage.getItem('create_lang') == "alphabet_big") {
	var current_create_language_title = "EN";
}
else if(localStorage.getItem('create_lang') == "number") {
	var current_create_language_title = "number";
}
else if(localStorage.getItem('create_lang') == "alphabet_big_small") {
	var current_create_language_title = "En";
}
else if(localStorage.getItem('create_lang') == "alphabet_number") {
	var current_create_language_title = "enumber";
}
else if(localStorage.getItem('create_lang') == "alphabet_big_small_number") {
	var current_create_language_title = "Enumber";
}
else if(localStorage.getItem('create_lang') == "hiragana") {
	var current_create_language_title = "ja_hi";
}
else if(localStorage.getItem('create_lang') == "katakana") {
	var current_create_language_title = "ja_ka";
}
else if(localStorage.getItem('create_lang') == "hiragana_katakana") {
	var current_create_language_title = "ja_hikaru";
}
else if(localStorage.getItem('create_lang') == "hanja") {
	var current_create_language_title = "han";
}
else if(localStorage.getItem('create_lang') == "emoji") {
	var current_create_language_title = "emoji😀";
}

if(localStorage.getItem("language") == "ko") {
	var current_program_language_title = "Korean";
}
else if(localStorage.getItem("language") == "en") {
	var current_program_language_title = "English";
}
else if(localStorage.getItem("language") == "ja") {
	var current_program_language_title = "Japanese";
}
else if(localStorage.getItem("language") == "zh-CN") {
	var current_program_language_title = "Chinese(Simplified)";
}
else if(localStorage.getItem("language") == "zh-TW") {
	var current_program_language_title = "Chinese(Traditional)";
}

function apply_alert() {
	Swal.fire({
		icon: 'success',
		title: apply_success_title,
		text: apply_success_description,
        allowOutsideClick: false,
        allowEscapeKey: false
	}).then((result) => {
			if (result.isConfirmed) {
				window.location.reload();
			}
		})
}

function reset() {
	localStorage.clear();
	apply_alert();
}