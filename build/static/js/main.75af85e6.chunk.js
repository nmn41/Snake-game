(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(5),l=n.n(a),o=(n(10),n(2)),u=n(4);n(11);var i=n(1),s=function e(t){Object(u.a)(this,e),this.value=t,this.next=null},f=function e(t){Object(u.a)(this,e);var n=new s(t);this.head=n,this.tail=n},v="UP",d="RIGHT",h="DOWN",w="LEFT",j=function(e){var t=e.length,n=e[0].length,r=Math.round(t/3),c=Math.round(n/3);return{row:r,col:c,cell:e[r][c]}},b=function(e){for(var t=1,n=[],r=0;r<e;r++){for(var c=[],a=0;a<e;a++)c.push(t++);n.push(c)}return n},O=function(e,t){return t===v?{row:e.row-1,col:e.col}:t===d?{row:e.row,col:e.col+1}:t===h?{row:e.row+1,col:e.col}:t===w?{row:e.row,col:e.col-1}:void 0},x=function(e,t){var n=e.row,r=e.col;return n<0||r<0||(n>=t.length||r>=t[0].length)},p=function(e){return"ArrowUp"===e?v:"ArrowRight"===e?d:"ArrowDown"===e?h:"ArrowLeft"===e?w:""},m=function(e,t){if(null===e.next)return t;var n=e.value,r=n.row,c=n.col,a=e.next.value,l=a.row,o=a.col;return l===r&&o===c+1?d:l===r&&o===c-1?w:o===c&&l===r+1?h:o===c&&l===r-1?v:""},S=function(e,t){var n=m(e,t),r=g(n),c={row:e.value.row,col:e.value.col};return O(c,r)},g=function(e){return e===v?h:e===d?w:e===h?v:e===w?d:void 0},k=function(e,t,n,r){var c="cell";return e===t&&(c=n?"cell cell-purple":"cell cell-red"),r.has(e)&&(c="cell cell-green"),c},E=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(b(15)),l=Object(o.a)(a,2),u=l[0],v=(l[1],Object(r.useState)(new f(j(u)))),h=Object(o.a)(v,2),w=h[0],E=h[1],M=Object(r.useState)(new Set([w.head.value.cell])),A=Object(o.a)(M,2),N=A[0],I=A[1],y=Object(r.useState)(w.head.value.cell+5),L=Object(o.a)(y,2),R=L[0],D=L[1],F=Object(r.useState)(d),J=Object(o.a)(F,2),T=J[0],U=J[1],z=Object(r.useState)(!1),B=Object(o.a)(z,2),G=B[0],H=B[1];Object(r.useEffect)((function(){window.addEventListener("keydown",(function(e){P(e)}))}),[]),function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){W()}),150);var P=function(e){var t=p(e.key);""!==t&&(g(t)===T&&N.size>1||U(t))},W=function(){var e={row:w.head.value.row,col:w.head.value.col},t=O(e,T);if(x(t,u))Q();else{var n=u[t.row][t.col];if(N.has(n))Q();else{var r=new s({row:t.row,col:t.col,cell:n}),c=w.head;w.head=r,c.next=r;var a=new Set(N);a.delete(w.tail.value.cell),a.add(n),w.tail=w.tail.next,null===w.tail&&(w.tail=w.head),n===R&&(q(a),G&&C(),K(a)),I(a)}}},q=function(e){var t=S(w.tail,T);if(!x(t,u)){var n=u[t.row][t.col],r=new s({row:t.row,col:t.col,cell:n}),c=w.tail;w.tail=r,w.tail.next=c,e.add(n)}},C=function(){var e=m(w.tail,T),t=g(e);U(t),function(e){for(var t=null,n=e;null!==n;){var r=n.next;n.next=t,t=n,n=r}}(w.tail);var n=w.head;w.head=w.tail,w.tail=n},K=function(e){for(var t,r,a;r=1,a=225,t=Math.floor(Math.random()*(a-r+1)+r),e.has(t)||R===t;);var l=Math.random()<.3;D(t),H(l),c(n+1)},Q=function(){c(0);var e=j(u);E(new f(e)),D(e.cell+5),I(new Set([e.cell])),U(d)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h1",{children:["Score: ",n]}),Object(i.jsx)("div",{className:"board",children:u.map((function(e,t){return Object(i.jsx)("div",{className:"row",children:e.map((function(e,t){var n=k(e,R,G,N);return Object(i.jsx)("div",{className:n},t)}))},t)}))})]})},M=(n(13),function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(E,{})})});l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.75af85e6.chunk.js.map