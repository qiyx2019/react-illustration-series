(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{DROX:function(e,t,n){e.exports=n.p+"static/dfs-reactelement.e386627d.png"},JjdP:function(e,t,n){"use strict";n.r(t);var r=n("HaE+"),a=n("o0o1"),c=n.n(a),l=n("LtsZ");t["default"]={"dfs-demo":{component:Object(l["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){var t,r,a,l,o,u,i,s,d;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n("TqRt"),e.t0=r,e.next=4,n.e(5).then(n.bind(null,"1OyB"));case 4:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=r,e.next=9,n.e(6).then(n.bind(null,"vuIU"));case 9:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.t4=r,e.next=14,n.e(7).then(n.bind(null,"Ji7U"));case 14:return e.t5=e.sent,o=(0,e.t4)(e.t5),e.t6=r,e.next=19,n.e(4).then(n.bind(null,"LK+K"));case 19:return e.t7=e.sent,u=(0,e.t6)(e.t7),i=function(e){(0,o["default"])(r,e);var n=(0,u["default"])(r);function r(){return(0,a["default"])(this,r),n.apply(this,arguments)}return(0,l["default"])(r,[{key:"render",value:function(){return t.createElement("div",{className:"app"},t.createElement("header",null,"header"),t.createElement(s,null),t.createElement("footer",null,"footer"))}}]),r}(t.Component),s=function(e){(0,o["default"])(r,e);var n=(0,u["default"])(r);function r(){return(0,a["default"])(this,r),n.apply(this,arguments)}return(0,l["default"])(r,[{key:"render",value:function(){return t.createElement(t.Fragment,null,t.createElement("p",null,"1"),t.createElement("p",null,"2"),t.createElement("p",null,"3"))}}]),r}(t.Component),d=i,e.abrupt("return",d);case 25:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:'class App extends React.Component {\n  render() {\n    return (\n      <div className="app">\n        <header>header</header>\n        <Content />\n        <footer>footer</footer>\n      </div>\n    );\n  }\n}\n\nclass Content extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <p>1</p>\n        <p>2</p>\n        <p>3</p>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default App;'}},dependencies:{},identifier:"dfs-demo"}},"01-setstate-demo":{component:Object(l["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){var t,r,a,l,o,u,i;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("TqRt"),e.t0=t,e.next=4,n.e(5).then(n.bind(null,"1OyB"));case 4:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=t,e.next=9,n.e(6).then(n.bind(null,"vuIU"));case 9:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.t4=t,e.next=14,n.e(7).then(n.bind(null,"Ji7U"));case 14:return e.t5=e.sent,l=(0,e.t4)(e.t5),e.t6=t,e.next=19,n.e(4).then(n.bind(null,"LK+K"));case 19:return e.t7=e.sent,o=(0,e.t6)(e.t7),e.t8=t,e.next=24,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 24:return e.t9=e.sent,u=(0,e.t8)(e.t9),i=function(e){(0,l["default"])(n,e);var t=(0,o["default"])(n);function n(){var e;(0,r["default"])(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return e=t.call.apply(t,[this].concat(c)),e.state={count:0},e.changeState=function(){var t=e.state.count+1;e.setState({count:e.state.count+1}),t===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")},e.changeState2=function(){var t=e.state.count+1;Promise.resolve().then((function(){e.setState({count:e.state.count+1}),t===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")}))},e}return(0,a["default"])(n,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement("p",null,"\u5f53\u524dcount=",this.state.count),u["default"].createElement("button",{onClick:this.changeState},"\u5f02\u6b65+1"),u["default"].createElement("button",{onClick:this.changeState2},"\u540c\u6b65+1"))}}]),n}(u["default"].Component),e.abrupt("return",i);case 28:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\n\nexport default class App extends React.Component {\n  state = {\n    count: 0,\n  };\n\n  changeState = () => {\n    const newCount = this.state.count + 1;\n    this.setState({\n      count: this.state.count + 1,\n    });\n    if (newCount === this.state.count) {\n      console.log('\u540c\u6b65\u6267\u884crender');\n    } else {\n      console.log('\u5f02\u6b65\u6267\u884crender');\n    }\n  };\n\n  changeState2 = () => {\n    const newCount = this.state.count + 1;\n    Promise.resolve().then(() => {\n      this.setState({\n        count: this.state.count + 1,\n      });\n      if (newCount === this.state.count) {\n        console.log('\u540c\u6b65\u6267\u884crender');\n      } else {\n        console.log('\u5f02\u6b65\u6267\u884crender');\n      }\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\u5f53\u524dcount={this.state.count}</p>\n        <button onClick={this.changeState}>\u5f02\u6b65+1</button>\n        <button onClick={this.changeState2}>\u540c\u6b65+1</button>\n      </div>\n    );\n  }\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"01-setstate-demo"}},"hook-state-demo":{component:Object(l["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){var t,r,a,l,o,u;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){var e=(0,a.useState)(0),t=(0,r["default"])(e,2),n=t[0],c=t[1];return a["default"].createElement("button",{onClick:function(){c(1),c(3),c(2)}},n)},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var o=a?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(r,c,o):r[c]=e[c]}return r["default"]=e,n&&n.set(e,r),r},l=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)},t=n("TqRt"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"ODXe"));case 7:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState } from 'react';\nexport default function App() {\n  const [count, dispatch] = useState(0);\n  return (\n    <button\n      onClick={() => {\n        dispatch(1);\n        dispatch(3);\n        dispatch(2);\n      }}\n    >\n      {count}\n    </button>\n  );\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-state-demo"}},"hook-summary-demo":{component:Object(l["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){var t,r,a,l,o,u;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){var e=(0,a.useState)(1),t=(0,r["default"])(e,2),n=t[0],c=t[1];(0,a.useEffect)((function(){console.log("effect 1 created")}));var l=(0,a.useState)(2),o=(0,r["default"])(l,1),u=o[0];return(0,a.useEffect)((function(){console.log("effect 2 created")})),a["default"].createElement(a["default"].Fragment,null,a["default"].createElement("button",{onClick:function(){return c(n+1)}},n),a["default"].createElement("button",null,u))},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var o=a?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(r,c,o):r[c]=e[c]}return r["default"]=e,n&&n.set(e,r),r},l=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)},t=n("TqRt"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"ODXe"));case 7:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,a=(0,e.t2)(e.t3),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nexport default function App() {\n  // 1. useState\n  const [a, setA] = useState(1);\n  // 2. useEffect\n  useEffect(() => {\n    console.log(`effect 1 created`);\n  });\n  // 3. useState\n  const [b] = useState(2);\n  // 4. useEffect\n  useEffect(() => {\n    console.log(`effect 2 created`);\n  });\n  return (\n    <>\n      <button onClick={() => setA(a + 1)}>{a}</button>\n      <button>{b}</button>\n    </>\n  );\n}"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-summary-demo"}},"hook-demo":{component:Object(l["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){var t,r,a,l,o,u,i;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){Promise.resolve().then((function(){console.log("\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c")}));var e=(0,a.useState)(0),t=(0,r["default"])(e,2),n=t[0],c=t[1];return(0,a.useEffect)((function(){return console.log("\u7b2c1\u4e2aeffect.create dps: []"),function(){console.log("\u7b2c1\u4e2aeffect.destory")}}),[]),(0,a.useEffect)((function(){return console.log("effect.create dps: [count]",n),function(){console.log("\u7b2c2\u4e2aeffect.destory dps: [count]",n)}}),[n]),a["default"].createElement(a["default"].Fragment,null,a["default"].createElement("p",null,"You clicked ",n," times"),a["default"].createElement("button",{onClick:function(){return c(n+1)}},"Click me"))},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var o=a?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(r,c,o):r[c]=e[c]}return r["default"]=e,n&&n.set(e,r),r},l=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)},t=n("TqRt"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"ODXe"));case 7:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,a=(0,e.t2)(e.t3),i=u,e.abrupt("return",i);case 16:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nfunction Example() {\n  Promise.resolve().then(() => {\n    console.log(\n      '\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c',\n    );\n  });\n  // \u7b2c1\u4e2ahook(useState)\n  const [count, setCount] = useState(0);\n  // \u7b2c2\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('\u7b2c1\u4e2aeffect.create dps: []');\n    return () => {\n      console.log('\u7b2c1\u4e2aeffect.destory');\n    };\n  }, []);\n  // \u7b2c3\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('effect.create dps: [count]', count);\n    return () => {\n      console.log('\u7b2c2\u4e2aeffect.destory dps: [count]', count);\n    };\n  }, [count]);\n  return (\n    <>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </>\n  );\n}\nexport default Example;"}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo"}}}},MZF8:function(e,t,n){"use strict";var r=n("ogwx");n.d(t,"a",(function(){return r["b"]}));n("VCU9")},Zs1V:function(e){e.exports=JSON.parse("{}")},rGcG:function(e,t,n){e.exports=n.p+"static/dfs-fibertree.0d88767b.png"},t3BQ:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("dEAq"),l=n("Zxc8"),o=n("H1Ra"),u=n("JjdP"),i=a.a.memo(u["default"]["dfs-demo"].component);t["default"]=e=>(a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"react-\u7b97\u6cd5\u4e4b\u6df1\u5ea6\u4f18\u5148\u904d\u5386"},a.a.createElement(c["AnchorLink"],{to:"#react-\u7b97\u6cd5\u4e4b\u6df1\u5ea6\u4f18\u5148\u904d\u5386","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"React \u7b97\u6cd5\u4e4b\u6df1\u5ea6\u4f18\u5148\u904d\u5386"),a.a.createElement("p",null,"\u5bf9\u4e8e\u6811\u6216\u56fe\u7ed3\u6784\u7684\u641c\u7d22(\u6216\u904d\u5386)\u6765\u8bb2, \u5206\u4e3a\u6df1\u5ea6\u4f18\u5148(DFS)\u548c\u5e7f\u5ea6\u4f18\u5148(BFS)."),a.a.createElement("h2",{id:"\u6982\u5ff5"},a.a.createElement(c["AnchorLink"],{to:"#\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6982\u5ff5"),a.a.createElement("p",null,"\u6df1\u5ea6\u4f18\u5148\u904d\u5386: DFS(\u82f1\u8bed:Depth-First-Search,DFS)\u662f\u4e00\u79cd\u7528\u4e8e\u904d\u5386\u6216\u641c\u7d22\u6811\u6216\u56fe\u7684\u7b97\u6cd5."),a.a.createElement("p",null,"\u6765\u81ea wiki \u4e0a\u7684\u89e3\u91ca(\u66f4\u6743\u5a01): \u5f53",a.a.createElement("code",null,"\u8282\u70b9v"),"\u7684\u6240\u5728\u8fb9\u90fd\u5df1\u88ab\u63a2\u5bfb\u8fc7, \u641c\u7d22\u5c06\u56de\u6eaf\u5230\u53d1\u73b0",a.a.createElement("code",null,"\u8282\u70b9v"),"\u7684\u90a3\u6761\u8fb9\u7684\u8d77\u59cb\u8282\u70b9. \u8fd9\u4e00\u8fc7\u7a0b\u4e00\u76f4\u8fdb\u884c\u5230\u5df2\u53d1\u73b0\u4ece\u6e90\u8282\u70b9\u53ef\u8fbe\u7684\u6240\u6709\u8282\u70b9\u4e3a\u6b62. \u5982\u679c\u8fd8\u5b58\u5728\u672a\u88ab\u53d1\u73b0\u7684\u8282\u70b9, \u5219\u9009\u62e9\u5176\u4e2d\u4e00\u4e2a\u4f5c\u4e3a\u6e90\u8282\u70b9\u5e76\u91cd\u590d\u4ee5\u4e0a\u8fc7\u7a0b, \u6574\u4e2a\u8fdb\u7a0b\u53cd\u590d\u8fdb\u884c\u76f4\u5230\u6240\u6709\u8282\u70b9\u90fd\u88ab\u8bbf\u95ee\u4e3a\u6b62."),a.a.createElement("h2",{id:"\u5b9e\u73b0\u65b9\u5f0f"},a.a.createElement(c["AnchorLink"],{to:"#\u5b9e\u73b0\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u65b9\u5f0f"),a.a.createElement("p",null,"DFS \u7684\u4e3b\u6d41\u5b9e\u73b0\u65b9\u5f0f\u6709 2 \u79cd."),a.a.createElement("ol",null,a.a.createElement("li",null,"\u9012\u5f52(\u7b80\u5355\u7c97\u66b4)"),a.a.createElement("li",null,"\u5229\u7528",a.a.createElement("code",null,"\u6808"),"\u5b58\u50a8\u904d\u5386\u8def\u5f84")),a.a.createElement(o["a"],{code:"function Node() {\n  this.name = '';\n  this.children = [];\n}\n\nfunction dfs(node) {\n  console.log('\u63a2\u5bfb\u9636\u6bb5: ', node.name);\n  node.children.forEach(child => {\n    dfs(child);\n  });\n  console.log('\u56de\u6eaf\u9636\u6bb5: ', node.name);\n}",lang:"js"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u4f7f\u7528\u6808")),a.a.createElement(o["a"],{code:"function Node() {\n  this.name = '';\n  this.children = [];\n\n  // \u56e0\u4e3a\u8981\u5206\u8fa8\u63a2\u5bfb\u9636\u6bb5\u548c\u56de\u6eaf\u9636\u6bb5, \u6240\u4ee5\u5fc5\u987b\u8981\u4e00\u4e2a\u5c5e\u6027\u6765\u8bb0\u5f55\u662f\u5426\u5df2\u7ecf\u8bbf\u95ee\u8fc7\u8be5\u8282\u70b9\n  // \u5982\u679c\u4e0d\u6253\u5370\u63a2\u5bfb\u548c\u56de\u6eaf, \u5c31\u4e0d\u9700\u8981\u6b64\u5c5e\u6027\n  this.visited = false;\n}\n\nfunction dfs(node) {\n  const stack = [];\n  stack.push(node);\n  // \u6808\u9876\u5143\u7d20\u8fd8\u5b58\u5728, \u5c31\u7ee7\u7eed\u5faa\u73af\n  while ((node = stack[stack.length - 1])) {\n    if (node.visited) {\n      console.log('\u56de\u6eaf\u9636\u6bb5: ', node.name);\n      // \u56de\u6eaf\u5b8c\u6210, \u5f39\u51fa\u8be5\u5143\u7d20\n      stack.pop();\n    } else {\n      console.log('\u63a2\u5bfb\u9636\u6bb5: ', node.name);\n      node.visited = true;\n      // \u5229\u7528\u6808\u7684\u5148\u8fdb\u540e\u51fa\u7684\u7279\u6027, \u5012\u5e8f\u5c06\u8282\u70b9\u9001\u5165\u6808\u4e2d\n      for (let i = node.children.length - 1; i >= 0; i--) {\n        stack.push(node.children[i]);\n      }\n    }\n  }\n}",lang:"js"}),a.a.createElement("h2",{id:"react-\u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f"},a.a.createElement(c["AnchorLink"],{to:"#react-\u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"React \u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f"),a.a.createElement("p",null,"\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u5728",a.a.createElement("code",null,"react"),"\u5f53\u4e2d\u7684\u4f7f\u7528\u975e\u5e38\u5178\u578b, \u6700\u4e3b\u8981\u7684\u4f7f\u7528\u65f6\u5728",a.a.createElement("code",null,"ReactElement"),"\u548c",a.a.createElement("code",null,"fiber"),"\u6811\u7684\u6784\u9020\u8fc7\u7a0b. \u5176\u6b21\u662f\u5728\u4f7f\u7528",a.a.createElement("code",null,"context"),"\u65f6, \u9700\u8981\u6df1\u5ea6\u4f18\u5148\u5730\u67e5\u627e\u6d88\u8d39",a.a.createElement("code",null,"context"),"\u7684\u8282\u70b9."),a.a.createElement("h3",{id:"reactelement-\u6811\u7684\u6784\u9020"},a.a.createElement(c["AnchorLink"],{to:"#reactelement-\u6811\u7684\u6784\u9020","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),'ReactElement "\u6811"\u7684\u6784\u9020'),a.a.createElement("p",null,a.a.createElement("code",null,"ReactElement"),"\u4e0d\u80fd\u7b97\u662f\u4e25\u683c\u7684\u6811\u7ed3\u6784, \u4e3a\u4e86\u65b9\u4fbf\u8868\u8ff0, \u540e\u6587\u90fd\u79f0\u4e4b\u4e3a\u6811."),a.a.createElement("p",null,"\u5728",a.a.createElement("code",null,"react-reconciler"),"\u5305\u4e2d, ",a.a.createElement("code",null,"ReactElement"),"\u7684\u6784\u9020\u8fc7\u7a0b\u5b9e\u9645\u4e0a\u662f\u5d4c\u5957\u5728",a.a.createElement("code",null,"fiber\u6811\u6784\u9020\u5faa\u73af"),"\u8fc7\u7a0b\u4e2d\u7684, \u4e0e",a.a.createElement("code",null,"fiber"),"\u6811\u7684\u6784\u9020\u662f\u76f8\u4e92\u4ea4\u66ff\u8fdb\u884c\u7684(\u5728",a.a.createElement("code",null,"fiber \u6811\u6784\u5efa"),"\u7ae0\u8282\u4e2d\u8be6\u7ec6\u89e3\u8bfb, \u672c\u8282\u53ea\u4ecb\u7ecd\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u7684\u4f7f\u7528\u573a\u666f)."),a.a.createElement("p",null,a.a.createElement("code",null,"ReactElement"),"\u6811\u7684\u6784\u9020, \u5b9e\u9645\u4e0a\u5c31\u662f\u5404\u7ea7\u7ec4\u4ef6",a.a.createElement("code",null,"render"),"\u4e4b\u540e\u7684\u603b\u548c. \u6574\u4e2a\u8fc7\u7a0b\u4f53\u73b0\u5728",a.a.createElement("code",null,"reconciler"),"\u5de5\u4f5c\u5faa\u73af\u4e4b\u4e2d."),a.a.createElement("p",null,"\u6e90\u7801\u4f4d\u4e8e",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1558"},a.a.createElement("code",null,"ReactFiberWorkLoop.js")),"\u4e2d, \u6b64\u5904\u4e3a\u4e86\u7b80\u660e, \u5df2\u7ecf\u5c06\u6e90\u7801\u4e2d\u4e0e dfs \u65e0\u5173\u7684\u65c1\u652f\u903b\u8f91\u53bb\u6389."),a.a.createElement(o["a"],{code:"function workLoopSync() {\n  // 1. \u6700\u5916\u5c42\u5faa\u73af, \u4fdd\u8bc1\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u80fd\u904d\u5386, \u4e0d\u4f1a\u9057\u6f0f\n  while (workInProgress !== null) {\n    performUnitOfWork(workInProgress);\n  }\n}\n\nfunction performUnitOfWork(unitOfWork: Fiber): void {\n  const current = unitOfWork.alternate;\n  let next;\n  // 2. beginWork\u662f\u5411\u4e0b\u63a2\u5bfb\u9636\u6bb5\n  next = beginWork(current, unitOfWork, subtreeRenderLanes);\n  if (next === null) {\n    // 3. completeUnitOfWork \u662f\u56de\u6eaf\u9636\u6bb5\n    completeUnitOfWork(unitOfWork);\n  } else {\n    workInProgress = next;\n  }\n}\n\nfunction completeUnitOfWork(unitOfWork: Fiber): void {\n  let completedWork = unitOfWork;\n  do {\n    const current = completedWork.alternate;\n    const returnFiber = completedWork.return;\n    let next;\n    // 3.1 \u56de\u6eaf\u5e76\u5904\u7406\u8282\u70b9\n    next = completeWork(current, completedWork, subtreeRenderLanes);\n    if (next !== null) {\n      // \u5224\u65ad\u5728\u5904\u7406\u8282\u70b9\u7684\u8fc7\u7a0b\u4e2d, \u662f\u5426\u6d3e\u751f\u51fa\u65b0\u7684\u8282\u70b9\n      workInProgress = next;\n      return;\n    }\n    const siblingFiber = completedWork.sibling;\n    // 3.2 \u5224\u65ad\u662f\u5426\u6709\u65c1\u652f\n    if (siblingFiber !== null) {\n      workInProgress = siblingFiber;\n      return;\n    }\n    // 3.3 \u6ca1\u6709\u65c1\u652f \u7ee7\u7eed\u56de\u6eaf\n    completedWork = returnFiber;\n    workInProgress = completedWork;\n  } while (completedWork !== null);\n}",lang:"js"}),a.a.createElement("p",null,"\u4ee5\u4e0a\u6e90\u7801\u672c\u8d28\u4e0a\u662f\u91c7\u7528\u9012\u5f52\u7684\u65b9\u5f0f\u8fdb\u884c dfs, \u5047\u8bbe\u6709\u4ee5\u4e0b\u7ec4\u4ef6\u7ed3\u6784:")),a.a.createElement(l["default"],u["default"]["dfs-demo"].previewerProps,a.a.createElement(i,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("p",null,"\u5219\u53ef\u4ee5\u7ed8\u5236\u51fa\u904d\u5386\u8def\u5f84\u5982\u4e0b:"),a.a.createElement("img",{src:n("DROX"),width:500}),a.a.createElement("p",null,"\u6ce8\u610f:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"ReactElement"),"\u6811\u662f\u5728\u5927\u5faa\u73af\u4e2d\u7684",a.a.createElement("code",null,"beginWork"),'\u9636\u6bb5"\u9010\u7ea7"\u751f\u6210\u7684.'),a.a.createElement("li",null,'"\u9010\u7ea7"\u4e2d\u7684\u6bcf\u4e00\u7ea7\u662f\u6307\u4e00\u4e2a',a.a.createElement("code",null,"class"),"\u6216",a.a.createElement("code",null,"function"),"\u7c7b\u578b\u7684\u7ec4\u4ef6, \u6bcf\u8c03\u7528\u4e00\u6b21",a.a.createElement("code",null,"render"),"\u6216\u6267\u884c\u4e00\u6b21",a.a.createElement("code",null,"function"),"\u8c03\u7528, \u5c31\u4f1a\u751f\u6210\u4e00\u6279",a.a.createElement("code",null,"ReactElement"),"\u8282\u70b9."),a.a.createElement("li",null,a.a.createElement("code",null,"ReactElement"),"\u6811\u7684\u6784\u9020, \u5b9e\u9645\u4e0a\u5c31\u662f\u5404\u7ea7\u7ec4\u4ef6",a.a.createElement("code",null,"render"),"\u4e4b\u540e\u7684\u603b\u548c.")),a.a.createElement("h3",{id:"fiber-\u6811\u7684\u6784\u9020"},a.a.createElement(c["AnchorLink"],{to:"#fiber-\u6811\u7684\u6784\u9020","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"fiber \u6811\u7684\u6784\u9020"),a.a.createElement("p",null,"\u5728",a.a.createElement("code",null,"ReactElement"),"\u7684\u6784\u9020\u8fc7\u7a0b\u4e2d, \u540c\u65f6\u4f34\u968f\u7740",a.a.createElement("code",null,"fiber"),"\u6811\u7684\u6784\u9020, ",a.a.createElement("code",null,"fiber"),"\u6811\u540c\u6837\u4e5f\u662f\u5728",a.a.createElement("code",null,"beginWork"),"\u9636\u6bb5\u751f\u6210\u7684."),a.a.createElement("p",null,"\u7ed8\u5236\u51fa\u904d\u5386\u8def\u5f84\u5982\u4e0b:"),a.a.createElement("p",null,a.a.createElement("img",{src:n("rGcG"),alt:""})),a.a.createElement("h3",{id:"\u67e5\u627e-context-\u7684\u6d88\u8d39\u8282\u70b9"},a.a.createElement(c["AnchorLink"],{to:"#\u67e5\u627e-context-\u7684\u6d88\u8d39\u8282\u70b9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u627e context \u7684\u6d88\u8d39\u8282\u70b9"),a.a.createElement("p",null,"\u5f53",a.a.createElement("code",null,"context"),"\u6539\u53d8\u4e4b\u540e, \u9700\u8981\u627e\u51fa\u4f9d\u8d56\u8be5",a.a.createElement("code",null,"context"),"\u7684\u6240\u6709\u5b50\u8282\u70b9(\u8be6\u7ec6\u5206\u6790\u4f1a\u5728",a.a.createElement("code",null,"context\u539f\u7406"),"\u7ae0\u8282\u6df1\u5165\u89e3\u8bfb), \u8fd9\u91cc\u540c\u6837\u4e5f\u662f\u4e00\u4e2a",a.a.createElement("code",null,"DFS"),", \u5177\u4f53\u6e90\u7801\u5728",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberNewContext.old.js#L182-L295"},"ReactFiberNewContext.js"),"."),a.a.createElement("p",null,"\u5c06\u5176\u4e3b\u5e72\u903b\u8f91\u5265\u79bb\u51fa\u6765, \u53ef\u4ee5\u6e05\u6670\u7684\u770b\u51fa\u91c7\u7528\u5faa\u73af\u9012\u5f52\u7684\u65b9\u5f0f\u8fdb\u884c\u904d\u5386:"),a.a.createElement(o["a"],{code:"export function propagateContextChange(\n  workInProgress: Fiber,\n  context: ReactContext<mixed>,\n  changedBits: number,\n  renderLanes: Lanes,\n): void {\n  let fiber = workInProgress.child;\n  while (fiber !== null) {\n    let nextFiber;\n    // Visit this fiber.\n    const list = fiber.dependencies;\n    if (list !== null) {\n      // \u5339\u914dcontext\u7b49\u903b\u8f91, \u548cdfs\u65e0\u5173, \u6b64\u5904\u53ef\u4ee5\u6682\u65f6\u5ffd\u7565\n      // ...\n    } else {\n      // \u5411\u4e0b\u63a2\u5bfb\n      nextFiber = fiber.child;\n    }\n    fiber = nextFiber;\n  }\n}",lang:"js"}),a.a.createElement("h2",{id:"\u603b\u7ed3"},a.a.createElement(c["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),a.a.createElement("p",null,"\u7531\u4e8e",a.a.createElement("code",null,"react"),"\u5185\u90e8\u4f7f\u7528\u4e86",a.a.createElement("code",null,"ReactElement"),"\u548c",a.a.createElement("code",null,"fiber"),"\u4e24\u5927\u6811\u5f62\u7ed3\u6784, \u6240\u4ee5\u6709\u4e0d\u5c11\u5173\u4e8e\u8282\u70b9\u8bbf\u95ee\u7684\u903b\u8f91."),a.a.createElement("p",null,"\u672c\u8282\u4e3b\u8981\u4ecb\u7ecd\u4e86",a.a.createElement("code",null,"DFS"),"\u7684\u6982\u5ff5\u548c\u5b83\u5728",a.a.createElement("code",null,"react"),"\u6e90\u7801\u4e2d\u7684\u4f7f\u7528\u60c5\u51b5. \u5176\u4e2d",a.a.createElement("code",null,"fiber"),"\u6811\u7684",a.a.createElement("code",null,"DFS"),"\u904d\u5386, \u6d89\u53ca\u5230\u7684\u4ee3\u7801\u591a, \u5206\u5e03\u5e7f, \u6db5\u76d6\u4e86",a.a.createElement("code",null,"reconciler"),"\u9636\u6bb5\u7684\u5927\u90e8\u5206\u5de5\u4f5c, \u662f",a.a.createElement("code",null,"reconciler"),"\u9636\u6bb5\u5de5\u4f5c\u5faa\u73af\u7684\u6838\u5fc3\u6d41\u7a0b."),a.a.createElement("p",null,"\u9664\u4e86",a.a.createElement("code",null,"DFS"),"\u4e4b\u5916, \u6e90\u7801\u4e2d\u8fd8\u6709\u5f88\u591a\u903b\u8f91\u90fd\u662f\u67e5\u627e\u6811\u4e2d\u7684\u8282\u70b9(\u5982: \u5411\u4e0a\u67e5\u627e\u7236\u8282\u70b9\u7b49). \u5bf9\u6811\u5f62\u7ed3\u6784\u7684\u904d\u5386\u5728\u6e90\u7801\u4e2d\u7684\u6bd4\u4f8b\u5f88\u9ad8, \u4e86\u89e3\u8fd9\u4e9b\u7b97\u6cd5\u6280\u5de7\u80fd\u591f\u66f4\u597d\u7684\u7406\u89e3",a.a.createElement("code",null,"react"),"\u6e90\u7801."),a.a.createElement("h2",{id:"\u53c2\u8003\u8d44\u6599"},a.a.createElement(c["AnchorLink"],{to:"#\u53c2\u8003\u8d44\u6599","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u8d44\u6599"),a.a.createElement("p",null,a.a.createElement(c["Link"],{to:"https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2"},"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"))))))}}]);