(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(3),i=n.n(a),o=n(4),l=n(5),d=n(7),s=n(6),j=n(0),b=function(t){var e=t.good,n=t.neutral,c=t.bad,r=t.total,a=t.positive;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Good:",e]}),Object(j.jsxs)("li",{children:["Neutral:",n]}),Object(j.jsxs)("li",{children:["Bad:",c]}),Object(j.jsxs)("li",{children:["Total:",r]}),Object(j.jsxs)("li",{children:["Positive feedback:",a,"%"]})]})})},u=function(t){var e=t.onHandleFn;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"button",onClick:e,children:"Good"}),Object(j.jsx)("button",{type:"button",onClick:e,children:"Neutral"}),Object(j.jsx)("button",{type:"button",onClick:e,children:"Bad"})]})},h=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e}),n]})},O=function(){return Object(j.jsx)("p",{children:"No feedback given"})},x=function(t){Object(d.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},t.handleFn=function(e){t.setState((function(t){return"Good"===e.target.textContent?{good:t.good+1}:"Neutral"===e.target.textContent?{neutral:t.neutral+1}:{bad:t.bad+1}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,r=e+n+c,a=Math.round(e/r*100);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{title:"Please leave feedback",children:Object(j.jsx)(u,{onHandleFn:this.handleFn})}),Object(j.jsx)(h,{title:"Statistics",children:0===r?Object(j.jsx)(O,{}):Object(j.jsx)(b,{good:e,neutral:n,bad:c,total:r,positive:a})})]})}}]),n}(c.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.de522118.chunk.js.map