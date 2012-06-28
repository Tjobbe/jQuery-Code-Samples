// Easy way to get rid of image attributes, such as height and width for responsive images. Just make sure you set the img width in css
$('.container img')
	.removeAttr("width").removeAttr("height")
	.css({width: "", height: ""
});
		
