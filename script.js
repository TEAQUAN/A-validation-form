function myFunction() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    const form = document.getElementById('form-id');

    let PersonsName = form.elements["fname"].value;
    let Password = form.elements["passwordd"].value;
    let number = form.elements["number"].value;

    if (PersonsName.length <= 3) {
        alert("Please let your name be more than 4 characters")
    } else {
        console.log(PersonsName)
    }

    if (Password.length >= 5 && Password.value.match(paswd)) {
        console.log("Number is okay")
    } else {
        alert("Please password should be more than 5 characters and must contain special characters")
    }

    if (number.toString().length == 11) {
        console.log("Number is okay")
    } else {
        alert("Your number must be 11 digits!")
    }
}