$(function(){
  var message = '';
  $("#save").click(function () {
    var tmpMessage = $('#message').val();
    chrome.storage.local.set({'google_calender_detail_format': tmpMessage}, function () {
      console.log(tmpMessage);
      $("#success-area").show();
      setTimeout(function(){
        $('#success-area').hide();
      },1000);
      message = tmpMessage;
    });
  });

  chrome.storage.local.get('google_calender_detail_format', function (value) {
    message = value.google_calender_detail_format;
    $("#message").val(message);
  });
});
