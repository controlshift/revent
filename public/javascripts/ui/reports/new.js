jq(function($){
  $('.add-photo-link').click(function(){
    $('#report_add_photo_'+$(this).data('photo')).toggle(300);
    $(this).parent().hide();
  });
  $('.add-video-link').click(function(){
    $('#report_add_video_'+$(this).data('video')).toggle(300);
    $(this).parent().hide();
  });
  $('.add-press-link').click(function(){
    $('#report_add_press_'+$(this).data('press')).toggle(300);
    $(this).parent().hide();
  });
});
