(this["webpackJsonpreflection-chatbot-ui"]=this["webpackJsonpreflection-chatbot-ui"]||[]).push([[0],{39:function(e,t,n){e.exports=n(68)},44:function(e,t,n){},45:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(6),o=n.n(r),c=(n(44),n(10)),l=n(11),i=n(14),u=n(12),m=n(15),d=(n(45),n(13)),h=n(17),g=n(38),b=function(e){var t=e.handleClose,n=e.show;return s.a.createElement(h.a,{show:n,size:"lg","aria-labelledby":"contained-modal-title-vcenter",onHide:t,backdrop:"static",centered:!0},s.a.createElement(h.a.Header,null,s.a.createElement(h.a.Title,{id:"contained-modal-title-vcenter"},"Reflection Chatbot Consent Form")),s.a.createElement(h.a.Body,null,s.a.createElement("p",null,"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")),s.a.createElement(h.a.Footer,null,s.a.createElement(g.a,{onClick:t},"I Agree")))},p=n(34),E=n.n(p),f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchMessages()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{style:{margin:"10px auto",float:"left"}},"Chat Messages"),s.a.createElement("table",{className:"table table-striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"ID"),s.a.createElement("th",null,"Sender"),s.a.createElement("th",null,"Receiver"),s.a.createElement("th",null,"Message"),s.a.createElement("th",null))),s.a.createElement("tbody",null,this.props.messages.map((function(e){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.id),s.a.createElement("td",null,e.sender),s.a.createElement("td",null,e.receiver),s.a.createElement("td",null,e.message),s.a.createElement("td",null))})))))}}]),t}(a.Component),v=Object(d.b)((function(e){return{messages:e.messages.messages}}),{fetchMessages:function(){return function(e){e({type:"FETCH_MESSAGES",payload:null})}}})(f),j=n(19),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){n.setState(Object(j.a)({},e.target.name,e.target.value))},n.sendMessage=function(){var e=n.state,t=e.receiver,a=e.message,s={sender:n.props.user,receiver:t,message:a};n.props.sendMessage(s),n.setState({message:""})},n.state={receiver:"Bot",message:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"User Input textbox"),s.a.createElement("input",{type:"text",name:"message",onChange:this.onChange,value:this.state.message,onKeyPress:function(t){"Enter"===t.key&&e.sendMessage()}}),s.a.createElement("button",{onClick:this.sendMessage,className:"btn btn-primary"},"Submit"))}}]),t}(a.Component),O=Object(d.b)((function(e){return{user:e.sessionID.sessionID}}),{sendMessage:function(e){return function(t){E.a.post("https://ba85e1fd.ngrok.io/webhooks/rest/webhook",e).then((function(n){var a="";n.data.map((function(e){return a=a+e.text+"\n"}));var s={sender:e.sender,receiver:"Bot",message:e.message},r={sender:"Bot",receiver:e.sender,message:a};t({type:"SEND_MESSAGE",userMsg:s,botMsg:r})})).catch((function(e){return console.log(e)}))}}})(y);function M(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,null),s.a.createElement(O,null))}var C=n(9),w=n(35),S=n(36),k=n(37),F=n(18),D={messages:[{id:1,sender:"Bot",receiver:"User",message:"Say hello to begin"}],item:{},numMsgs:1},A={sessionID:"u_"+Date.now()},I=Object(C.combineReducers)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MESSAGES":return Object(F.a)({},e,{items:t.payload});case"SEND_MESSAGE":var n=e.numMsgs;return Object(F.a)({},e,{numMsgs:e.numMsgs+2,messages:[].concat(Object(k.a)(e.messages),[Object(F.a)({},t.userMsg,{id:n+1}),Object(F.a)({},t.botMsg,{id:n+2})])});default:return e}},sessionID:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),B=[S.a],x=Object(C.createStore)(I,{},Object(w.composeWithDevTools)(C.applyMiddleware.apply(void 0,B))),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={showConsentForm:!0},n.closeConsentForm=function(){n.setState({showConsentForm:!1})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,{store:x},s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"}),s.a.createElement(b,{show:this.state.showConsentForm,handleClose:this.closeConsentForm}),s.a.createElement(M,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e2213710.chunk.js.map