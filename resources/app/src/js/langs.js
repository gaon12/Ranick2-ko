window.onload=function(){
    if(localStorage.getItem('first_run') == null) {
        detect_user_language();
		localStorage.setItem('darkmode', "lightmode");
		localStorage.setItem('create_nickname_count', "2");
		localStorage.setItem('first_run', "no");
        location.reload();
    }
    if(localStorage.getItem('darkmode') == "lightmode") {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main.css\" />");
    }
    else if(localStorage.getItem('darkmode') == "darkmode") {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main_dark.css\" />");
    }
    else if(localStorage.getItem('darkmode') == "darkmode_black") {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main_dark_black.css\" />");
    }
    else {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend","<link rel=\"stylesheet\" href=\"./src/css/main.css\" />");
    }
}

function detect_user_language() {
    var userLang = navigator.language || navigator.userLanguage;
    if(userLang == "ko-KR") {
        localStorage.setItem('language', "ko");
    }
    else if(userLang == "en-US") {
        localStorage.setItem('language', "en");
    }
    else if(userLang == "ja-JP") {
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

if(localStorage.getItem('language') == "ko") {
    var darkmode_settings = "다크모드 설정";
    var select_theme = "테마 선택";
    var lightmode = "라이트모드";
    var darkmode = "다크모드";
    var darkmode_black = "다크모드(검정)";
    var btn_menu_create_nickname = "랜덤 닉네임 생성";
    var settings_title = "설정";
    var btn_menu_settings = settings_title;
    var btn_menu_create_nickname_per_second = "1초마다 생성";
    var btn_menu_create_nickname_per_second_stop = "자동 생성 중지";
    var btn_menu_delete_list = "생성한 모든 닉네임 지우기";
    var set_language_title = "프로그램 언어 설정";
    var select_language = "언어 선택";
    var korean = "한국어";
    var english = "영어";
    var japanese = "일본어";
    var chinese_simplified = "중국어(간체)";
    var chinese_traditional = "중국어(번체)";
    var create_nickname_count_lang = "글자수 설정";
	var select_value = "값 선택";
    var reset_title = "설정 초기화";
    var reset_description = "설정 초기화를 원하시는 경우, 아래의 버튼을 누르세요!";
    var apply_success_title = "적용 완료!";
    var apply_success_description = "적용된 내용을 반영하기 위해 새로고침을 합니다!";
	var close_btn = "닫기";
	var current_setting_value = "* 현재 설정 값 : ";
    var auto_creating = "자동 생성 중...";
    var created_nicknames_list = "생성된 닉네임 목록";
	var check_reference_site_title = "프로그램 제작에 참고한<br>사이트를 확인하세요!";
	var check_reference_site_button = "출처 확인하기";
	var check_latest_version_title = "최신 버전 확인하기!";
	var check_latest_version_button = "업데이트 확인하기";
	var show_update_info_title = "업데이트 정보를 확인하세요!";
	var show_update_info_button = "업데이트 정보";
	var show_tip_title = "프로그램 사용시 확인하세요!";
	var show_tip_button = "사용 팁 보기";

	var ref_material = "사용/참고한 자료";

	var no_update_available = "최신버전을 사용중입니다!";
	var no_update_available_text1 = "현재 <b>최신버전</b>(";
	var no_update_available_text2 = ")을 사용 중입니다.<br><br>";
	var no_update_available_text3 = "본 창은 <b><cd></cd></b> 밀리초 뒤에 자동으로 닫아집니다.";
	var update_available = "최신버전이 아닙니다!";
	var update_available_text1 = "최신버전(";
	var update_available_text2 = ") 다운로드를 위해 깃허브 링크를 열까요?";
	var open_newtab = "열기";
	var close_popup = "팝업 닫기";

	var program_tip_01 = "<b>·</b> 여러개를 생성할 때, 많이 생성하게 되면 스크롤 바가 생성이 되는데, 마우스로 최하단까지 내리면, 이후에는 자동으로 스크롤이 됩니다."
}
else if(localStorage.getItem('language') == "en") {
    var darkmode_settings = "Darkmode Settings";
    var select_theme = "Select Theme";
    var lightmode = "Lightmode";
    var darkmode = "Darkmode";
    var darkmode_black = "Darkmode(Black)";
    var btn_menu_create_nickname = "Create Random Nickname";
    var settings_title = "Settings";
    var btn_menu_settings = settings_title;
    var btn_menu_create_nickname_per_second = "Create per second";
    var btn_menu_create_nickname_per_second_stop = "Stop auto create";
    var btn_menu_delete_list = "Delete all created nicknames";
    var set_language_title = "Program Language Settings";
    var select_language = "Select Language";
    var korean = "Korean";
    var english = "English";
    var japanese = "Japanese";
    var chinese_simplified = "Chinese(Simplified)";
    var chinese_traditional = "Chinese(Traditional)";
    var create_nickname_count_lang = "Create Nickname Count";
	var select_value = "Select Value";
    var reset_title = "Initialize settings";
    var reset_description = "If you want to initialize settings, click the button below!";
    var apply_success_title = "Apply Success!";
    var apply_success_description = "Refresh to apply the changes!";
	var close_btn = "Close";
	var current_setting_value = "* Current Setting Value : ";
    var auto_creating = "Auto creating...";
    var created_nicknames_list = "Created Nicknames List";
	var check_reference_site_title = "Check the site that<br>was used to create this program!";
	var check_reference_site_button = "Check Reference Site";
	var check_latest_version_title = "Check the latest version!";
	var check_latest_version_button = "Check Latest Version";
	var show_update_info_title = "Check the update information!";
	var show_update_info_button = "Show Update Info";
	var show_tip_title = "Check the program usage tips!";
	var show_tip_button = "Show Tips";

	var ref_material = "Used/referenced materials";

	var no_update_available = "You are using the latest version!";
	var no_update_available_text1 = "You are currently using the <b>latest version</b>(";
	var no_update_available_text2 = ").<br><br>";
	var no_update_available_text3 = "This window will automatically close in <b><cd></cd></b> milliseconds.";
	var update_available = "You are using an old version!";
	var update_available_text1 = "Should I open the GitHub link for downloading the latest version (";
	var update_available_text2 = ")?";
	var open_newtab = "Open";
	var close_popup = "Close Popup";

	var program_tip_01 = "<b>·</b> When creating multiple, if you create a lot, a scroll bar will be created, and if you move the mouse to the bottom, it will automatically scroll from then on.";
}
else if(localStorage.getItem('language') == "ja") {
    var darkmode_settings = "ダークモード設定";
    var select_theme = "テーマを選択";
    var lightmode = "ライトモード";
    var darkmode = "ダークモード";
    var darkmode_black = "ダークモード(ブラック)";
    var btn_menu_create_nickname = "ランダムニックネームを作成";
    var settings_title = "設定";
    var btn_menu_settings = settings_title;
    var btn_menu_create_nickname_per_second = "1秒ごとに作成";
    var btn_menu_create_nickname_per_second_stop = "自動作成を停止";
    var btn_menu_delete_list = "作成したすべてのニックネームを削除";
    var set_language_title = "プログラム言語設定";
    var select_language = "言語を選択";
    var korean = "韓国語";
    var english = "英語";
    var japanese = "日本語";
    var chinese_simplified = "中国語(簡体字)";
    var chinese_traditional = "中国語(繁体字)";
    var create_nickname_count_lang = "ニックネーム作成数";
	var select_value = "値を選択";
    var reset_title = "設定を初期化";
    var reset_description = "設定を初期化したい場合は、下のボタンをクリックしてください！";
    var apply_success_title = "適用成功！";
    var apply_success_description = "適用された内容を反映するためにリロードします!";
	var close_btn = "閉じる";
	var current_setting_value = "* 現在の設定値 : ";
    var auto_creating = "自動作成中...";
    var created_nicknames_list = "作成された<br>ニックネームリスト";
	var check_reference_site_title = "このプログラムを<br>作成するために使用されたサイトを<br>確認してください！";
	var check_reference_site_button = "参照サイトを確認";
	var check_latest_version_title = "最新バージョンを確認！";
	var check_latest_version_button = "最新バージョンを確認";
	var show_update_info_title = "更新情報を確認！";
	var show_update_info_button = "更新情報を表示";
	var show_tip_title = "プログラムの使用方法を<br>確認してください！";
	var show_tip_button = "ヒントを表示";

	var ref_material = "使用/参考にした資料";

	var no_update_available = "利用可能な更新はありません！";
	var no_update_available_text1 = "現在<b>最新バージョン</b>(";
	var no_update_available_text2 = "を使用しています。<br><br>";
	var no_update_available_text3 = "このウィンドウは<b><cd></cd></b>ミリ秒後に自動的に閉じられます。";
	var update_available = "利用可能な更新があります！";
	var update_available_text1 = "最新バージョン(";
	var update_available_text2 = ")をダウンロードするためのGitHubリンクを開きますか?";
	var open_newtab = "開く";
	var close_popup = "ポップアップ閉じる";

	var program_tip_01 = "<b>·</b> 複数生成するとき、多く生成するとスクロールバーが生成されますが、マウスで最下段まで下げると、その後自動的にスクロールされます。"

}
else if(localStorage.getItem('language') == "zh-CN") {
    var darkmode_settings = "暗黑模式设置";
    var select_theme = "选择主题";
    var lightmode = "明亮模式";
    var darkmode = "暗黑模式";
    var darkmode_black = "暗黑模式(黑色)";
    var btn_menu_create_nickname = "创建随机昵称";
    var settings_title = "设置";
    var btn_menu_settings = settings_title;
    var btn_menu_create_nickname_per_second = "1秒钟创建一个";
    var btn_menu_create_nickname_per_second_stop = "停止自动创建";
    var btn_menu_delete_list = "删除所有已创建的昵称";
    var set_language_title = "應用程序語言設置";
    var select_language = "选择语言";
    var korean = "韩国语";
    var english = "英语";
    var japanese = "日语";
    var chinese_simplified = "中文(简体)";
    var chinese_traditional = "中文(繁体)";
    var create_nickname_count_lang = "创建的昵称数量";
	var select_value = "选择值";
    var reset_title = "初始化设置";
    var reset_description = "如果您想初始化设置，请点击下面的按钮！";
    var apply_success_title = "应用成功！";
    var apply_success_description = "刷新以应用更改！";
	var close_btn = "关闭";
	var current_setting_value = "* 当前设置值 : ";
    var auto_creating = "自动创建中...";
    var created_nicknames_list = "已创建的昵称列表";
	var check_reference_site_title = "请确认程序制作参考的网站！";
	var check_reference_site_button = "查看来源";
	var check_latest_version_title = "确认最新版本！";
	var check_latest_version_button = "确认更新";
	var show_update_info_title = "请确认更新信息！";
	var show_update_info_button = "更新信息";
	var show_tip_title = "使用程序时请确认！";
	var show_tip_button = "显示使用小贴士";

	var ref_material = "使用/参考资料";

	var no_update_available = "最新バージョンです！";
	var no_update_available_text1 = "现在使用最新版本(";
	var no_update_available_text2 = ")。<br><br>";
	var no_update_available_text3 = "本窗口将在<b><cd></cd></b>毫秒后自动关闭。";
	var update_available = "不是最新版本！";
	var update_available_text1 = "打开下载最新版本(";
	var update_available_text2 = ")的GitHub链接吗?";
	var open_newtab = "打开";
	var close_popup = "关闭弹出窗口";

	var program_tip_01 = "<b>·</b> 生成多个时，如果生成较多，就会生成滚动条，用鼠标向下拉到最下端，之后就会自动滚动。";

}
else if(localStorage.getItem('language') == "zh-TW") {
    var darkmode_settings = "暗黑模式設置";
    var select_theme = "選擇主題";
    var lightmode = "明亮模式";
    var darkmode = "暗黑模式";
    var darkmode_black = "暗黑模式(黑色)";
    var btn_menu_create_nickname = "創建隨機暱稱";
    var settings_title = "設置";
    var btn_menu_settings = settings_title;
    var btn_menu_create_nickname_per_second = "1秒鐘創建一個";
    var btn_menu_create_nickname_per_second_stop = "停止自動創建";
    var btn_menu_delete_list = "刪除所有已創建的暱稱";
    var set_language_title = "設置語言";
    var select_language = "選擇語言";
    var korean = "韓國語";
    var english = "英語";
    var japanese = "日語";
    var chinese_simplified = "中國語(簡體字)";
    var chinese_traditional = "中國語(繁體字)";
	var create_nickname_count_lang = "創建的暱稱數量";
	var select_value = "選擇值";
    var reset_title = "初始化設置";
    var reset_description = "如果您想初始化設置，請點擊下面的按鈕！";
    var apply_success_title = "應用成功！";
    var apply_success_description = "刷新以應用更改！";
	var close_btn = "關閉";
	var current_setting_value = "* 當前設置值 : ";
    var auto_creating = "自動創建中...";
    var created_nicknames_list = "已創建的暱稱列表";
	var check_reference_site_title = "請確認程序製作參考的網站！";
	var check_reference_site_button = "查看來源";
	var check_latest_version_title = "確認最新版本！";
	var check_latest_version_button = "確認更新";
	var show_update_info_title = "請確認更新信息！";
	var show_update_info_button = "更新信息";
	var show_tip_title = "使用程序時請確認！";
	var show_tip_button = "顯示使用小貼士";

	var ref_material = "使用/參考資料";

	var no_update_available = "最新バージョンです。";
	var no_update_available_text1 = "現在使用最新版本(";
	var no_update_available_text2 = ")。<br><br>";
	var no_update_available_text3 = "本窗口將在<b><cd></cd></b>毫秒後自動關閉。";
	var update_available = "不是最新版本！";
	var update_available_text1 = "打開下載最新版本(";
	var update_available_text2 = ")的GitHub鏈接嗎?";
	var open_newtab = "打開";
	var close_popup = "關閉彈出窗口";

	var program_tip_01 = "<b>·</b> 生成多個時，如果生成較多，就會生成滾動條，用鼠標向下拉到最下端，之後就會自動滾動。";
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