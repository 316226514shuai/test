$('.shopping').hover(
  function(){
    $('.shopping>div').stop().slideDown(500);
  },function(){
    $('.shopping>div').stop().slideUp(500);
  }
);
var w =$("#ul>li.mov").css('width');//获得第一个li的宽度
var s=$('#span')//获得span
s.css('width',w);//把第一个里的宽度赋值给span
$("#ul").on("mouseover","li.mov",function(){
  s.css({'width':$(this).css('width'),'visibility':'visible'});
  for(var i=0,l=0;i<$(this).index()-1;i++){
    l+=Number($($('#ul>li.mov')[i]).css('width').slice(0,$($('#ul>li.mov')[i]).css('width').length-2));
  }
  s.css('left',l+'px');
});
$("ul").on("mouseout","li.mov",function(){
  s.css('visibility','hidden');
});



$('#btn_r').click(function(){
  $.ajax({
    url:'/Angelababy/Login/signOut',
    type:'POST',
    success:function(data){
      if(data=='ok') window.location.href = '/Angelababy/Index/index';
      else alert('退出失败');
    }
  })
});


$('.hpro').on('click','a',function(e){
  e.preventDefault();
  var x = $(this).attr('href');
  var $this = $(this);
  /*if($('.hpro').html()==''){
    $('.nopro').css('display','block');
    $('.hpro').css('display','none');
  }*/
  $.ajax({
    type:'POST',
    url: '/Angelababy/Buycar/delete',
    data: {'pid': x},
    success: function(data){
      console.log(data);
      if(data == 'ok'){
        $this.parent().detach();
        var span = $('.hpro span.count');
        for(var i=0,count=0;i<span.length;i++){
          count+=Number($(span[i]).html());
        }
        $('.shopping>a>span.count').html(count);
        if($('.hpro').html()<=150){
          $('.hpro').html('购物车中还没有商品,<a href="buycar.html">现在去挑选</a>')
        }
      }else{
        alert('删除失败');
      }
    }
  });
});

window.onload = function(){
  var span = $('.hpro span.count');
  for(var i=0,count=0;i<span.length;i++){
    count+=Number($(span[i]).html());
  }
  $('.shopping>a>span.count').html(count);
}