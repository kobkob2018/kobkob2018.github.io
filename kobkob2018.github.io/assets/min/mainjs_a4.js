function initAccessibility(){acc_local_cookie=read_acc_cookie(),acc_local_cookie&&null!=acc_local_cookie&&(acc_cookie=acc_local_cookie),acc_cookie.biggerfont&&document.body.classList.add("biggerfont-"+acc_cookie.biggerfont),acc_cookie.contrastOn&&"1"==acc_cookie.contrastOn&&document.body.classList.add("contrastOn"),acc_cookie.linksOn&&"1"==acc_cookie.linksOn&&document.body.classList.add("linksOn")}function biggerfont(){for(var e=0,t=1;t<4;t++){var n="biggerfont-"+t;document.body.classList.contains(n)&&(e=t)}3!=e&&(0!=e&&document.body.classList.remove("biggerfont-"+e),document.body.classList.add("biggerfont-"+(e+1)),acc_cookie.biggerfont=e+1,setup_acc_cookie())}function smallerfont(){for(var e=0,t=1;t<4;t++){var n="biggerfont-"+t;document.body.classList.contains(n)&&(e=t)}if(0==e)return acc_cookie.biggerfont=null,void setup_acc_cookie();document.body.classList.remove("biggerfont-"+e),1!=e&&(document.body.classList.add("biggerfont-"+(e-1)),acc_cookie.biggerfont=e-1,setup_acc_cookie())}function biggerfontOff(){for(var e=1;e<4;e++){var t="biggerfont-"+e;document.body.classList.remove(t),acc_cookie.biggerfont=null,setup_acc_cookie()}}function contrastOn(){document.body.classList.add("contrastOn"),acc_cookie.contrastOn=1,setup_acc_cookie()}function contrastOff(){document.body.classList.remove("contrastOn"),acc_cookie.contrastOn=null,setup_acc_cookie()}function linksOn(){document.body.classList.add("linksOn"),acc_cookie.linksOn=1,setup_acc_cookie()}function linksOff(){document.body.classList.remove("linksOn"),acc_cookie.linksOn=null,setup_acc_cookie()}function resetAcessability(){biggerfontOff(),linksOff(),contrastOff()}function setup_acc_cookie(){var e=get_acc_cookie_name(),t={},n=!0,o=!1,r=undefined;try{for(var c,a=Object.entries(acc_cookie)[Symbol.iterator]();!(n=(c=a.next()).done);n=!0){var i=_slicedToArray(c.value,2),l=i[0],s=i[1];null!=s&&"0"!=s&&0!=s&&(t[l]=s)}}catch(f){o=!0,r=f}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw r}}var u=JSON.stringify(t),d=new Date;d.setTime(d.getTime()+3600*Number(500)*1e3),document.cookie=e+"="+u+"; path=/;expires = "+d.toGMTString()}function read_acc_cookie(){function e(e){return e.replace(/([.*+?\^$(){}|\[\]\/\\])/g,"\\$1")}var t=get_acc_cookie_name(),n=document.cookie.match(RegExp("(?:^|;\\s*)"+e(t)+"=([^;]*)"));return n?JSON.parse(n[1]):null}function get_acc_cookie_name(){var e="ACC_SETTINGS";return cookie_prefix&&(e=cookie_prefix+"_"+e),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function initMain(){document.addEventListener("DOMContentLoaded",function(){initMainScroll(),prepareModalGallery()})}function initMainScroll(){window.addEventListener("scroll",function(){checkNavScrollPos(),checkAnimateScrollPos()})}function checkNavScrollPos(){var e=window.scrollY;"body"==logoCurrentPos&&e>300&&(logoCurrentPos="nav",navScrollElements.forEach(function(e){e.classList.add("scrolled")})),"nav"==logoCurrentPos&&e<300&&(logoCurrentPos="body",navScrollElements.forEach(function(e){e.classList.remove("scrolled")}))}function checkAnimateScrollPos(){}function openDrawer(e){document.getElementById(e+"_wrap").style.width="300px",document.getElementById(e+"_drawer_overlay").style.display="block"}function closeDrawer(e){document.getElementById(e+"_wrap").style.width="0",document.getElementById(e+"_drawer_overlay").style.display="none"}function prepareModalGallery(){var e=document.querySelectorAll(".gallery-modal"),t=document.getElementById("modals_placeholder");e.forEach(function(e){t.append(e);var n=new Mycarusel({wrap:"gallery-carusel",autoplay:!1});e.id&&(galleryCarusels[e.id]=n),n.init(),e.querySelector(".closebtn").addEventListener("click",function(){hideModalGallery(e.id)})}),document.querySelectorAll(".modal-gallery-a").forEach(function(e){e.addEventListener("click",function(){showModalGallery(e.dataset.gallery_id,e.dataset.img_index)})})}function showModalGallery(e){var t=!(arguments.length<=1||arguments[1]===undefined)&&arguments[1],n=document.getElementById(e);t&&galleryCarusels[e]&&galleryCarusels[e].pickIndex(t),n.classList.add("modal-on")}function hideModalGallery(e){document.getElementById(e).classList.remove("modal-on")}function openContactModal(){document.querySelector(".contact-modal").classList.add("show-modal"),document.querySelector(".contact-modal").classList.remove("hide-modal")}function closeContactModal(){document.querySelector(".contact-modal").classList.add("hide-modal"),document.querySelector(".contact-modal").classList.remove("show-modal")}var _slicedToArray=function(){function e(e,t){var n=[],o=!0,r=!1,c=undefined;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(l){r=!0,c=l}finally{try{!o&&i["return"]&&i["return"]()}finally{if(r)throw c}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),acc_cookie={};initAccessibility();_slicedToArray=function(){function e(e,t){var n=[],o=!0,r=!1,c=undefined;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(l){r=!0,c=l}finally{try{!o&&i["return"]&&i["return"]()}finally{if(r)throw c}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),Mycarusel=function(){function e(t){_classCallCheck(this,e);var n={loopStyle:"fade",autoplay:!0},o="."+t.wrap,r=document.querySelectorAll(o);if(!r[0])return!1;this.wrap=r[0],this.items=this.wrap.querySelectorAll(".item"),nextButton=this.wrap.querySelectorAll(".carusel-next"),nextButton[0]?this.nextButton=nextButton[0]:this.nextButton=!1,previousButton=this.wrap.querySelectorAll(".carusel-previous"),previousButton[0]?this.previousButton=previousButton[0]:this.previousButton=!1,this.items[0]?(this.currentItem=this.items[0],this.lastItem=this.items.length-1):this.currentItem=!1;var c={},a=!0,i=!1,l=undefined;try{for(var s,u=Object.entries(n)[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var d=_slicedToArray(s.value,2),f=d[0];d[1];null!=t[f]?c[f]=t[f]:c[f]=n[f]}}catch(m){i=!0,l=m}finally{try{!a&&u["return"]&&u["return"]()}finally{if(i)throw l}}this.settings=c}return _createClass(e,[{key:"init",value:function(){var e=this;if(this.currentItem){for(var t=0;t<this.items.length;t++)this.items[t].dataset.carusel_index=t,0!=t?this.items[t].classList.add("carusel-off"):this.items[t].classList.add("carusel-on");this.nextButton&&this.nextButton.addEventListener("click",function(){e.killAutoplayInterval(),e.next()}),this.previousButton&&this.previousButton.addEventListener("click",function(){e.killAutoplayInterval(),e.previous()}),this.settings.autoplay&&(this.autoPlayState="on",this.autoplayInterval=setInterval(function(){e.next()},3e3))}}},{key:"next",value:function(){var e=this.getNext();e&&(this.swichStylish(this.currentItem,e),this.currentItem=e)}},{key:"previous",value:function(){var e=this.getPrevious();e&&(this.swichStylish(this.currentItem,e,"-prev"),this.currentItem=e)}},{key:"getNext",value:function(){var e=this.currentItem.dataset.carusel_index,t=(undefined,".item[data-carusel_index='"+(this.lastItem==e?"0":parseInt(e)+1)+"']"),n=this.wrap.querySelectorAll(t);return n[0]?n[0]:(t=".item[data-carusel_index='0']",!!(n=this.wrap.querySelectorAll(t))[0]&&n[0])}},{key:"getPrevious",value:function(){var e=this.currentItem.dataset.carusel_index,t=(undefined,".item[data-carusel_index='"+(0==e?this.lastItem:parseInt(e)-1)+"']"),n=this.wrap.querySelectorAll(t);return n[0]?n[0]:(t=".item[data-carusel_index='0']",!!(n=this.wrap.querySelectorAll(t))[0]&&n[0])}},{key:"swichStylish",value:function(e,t){var n=arguments.length<=2||arguments[2]===undefined?"":arguments[2];e.classList.add("carusel-removing"+n),t.classList.add("carusel-coming"+n),t.classList.add("carusel-on"),t.classList.remove("carusel-off"),setTimeout(function(){t.classList.remove("carusel-coming"+n)},400),setTimeout(function(){e.classList.add("carusel-off"),e.classList.remove("carusel-on"),e.classList.remove("carusel-removing"+n)},800)}},{key:"killAutoplayInterval",value:function(){"on"==this.autoPlayState&&(this.autoPlayState,clearInterval(this.autoplayInterval))}},{key:"pickIndex",value:function(e){var t=this.wrap.querySelector(".item_id_"+e);t&&(this.currentItem.classList.remove("carusel-on"),this.currentItem.classList.add("carusel-off"),t.classList.add("carusel-on"),t.classList.remove("carusel-off"),this.currentItem=t)}}]),e}(),windowHeight=window.innerHeight,logoCurrentPos="body";navScrollElements=document.querySelectorAll(".navScroll"),animateScrollElements=document.querySelectorAll(".animateScroll"),galleryCarusels={},initMain();
