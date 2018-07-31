var bd_email = 'admingmail.com';
var bd_pass = '123456';
const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

var Module = (function () {

    var _validateEmail = function () {
        var email_input = document.getElementById('email');
        if (emailRegex.test(email_input.value) && email_input.value == bd_email) {
            return true;
        }
    };

    var _validatePass = function () {
        var pass_input = document.getElementById('email');
        if (pass_input.value == bd_pass) {
            return true;
        }
    };

    var showPassword = function () {
        var input = document.getElementById('email');
        var alert_msg = document.getElementById("alert");
        if (_validateEmail()) {
            alert_msg.style.visibility = "hidden";
            input.style.border = "initial"
            input.value = '';
            input.placeholder = 'Password';
            document.getElementById("next_btn").disabled = true;
            document.getElementById("signup_btn").disabled = false;
        } else {
            alert_msg.innerHTML = 'Insert a valid email';
            alert_msg.style.visibility = "visible";
            input.style.border = "solid red";
        }
    };

    var login = function () {
        var alert_msg = document.getElementById("alert");
        var input = document.getElementById('email');
        if (_validatePass()) {
            input.style.border = "initial"
            alert_msg.style.visibility = "hidden";
            document.location.href = "/index.html";
        } else {
            alert_msg.innerHTML = 'Insert a valid password';
            alert_msg.style.visibility = "visible";
            input.style.border = "solid red";
        }
    };

    return {
        login: login,
        showPassword: showPassword
    };

})();