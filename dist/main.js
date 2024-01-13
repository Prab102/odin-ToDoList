(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([e.id,"html,body{\n    /* background-color: aquamarine; */\n    margin:0;\n    height:100%;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n}\n#content{\n    /* background-color:aqua; */\n    display:flex;\n    /* border: 1px solid red; */\n\n    height:100vh;\n    width:100vw;\n}\n#content1{\n    /* background-color:aqua; */\n    display:flex;\n    /* border: 1px solid red; */\n\n    height:100vh;\n    width:100vw;\n}\n#sidebar{\n    /* border: 1px solid red; */\n    background-color: bisque ;\n    width: 20vw;\n    display: flex;\n    flex-direction: column;\n    /* position:relative; */\n    \n}\n#project{\n    /* border: 1px solid blue; */\n    background-color: white;\n    width: 80vw;\n    /* display: flex; */\n}\n\n\n/* sidebar items */\n/* this is where project objects are displayed and can be selected kinda like tabs */\n#listcontainer{\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    /* border: 1px solid green; */\n    background-color: bisque;\n    /* position:absolute; */\n    height:90%;\n    width:100%;\n    /* min-height: 100%; */\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n#createbutton{\n    background-color: white;\n    border:1px solid black;\n    border-radius: 10px;\n    margin-top: 20px;\n    /* position: absolute; */\n    width:50%;\n    height: 30px;\n    /* usefull for aligning one item in flex box  */\n    align-self: center;\n    cursor: pointer;\n\n}\n#createbutton:hover{\n    background-color: black;\n    color: white;\n}\n.projectcard{\n    /* border: 1px solid black; */\n    padding-top:10px;\n    padding-bottom: 10px;\n    width:100%;\n    height: 20px;\n    text-align: center;\n    font-size: 18px;\n    cursor:pointer;\n}\n.projectcard:hover{\n    background-color:rgb(218, 160, 79);\n}\n\n\n/* main page contents */\n#formcontainer{\n    /* border: 2px solid blue; */\n    height: 100%;\n    min-height: 100%;\n    /* width: 50vw; */\n    display: flex;\n    flex-direction: column;\n    /* align-items: center; */\n    padding-top: 20%;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n#titlelabel{\n    font-size: 30px;\n    margin-top: -200px;\n    margin-left: 200px;\n    margin-bottom: 5px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n}\n#titleinput{\n    border: none;\n    font-size: 20px;\n    margin-left: 200px;\n    margin-bottom: 25px;\n    width:50%;\n\n}\n#submit{\n    width: 200px;\n    height: 20px;\n    margin-left: 200px;\n\n}\n/* main container for all project */\n.todocontainer{\n    /* border: 3px solid black ; */\n    /* background-color: green; */\n    height: 100%;\n    min-height: 100%;\n    /* width: 50vw; */\n    display: flex;\n    flex-direction: column;\n    /* align-items: center; */\n    padding-top: 5%;\n    padding-left: 15%;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n#projecttitle{\n    font-size: 36px;\n    border: none;\n    width:70%;\n\n}\n#createTaskbutton{\n    border: none;\n    width:200px;\n    height: 40px;\n    text-align: left;\n    background-color: white;\n    cursor:pointer;\n}\n/* #createTaskbutton:hover{\n\n} */\n#taskformcont{\n    display:flex;\n    flex-direction: column;\n    border: 1px solid grey;\n    border-radius: 10px;\n    height: 150px;\n    width: 70%;\n\n}\n\n/* taskform items */\n#nameinput{\n    margin-top:10px;\n    margin-left:5px;\n    font-size: 18px;\n    border: none\n;}\n#descinput{\n    border: none;\n    margin-top:10px;\n    margin-left:5px;\n}\n#dateprioritybox{\n    margin-top: 10px;\n    display :flex;\n    /* border: 1px solid black; */\n    height:30px;\n}\n#buttonscontainer{\n    /* border:1px solid red; */\n    height:40px;\n    display:flex;\n    justify-content: right;\n    text-align: center;\n}\n#taskcancel{\n    /* padding:10px; */\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 20px;\n    border: 1px solid black;\n    text-align: center;\n    margin-right: 10px;\n    cursor: pointer;\n}\n#tasksubmit{\n    /* padding:10px; */\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-top :10px;\n    margin-bottom: 10px;\n    border: 1px solid black;\n    border-radius: 20px;\n    margin-right: 10px;\n    cursor: pointer;\n\n}\n\n/* submited task */\n.taskcard{\n    margin-top: 10px;\n    margin-left: 5px;\n    border-bottom: 1px solid lightgray;\n    /* border-bottom: 1px; */\n    /* border: 1px solid purple; */\n    width: 70%;\n    height:60px;\n}\n#maintaskcont{\n    /* border:1px solid lime; */\n    display:flex;\n    margin-left: -35px;\n    margin-top:10px;\n}\n#cardtitle{\n    /* border: 1px solid black; */\n    font-size: 20px;\n\n\n}\n#carddesc{\n    /* border: 1px solid green; */\n    /* padding-left: 20px; */\n    margin-top: 10px;\n    font-size: 16px;\n    color: grey;\n    /* padding-bottom */\n}\n#checkbox{\n    margin-top: 25px;\n    margin-right:15px;\n    border: 1px black solid;\n    border-radius: 100px;;\n    height :20px;\n    width: 20px;\n    cursor: pointer;\n}\n#removetask{\n    /* border: 1px solid red; */\n    padding-top:30px;\n    font-size: 12px;\n    cursor: pointer;\n}\n#removetask:hover{\n    color: grey;\n}",""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},a=[],d=0;d<e.length;d++){var c=e[d],l=o.base?c[0]+o.base:c[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var b=i(m,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:b,references:1})}a.push(p)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var d=t(r[a]);n[d].references--}for(var c=o(e,i),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),r=t(569),a=t.n(r),d=t(565),c=t.n(d),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),b={};function h(e){this.todoitems=[],this.projectname=e}function f(e,n,t,o,i,r){this.title=e,this.description=n,this.dueDate=t,this.priority=o,this.notes=i,this.checklist=r}function g(e){const n=document.getElementById("listcontainer");console.log("testing");const t=document.createElement("div");t.setAttribute("class","projectcard");const o=new h(e);t.innerHTML=o.projectname,console.log(o.projectname);const i=document.createElement("div");i.setAttribute("class","todocontainer"),function(e,n){const t=document.createElement("textarea");t.id="projecttitle",t.setAttribute("rows","1"),t.setAttribute("columns","100"),t.innerHTML=n.projectname,e.appendChild(t);const o=document.createElement("button");o.id="createTaskbutton",o.innerHTML="+ Add Task",e.appendChild(o),o.addEventListener("click",(()=>function(e,n,t){const o=document.createElement("form");o.id="taskformcont";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("placeholder","Task Title"),i.setAttribute("id","nameinput"),i.setAttribute("name","taskname"),i.required=!0,o.appendChild(i);const r=document.createElement("input");r.setAttribute("type","textarea"),r.setAttribute("placeholder","Description"),r.setAttribute("id","descinput"),r.setAttribute("name","description"),o.appendChild(r);const a=document.createElement("div");a.id="dateprioritybox",o.appendChild(a);const d=document.createElement("div");d.id="buttonscontainer",o.appendChild(d);const c=document.createElement("button");c.id="taskcancel",c.innerHTML="Cancel",d.appendChild(c),c.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",o.remove()}));const l=document.createElement("submit");l.id="tasksubmit",l.innerHTML="Submit",d.appendChild(l),l.addEventListener("click",(t=>v(e,n))),l.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",o.remove()})),n.appendChild(o)}(n,e,o))),o.addEventListener("click",(()=>{o.style.display="none"}))}(i,o);const r=document.getElementById("formcontainer");console.log("makes it here"),null!=r&&(r.style.display="none"),x(i),t.addEventListener("click",(()=>x(i)));const a=document.getElementById("project");null!=a?a.appendChild(i):console.log("projectcontainer is null"),null!=n&&n.appendChild(t),console.log("submitted")}function x(e){var n=document.getElementsByClassName("todocontainer");for(let e=0;e<n.length;e++)null!=n[e]&&(n[e].style.display="none"),console.log(n[e].id+" this is tabcontent display variable");var t=document.getElementById("formcontainer");null!=t&&(t.style.display="none"),e.style.display="flex"}function v(e,n,t){event.preventDefault();const o=new f(document.getElementById("nameinput").value,document.getElementById("descinput").value,"dueDate","priority","notes","checklist");e.todoitems.push(o);const i=document.createElement("div");i.setAttribute("class","taskcard");const r=document.createElement("div");r.id="cardtitle",r.innerHTML=o.title,i.appendChild(r);const a=document.createElement("div");a.id="carddesc",a.innerHTML=o.description,i.appendChild(a);const d=document.createElement("div");d.id="checkbox",d.addEventListener("click",(()=>{"black"==d.style.backgroundColor?d.style.backgroundColor="white":d.style.backgroundColor="black"}));const c=document.createElement("div");c.id="maintaskcont",c.appendChild(d),c.appendChild(i);const l=document.createElement("div");l.id="removetask",l.innerHTML="remove",l.addEventListener("click",(()=>{c.remove()})),c.appendChild(l),n.appendChild(c)}b.styleTagTransform=u(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=s(),n()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals,function(){const e=document.createElement("div");e.id="sidebar";const n=document.createElement("div");n.id="listcontainer",console.log(n),e.appendChild(n);const t=document.createElement("button");t.id="createbutton",t.innerHTML="New Project",t.addEventListener("click",(()=>{document.getElementById("formcontainer").style.display="flex"})),e.appendChild(t)}(),function(){const e=document.createElement("div");e.id="content1";const n=document.createElement("div");n.id="sidebar";const t=document.createElement("div");t.id="listcontainer",console.log(t),n.appendChild(t);const o=document.createElement("button");o.id="createbutton",o.innerHTML="New Project",o.addEventListener("click",(()=>{document.getElementById("formcontainer").style.display="flex"})),n.appendChild(o),document.body.appendChild(e),e.appendChild(n);const i=document.createElement("div");i.id="project";const r=function(e){const n=document.createElement("form");n.id="formcontainer",n.style.display="none",e.appendChild(n);const t=document.createElement("label");t.setAttribute("for","title"),t.id="titlelabel",t.innerHTML="Title",n.appendChild(t);const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("placeholder","Enter a Project Title"),o.setAttribute("id","titleinput"),o.setAttribute("name","title"),n.appendChild(o);const i=document.createElement("button");return i.setAttribute("type","submit"),i.id="submit",i.innerHTML="Create Project",i.setAttribute("class","btn"),n.appendChild(i),n.addEventListener("submit",(function(e){e.preventDefault(),g(document.getElementById("titleinput").value),n.reset()})),n}(i);i.appendChild(r),e.appendChild(i),g("Default Project")}(),console.log("working4")})()})();