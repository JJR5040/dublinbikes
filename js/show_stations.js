function myFunction() {
    var dots = document.getElementById("point");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show Stations"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hide Stations"; 
      moreText.style.display = "inline";
    }
  }