// Seamless 3-up carousel (12 images, 3 visible)
(function(){
  function onReady(fn){ if(document.readyState!=='loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  onReady(function(){
    function initCarousel(trackId, visible, intervalMs){
    var track = document.getElementById(trackId);
    if(!track) return;
    var slides = Array.prototype.slice.call(track.children);
    var stepPct = 100/visible;
    var total = slides.length;
    for(var i=0;i<visible && i<slides.length;i++){ track.appendChild(slides[i].cloneNode(true)); }
    var idx = 0, lock = false;
    function go(){
      if(lock) return; lock = true;
      idx += 1;
      track.style.transition='transform .6s ease';
      track.style.transform='translateX(-'+(idx*stepPct)+'%)';
    }
    track.addEventListener('transitionend', function(){
      lock=false;
      if(idx>=total){
        track.style.transition='none';
        idx=0;
        track.style.transform='translateX(0)';
        void track.offsetWidth;
      }
    });
    setInterval(go, intervalMs || 3000);
  }
  // Desktop original:
  initCarousel('track', 3, 3000);
  // Mobile (1-up):
  if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches){
    initCarousel('track_m', 1, 3000);
  }
  return; // Prevent running legacy code below
  var track = document.getElementById('track');
    if(!track) return;
    var slides = Array.prototype.slice.call(track.children);
    var visible = 3;
    var stepPct = 100/visible;
    var total = slides.length; // 12
    // Clone first 'visible' slides to allow smooth wrap
    for(var i=0;i<visible;i++){ track.appendChild(slides[i].cloneNode(true)); }
    var idx = 0, lock = false;
    function go(){
      if(lock) return; lock = true;
      idx += 1;
      track.style.transition='transform .6s ease';
      track.style.transform = 'translateX(-'+(idx*stepPct)+'%)';
    }
    track.addEventListener('transitionend', function(){
      lock=false;
      if(idx>=total){
        track.style.transition='none';
        idx=0;
        track.style.transform='translateX(0)';
        void track.offsetWidth;
      }
    });
    setInterval(go, 3000);
  });
})();