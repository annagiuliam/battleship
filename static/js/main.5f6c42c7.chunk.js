(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{13:function(t,e,r){},14:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r(2),c=r.n(a),o=r(7),s=r.n(o),u=(r(13),r(3)),i=r(1),l=function(t,e){var r=[];return{length:t,hitPos:r,hit:function(t){return r.push(t),r},name:e,isSunk:function(){return r.length===t},coords:[]}};function h(){return Math.floor(10*Math.random())+0}function d(t,e){var r=[];return t.forEach((function(t){var n=l(t.length,t.name),a=function(t,e){var r=b(t,e);for(;!j(r,t);)r=b(t,e);return r}(e,n);n.coords=Object(u.a)(a),function(t,e,r){r.forEach((function(r){var n=Object(i.a)(r,2),a=n[0],c=n[1];t[a][c].ship=e.name,t[a][c].status="ship"}))}(e,t,a),r.push(n)})),r}function j(t,e){return t.every((function(t){var r=Object(i.a)(t,2),n=r[0],a=r[1];return!e[n][a].status}))}function b(t,e){var r=[h(),h()],n=h()>5?"vertical":"horizontal",a=Object(i.a)(r,2),c=a[0],o=a[1];return"horizontal"===n?function(t,e,r){var n=null,a=[];if(e+(r.length-1)<10){n=e+(r.length-1);for(var c=e;c<=n;c++)a.push([t,c])}else{n=e-(r.length-1);for(var o=e;o>=n;o--)a.push([t,o])}return a}(c,o,e):function(t,e,r){var n=null,a=[];if(t+(r.length-1)<10){n=t+(r.length-1);for(var c=t;c<=n;c++)a.push([c,e])}else{n=t-(r.length-1);for(var o=t;o>=n;o--)a.push([o,e])}return a}(c,o,e)}var f=function(t){for(var e=[],r=0;r<t;r++){for(var n=[],a=0;a<t;a++){var c={coords:[r,a],status:null,ship:null};n.push(c)}e.push(n)}var o=[{name:"carrier",length:5},{name:"battleship",length:4},{name:"destroyer",length:3},{name:"submarine",length:3},{name:"patrol boat",length:2}],s=d(o,e),u=function(t){return t.reduce((function(t,e){return t+e.length}),0)}(o);return{board:e,size:t,shipYard:s,receiveAttack:function(t){var r=Object(i.a)(t,2),n=r[0],a=r[1];if(e[n][a].ship){var c=s.find((function(t){return t.name===e[n][a].ship}));e[n][a].status="hit",c.hit(t)}else e[n][a].status="missed";return e},getShipsCoords:function(){var t=[];return s.forEach((function(e){for(var r=0;r<e.coords.length;r++)t.push(e.coords[r])})),t},getEmptySquares:function(){var t=[];return e.forEach((function(e){for(var r=0;r<e.length;r++)null===e[r].status&&t.push(e[r].coords)})),t},getLegalSquares:function(){var t=[];return e.forEach((function(e){for(var r=0;r<e.length;r++)"hit"!==e[r].status&&"missed"!==e[r].status&&t.push(e[r])})),t},totalShipLengths:u,allSunk:function(){return s.every((function(t){return t.isSunk()}))}}},v=function(){var t={adjSquares:[],prevAttack:null};function e(t,e){var r=Object(i.a)(e,2),n=r[0],a=r[1];return t.filter((function(t){return t.coords[0]===n-1&&t.coords[1]===a||t.coords[0]===n+1&&t.coords[1]===a||t.coords[0]===n&&t.coords[1]===a-1||t.coords[0]===n&&t.coords[1]===a+1})).map((function(t){return t.coords}))}function r(t,e){var r;if(t.length>0){r=t.map(JSON.stringify).reverse().filter((function(t,e,r){return-1===r.indexOf(t,e+1)})).reverse().map(JSON.parse);for(var n=0;n<r.length;n++)r[n][0]===e[0]&&r[n][1]===e[1]&&r.splice(n,1)}return r}return{getAttackCoords:function(n,a){var c;if(a){var o=e(n,t.prevAttack);if(o.length>0){c=o[Math.floor(Math.random()*o.length)];var s=r([].concat(Object(u.a)(t.adjSquares),Object(u.a)(o)),c);t.adjSquares=Object(u.a)(s)}else c=n[Math.floor(Math.random()*n.length)].coords}else if(t.adjSquares.length>0){var i=t.adjSquares,l=r(i,c=i[Math.floor(Math.random()*i.length)]);t.adjSquares=Object(u.a)(l)}else c=n[Math.floor(Math.random()*n.length)].coords;return t.prevAttack=Object(u.a)(c),c},getAdjacentSquares:e,prevHand:t,updateAdjCoords:r}},O=function(t){var e=t.board,r=t.type,a="computer"===r;return Object(n.jsx)("div",{className:"board ".concat(r),children:e.map((function(e,r){return Object(n.jsx)("div",{className:"row",children:e.map((function(e){var r=Object(i.a)(e.coords,2),c=r[0],o=r[1],s=c.toString()+o.toString();return Object(n.jsx)("div",{className:"square ".concat(e.status),onClick:a?function(){return t.onClick(e.coords)}:void 0},s)}))},r)}))})},m=function(t){return Object(n.jsxs)("div",{className:"player-header",children:[Object(n.jsxs)("h1",{children:["Player: ",t.type]}),Object(n.jsxs)("h2",{children:["Score: ",t.score,"/",t.totalScore]})]})},p=function(t){return Object(n.jsx)("div",{className:"button-section",children:Object(n.jsx)("button",{id:"restart-btn",onClick:t.onClick,children:"Restart Game"})})},g=function(t){var e,r=t.show?"modal display-block":"modal display-none";return e=t.humanScore===t.totalScore?"Human":"Computer",Object(n.jsx)("div",{className:r,children:Object(n.jsxs)("section",{className:"modal-main",children:[Object(n.jsxs)("div",{className:"modal-text",children:[e," wins!"]}),Object(n.jsx)("button",{className:"modal-btn",onClick:t.onClick,children:"OK"})]})})};var S=function(){var t=Object(a.useState)(f(10)),e=Object(i.a)(t,2),r=e[0],c=e[1],o=Object(a.useState)(r.board),s=Object(i.a)(o,2),l=s[0],h=s[1],d=Object(a.useState)(!1),j=Object(i.a)(d,2),b=j[0],S=j[1],x=Object(a.useState)(0),k=Object(i.a)(x,2),y=k[0],N=k[1],C=Object(a.useState)(!1),q=Object(i.a)(C,2),A=q[0],M=q[1],E=Object(a.useState)(f(10)),w=Object(i.a)(E,2),J=w[0],L=w[1],z=Object(a.useState)(J.board),P=Object(i.a)(z,2),B=P[0],G=P[1],H=Object(a.useState)(0),I=Object(i.a)(H,2),K=I[0],R=I[1],T=Object(a.useState)(v()),Y=Object(i.a)(T,2),D=Y[0],F=Y[1],Q=Object(a.useState)(!1),U=Object(i.a)(Q,2),V=U[0],W=U[1],X=r.totalShipLengths;function Z(){var t=J.getLegalSquares(),e=D.getAttackCoords(t,A),r=J.receiveAttack(e),n=Object(i.a)(e,2),a=n[0],c=n[1];"hit"===B[a][c].status?(N(y+1),M(!0)):M(!1),G(r),S(!1)}function $(){var t=f(10);L(t),G(t.board),R(0),M(!1);var e=f(10);c(e),h(e.board),N(0),S(!1);var r=v();F(r)}return Object(a.useEffect)((function(){K===X&&(S(!1),W(!0)),y===X&&W(!0)}),[K,X,y]),Object(n.jsxs)("div",{className:"game-container",children:[Object(n.jsxs)("div",{className:"boards-container",children:[Object(n.jsxs)("div",{className:"human-container",children:[Object(n.jsx)(m,{type:"human",score:K,totalScore:X}),Object(n.jsx)(O,{board:B,type:"human"})]}),Object(n.jsx)(p,{onClick:$}),Object(n.jsxs)("div",{className:"computer-container",children:[Object(n.jsx)(m,{type:"computer",score:y,totalScore:X}),Object(n.jsx)(O,{board:l,type:"computer",onClick:function(t){!b&&function(t){var e=Object(i.a)(t,2),r=e[0],n=e[1];return"hit"!==l[r][n].status&&"missed"!==l[r][n].status}(t)&&K<X&&y<X&&function(t){var e=r.receiveAttack(t),n=Object(i.a)(t,2),a=n[0],c=n[1];"hit"===l[a][c].status&&R(K+1);h(Object(u.a)(e)),S(!0),setTimeout(Z,1e3)}(t)}})]})]}),V&&Object(n.jsx)(g,{show:V,humanScore:K,compScore:y,totalScore:X,onClick:function(){return W(!1),void $()}})]})},x=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Battleship Game"}),Object(n.jsx)("h3",{children:"Play against AI!"})]})};var k=function(){return Object(n.jsxs)("div",{className:"app-container",children:[Object(n.jsx)(x,{}),Object(n.jsx)(S,{})]})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5f6c42c7.chunk.js.map