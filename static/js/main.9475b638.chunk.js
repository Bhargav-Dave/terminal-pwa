(this["webpackJsonpvasanimit9.github.io"]=this["webpackJsonpvasanimit9.github.io"]||[]).push([[0],[,,function(e,t,n){e.exports={User:"CommandPrompt_User__cSwlE",CommandPrompt:"CommandPrompt_CommandPrompt__2A2vf",LastCommand:"CommandPrompt_LastCommand__1ELmS"}},,,function(e,t,n){e.exports={App:"App_App__16ZpL"}},function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),o=n.n(r),i=(n(11),n(1)),c=n(5),s=n.n(c),u=n(2),m=n.n(u),h=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){t.current.addEventListener("keyup",(function(t){"Enter"!==t.key&&13!==t.keyCode||(""!==o&&"home"!==o.trim().toLowerCase()?e.onEnterPress(o.trim()):e.onEnterPress("~"),c(""))})),t.current.focus(),document.querySelector("*").addEventListener("click",(function(e){e.target.getAttribute("href")||t.current.focus()}))}),[e,o]),l.a.createElement("div",{className:m.a.CommandPrompt},l.a.createElement("span",{className:m.a.User},e.user),"\xa0=>\xa0cmd:\xa0",l.a.createElement("span",{style:{color:"white"}},l.a.createElement("span",{className:m.a.LastCommand},e.lastCommand),"\xa0=>\xa0"),l.a.createElement("br",null),l.a.createElement("input",{ref:t,onChange:function(e){return c(e.target.value)},value:o,placeholder:"command",title:"command"}))},d=function(){return l.a.createElement("div",null,"The following general case-insensitive commands are available:",l.a.createElement("ul",null,l.a.createElement("li",null,"who: to know more about me"),l.a.createElement("li",null,"projects: to know what projects I have worked on"),l.a.createElement("li",null,"install: to install this PWA if supported by your browser"),l.a.createElement("li",null,"linkedin: you'll be taken to my LinkedIn page"),l.a.createElement("li",null,"github: you'll be taken to my GitHub profile"),l.a.createElement("li",null,"license")),'However, these are not the only commands that are recognized. There are some easter eggs for you to find out (try the "valar morghulis" command or the "hallows" command). ;)',l.a.createElement("br",null),"[Note: This is displayed because you are on the homepage, you used the 'help' command, or you used a command that wasn't recognized.]")},p=function(e){return l.a.createElement(a.Fragment,null,l.a.createElement("pre",null,e.mitASCII),l.a.createElement("div",null,"Hi, I'm Mit Vasani.",l.a.createElement("br",null),"An enthusiastic and passionate web developer and freelancer. Technologies I have worked with are:",l.a.createElement("ul",null,l.a.createElement("li",null,"HTML5, CSS3, Vanilla JS"),l.a.createElement("li",null,"Bootstrap, MDBootstrap, Halfmoon, Materialize"),l.a.createElement("li",null,"Less"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"PWAs"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"Flask"),l.a.createElement("li",null,"BeautifulSoup"),l.a.createElement("li",null,"Python-Selenium"),l.a.createElement("li",null,"PHP"))))},E=function(e){var t=Object(a.useState)(e.repos),n=Object(i.a)(t,1)[0];return l.a.createElement("span",null,n.map((function(e,t){return l.a.createElement(a.Fragment,{key:t},"Name: ",e.name,l.a.createElement("br",null),"Description: ",e.description,l.a.createElement("br",null),"GitHub: ",l.a.createElement("a",{href:e.html_url,alt:"repo link",target:"_blank",rel:"noopener noreferrer"},"link"),l.a.createElement("br",null),e.homepage?l.a.createElement(a.Fragment,null,"Homepage:\xa0",l.a.createElement("a",{href:e.homepage,alt:"homepage",target:"_blank",rel:"noopener noreferrer"},"link"),l.a.createElement("br",null)):null,"Last updated: ",function(e){var t=parseInt(e/1e3),n={y:null,m:null,d:null,h:null};return n.h=parseInt(t/3600),n.d=parseInt(n.h/24),n.m=parseInt(n.d/30),n.y=parseInt(n.m/12),n.y?n.y+"y":n.m?n.m+"m":n.d?n.d+"d":n.h+"h"}(Date.now()-Date.parse(e.updated_at))," ago \xa0",l.a.createElement("br",null),"\xa0",l.a.createElement("br",null))})))},f=function(e){return"who"===e.command?l.a.createElement(p,{mitASCII:e.mitASCII}):"install"===e.command?window.installPWA&&window.installPWA()?l.a.createElement("div",null,"You should be prompted for installation."):l.a.createElement("div",null,"Already installed or can't be installed."):"projects"===e.command?l.a.createElement(E,{repos:e.repos}):"address"===e.command?l.a.createElement("span",null,"221B Baker Street"):"valar morghulis"===e.command?l.a.createElement("span",null,"valar dohaeris"):"scratch"===e.command?l.a.createElement("span",null,"'Tis but a scratch!"):"alchemy"===e.command?l.a.createElement("span",null,"Alchemy, It is the scientific technique of understanding the structure of matter, decomposing it, and then reconstructing it. If performed skillfully, it is even possible to create gold out of lead. However, as it is a science, there are some natural principles in place. Only one thing can be created from something else of a certain mass. This is the Principle of Equivalent Exchange."):"py zen"===e.command?l.a.createElement(a.Fragment,null,">>> import this",l.a.createElement("br",null),"The Zen of Python, by Tim Peters",l.a.createElement("br",null),"\xa0",l.a.createElement("br",null),"Beautiful is better than ugly.",l.a.createElement("br",null),"Explicit is better than implicit.",l.a.createElement("br",null),"Simple is better than complex.",l.a.createElement("br",null),"Complex is better than complicated.",l.a.createElement("br",null),"Flat is better than nested.",l.a.createElement("br",null),"Sparse is better than dense.",l.a.createElement("br",null),"Readability counts.",l.a.createElement("br",null),"Special cases aren't special enough to break the rules.",l.a.createElement("br",null),"Although practicality beats purity.",l.a.createElement("br",null),"Errors should never pass silently.",l.a.createElement("br",null),"Unless explicitly silenced.",l.a.createElement("br",null),"In the face of ambiguity, refuse the temptation to guess.",l.a.createElement("br",null),"There should be one-- and preferably only one --obvious way to do it.",l.a.createElement("br",null),"Although that way may not be obvious at first unless you're Dutch.",l.a.createElement("br",null),"Now is better than never.",l.a.createElement("br",null),"Although never is often better than *right* now.",l.a.createElement("br",null),"If the implementation is hard to explain, it's a bad idea.",l.a.createElement("br",null),"If the implementation is easy to explain, it may be a good idea.",l.a.createElement("br",null),"Namespaces are one honking great idea -- let's do more of those!"):"linkedin"===e.command?(window.location="https://www.linkedin.com/in/mit-vasani-8321a2138/",l.a.createElement("span",null,"You should be taken to my LinkedIn page in a moment.")):"github"===e.command?(window.location="https://github.com/vasanimit9",l.a.createElement("span",null,"You should be taken to my github profile in a moment.")):"hallows"===e.command?l.a.createElement("pre",null,e.hallowsASCII):"license"===e.command?l.a.createElement(a.Fragment,null,"MIT License",l.a.createElement("br",null),l.a.createElement("br",null),"Copyright (c) 2020 Mit Vasani",l.a.createElement("br",null),l.a.createElement("br",null),'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',l.a.createElement("br",null),l.a.createElement("br",null),"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",l.a.createElement("br",null),l.a.createElement("br",null),'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'):l.a.createElement(d,null)};var b=function(){var e=Object(a.useState)("~"),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),c=Object(i.a)(o,2),u=c[0],m=c[1],d=Object(a.useState)(),p=Object(i.a)(d,2),E=p[0],b=p[1],g=Object(a.useState)(),w=Object(i.a)(g,2),y=w[0],v=w[1];return Object(a.useEffect)((function(){fetch("https://vasanimit9.pythonanywhere.com/static/repos.json?t="+parseInt(Date.now()/6e5)).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.length;t++)for(var n=0;n<t;n++)if(e[t].updated_at>e[n].updated_at){var a=e[t];e[t]=e[n],e[n]=a}return e})).then((function(e){return m(e)})).catch((function(e){return console.error(e)}))}),[]),Object(a.useEffect)((function(){fetch("/mit_ascii.txt").then((function(e){return e.text()})).then((function(e){return b(e)})).catch((function(e){return console.error(e)}))}),[]),Object(a.useEffect)((function(){fetch("/hallows_ascii.txt").then((function(e){return e.text()})).then((function(e){return v(e)})).catch((function(e){return console.error(e)}))}),[]),l.a.createElement("div",{className:s.a.App},l.a.createElement(f,{command:n,repos:u,mitASCII:E,hallowsASCII:y}),l.a.createElement(h,{user:"vasanimit9",lastCommand:n,onEnterPress:function(e){return function(e){r("home"===e||""===e?"~":e.toLowerCase())}(e)}}))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/terminal-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/terminal-pwa","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.9475b638.chunk.js.map