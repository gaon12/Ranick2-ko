window.onload = function () {
  if(localStorage.getItem("first_run") == null) {
    let timerInterval;
    Swal.fire({
        icon: "info",
        title: "프로그램 업데이트 완료!",
        html: "업데이트 내역은 프로그램 하단의<br>업데이트 내역에서 확인할 수 있습니다.<br><br>본 창은 <b></b> 밀리초 뒤에 자동으로 닫아집니다.",
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
        }, 100);
        },
        willClose: () => {
        clearInterval(timerInterval);
        },
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        }
    });

    localStorage.setItem("first_run", "yes");
  }
};

function check_update() {
  let current_version = "1.0.1";
  if (current_version == latest_version) {
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: "최신버전을 사용중입니다!",
      html: "현재 <b>최신버전</b>(" + current_version + ")을 사용 중입니다.<br><br>본 창은 <b><cd></cd></b> 밀리초 뒤에 자동으로 닫아집니다.",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("cd");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  } else {
    Swal.fire({
      title: "최신버전이 아닙니다!",
      text: "최신버전 다운로드를 위한 깃허브 링크를 열까요?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "열기",
      cancelButtonText: "팝업 닫기",
    }).then((result) => {
      if (result.isConfirmed) {
        var open_github_new_window = window.open(
          "https://github.com/gaon12/Ranick2-ko/releases",
          "",
          "_blank"
        );
      }
    });
  }
}
