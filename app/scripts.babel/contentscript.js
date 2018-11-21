'use strict';

// const variable
const MAX_INTERBAL_COUNT = 100;
const TARGET_ATTR_NAME = 'div[id^="hInySc"]';
const DUMMY_ATTR_NAME = '.iSSROb'

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

// main処理

var observer = new MutationObserver(function(mutations) {
  if(isTargetUrl()) {
    $(function() {
      var intervalCount = 0;
      var id = setInterval(function(){
        ++intervalCount;
        var $scheduleDescDOM = $(TARGET_ATTR_NAME);
        var $scheduleDummyDOM = $(DUMMY_ATTR_NAME);
        if ($scheduleDescDOM[0] && $scheduleDummyDOM[0] || intervalCount > MAX_INTERBAL_COUNT)
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
            chrome.storage.local.get('google_calender_detail_format', function (value) {
              console.log(value);
              if (value.google_calender_detail_format)
              {
                $scheduleDummyDOM.text('');
                $scheduleDescDOM.text(value.google_calender_detail_format);
              }
            });
          }
        }
      },100);
    });
  }
  href = location.href;
});

observer.observe(document, { childList: true, subtree: true });
