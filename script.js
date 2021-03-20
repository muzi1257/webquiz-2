$(function () {
    $("#myForm").submit(handleFormSubmit);
  });
  function handleFormSubmit(e) {
    if (
      $("#name").val().length >= 5 &&
      $("#password").val().length >= 8 &&
      $("#password").val() === $("#confirm_password").val()
    ) {
      alert("Submitting form");
      $("#name ,#password , #confirm_password").css(
        "border",
        "1px solid currentColor"
      );
      $("b").remove();
    } else {
      if ($("#name").val().length < 5) {
        $("#name").css("border", "1px solid red ");
        $("#name").after(
          "<b style = 'color:red '>Name should be at least 5 characters long</b>"
        );
      }
  
      if ($("#password").val().length < 8) {
        $("#password").css("border", "1px solid red");
        $("#password").after(
          "<b style = 'color:red'>password should be at least 8 characters long</b>"
        );
      }
  
      if ($("#password").val() !== $("#confirm_password").val()) {
        $("#confirm_password").css("border", "1px solid red");
        $("#confirm_password").after(
          "<b style = 'color:red'>Password not match</b>"
        );
      }
    }
    e.preventDefault();
  }