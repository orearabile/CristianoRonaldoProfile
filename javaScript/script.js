let form = document.getElementById("Scholarship");

if (form !== null){
    form.addEventListener("submit",function (e) {
        e.preventDefault();

        let name = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let reason = document.getElementById("reason").value;
        let country = document.getElementById("country").value;
        let year = document.querySelector('input[name="year"]:checked');

        let message = document.getElementById("messageArea");

        if (name === "" || email === "" || reason === "" || country === "" || year === null) {
          message.className = "errorMsg";
          message.textContent = "Please complete all fields";
        } else {
          message.className = "successMsg";
          message.textContent = "Thank you for applying";
        }

    });
}

$(document).ready(function () {
  // Focus and blur effects
  $("input, textarea, select").focus(function () {
    $(this).css("background-color", "#e0f7fa");
  });

  $("input, textarea, select").blur(function () {
    $(this).css("background-color", "white");
  });

  // Form border style on submit click
  $("#Scholarship input[type='submit']").click(function () {
    $("#formSec").css({
      border: "2px solid green",
      padding: "10px"
    });
  });

  // Achievement year toggles
  $("#btn2017").click(function () {
    $("#awards2017").slideDown();
    $("#awards2018").slideUp();
  });

  $("#btn2018").click(function () {
    $("#awards2018").slideDown();
    $("#awards2017").slideUp();
  });
});
