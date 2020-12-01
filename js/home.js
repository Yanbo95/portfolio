var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}



// popup windows--------------------------------------------------
// Get the modal


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");
var img4 = document.getElementById("image4");
var img5 = document.getElementById("image5");
var img6 = document.getElementById("image6");
var img7 = document.getElementById("image7");
var img8 = document.getElementById("image8");
var img9 = document.getElementById("image9");


var modalImg = document.getElementById("img01");

img1.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

img2.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

img3.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

img4.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

img5.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

img6.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

img7.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

img8.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

img9.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}
