"use strict";

const form = document.querySelector(".reg-form");

form.onsubmit = e => {
  console.log("Send Form ");
  e.preventDefault();
};

const userName = document.querySelector('[name="user-name"]');

userName.oninput = e => {
  if (/^[A-Z][a-z]{1,31}$/.test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }
};

// АБО для всіх /////////////////////////

const INPUTS_REG_EXP = {
  "user-name": /^[A-Z][a-z]{2,19}$/,
  "user-surname": /^[A-Z][a-z]{2,19}$/,
  "user-email": /^.+@.+$/,
  "user-phone": /^\d{3}-\d{3}-\d{4}$/,
  "user-passw": /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*).{6,20}$/,
  "user-passw-conf": /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*).{6,20}$/,
};

const inputs = document.querySelectorAll("input");

inputs.forEach(i => i.addEventListener("input", inputHandler));

function inputHandler(e) {
  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
}
