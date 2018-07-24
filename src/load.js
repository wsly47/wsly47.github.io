document.addEventListener('error', function (e) {
  var elem = e.target;
  if (elem.tagName.toLowerCase() == 'img') {
    elem.src = '//wx1.sinaimg.cn/images/default_mw690.gif'
  }
}, 1)
document.addEventListener('touchstart', function() {}, 0)
getScript('//cdn.jsdelivr.net/npm/headroom.js@0.9.4/dist/headroom.min.js', function() {
    var elem = document.querySelector('header');
    new Headroom(elem, {
      tolerance: 25,
      offset: 180,
      classes: {
        initial: 'animated',
        pinned: 'slideDown',
        unpinned: 'slideUp',
      }
    }).init()
})
getScript('//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js', function() { jqend() })

function getScript(a, b) {
  var c = document.createElement('script');
  c.src = a;
  var d = document.getElementsByTagName('head')[0],
   done = false;
  c.onload = c.onreadystatechange = function() {
    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
      done = true;
      b();
      c.onload = c.onreadystatechange = null;
      d.removeChild(c)
    }
  }
  d.appendChild(c)
}

function getCss(url) {
  try {
    document.createStyleSheet(url)
  } catch(e) {
    var cssLink  = document.createElement('link');
    cssLink.rel  = 'stylesheet';
    cssLink.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(cssLink)
  }
}

function valine(path) {
  getScript('//cdn.jsdelivr.net/npm/leancloud-storage/dist/av-min.js', function() {
    getScript('//cdn.jsdelivr.net/npm/valine@1.2.6/dist/Valine.min.js', function() {
      new Valine({
        el: '#comment',
        lang: 'en',
        appId: 'NwFaLNagoubAS89LoIJFm7ID-9Nh9j0Va',
        appKey: 'pALdRPcmECXURlb5NyrwceiV',
        verify: true,
        highlight: true,
        avatar: 'retro',
        avatar_cdn: '//dn-qiniu-avatar.qbox.me/avatar/',
        pageSize: 6,
        placeholder: 'Start this discussion...',
      })
    })
  })
}

function jqend() {
  $.ajaxSetup({ cache: true });
  setTimeout(function() {
    if ($('#comment').length) valine(location.pathname)
  }, 0)
  setTimeout(function() {
    $('div.content a').not("[href^='#']").not("[href^='/']").attr('target', '_blank')
  }, 0)
  setTimeout(function() {
    if ($('.highlight').length) getCss('/src/syntax.css?v=0.1')
  }, 0)
}
