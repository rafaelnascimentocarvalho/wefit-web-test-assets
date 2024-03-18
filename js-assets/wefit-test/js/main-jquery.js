$(document).ready(function () {
  // MENU
  $(".container .row")
    .eq(0)
    .find('[role="group"]')
    .toggleClass("btn-group-vertical d-flex flex-row")
    .find(".btn")
    .addClass("mr-1");
  // ---

  // HEADER
  $(".container .row")
    .eq(1)
    .find(".jumbotron")
    .addClass("bg-secondary text-white text-right")
    .find("a.btn")
    .toggleClass("btn-primary btn-success");
  // ---

  // CARDS
  $(".container .row")
    .eq(2)
    .each(function () {
      $(this).find(".col-lg-12").addClass("order-1");
      $(this)
        .find(".col-lg-3:nth-child(2)")
        .addClass("order-2")
        .find(".btn")
        .toggleClass("btn-primary btn-success");
      $(this).find(".col-lg-3:nth-child(3)").addClass("order-4");
      $(this).find(".col-lg-3:nth-child(4)").addClass("order-3");
      $(this).find(".col-lg-3:nth-child(5)").addClass("order-1");
    });
  // ---

  // LISTA
  $(".container .row")
    .eq(3)
    .find(".list-group")
    .each(function () {
      $(".list-group-item", this).removeClass("active");

      ["Quarto item", "Quinto item"].map((item) => {
        $(this).append(`<li class="list-group-item">${item}</li>`);
      });

      $(".list-group-item:nth-child(4)", this).addClass("active");
    });
  // ---
});
