function check_update() {
  let current_version = "1.2.0";
  if (current_version == latest_version) {
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: no_update_available,
      html:
        no_update_available_text1 +
        current_version +
        no_update_available_text2 +
        no_update_available_text3,
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
      title: update_available,
      text: update_available_text1 + latest_version + update_available_text2,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: open_newtab,
      cancelButtonText: close_popup,
    }).then((result) => {
      if (result.isConfirmed) {
        var open_github_new_window = window.open("https://github.com/gaon12/Ranick2-ko/releases","","_blank");
      }
    });
  }
}