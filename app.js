$(document).ready(function () {
  alert("African Restaurant");
  $(".sidenav").sidenav();
});

$(".dropdown-trigger").dropdown();

/* Validation du formulaire */
$().ready(function () {
  $("form.col s12").validate({});
});

/* Calendrier */
$(document).ready(function () {
  $(".datepicker").datepicker();
});

/* Selection des images */
$(document).ready(function () {
  $("select").formSelect();
});

/* PHOTO */
$(document).ready(function () {
  $(".materialboxed").materialbox();
});

/* BOUTON */
$(document).ready(function () {
  $(".modal").modal();
});

/* TOAST */
M.toast({ html: "This page is in English !" });
