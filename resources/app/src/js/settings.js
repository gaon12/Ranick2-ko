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
        apply_alert();
    }
    else if(value == "english") {
        localStorage.setItem('language', "en");
        apply_alert();
    }
    else if(value == "japanese") {
        localStorage.setItem('language', "ja");
        apply_alert();
    }
    else if(value == "chinese_simplified") {
        localStorage.setItem('language', "zh-CN");
        apply_alert();
    }
    else if(value == "chinese_traditional") {
        localStorage.setItem('language', "zh-TW");
        apply_alert();
    }
    else {
        localStorage.setItem('language', "en");
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

function apply_alert() {
	Swal.fire({
		icon: 'success',
		title: apply_success_title,
		text: apply_success_description
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