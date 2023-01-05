const elForm = document.querySelector("#js-form");
const elSelect = document.querySelector("#select");
const elChek = document.querySelector(".js-chek");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  elChek.classList.remove("hidden");
});

let newArr = [];

elSelect.addEventListener("click", () => {
  if (elSelect.value.length > 0) {
    let newObj = {
      id: newArr.length + 1,
      name: elSelect.value,
    };
    newArr.push(newObj);
    console.log(newArr);
    selectDough.textContent = elSelect.value;
  }
});

const elSize = document.querySelectorAll(".size");
const elSizePizza = document.querySelector("#sizePizza");

for (let i of elSize) {
  i.addEventListener("click", function () {
    elSizePizza.textContent = i.textContent;
  });
}

function orderPizza() {
  //Select value price
  let elSelectVal = document.querySelector("select").value;

  let elSelectValPrice = 0;
  if (elSelectVal === "Thin") {
    elSelectValPrice = 10;
  }
  else if (elSelectVal === "Medium") {
    elSelectValPrice = 12;
  }
  else if (elSelectVal === "Thick") {
    elSelectValPrice = 15;
  }
  else {
    elSelectValPrice = 0
  }
  console.log("elSelectValPrice=" + elSelectValPrice);

  //Size value price
  let size = document.querySelector('input[name="sizepizza"]:checked').value;

  let sizePrice = 0;
  if (size === "small") {
    sizePrice = 10;
  }
   else if (size === "medium") {
    sizePrice = 12;
  }
  else if (size === "big") {
    sizePrice = 15;
  }
  else {
    sizePrice = 0
  }
  console.log("sizePrice=" + sizePrice);

  let checkPizza = document.getElementsByName("checkPizza");
  let checkPizzaPrice = 0;
  let checkPizzaSelect = [];
  let checkPizzaDisplay = "";
  for (let i = 0; i < checkPizza.length; i++) {
    if (checkPizza[i].checked) {
      checkPizzaSelect.push(checkPizza[i].value);
    }
  }
  console.log("checkPizzaSelect=" + checkPizzaSelect);
  if (checkPizzaSelect.length === 1) {
    checkPizzaDisplay = checkPizzaSelect[0];
  } else if (checkPizzaSelect.length > 1) {
    for (let j = 0; j < checkPizzaSelect.length; j++) {
      checkPizzaDisplay += checkPizzaSelect[j];
      if (j < checkPizzaSelect.length - 1) {
        checkPizzaDisplay += ", ";
      }
    }
  }
  checkPizzaPrice = checkPizzaSelect.length * 5;
  console.log("checkPizzaPrice=" + checkPizzaPrice);
  if (checkPizzaSelect.length === 0) {
    checkPizzaDisplay = "No onPizzas";
  }


  let checkAdd = document.getElementsByName("checkAdd");
  let checkAddPrice = 0;
  let checkAddSelect = [];
  let checkAddDisplay = "";
  for (let i = 0; i < checkAdd.length; i++) {
    if (checkAdd[i].checked) {
      checkAddSelect.push(checkAdd[i].value);
    }
  }
  console.log("checkAddSelect=" + checkAddSelect);
  if (checkAddSelect.length === 1) {
    checkAddDisplay = checkAddSelect[0];
  } else if (checkAddSelect.length > 1) {
    for (let j = 0; j < checkAddSelect.length; j++) {
      checkAddDisplay += checkAddSelect[j];
      if (j < checkAddSelect.length - 1) {
        checkAddDisplay += ", ";
      }
    }
  }
  checkAddPrice = checkAddSelect.length * 3;
  console.log("checkAddPrice=" + checkAddPrice);
  if (checkAddSelect.length === 0) {
    checkAddDisplay = "No Adds";
  }

  let totalPrice = checkAddPrice + checkPizzaPrice + sizePrice + elSelectValPrice;
  console.log("totalPrice=" + totalPrice);


  userName.textContent = username.value;
  userNumber.textContent = "+" + number.value;
  userEmail.textContent = email.value;
  onPizza.textContent = checkPizzaDisplay;
  addPizza.textContent = checkAddDisplay;
  total.textContent = 'Total:' + ' ' + totalPrice + '$';
}
