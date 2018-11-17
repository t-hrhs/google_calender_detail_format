'use strict';

// global variable
var href = undefined;

// function
function isTargetUrl()
{
  // 該当ページでない時
  if (!document.URL.match(/eventedit/))
  {
    return false;
  }
  // 初回アクセスもしくはURLが変わっている場合
  if (href !== location.href || href === undefined)
  {
    return true;
  }
  return false;
}

var observer = new MutationObserver(function(mutations) {
  if(isTargetUrl()) {
    $(function() {
      console.log(document.URL);
      var intervalCount = 0;
      var id = setInterval(function(){
        ++intervalCount;
        console.log('interval now');
        var $scheduleDescDOM = $('div[id^="hInySc"]');
        var $scheduleDummyDOM = $('.iSSROb');
        if ($scheduleDescDOM[0] && $scheduleDummyDOM[0] || intervalCount > 100)
        {
          clearInterval(id);
          var text = $scheduleDescDOM.text();
          if (text)
          {
            console.log($scheduleDescDOM.text());
            console.log('更新する必要なし');
          }
          else
          {
            console.log('変更する必要ある');
            // NOTE : 暫定対応
            $scheduleDummyDOM.text('');
            $scheduleDescDOM.text('changed text');
          }
        }
      },100);
    });
  }
  href = location.href;
});

// main処理
observer.observe(document, { childList: true, subtree: true });
