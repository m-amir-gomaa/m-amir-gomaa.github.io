'use strict';
window.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&!event.defaultPrevented&&!document.querySelector('.take-note--active')&&window.parent!==window)window.parent.postMessage({type:'portfolio:close-demo'},location.origin);
});
