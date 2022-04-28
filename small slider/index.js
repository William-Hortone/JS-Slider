
var loop = 6;
var index = 1;

function mySlider(){

	index++;
	if(index > loop)
	   index = 1;
	 
	imgSrc = "img/0" + index + ".jpg";
	document.getElementById("my_image").src = imgSrc;
	
	str = "";

	for(i = 1; i <= loop; i++){
		if(index == i){
			str += "<label id='blur'>" + i + "</label>";
	    }else{
			str += "<label>" + i + "</label>";
		}
	}
	
	document.getElementById("slider").innerHTML = str;
}
setInterval(mySlider, 1000 * 6 )