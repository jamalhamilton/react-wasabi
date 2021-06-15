(this["webpackJsonpogd-inspection-form"]=this["webpackJsonpogd-inspection-form"]||[]).push([[0],{526:function(e,t,o){"use strict";o.r(t);var i=o(0),n=o.n(i),a=o(11),r=o.n(a),c=o(568),l=o(569),s=o(22),d=o(27),f=o(558),u=o(566),p=o(47),h=o(571),m=o(565),b=o(560),j=o(102),g=o(46),x=o(44),y=o(562),O=o(557),v="#0086D6";var k=o(99),C=o(100),w=o(68),F=function(){function e(t){Object(k.a)(this,e),this._name="",this._stops=[],this._colorSpace="rgb",this._domain=[0,1],this._name=t.name?t.name:this._name,this._stops=t.stops?t.stops:this._stops,this._colorSpace=t.colorSpace?t.colorSpace:this._colorSpace,this._domain=t.domain?t.domain:this._domain}return Object(C.a)(e,[{key:"name",get:function(){return this._name},set:function(e){this._name=e}},{key:"domain",get:function(){return this._domain},set:function(e){this._domain=e}},{key:"stops",get:function(){return this._stops},set:function(e){this._stops=e}},{key:"colorSpace",get:function(){return this._colorSpace},set:function(e){this._colorSpace=e}},{key:"getColor",value:function(e){var t=Math.min.apply(Math,Object(s.a)(this.domain)),o=Math.max.apply(Math,Object(s.a)(this.domain)),i=Math.min(o,Math.max(t,e));return w.scale(this._stops).domain(this._domain).mode(this._colorSpace)(i).hex()}},{key:"getColorArray",value:function(e){return w.scale(this._stops).domain(this._domain).mode(this._colorSpace).colors(e)}}]),e}();F.Grayscale=new F({stops:["#ffffff","#000000"],name:"Grayscale"}),F.TrafficLight=new F({stops:["#ff0000","#ffff00","#00ff00"],name:"Traffic Light"}),F.RedBlue=new F({stops:["#ff0000","#0000ff"],name:"Red-Blue"}),F.Flag=new F({stops:["#ff0000","#ffffff","#0000ff"],name:"Flag"}),F.Blurple=new F({stops:["#d732d7","#587aee"],name:"Blurple"}),F.Jet=new F({stops:["#0024ae","#0088d0","#00ff00","#ffff00","#d732d7","#d50000"],name:"Jet"}),F.Rainbow=new F({stops:["#ff0000","#ffa500","#ffff00","#00ff00","#0000ff","#d42dd4"],name:"Rainbow"});var M=[F.Grayscale,F.TrafficLight,F.Blurple,F.Flag,F.Jet,F.Rainbow,F.RedBlue],S={Residential:[{id:"PDFeapAH3bHu2jBxLqfMe",label:"Door Tag",type:"photo",order:0,description:"Picture of sticker and job number"},{id:"fjiJYejf4bVqvUoeTlc1l",label:"Panels",type:"rating",order:1,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"0Djg1ZT5MFtC5Wf9pNKE2",label:"Hinges",type:"rating",order:2,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"zZo1x0NmPU4kGIoEZ9Idt",label:"Rollers",type:"rating",order:3,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"8aaFdAsvfMJ7uFeqXKJSu",label:"Cables",type:"rating",order:4,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"Yr5ag5dUUlJ4ZTW1BCBxo",label:"Bearings",type:"rating",order:5,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"4YiS73KiOim6gfD0Lcid5",label:"Top Fixtures",type:"rating",order:6,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"rn8akyQsXLz-kQMFLhWVg",label:"Bottom Fixtures",type:"rating",order:7,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"qk49tb-OV5yRRKbm7Vxj8",label:"Springs",type:"rating",order:8,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"EqQNdzf9Tjh2XSk-fUFMZ",label:"Bottom Seal",type:"rating",order:9,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"MFn6RZGiYdNakC2P1Y9p7",label:"Perimeter Seal",type:"rating",order:10,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"pfSxyDWAXqRy9Wm4yugrJ",label:"Motor",type:"rating",order:11,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"BLqF8JjA378OCZriM3fA_",label:"Belt / Chain",type:"rating",order:12,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"s3SiryVYng5J9ivU1kcwL",label:"Gear & Sprocket / Coupler",type:"rating",order:13,maxValue:3,style:"colors",colorMap:"Traffic Light"},{id:"ubHHfQ5qg3X-sKmBYGllu",label:"Door Measurement",type:"textField",order:14,description:"Measure all doors on site and include measurements here."}],Commercial:[{id:"OSb7hUAmN7-Gn-jIAW1_4",label:"Picture of Doors / Dock Equipment / Motor on Arrival",type:"photo",order:6,description:"Take picture of whatever you're there to service / fix / replace / etc..."},{id:"YajcA2E-8BcDsZVKBo3HQ",label:"Cables",type:"rating",order:0,style:"colors",colorMap:"Traffic Light",description:"Cable Quality",ratingCount:"3",ratingMax:"2",maxValue:3},{id:"jZ3v1FXX0PY-IJfGs81d3",label:"Springs",type:"rating",order:1,style:"colors",colorMap:"Traffic Light",description:"Measure both springs, broken or not.",maxValue:3},{id:"NFCcKG2NpogWCAVIwvQ0F",label:"Measure the door opening (jamb to jamb, floor to header)",type:"textField",order:2,description:"Width x Height"},{id:"DRToAyWTRi0TXMXTq-ujT",label:"Door Manufacturer / Model",type:"textField",order:3,description:"Who made this door, which model, there are stickers on the sides of panels."},{id:"hpuMS-5oeksE3PD8ENjHN",label:"Motor Existing?",type:"textField",order:4,description:"If there is a motor, need to know manufacturer, horsepower, power requirements, there is a stamp on every motor that looks this way."},{id:"-EOH7wMsmPXdbIwhcXFHk",label:"Sticker with number",type:"photo",order:5,description:"Sticker with number. If there's no sticker they deduct $20 so your choice."}]},T=o(67),N=o.n(T),_=o(6),L=new(o(190).Endpoint)("s3.us-east-1.wasabisys.com"),B=Object(f.a)((function(e){return{clickable:{cursor:"pointer",marginRight:e.spacing(1)},icon:{marginRight:e.spacing(1),cursor:"pointer"},wrapper:{display:"inline-flex",justifyContent:"flex-start",alignItems:"center"},empty:{color:"transparent"},filled:{color:e.palette.primary.main}}})),R=function(e){var t=B(),o=Object(i.useState)([]),n=Object(d.a)(o,2),a=n[0],r=n[1],c=function(t){return function(o){e.onRatingClick&&e.onRatingClick(t)}};Object(i.useEffect)((function(){var o=[];if("stars"===e.style)for(var i=1;i<=e.maxValue;i++)o.push(Object(_.jsx)(x.a,{icon:e.value<i?j.a:g.d,className:t.clickable,onClick:c(i),size:"2x"},e.id+"_"+i));if("colors"===e.style)for(var n=M.findIndex((function(t){return t.name===e.colorMap})),a=1;a<=e.maxValue;a++)o.push(Object(_.jsx)(b.a,{variant:"contained",className:t.clickable,disableRipple:!0,disableFocusRipple:!0,onClick:c(a),style:{background:M[n].getColor((a-1)/(e.maxValue-1))},children:Object(_.jsx)(x.a,{icon:g.b,style:{opacity:e.value===a?1:0}})}));r(o)}),[e]);return Object(_.jsxs)("div",{className:t.wrapper,children:[a,Object(_.jsx)(y.a,{color:"inherit",onClick:function(){e.onNotesClick&&e.onNotesClick()},children:Object(_.jsx)(x.a,{icon:g.c})}),Object(_.jsx)(y.a,{color:"inherit",onClick:function(){e.onPhotoClick&&e.onPhotoClick()},children:Object(_.jsx)(x.a,{icon:g.a})}),Object(_.jsx)("input",{type:"file",accept:"image/*",capture:"camera",onChange:function(e){!function(e){var t=e[0],o=t.name;console.log("e",e),new N.a({endpoint:L,region:"us-east-1",accessKeyId:"EM7EN26R9DZQ3MQFFFM7",secretAccessKey:"U8VJ2SCGu6BEStEJXeZvEaD2DCSSio0zuVPLhLyi"}).putObject({Body:t,Bucket:"test-jamal-h",Key:o},(function(e,t){e&&console.log(e)}))}(e.target.files)}})]})},V=Object(f.a)((function(e){return{root:{position:"relative",width:"100%",display:"block",padding:e.spacing(1)},clickShield:{background:"rgba(0 ,0, 0, 0.1)",position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",zIndex:999},divider:{margin:e.spacing(1)},formButton:{marginRight:e.spacing(1)},textField:{width:"100%"},formRow:{marginTop:e.spacing(2),display:"flex",flexDirection:"column"},header:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start"},bold:{fontWeight:"bold"}}})),D=function(e){var t=V(),o=Object(i.useState)([]),n=Object(d.a)(o,2),a=n[0],r=n[1],c=function(e){return function(t){console.log(e,t)}},l=function(t){return function(o){e.onUpdate&&e.onUpdate(Object(p.a)(Object(p.a)({},t),{},{value:o}))}},f=function(e){return Object(_.jsx)(_.Fragment,{children:("stars"===e.style||"colors"===e.style)&&Object(_.jsx)("div",{className:t.formRow,children:Object(_.jsx)(R,Object(p.a)(Object(p.a)({},e),{},{onRatingClick:l(e),onNotesClick:function(){return function(e){var t=Object(s.a)(a);t.findIndex((function(t){return t===e.id}))<0?t.push(e.id):t=t.filter((function(t){return t!==e.id})),r(Object(s.a)(t))}(e)},onPhotoClick:function(){return function(e){console.log("formField",e)}(e)}}))})})},j=function(e){switch(e.type){case"textField":return function(e){return Object(_.jsx)(h.a,{variant:"outlined",multiline:!0,className:t.textField,onChange:c(e.key)})}(e);case"rating":return f(e);case"checkboxes":return Object(_.jsx)(_.Fragment,{})}},g=function(e){return a.includes(e.id)?Object(_.jsx)(h.a,{variant:"outlined",size:"small",margin:"dense",onChange:c("comment"),value:e.comments},[e.id,"notes"].join("_")):Object(_.jsx)(_.Fragment,{})};return Object(i.useEffect)((function(){e.formFields&&r(e.formFields.filter((function(e){return e.hasOwnProperty("notes")})).map((function(e){return e.id})))}),[e]),Object(_.jsxs)("div",{className:t.root,children:[e.readonly&&Object(_.jsx)("div",{className:t.clickShield}),Object(_.jsxs)(m.a,{container:!0,children:[Object(_.jsx)("h2",{children:e.title}),e.formFields&&e.formFields.map((function(e,o){return Object(_.jsxs)(m.a,{container:!0,className:t.formRow,children:[Object(_.jsx)("div",{className:t.bold,children:e.label}),Object(_.jsx)("div",{children:e.description}),Object(_.jsx)("div",{children:j(e)}),Object(_.jsx)("div",{children:g(e)})]},o)}))]}),Object(_.jsx)(u.a,{className:t.divider}),Object(_.jsx)(b.a,{className:t.formButton,variant:"contained",onClick:function(){e.onSubmit&&e.onSubmit()},color:"primary",children:"Submit"}),Object(_.jsx)(b.a,{className:t.formButton,variant:"contained",onClick:function(){e.onClear&&e.onClear()},color:"default",children:"Clear"})]})},E=o(567),P=o(570),I=o(573),J=Object(f.a)((function(e){return{root:{display:"flex",flexDirection:"column"},button:{marginBottom:e.spacing(1),marginTop:e.spacing(1)}}})),A=function(e){var t=J();return Object(_.jsxs)("div",{className:t.root,children:[Object(_.jsx)(E.a,{variant:"h6",children:"Controls"}),Object(_.jsx)(P.a,{onChange:function(t){e.onFormChange&&e.onFormChange(t.target.value)},value:e.currentForm,children:Object.keys(S).map((function(e){return Object(_.jsx)(I.a,{value:e,children:e},e)}))})]})},W=Object(f.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"calc(100% - 100px)",overflowY:"scroll"},datasection:{whiteSpace:"pre-wrap"}}})),G=function(e){var t=W();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(E.a,{variant:"h6",children:"Form Data"}),Object(_.jsx)("div",{className:t.root,children:Object(_.jsx)("pre",{className:t.datasection,children:JSON.stringify(e.data,null,2)})})]})},X=Object(f.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"},controls:{height:"100%",maxWidth:"450px",minWidth:"450px",flexGrow:1,flexDirection:"column",backgroundColor:"#eee",border:"1px solid "+e.palette.divider,padding:e.spacing(1)},dynamicForm:{height:"100%",display:"flex",flexGrow:1,overflowX:"hidden",overflowY:"scroll"}}})),q=function(){var e=X(),t=Object(i.useState)("Residential"),o=Object(d.a)(t,2),n=o[0],a=o[1],r=Object(i.useState)(S[n]),c=Object(d.a)(r,2),l=c[0],f=c[1];return Object(_.jsxs)("div",{className:e.root,children:[Object(_.jsx)("div",{className:e.dynamicForm,children:Object(_.jsx)(D,{formFields:l,title:n,onClear:function(){f([])},onUpdate:function(e){var t=Object(s.a)(l),o=t.findIndex((function(t){return t.id===e.id}));o>=0&&(t[o]=e),f(t)}})}),Object(_.jsxs)("div",{className:e.controls,children:[Object(_.jsx)(A,{currentForm:n,onFormChange:function(e){a(e),f(S[e])}}),Object(_.jsx)(u.a,{}),Object(_.jsx)(G,{data:l})]})]})};var U=function(){return Object(_.jsxs)(c.a,{theme:n.a.useMemo((function(){return Object(O.a)({shadows:Array(25).fill("none"),props:{MuiList:{disablePadding:!0},MuiButtonBase:{color:"inherit"}},palette:{type:"light",primary:{main:v},secondary:{main:v},warning:{main:"#d50000"},contrastThreshold:3,tonalOffset:.2}})}),[]),children:[Object(_.jsx)(l.a,{}),Object(_.jsx)("div",{style:{overflow:"hidden",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0,position:"absolute"},children:Object(_.jsx)(q,{})})]})},Y=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,574)).then((function(t){var o=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;o(e),i(e),n(e),a(e),r(e)}))};r.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(U,{})}),document.getElementById("root")),Y()},65:function(e,t){}},[[526,1,2]]]);
//# sourceMappingURL=main.ad6a4784.chunk.js.map