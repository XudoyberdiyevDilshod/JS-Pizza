const elForm = document.querySelector("#js-form");
const elSelect = document.querySelector("#select");
const elChek = document.querySelector(".js-chek");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  elChek.classList.remove("hidden");
  orderPizza();
});

//Select value
let newArr = [];

elSelect.addEventListener("click", () => {
  if (elSelect.value.length > 0) {
    let newObj = {
      id: newArr.length + 1,
      name: elSelect.value,
    };
    newArr.push(newObj);
    selectDough.textContent = elSelect.value;
  }
});

//Size pizza
const elSize = document.querySelectorAll(".size");

for (let i of elSize) {
  i.addEventListener("click", function () {
    sizePizza.textContent = i.textContent;
  });
}

function orderPizza() {
  //Select value price
  let elSelectVal = document.querySelector("select").value;

  let elSelectValPrice = 0;
  if (elSelectVal === "Thin") {
    elSelectValPrice = 10;
  } else if (elSelectVal === "Medium") {
    elSelectValPrice = 12;
  } else if (elSelectVal === "Thick") {
    elSelectValPrice = 15;
  } else {
    elSelectValPrice = 0;
  }

  //Size value price
  let size = document.querySelector('input[name="sizepizza"]:checked').value;

  let sizePrice = 0;
  if (size === "small") {
    sizePrice = 10;
  } else if (size === "medium") {
    sizePrice = 12;
  } else if (size === "big") {
    sizePrice = 15;
  } else {
    sizePrice = 0;
  }

  let checkPizza = document.getElementsByName("checkPizza");
  let checkPizzaPrice = 0;
  let checkPizzaSelect = [];
  let checkPizzaVal = "";
  for (let i = 0; i < checkPizza.length; i++) {
    if (checkPizza[i].checked) {
      checkPizzaSelect.push(checkPizza[i].value);
    }
  }

  if (checkPizzaSelect.length === 1) {
    checkPizzaVal = checkPizzaSelect[0];
  } else if (checkPizzaSelect.length > 1) {
    for (let j = 0; j < checkPizzaSelect.length; j++) {
      checkPizzaVal += checkPizzaSelect[j];
      if (j < checkPizzaSelect.length - 1) {
        checkPizzaVal += ", ";
      }
    }
  } else {
    checkPizzaVal = "No onPizzas";
  }
  checkPizzaPrice = checkPizzaSelect.length * 5;

  let checkAdd = document.getElementsByName("checkAdd");
  let checkAddPrice = 0;
  let checkAddSelect = [];
  let checkAddVal = "";
  for (let i = 0; i < checkAdd.length; i++) {
    if (checkAdd[i].checked) {
      checkAddSelect.push(checkAdd[i].value);
    }
  }

  if (checkAddSelect.length === 1) {
    checkAddVal = checkAddSelect[0];
  } else if (checkAddSelect.length > 1) {
    for (let j = 0; j < checkAddSelect.length; j++) {
      checkAddVal += checkAddSelect[j];
      if (j < checkAddSelect.length - 1) {
        checkAddVal += ", ";
      }
    }
  } else {
    checkAddVal = "No Adds";
  }

  checkAddPrice = checkAddSelect.length * 3;

  let totalPrice =
    checkAddPrice + checkPizzaPrice + sizePrice + elSelectValPrice;

  userName.textContent = username.value;
  userNumber.textContent = "+" + number.value;
  userEmail.textContent = email.value;
  onPizza.textContent = checkPizzaVal;
  addPizza.textContent = checkAddVal;
  total.textContent = "Total:" + " " + totalPrice + "$";
}
