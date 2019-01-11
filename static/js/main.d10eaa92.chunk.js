(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(34)},17:function(e,a,t){},23:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),i=t.n(r),c=(t(17),t(2)),o=t(3),s=t(5),d=t(4),m=t(6),u=(t(23),function(){return l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"HTML Code Formatter"))}),h=t(10),b=t(1),E=(t(25),l.a.memo(function(e){var a,t=e.displayCodeString;return a=t||"<span>Paste your code in the text area, then click on the submit button.</span>",l.a.createElement("div",{className:"margin-md"},l.a.createElement("h2",{className:"text-center"},"Preview"),l.a.createElement("br",null),l.a.createElement("div",{className:"list-style-none"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))})),v=(t(27),function(e){return e.split(/(?:\r|\n|\r\n)/g)}),y=function(e,a,t){return a.concat(e,t)},p=(t(29),function(){return l.a.createElement("div",null,l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,".bg-blue {",l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,"background-color: blue;")," "),"}"),l.a.createElement("li",null),l.a.createElement("li",null,".c-white {",l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,"color: white;")," "),"}"),l.a.createElement("li",null),l.a.createElement("li",null,".c-blue {",l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,"color: blue")," "),"}"),l.a.createElement("li",null),l.a.createElement("li",null,".c-red {",l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,"color: red;")," "),"}"),l.a.createElement("li",null),l.a.createElement("li",null,".c-green {",l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,"color: green;")," "),"}"),l.a.createElement("li",null),l.a.createElement("li",null,".c-black {",l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,"color: black;")," "),"}"),l.a.createElement("li",null),l.a.createElement("li",null,".f-bold {",l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,"font-weight: bold;")," "),"}"),l.a.createElement("li",null),l.a.createElement("li",null,".bd-color {",l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,"border: solid;"),l.a.createElement("li",null,"padding: 0 1px;")," "),"}")))}),f=function(e){var a=e.activeTab;return l.a.createElement("div",{id:"css",className:"tabContent",style:{display:"CSS"===a?"block":"none"}},l.a.createElement("h2",{style:{margin:0}},"CSS Code"),l.a.createElement("p",{style:{margin:0}},"Copy and paste into your style sheet."),l.a.createElement(p,null))},S=function(e){var a=e.name,t=e.className,n=e.color,r=e.onClick;return l.a.createElement("button",{type:"button",className:"btn ".concat(t," ").concat(n),onClick:r},a)},g=(t(8),function(e){var a=e.title,t=e.selectedRadio,n=e.onChange,r=e.radioName;return l.a.createElement("label",{className:"radio"},a,l.a.createElement("input",{type:"radio",name:r,value:a,checked:t===a,onChange:n}),l.a.createElement("span",{className:"checkmark"}))}),C=function(e){var a=e.radioFormat,t=e.handleRadioChange;return l.a.createElement("div",{className:"flexContainer margin-sm"},l.a.createElement(g,{title:"Color",selectedRadio:a,onChange:t,radioName:"radioFormat"}),l.a.createElement(g,{title:"Border",selectedRadio:a,onChange:t,radioName:"radioFormat"}))},k=function(e){var a=e.radioFormat,t=e.handleRadioChange,n=e.handleAddColor,r=e.activeTab;return l.a.createElement("div",{id:"menu",className:"tabContent",style:{display:"Format"===r?"block":"none"}},l.a.createElement("p",{style:{margin:0}},"Select some text, then click to change the text color"),l.a.createElement("div",{className:"flexContainer flex-vertical flex-warp"},l.a.createElement(C,{radioFormat:a,handleRadioChange:t}),l.a.createElement("div",{className:"flexContainer flex-horizontal flex-warp"},l.a.createElement(S,{name:"Red",color:"color-red",onClick:function(e){return n(e,"red")}}),l.a.createElement(S,{name:"Blue",color:"color-blue",onClick:function(e){return n(e,"blue")}}),l.a.createElement(S,{name:"Black",color:"color-black",onClick:function(e){return n(e,"black")}}),l.a.createElement(S,{name:"Green",color:"color-green",onClick:function(e){return n(e,"green")}}))))},N=function(e){var a=e.activeTab;return l.a.createElement("div",{id:"instructions",className:"tabContent",style:{display:"Instructions"===a?"block":"none"}},l.a.createElement("p",{style:{margin:0}},"Tip:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Go from right to left.")),l.a.createElement("p",null,"Instructions"),l.a.createElement("ol",null,l.a.createElement("li",null,"Paste your code inside the text area."),l.a.createElement("li",null,'Click on the "Convert" button below the text area'),l.a.createElement("li",null,"Select a word to color or add a border around it"),l.a.createElement("li",null,"Select the appropriate radio buttons"),l.a.createElement("li",null,"Click on the desired color button")),l.a.createElement("p",null,"To Do:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Add svg buttons or image, to save space"),l.a.createElement("li",null,"Add tool tip for svg button or image"),l.a.createElement("li",null,"Add word and list radio buttons instead of a tab"),l.a.createElement("li",null,"Add undo redo button"),l.a.createElement("li",null,"Add ability to insert a number in a circle (1,2,3)"),l.a.createElement("li",null,"Add inline stile with JSX, currently JSX only work with class")))},T=function(e){var a=e.title,t=(e.selectedRadio,e.onChange),n=e.radioName;return l.a.createElement("label",{className:"radio"},a,l.a.createElement("input",{type:"checkbox",value:a,name:n,onClick:t}),l.a.createElement("span",{className:"checkmark"}))},w=function(e){var a=e.radioJSX,t=e.radioStyle,n=e.handleRadioChange;return l.a.createElement("div",{className:"flexContainer margin-sm"},l.a.createElement(g,{title:"Style",selectedRadio:t,onChange:n,radioName:"radioStyle"}),l.a.createElement(g,{title:"Class",selectedRadio:t,onChange:n,radioName:"radioStyle"}),l.a.createElement(T,{title:"JSX",selectedRadio:a,onChange:n,radioName:"radioJSX"}),l.a.createElement("span",null,"(class only)"))};var R=function(e){var a=e.handleRadioChange,t=e.handleSubmit,n=e.handleReset,r=e.activeTab,i=e.radioJSX,c=e.radioStyle;return l.a.createElement("div",{id:"start",className:"tabContent",style:{display:"Start"===r?"block":"none"}},l.a.createElement("p",{style:{margin:0}},"Select some text, then click to change the text color"),l.a.createElement("div",{className:"flexContainer flex-vertical flex-warp"},l.a.createElement(w,{radioJSX:i,radioStyle:c,handleRadioChange:a}),l.a.createElement("div",{className:"flexContainer flex-horizontal flex-warp"},l.a.createElement(S,{name:"Convert",color:"color-black",onClick:function(e){return t()}}),l.a.createElement(S,{name:"Reset",color:"color-black",onClick:function(e){return n()}}))))},x=function(e){var a=e.handleSetActiveTab,t=e.activeTab,n=e.tabName;return l.a.createElement("button",{className:"tablinks ".concat(t===n&&"active"),value:n,onClick:function(e){return a(e,n)},id:"defaultOpen"},n)},A=function(e){var a=e.handleSetActiveTab,t=e.activeTab,n=e.handleReset,r=e.handleRadioChange,i=e.handleAddColor,c=e.handleSubmit,o=e.radioFormat,s=e.radioJSX,d=e.radioStyle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tab"},l.a.createElement(x,{handleSetActiveTab:a,activeTab:t,tabName:"Start"}),l.a.createElement(x,{handleSetActiveTab:a,activeTab:t,tabName:"Format"}),l.a.createElement(x,{handleSetActiveTab:a,activeTab:t,tabName:"CSS"}),l.a.createElement(x,{handleSetActiveTab:a,activeTab:t,tabName:"Instructions"})),l.a.createElement(R,{activeTab:t,handleRadioChange:r,handleAddColor:i,handleSubmit:c,handleReset:n,radioJSX:s,radioStyle:d}),l.a.createElement(k,{radioFormat:o,handleRadioChange:r,handleAddColor:i,activeTab:t}),l.a.createElement(f,{activeTab:t}),l.a.createElement(N,{activeTab:t}))},O=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).handleSetActiveTab=function(e){t.setState({activeTab:e.target.value})},t.handleReset=function(){t.displayCodeString="",t.setState(function(){return{isReadOnly:!1,value:"",activeTab:"Start"}})},t.findAndReplace=function(){var e='<ul style="list-style-type:none">',a=[],n="",l="",r="",i=t.state.value,c=v(i),o=c.length;if(t.state.value){t.setState(function(){return{isReadOnly:!0,activeTab:"Format"}});for(var s=0;s<o;s++){var d=(n=c[s].trim()).replace(/\//g,"&#47;");switch(n=d.replace(/</g,"&#60;"),!0){case n.startsWith("}")||n.startsWith(")"):case n.startsWith("&#60;&#47;")&&n.endsWith(">")&&n.split("&#60;").length-1<2:l="</ul>\n",r="</li>";break;case n.startsWith("&#60;")&&n.endsWith(">")&&n.split("&#60;").length-1>1:case n.startsWith("&#60;")&&n.endsWith("&#47;>")&&n.split("&#60;").length-1<2:l="\n<li>",r="</li>";break;case n.startsWith("&#60;")&&!n.endsWith("/>")&&n.endsWith(">"):case n.startsWith("&#60;")&&!n.endsWith("/>")&&!n.endsWith(">")&&1===n.split(" ").length:l="\n<li>",r="\n"+e;break;case n.startsWith("&#47;>")&&n.endsWith("&#47;>"):l="</ul>\n",r="</li>";break;case n.startsWith(">")&&n.endsWith(">"):l="</ul>\n",r="</li>\n"+e;break;case n.startsWith("&#47;&#47;"):l="\n<li>",r="</li>";break;case n.endsWith("{")||n.endsWith("("):l="\n<li>",r="\n"+e;break;default:l="\n<li>",r="</li>"}var m=y(n,l,r);m=(n=m).replace("{","&#123;"),n=m,a[s]=n}var u=a.join(" "),h='<ul style="list-style-type:none">'.concat(u,"\n</ul>"),b='<ul style="list-style-type:none">'.concat(u,"\n</ul>");t.setupDisplay(b),t.setState(function(){return{value:h}})}},t.setupDisplay=function(e){t.setState({codePreviewValue:e})},t.handleAddColor=function(e,a){e.preventDefault();var n="",l="class",r=document.getElementById("codeTextarea"),i=r.selectionStart,c=r.selectionEnd,o=r.value.substring(i,c);if("JSX"===t.state.radioJSX&&(l="className"),"Style"===t.state.radioStyle)switch(t.state.radioFormat){case"Color":n='<span style="color:'.concat(a,'; font-weight: bold"> ').concat(o,"</span>");break;case"Border":n='<span style="border: solid '.concat(a,'; padding: 0 1px"> ').concat(o,"</span>")}else switch(t.state.radioFormat){case"Color":n="<span ".concat(l,'="c-').concat(a,' f-bold"> ').concat(o,"</span>");break;case"Border":n="<span ".concat(l,'="bd-color c-').concat(a,'"> ').concat(o,"</span>")}var s=r.value.substring(0,i)+n+r.value.substring(c),d="";d="JSX"===t.state.radioJSX?s.replace(/<span className=/g,"<span class="):s,t.setState(function(){return{value:s,codePreviewValue:d}})},t.handleRadioChange=function(e){var a=e.target.value;"JSX"===a&&"JSX"===t.state.radioJSX&&(a="");var n=Object(h.a)({},e.target.name,a);t.setState(n)},t.handleChange=t.handleChange.bind(Object(b.a)(Object(b.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(b.a)(Object(b.a)(t))),t.findAndReplace=t.findAndReplace.bind(Object(b.a)(Object(b.a)(t))),t.handleAddColor=t.handleAddColor.bind(Object(b.a)(Object(b.a)(t))),t.handleRadioChange=t.handleRadioChange.bind(Object(b.a)(Object(b.a)(t))),t.displayCodeString="",t.state={value:"",radioFormat:"Color",radioJSX:"",radioStyle:"Style",formatedString:"",isReadOnly:!1,activeTab:"Start",textAreaCode:"",codePreviewValue:""},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(){this.findAndReplace()}},{key:"render",value:function(){return l.a.createElement("div",{className:"flexContainer flex-warp"},l.a.createElement("div",{className:"formatter margin-md"},l.a.createElement("h2",{className:""},"Format Javascript Code Using List"),l.a.createElement(A,{handleAddColor:this.handleAddColor,selectedRadio:this.state.selectedRadio,handleRadioChange:this.handleRadioChange,handleSubmit:this.handleSubmit,handleReset:this.handleReset,handleSetActiveTab:this.handleSetActiveTab,activeTab:this.state.activeTab,radioFormat:this.state.radioFormat,radioJSX:this.state.radioJSX,radioStyle:this.state.radioStyle}),l.a.createElement("div",{className:"formatter margin-top-sm"},l.a.createElement("textarea",{readOnly:this.state.isReadOnly,name:"text",id:"codeTextarea",className:"texArea-height",placeholder:"Paste your code inside",style:{width:"100%"},value:this.state.value,onChange:this.handleChange}),l.a.createElement("br",null))),l.a.createElement(E,{displayCodeString:this.state.codePreviewValue}))}}]),a}(n.Component),W=(t(32),function(e){return l.a.createElement("div",{className:"flexContainer ".concat(e.className?e.className:"")},e.children)}),j=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(W,{className:" flex-vertical"},l.a.createElement(O,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){}},[[11,2,1]]]);
//# sourceMappingURL=main.d10eaa92.chunk.js.map