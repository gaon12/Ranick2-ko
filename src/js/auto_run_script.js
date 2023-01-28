let current_versions = "1.3.2";

function detect_user_language() {
    var userLang = navigator.language;
    if(userLang == "ko") {
        localStorage.setItem('language', "ko");
    }
    else if(userLang == "en-US") {
        localStorage.setItem('language', "en");
    }
    else if(userLang == "ja") {
        localStorage.setItem('language', "ja");
    }
    else if(userLang == "zh-CN") {
        localStorage.setItem('language', "zh-CN");
    }
    else if(userLang == "zh-TW") {
        localStorage.setItem('language', "zh-TW");
    }
    else {
        localStorage.setItem('language', "en");
    }
}

window.onload=function() {
    if(localStorage.getItem('first_run') == null) {
		localStorage.clear();
        detect_user_language();
		localStorage.setItem('darkmode', "lightmode");
		localStorage.setItem('create_lang', "hangul");
		localStorage.setItem('create_nickname_count', "2");
		localStorage.setItem('first_run', "true");
        location.reload();
    }
    if(localStorage.getItem('darkmode') == "lightmode") {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main.css\" />");
    }
    else if(localStorage.getItem('darkmode') == "darkmode") {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main.css\" />");
		document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main_dark.css\" />");
    }
    else if(localStorage.getItem('darkmode') == "darkmode_black") {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main.css\" />");
		document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main_dark_black.css\" />");
    }
    else {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main.css\" />");
    }
	btn_stop_endisable.disabled = true;
	
	if(localStorage.getItem('first_run_warning_alert') == null) {
		//일부 글자 깨질 수 있음 알림
		Swal.fire({
			icon: 'warning',
			title: tofu_effect_title,
			text: tofu_effect_description,
			allowOutsideClick: false,
			allowEscapeKey: false
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					icon: 'warning',
					title: multi_lang_info_title,
					text: multi_lang_info_description,
					allowOutsideClick: false,
					allowEscapeKey: false
				})
				localStorage.setItem('first_run_warning_alert', "true");
			}
		});
	}

    //Set title
    document.title = "Ranick" + current_create_nickname_count + "-" + current_create_language_title + " (v" + current_versions + ", " + current_program_language_title + " Edition)";
}