(this.webpackJsonppetreact=this.webpackJsonppetreact||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),s=a(3),o=a(4),i=a(5),m=a(7),h=a(6),p=function(e){return console.log(e.pet),r.a.createElement("div",{className:"card text-white bg-success mb-3",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-header"},e.pet.name),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"Age: ",e.pet.age),r.a.createElement("p",{className:"card-text"},"Breed: ",e.pet.breed),r.a.createElement("p",{className:"card-text"},"Hair Color: ",e.pet.hairColor),r.a.createElement("p",{className:"card-text"},"Species: ",e.pet.species)))},u=function(e){return r.a.createElement("form",null,r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"name"},"name"),r.a.createElement("input",{type:"text",name:"name",id:"name",onChange:e.handleInputChange,value:e.name})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"age"},"age"),r.a.createElement("input",{type:"text",name:"age",id:"age ",onChange:e.handleInputChange,value:e.age})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"breed"},"breed"),r.a.createElement("input",{type:"text",name:"breed",id:"breed",onChange:e.handleInputChange,value:e.breed})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"hairColor"},"hair color"),r.a.createElement("input",{type:"text",name:"hairColor",id:"hairColor",onChange:e.handleInputChange,value:e.hairColor})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"species"},"species"),r.a.createElement("input",{type:"text",name:"species",id:"species",onChange:e.handleInputChange,value:e.species})),r.a.createElement("button",{onClick:e.handleSubmit},"Submit"))},d=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",age:"",breed:"",hairColor:"",species:"",pets:[]},e.handleInputChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=JSON.parse(JSON.stringify(e.state.pets));a.push({name:e.state.name,age:e.state.age,breed:e.state.breed,hairColor:e.state.hairColor,species:e.state.species}),e.setState({pets:a,name:"",age:"",breed:"",hairColor:"",species:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{name:this.state.name,age:this.state.age,breed:this.state.breed,hairColor:this.state.hairColor,species:this.state.species,handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit}),this.state.pets.map((function(e){return r.a.createElement(p,{pet:e})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.d766cc58.chunk.js.map