
$(document).ready(function(){
	var tab  = $('.text').html().split(' '); 
	for(i=0; i<tab.length; i++){
		if($.isNumeric(tab[i])){ 
			var logo = '<img src="img/'+tab[i+1]+'.png" alt="">';
			tab[i] = logo.repeat(parseInt(tab[i]));	
			tab[i+1] = "";
		}
	}
	$('.text').html(tab.join(' '));
});