
	var pic = document.getElementById('banner');
			var	imgs = ['01.jpg', '02.jpg','01.jpg'];
			var	i = 0; 
				function my(){
					pic.src = 'images/' + imgs[i];
					i++;
					if(i>=imgs.length){
						i = 0;
					}
				}
				var time = setInterval('my()' , 1000);