// start point of the array
var i = 0;
//images that will be used
var images = [];
//amount of time it takes for images to change
var time = 2000;

//list of which images are going to be used.
images[0] = "images/Hepburn.jpg";
images[1] = "images/Monroe.jpg";
images[2] = "images/Beatles1.jpg";
images[3] = "images/Beatles2.jpg";
images[4] = "images/Beatles3.jpg";
images[5] = "images/Beatles4.jpg";
images[6] = "images/Eminem.jpg";
images[7] = "images/Pijus.jpg";
images[8] = "images/Keys.jpg";
images[9] = "images/Chan.jpg";
images[10] = "images/Headphones.jpg";
images[11] = "images/Sleeper.jpg";
images[12] = "images/Link.jpg";
images[13] = "images/Wolverine.jpg";
images[14] = "images/Spiderman.jpg";

//function that will change the images
function changeImg(){
	document.slide.src = images[i];
/* uses the slide name given to my img tag in html; if the i variable is 
less than the total length of images (15 in this array) this function adds
1 to it, allowing the next image to be displayed. This happens until image
15 is met, then uses the else portion of the code to reset the var to 1. 
Allowing the process to repeat non-stop.
*/
	if (i < images.length - 1){
		i++;
	} else {
		i=0;
	}

	setTimeout("changeImg()", time);
}
// allows to start the function once the page is loaded to avoid issues
window.onload = changeImg;

