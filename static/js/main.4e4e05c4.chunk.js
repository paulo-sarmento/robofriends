(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(17),a(19),a(1)),s=a(2),i=a(4),u=a(3),h=a(5),m=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return t.map(function(e,a){return r.a.createElement(m,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})},b=function(e){var t=e.searchChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})))},f=(a(21),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"800px"}},e.children)}),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={hasError:!1},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"There is an error!!!"):this.props.children}}]),t}(n.Component),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{robots:n})))))}}]),t}(n.Component);o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)))},8:function(e,t,a){e.exports=a(23)}},[[8,2,1]]]);
//# sourceMappingURL=main.4e4e05c4.chunk.js.map