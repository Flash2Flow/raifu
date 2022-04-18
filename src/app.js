$('.menu_navv').on('click', function(){
    $('#auth').show(300);
    return false;
})
$('#open_reg').on('click', function(){
    $('#reg').show(300);
    $('#auth').hide();
    return false;
})
$('#open_reg_two').on('click', function(){
  $('#reg').show(300);
  $('#auth').hide();
  return false;
})
$('#download_java').on('click', function(){
  $('#block_download_java').show(300);
  $('#block_download_launch').hide();
  return false;
})
$('#download_launch').on('click', function(){
  $('#block_download_launch').show(300);
  $('#block_download_java').hide();
  return false;
})
$('#btn_auth').on('click', function(){
  $('.menu_navv').hide();
  $('#auth').hide();
  $('#block_accept_login').show();
})
$('#block_accept_login').on('click', function(){
  $('#block_setting_login').show(300);

})
$('#nav_hamb').on('click', function(){
  $('#block_hamb').show(300);
})
$('#nav_hamb_block').on('click', function(){
  $('#block_hamb').hide(300);
})
$('#donate_block_saom').on('click', function(){
  $('#donate_block_account').show(300);
  return false;
})

//При нажатии на пустое место, пропадает определённый блок.
  $(document).click( function(event){
    if( $(event.target).closest("#auth").length ) return;
    $("#auth").hide(300);
    event.stopPropagation();
  });

  $(document).click( function(event){
    if( $(event.target).closest("#reg").length ) return;
    $("#reg").hide(300);
    event.stopPropagation();
  });

  $(document).click( function(event){
    if( $(event.target).closest("#block_download_launch").length ) return;
    $("#block_download_launch").hide(300);
    event.stopPropagation();
  });

  $(document).click( function(event){
    if( $(event.target).closest("#block_download_java").length ) return;
    $("#block_download_java").hide(300);
    event.stopPropagation();
  });
  $(document).click( function(event){
    if( $(event.target).closest("#block_setting_login").length ) return;
    $("#block_setting_login").hide(300);
    event.stopPropagation();
  });


function MyFunc(){
  alert('В разработке!');
}

