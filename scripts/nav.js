$(function() {
	$('nav2 select').change(function() {
		var v = $(this).val();
		if (v.match('https://')) window.location = v;
		else window.location = ''+v;
	});
});
window,addEventListener('load',function(){
jQuery('.has-sub:first li a').click(function(){
ga('send','event','links','click',this.innerText)
})
})