document.addEventListener("DOMContentLoaded", function () {
  // MENU
  var containerRows = document.querySelectorAll(".container .row");
  if (!!containerRows[0]) {
    var menuRow = containerRows[0];
    var roleGroups = menuRow.querySelectorAll('[role="group"]');
    if (!!roleGroups.length) {
      roleGroups.forEach(function (group) {
        group.classList.toggle("btn-group-vertical");
        group.classList.toggle("d-flex");
        group.classList.toggle("flex-row");
        var buttons = group.querySelectorAll(".btn");
        buttons.forEach(function (btn) {
          btn.classList.add("mr-1");
        });
      });
    }
  }

  // HEADER
  if (!!containerRows[1]) {
    var headerRow = containerRows[1];
    var jumbotron = headerRow.querySelector(".jumbotron");
    if (jumbotron) {
      jumbotron.classList.add("bg-secondary");
      jumbotron.classList.add("text-white");
      jumbotron.classList.add("text-right");
      var headerButtons = jumbotron.querySelectorAll("a.btn");
      headerButtons.forEach(function (btn) {
        btn.classList.toggle("btn-primary");
        btn.classList.toggle("btn-success");
      });
    }
  }

  // CARDS
  if (!!containerRows[2]) {
    var cardsRow = containerRows[2];
    var cardCols = cardsRow.querySelectorAll(".col-lg-12, .col-lg-3");
    cardCols.forEach(function (col) {
      col.classList.add("order-1");
    });
    var secondCol = cardsRow.querySelector(".col-lg-3:nth-child(2)");
    if (secondCol) {
      secondCol.classList.add("order-2");
      var secondColBtn = secondCol.querySelector(".btn");
      if (secondColBtn) {
        secondColBtn.classList.toggle("btn-primary");
        secondColBtn.classList.toggle("btn-success");
      }
    }
    var thirdCol = cardsRow.querySelector(".col-lg-3:nth-child(3)");
    if (thirdCol) {
      thirdCol.classList.add("order-4");
    }
    var fourthCol = cardsRow.querySelector(".col-lg-3:nth-child(4)");
    if (fourthCol) {
      fourthCol.classList.add("order-3");
    }
    var fifthCol = cardsRow.querySelector(".col-lg-3:nth-child(5)");
    if (fifthCol) {
      fifthCol.classList.add("order-1");
    }
  }

  // LISTA
  if (!!containerRows[3]) {
    var listaRow = containerRows[3];
    var listGroups = listaRow.querySelectorAll(".list-group");
    listGroups.forEach(function (listGroup) {
      var listItems = listGroup.querySelectorAll(".list-group-item");
      listItems.forEach(function (item) {
        item.classList.remove("active");
      });

      var newItems = ["Quarto item", "Quinto item"];
      newItems.forEach(function (newItem) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = newItem;
        listGroup.appendChild(li);
      });

      var fourthItem = listGroup.querySelector(".list-group-item:nth-child(4)");
      if (fourthItem) {
        fourthItem.classList.add("active");
      }
    });
  }
});
