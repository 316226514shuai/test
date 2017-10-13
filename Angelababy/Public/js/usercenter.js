$('#cart').on('click','.del',function(e){
  e.preventDefault();
  var x = $(this).parent().parent();
  $('.hpro>li:eq('+x.index()+')>a')[0].click();
  x.remove();
  if($('#cart>tbody').html()<150){
    $('#cart>tbody').html('<h1>您的购物车没有任何商品!</h1>');
  }
});