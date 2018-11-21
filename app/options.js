$(function(){

  // セーブボタンが押されたら、
  // ローカルストレージに保存する。
  var message = '';
  $("#save").click(function () {
    var tmpMessage = $('#message').val();
    chrome.storage.local.set({'google_calender_detail_format': tmpMessage}, function () {
      console.log(tmpMessage);
      message = tmpMessage;
    });
  });

  chrome.storage.local.get('google_calender_detail_format', function (value) {
    message = value.google_calender_detail_format;
    $("#message").val(message);
  });
});
