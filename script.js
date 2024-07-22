"use strict";

const yearLabel = document.querySelector(".years span");
const monthLabel = document.querySelector(".months span");
const dayLabel = document.querySelector(".days span");

const yearInput = document.querySelector("#year-input");
const monthInput = document.querySelector("#month-input");
const dayInput = document.querySelector("#day-input");

const yearError = document.querySelector(".year-error");
const monthError = document.querySelector(".month-error");
const dayError = document.querySelector(".day-error");

const btn = document.querySelector(".btn");

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

let dayInvalid = false;
let monthInvalid = false;
let yearInvalid = false;

btn.addEventListener("click", function () {
  const dayBirth = dayInput.value;
  const monthBirth = monthInput.value;
  const yearBirth = yearInput.value;

  // Day
  if (+dayBirth === 0 || +dayBirth > 31) {
    dayInvalid = true;
    dayError.classList.remove("hide");
  } else {
    dayInvalid = false;
    dayError.classList.add("hide");
  }

  // Month
  if (+monthBirth === 0 || +monthBirth > 12) {
    monthInvalid = true;
    monthError.classList.remove("hide");
  } else {
    monthInvalid = false;
    monthError.classList.add("hide");
  }

  // Year
  if (yearBirth.length < 4 || +yearBirth > currentYear) {
    yearInvalid = true;
    yearError.classList.remove("hide");
  } else {
    yearInvalid = false;
    yearError.classList.add("hide");
  }

  if (!dayInvalid && !monthInvalid && !yearInvalid) {
    const birth = new Date(`${yearBirth}-${monthBirth}-${dayBirth}`);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    yearLabel.textContent = years;
    monthLabel.textContent = months;
    dayLabel.textContent = days;
  }
});
