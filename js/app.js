// nav
$(function(){
    $("#nav").load("/layouts/nav.html");
  });
// footerLoader.js
$(function(){
    $("#footer").load("/layouts/footer.html");
  });

// get year
document.addEventListener("DOMContentLoaded", function() {
    var year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = year;
  });