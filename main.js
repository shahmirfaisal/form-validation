window.onload = () => {
  const form = document.querySelector("form");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const rePassword = document.getElementById("re-password");
  const nameFeedback = document.querySelector(".name-feedback");
  const emailFeedback = document.querySelector(".email-feedback");
  const passwordFeedback = document.querySelector(".password-feedback");
  const rePasswordFeedback = document.querySelector(".re-password-feedback");
  const container = document.querySelector(".container");
  const spinner = document.querySelector(".spinner");
  const complete = document.querySelector(".complete");

  form.addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    nameValidation();
    emailValidation();
    passwordValidation();
    rePasswordValidation();

    if (
      nameValidation() &&
      emailValidation() &&
      passwordValidation() &&
      rePasswordValidation()
    ) {
      spinner.style.display = "flex";
      setTimeout(() => {
        spinner.style.display = "none";
        container.style.display = "none";
        complete.style.display = "block";
      }, 3000);
    } else {
    }
  }

  // name validation
  const nameValidation = () => {
    let valid = false;
    if (firstName.value.trim() === "" || lastName.value.trim() === "") {
      nameFeedback.innerHTML = "Please fill these name fields";
      nameFeedback.style.display = "block";
    } else if (firstName.value.trim() !== "" && lastName.value.trim() !== "") {
      nameFeedback.style.display = "none";
      valid = true;
    }
    return valid;
  };

  // email validation
  const emailValidation = () => {
    let valid = false;
    const value = email.value.trim();
    if (value === "") {
      emailFeedback.innerHTML = "Please fill this field";
      emailFeedback.style.display = "block";
    } else if (!value.match(/([a-z]|[0-9])@/i)) {
      emailFeedback.innerHTML = "Your email is invalid";
      emailFeedback.style.display = "block";
    } else {
      emailFeedback.style.display = "none";
      valid = true;
    }
    return valid;
  };

  // password validation
  const passwordValidation = () => {
    let valid = false;
    const value = password.value;
    const regex = /[a-z][0-9]/;
    const test = regex.test(value);
    if (value === "") {
      passwordFeedback.innerHTML = "Please fill this field";
      passwordFeedback.style.display = "block";
    } else if (value.length < 8 || value.length > 32) {
      passwordFeedback.innerHTML =
        "Length of the password should be between 8 & 32 ";
      passwordFeedback.style.display = "block";
    } else if (!test) {
      passwordFeedback.innerHTML = "Password strength is low";
      passwordFeedback.style.display = "block";
    } else {
      passwordFeedback.style.display = "none";
      valid = true;
    }
    return valid;
  };

  // re-password validation
  const rePasswordValidation = () => {
    let valid = false;
    if (rePassword.value !== password.value) {
      rePasswordFeedback.innerHTML = "Password dont match";
      rePasswordFeedback.style.display = "block";
    } else {
      rePasswordFeedback.style.display = "none";
      valid = true;
    }
    return valid;
  };
};
