var card = document.getElementById("cardInput");
var cvc = document.getElementById("cvcInput");
var amount = document.getElementById("amountInput");
var name = document.getElementById("nameInput");
var lastName = document.getElementById("lastNameInput");
var city = document.getElementById("cityInput");
var postalcode = document.getElementById("postalCodeInput");

function validateForm(inputToValidate) {
    if (inputToValidate.value != "") {
        return true;
    } else {
        return false;
    }
}

function validateFields() {
    if (validateForm(card) == true
        && validateForm(cvc) == true
        && validateForm(amount) == true
        && validateForm(name) == true
        && validateForm(lastName) == true
        && validateForm(city) == true
        && validateForm(postalcode) == true) {
        alert("Se completo correctamente");
    } else {
        alert("Falta informacion por completar");
    }
}