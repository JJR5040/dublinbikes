a = 0
var timer = null
var i = 0; 			// Start Point
var images = [];	// Images Array
var images_alt = [];	// Images alt tag Array
var time = 4000;	// Time Between Switch
  
// Image List
images[0] = "img/dublin_bikes_d3.jpg";
images[1] = "img/dublin_bike_d2.jpg";
images[2] = "img/dublin-bikes_d1.jpg";

images_alt[0] = "Dublin bikes station in use.";
images_alt[1] = "A Dublin bike.";
images_alt[2] = "Dublin bikes at a station.";

// Change Image
function plusSlides(a){
  var i = 0;
  clearTimeout(timer);
  timer = null;
  if(a === 'True'){
    i = i - 1;
  } else{
    i = i + 1;
  }
  if (i === 3){
    i = 0;
  } else if (i === -1){
    i = 2;
  }
  changeImg();
}

function changeImg(){
  
  document.slide.src = images[i];
  document.slide.alt = images_alt[i];

  // Check If Index Is Under Max
  if(i < images.length - 1){
    // Add 1 to Index
    i++; 
  } else{ 
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  timer = setTimeout(newFunction(), time);
}

// Run function when page loads
window.onload = changeImg;

function newFunction() {
    return "changeImg()";
}