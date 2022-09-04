//  let p1 = document.getElementById('para1');
//  let p2 = document.getElementById('para2');
//  p1.innerHTML ="welcome";


// $('#para1').hide();
// $('#para1').width();  set the width
// $('#para1').width(100); fetch the width
// $('#para1').text('welcome');
// $('#para2').html('welcome');

// $('p').html('hello fffhthff');
// $('#para1').css('color','red');
// $('p').css('color','red');
// $('#para1').css('font-size','25px');

$('#para1').css({
    color:'red',
    fontSize : '2rem'
});
$('div').css({
    height:"100px",
    width :"100px",
    backgroundColor : "cyan"
});
// $('div').on("click",function(){
    //click and on both work same
$('div').click(function(event){
    var element = $(this);
    //every time we click the box it will incr it's width by 20px
    element.width(element.width()+10+'px');
//    alert('you clicked the box');
});