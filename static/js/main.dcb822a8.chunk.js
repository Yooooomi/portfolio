(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),s=n.n(o),r=(n(17),n(1)),i=n.n(r),u=n(2),m=n(5),l=n(6),p=n(10),d=n(7),f=n(11),v=(n(19),n(8)),g=n.n(v),b=n(9),N=n.n(b),h=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).getCarpetClassName=function(){var e=n.state,t=e.isFocus,a=e.typing,c="";return c=t?a?"input-carret-focus-typing":"input-carret-focus-ide":"input-carret-blur",N()(c,"input-carret")},n.inputOnChange=function(e){n.setState({input:e.target.value,typing:!0}),n.typingTimeout&&clearTimeout(n.typingTimeout),n.typingTimeout=setTimeout(function(){return n.setState({typing:!1})},1e3)},n.state={input:"ls -la",isFocus:!1,typing:!1},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.input;return c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:"cmd-container cmd"},c.a.createElement("div",{className:"cmd-top-container"},c.a.createElement("span",{className:"box"}),c.a.createElement("span",{className:"box"},"Noe Rivals"),c.a.createElement("span",{className:"box"},c.a.createElement("span",{className:"cmd-button cmd-button-red"}),c.a.createElement("span",{className:"cmd-button cmd-button-orange"}),c.a.createElement("span",{className:"cmd-button cmd-button-green"}))),c.a.createElement("div",{className:"cmd-content-container",onClick:Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.inputRef.focus(),e.setState({isFocus:!0});case 2:case"end":return t.stop()}},t)})),onBlur:Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({isFocus:!1});case 1:case"end":return t.stop()}},t)}))},c.a.createElement("div",{className:"cmd-content cmd-content-first"},"[noe@noe-pc ~]$",c.a.createElement(g.a,{ref:function(t){e.inputRef=t},inputClassName:"cmd-input",className:"cmd-input-container",onChange:this.inputOnChange,value:t}),c.a.createElement("span",{className:this.getCarpetClassName()})),c.a.createElement("div",{className:"cmd-content"},"2"),c.a.createElement("div",{className:"cmd-content"},"3"))))}}]),t}(c.a.Component);n(23);var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.dcb822a8.chunk.js.map