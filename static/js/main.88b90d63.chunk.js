(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),s=n(7),r=n(5),a=n(6),l=n(9),d=n(8),i=n(1),u=n.n(i),p=(n(14),n(3)),h=n.n(p),j=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:["Jam"]},e.selectGood=function(t){e.setState((function(e){return{selectedGood:[].concat(Object(s.a)(e.selectedGood),[t])}}))},e.removeGood=function(t){e.setState((function(e){var n=e.selectedGood,c=n.indexOf(t);return n.splice(c,1),{selectedGood:n}}))},e.clearGoods=function(){e.setState({selectedGood:[]})},e.getText=function(e,t){if(1===e)return"Selected goods: ".concat(t[0]," is selected");if(2===e)return"Selected goods: ".concat(t.join(" and ")," are selected");if(e>2){var n=t.slice(0,t.length-1);return"Selected goods: ".concat(n.join(", ")," and ").concat(t[t.length-1]," are selected")}return"Selected good: No goods selected"},e.getKey=function(e){for(var t=0,n=0;n<e.length;n+=1)t+=e.charCodeAt(n);return t.toString()},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"App__title",children:this.getText(t.length,t)}),t&&Object(j.jsx)("button",{type:"button",onClick:function(){return e.clearGoods()},className:"Clear__button",children:"Clear"}),Object(j.jsx)("ul",{className:"App__list",children:b.map((function(n){var c=e.getKey(n);return Object(j.jsxs)("li",{className:h()("App__link",{selected:t.includes(n)}),children:[Object(j.jsx)("span",{children:n}),Object(j.jsx)("button",{className:h()("App__button",{buttonRemove:t.includes(n)}),type:"button",onClick:function(){return t.includes(n)?e.removeGood(n):e.selectGood(n)},children:t.includes(n)?"Remove":"Select"})]},c)}))})]})}}]),n}(u.a.Component);o.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.88b90d63.chunk.js.map