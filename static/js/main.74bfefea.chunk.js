(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),s=n(41),l=n(12),o=n(68),u=n(163),j=n(165),b=n(167),d=n(61),h=n(169),x=n(168),p=n(77),O=n.n(p),f=n(2),m=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function g(){var e=m();return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)(j.a,{position:"static",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(x.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(f.jsx)(O.a,{})}),Object(f.jsx)(d.a,{variant:"h6",className:e.title,children:"News"}),Object(f.jsx)(h.a,{color:"inherit",children:"Login"})]})})})}var v=n(192);function y(){return Object(f.jsx)(v.a,{height:"70vh",justifyContent:"center",alignItems:"center",display:"flex",bgcolor:"#3f51b5",children:Object(f.jsxs)(v.a,{mx:"auto",children:[Object(f.jsx)(d.a,{variant:"h2",children:Object(f.jsx)(v.a,{color:"white",children:"Let's plan!"})}),Object(f.jsx)(d.a,{variant:"subtitle1",children:Object(f.jsx)(v.a,{color:"white",children:"\u65c5\u884c\u306e\u4e88\u5b9a\u3092\u81ea\u52d5\u3067\u4f5c\u6210"})})]})})}var w=n(11),k=n(191);function C(e){var t=Object(a.useState)(e.initialValue),n=Object(w.a)(t,2),r=n[0],c=n[1];return Object(f.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(r)},children:Object(f.jsx)(k.a,{required:!0,fullWidth:e.fullWidth,id:"standard-basic",label:e.label,variant:"filled",onChange:function(e){c(e.target.value)},value:r})})}var S=n(171),T=n(172),N=n(173),P=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:"white"},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}}));function D(e){var t=P(),n=e.itemData;return Object(f.jsx)("div",{className:t.root,children:Object(f.jsx)(S.a,{className:t.imageList,cols:2.5,rowHeight:120,children:n.map((function(n,a){return Object(f.jsxs)(T.a,{onClick:function(t){return e.onClick(t,a)},children:[Object(f.jsx)("img",{src:n.img,alt:n.title}),Object(f.jsx)(N.a,{title:n.title,classes:{root:t.titleBar,title:t.title}})]},n.img)}))})})}var I=n.p+"static/media/img_osaka.c9ba6993.jpg",F=n.p+"static/media/img_hokkaido.bd87e191.jpg",M=n.p+"static/media/img_tokyo.ebbf7b3f.jpg";function _(e){var t=[{img:I,title:"\u5927\u962a"},{img:M,title:"\u6771\u4eac"},{img:F,title:"\u5317\u6d77\u9053"}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{variant:"subtitle1",children:Object(f.jsx)(v.a,{color:"gray",children:"\u4eba\u6c17\u306e\u30a8\u30ea\u30a2"})}),Object(f.jsx)(D,{itemData:t,onClick:function(n,a){e.onClick(t[a].title)}})]})}function L(){var e=Object(l.f)(),t=function(t){e.push("/condition",{regionName:t})};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{}),Object(f.jsx)(y,{}),Object(f.jsxs)(v.a,{mx:5,children:[Object(f.jsx)(v.a,{my:5,children:Object(f.jsx)(C,{onSubmit:t,initialValue:"\u5927\u962a",label:"Region",fullWidth:!0})}),Object(f.jsx)(v.a,{my:5,children:Object(f.jsx)(_,{onClick:t})})]})]})}var q=n(27),W=Object(u.a)((function(e){return{root:{width:"100%",height:"30vh"}}}));function B(e){var t=W();return Object(f.jsx)("img",{className:t.root,src:I,alt:"alt"})}var z=n(78),A=n(13),E=n(170),G=n(175),R=n(177),V=n(178),U=n(176),K=n(174),H=n(194),J=n(79),Q=n.n(J),Y=n(80),Z=n.n(Y),X=n(69),$=n.n(X),ee=Object(u.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},form:{}}}));function te(e){var t=ee(),n=r.a.useState(["wifi"]),c=Object(w.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)(e.regionName),o=Object(w.a)(l,2),u=o[0],j=o[1],b=Object(a.useState)("\u5927\u962a\u99c5"),d=Object(w.a)(b,2),x=d[0],p=d[1],O=Object(a.useState)("\u8431\u5d8b\u99c5"),m=Object(w.a)(O,2),g=m[0],y=m[1],C=function(e){return function(){var t=i.indexOf(e),n=Object(A.a)(i);-1===t?n.push(e):n.splice(t,1),s(n)}};return Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault();-1!=i.indexOf("meal")&&Object(z.a)("meal");var n={regionName:u,originName:x,destinationName:g,meal:!1};e.onSubmit(n)},children:[Object(f.jsxs)(E.a,{subheader:Object(f.jsx)(K.a,{children:"Settings"}),className:t.root,children:[Object(f.jsxs)(G.a,{children:[Object(f.jsx)(U.a,{primary:"\u30a8\u30ea\u30a2"}),Object(f.jsx)(k.a,{required:!0,variant:"filled",onChange:function(e){j(e.target.value)},value:u})]}),Object(f.jsxs)(G.a,{children:[Object(f.jsx)(U.a,{primary:"\u51fa\u767a"}),Object(f.jsx)(k.a,{required:!0,variant:"filled",onChange:function(e){p(e.target.value)},value:x})]}),Object(f.jsxs)(G.a,{children:[Object(f.jsx)(U.a,{primary:"\u5230\u7740"}),Object(f.jsx)(k.a,{variant:"filled",onChange:function(e){y(e.target.value)},value:g})]}),Object(f.jsxs)(G.a,{children:[Object(f.jsx)(R.a,{children:Object(f.jsx)(Q.a,{})}),Object(f.jsx)(U.a,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),Object(f.jsx)(V.a,{children:Object(f.jsx)(H.a,{edge:"end",onChange:C("wifi"),checked:-1!==i.indexOf("wifi"),inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]}),Object(f.jsxs)(G.a,{children:[Object(f.jsx)(R.a,{children:Object(f.jsx)(Z.a,{})}),Object(f.jsx)(U.a,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),Object(f.jsx)(V.a,{children:Object(f.jsx)(H.a,{edge:"end",onChange:C("bluetooth"),checked:-1!==i.indexOf("bluetooth"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]}),Object(f.jsxs)(G.a,{children:[Object(f.jsx)(R.a,{children:Object(f.jsx)($.a,{})}),Object(f.jsx)(U.a,{id:"switch-list-label-bluetooth",primary:"\u663c\u98df\u3092\u81ea\u52d5\u3067\u8ffd\u52a0"}),Object(f.jsx)(V.a,{children:Object(f.jsx)(H.a,{edge:"end",onChange:C("meal"),checked:-1!==i.indexOf("meal"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]}),Object(f.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(f.jsx)(h.a,{type:"submit",variant:"contained",children:"PLAN!"})})]})}var ne=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:"500px"}}}));function ae(e){var t=ne(),n=Object(l.f)(),a=Object(l.g)().state.regionName;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{}),Object(f.jsx)(B,{regionName:a}),Object(f.jsx)(v.a,{display:"flex",justifyContent:"center",mx:5,children:Object(f.jsx)(v.a,{className:t.root,children:Object(f.jsx)(te,{onSubmit:function(e){n.push("/plan",Object(q.a)(Object(q.a)({},e),{},{status:"first"}))},regionName:a})})})]})}var re=n(17),ce=n.n(re),ie=n(31);Object(u.a)((function(e){return{root:{height:"30vh"}}}));function se(e){var t=Object(a.useRef)(null);return le(t),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{ref:t,style:{height:"30vh"},children:"I can use the DOM with react ref"})})}var le=function(e){var t=Object(a.useContext)(Ye),n=t.google,r=t.setMap;Object(a.useEffect)((function(){if(console.log("useMap"),null!=n&&null!=e){var t=new n.maps.Map(e.current,{zoom:12,center:{lat:35.6432027,lng:139.6729435}});r(t)}}),[n,e])},oe=n(81),ue=n.n(oe),je=n(82),be=n.n(je),de=n(83),he=n.n(de),xe=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{},icon:{color:"rgba(255, 255, 255, 0.54)"},addIcon:{width:50,height:50}}}));function pe(e){var t=xe(),n=e.spots;return null==n?null:Object(f.jsx)("div",{className:t.root,children:Object(f.jsxs)(S.a,{rowHeight:180,className:t.imageList,children:[Object(f.jsx)(T.a,{cols:2,style:{height:"auto"},children:Object(f.jsx)(K.a,{component:"div",children:"Spots"})},"Subheader"),n.map((function(n,a){return Object(f.jsxs)(T.a,{children:[Object(f.jsx)("img",{src:null==n.photos?null:n.photos[0].getUrl(),alt:n.name}),Object(f.jsx)(N.a,{title:n.name,subtitle:Object(f.jsxs)("span",{children:["by: ",n.name]}),actionIcon:Object(f.jsx)(x.a,{"aria-label":"info about ".concat(n.name),className:t.icon,children:Object(f.jsx)(ue.a,{})})}),Object(f.jsx)(N.a,{position:"top",actionPosition:"right",actionIcon:Object(f.jsx)(x.a,{onClick:function(){return e.onClickCancel(a)},children:Object(f.jsx)(be.a,{})})})]},null==n.photos?null:n.photos[0].getUrl())})),Object(f.jsx)(T.a,{children:Object(f.jsx)(v.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:Object(f.jsx)(x.a,{onClick:e.onClickAdd,children:Object(f.jsx)(he.a,{fontSize:"large",className:t.addIcon})})})})]})})}function Oe(e){var t=Object(l.f)(),n=Object(a.useContext)(Ye),r=n.plan,c=n.setPlan;return Object(a.useEffect)((function(){console.log("edit")}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(v.a,{mx:5,children:[Object(f.jsx)(pe,{onClickAdd:function(){t.push("/plan/add")},onClickCancel:function(e){r.newSpots.splice(e,1),c(Object(q.a)({},r)),console.log(e),console.log(r)},spots:r.newSpots}),Object(f.jsx)(te,{onSubmit:function(e){t.push("/plan",Object(q.a)(Object(q.a)({},e),{},{status:"new"}))}}),Object(f.jsx)(h.a,{type:"submit",variant:"contained",onClick:function(){t.push("/plan",{status:"cancel"})},children:"\u8f9e\u3081\u308b"})]})})}var fe=n(185),me=n(179),ge=n(181),ve=n(183),ye=n(184),we=n(180),ke=n(182),Ce=n(86),Se=n(84),Te=n.n(Se),Ne=n(196),Pe=Object(u.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function De(e){var t=Pe(),n=e.plan;if(null==n)return null;for(var a=n.itinerary,r=n.legs,c=[],i=0;i<a.length;i++){var s=Object(f.jsxs)(me.a,{children:[Object(f.jsx)(we.a,{style:{flex:.1},children:Object(f.jsx)(d.a,{variant:"body2",color:"textSecondary",children:a[i].arrivalTime.text})}),Object(f.jsxs)(ge.a,{children:[Object(f.jsx)(ke.a,{children:Object(f.jsx)(Ne.a,{alt:"Remy Sharp",src:null==a[i].photos?null:a[i].photos[0].getUrl()})}),Object(f.jsx)(ve.a,{})]}),Object(f.jsx)(ye.a,{children:Object(f.jsxs)(Ce.a,{elevation:3,className:t.paper,children:[Object(f.jsx)(d.a,{variant:"h6",component:"h1",children:a[i].name}),Object(f.jsxs)(d.a,{children:["stay time: ",a[i].stayTime.text]})]})})]});if(c.push(s),i<r.length){var l=Object(f.jsxs)(me.a,{children:[Object(f.jsx)(we.a,{style:{flex:.1},children:Object(f.jsx)(d.a,{variant:"body2",color:"textSecondary",children:a[i].departureTime.text})}),Object(f.jsxs)(ge.a,{children:[Object(f.jsx)(ke.a,{children:Object(f.jsx)(Ne.a,{children:Object(f.jsx)(Te.a,{})})}),Object(f.jsx)(ve.a,{})]}),Object(f.jsx)(ye.a,{children:Object(f.jsxs)(v.a,{display:"flex",alignItems:"center",height:"100%",children:[r[i].duration.newText," by transit"]})})]});c.push(l)}}return Object(f.jsx)(fe.a,{children:c})}var Ie=n(186),Fe=n(187),Me=n(190),_e=n(189),Le=n(188),qe=Object(u.a)({root:{},media:{height:140}});function We(e){var t=qe(),n=e.place;return null==n?null:(console.log(n),Object(f.jsxs)(Ie.a,{className:t.root,children:[Object(f.jsxs)(Fe.a,{children:[Object(f.jsx)(Le.a,{className:t.media,image:n[0].photos[0].getUrl(),title:"Contemplative Reptile"}),Object(f.jsxs)(_e.a,{children:[Object(f.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n[0].name}),Object(f.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(f.jsx)(Me.a,{children:Object(f.jsx)(h.a,{size:"small",color:"primary",onClick:e.onClick,children:"ADD"})})]}))}function Be(e,t,n){for(var a=0;a<n.length;a++)new e.maps.Marker({position:{lat:n[a].geometry.location.lat(),lng:n[a].geometry.location.lng()},label:String(a),map:t});t.setCenter({lat:n[0].geometry.location.lat(),lng:n[0].geometry.location.lng()})}function ze(e,t,n,a,r,c){return Ae.apply(this,arguments)}function Ae(){return(Ae=Object(ie.a)(ce.a.mark((function e(t,n,a,r,c,i){var s,l,o,u,j;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.map((function(e){return{location:e.formatted_address,stopover:!0}})),e.next=3,Ke(t,a,r,s);case 3:return l=e.sent,(o=l.routes[0].legs).map((function(e){e.duration.value*=2,e.duration.newText=Je(e.duration.value)})),u=Ee(l,i),j=Ge(u,o,l),e.next=10,Re(t,n,j,o);case 10:return console.log("makePlan"),e.abrupt("return",{spots:u,itinerary:j,legs:o});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=function(e,t){return e.routes[0].waypoint_order.map((function(e){var n=t[e];return n.stayTime={value:3600,text:Je(3600)},n}))},Ge=function(e,t,n){var a=e.slice(),r={name:n.request.origin.query,geometry:{location:n.routes[0].legs[0].start_location},stayTime:{value:0,text:Je(0)}},c={name:n.request.destination.query,geometry:{location:n.routes[0].legs.slice(-1)[0].end_location},stayTime:{value:0,text:Je(0)}};a.unshift(r),a.push(c);for(var i=32400,s=0;s<a.length;s++)a[s].arrivalTime={text:He(i),value:i},i+=a[s].stayTime.value,a[s].departureTime={text:He(i),value:i},s<t.length&&(i+=t[s].duration.value);return a},Re=function(){var e=Object(ie.a)(ce.a.mark((function e(t,n,a,r){var c,i,s,l,o,u,j,b,d,h,x;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=0;case 1:if(!(c<a.length-1)){e.next=34;break}if(!(a[c].departureTime.value>=43200)){e.next=31;break}return e.next=5,Ve(t,n,"\u663c\u98df",a[c].geometry.location);case 5:return i=e.sent,s=Object(w.a)(i,1),(l=s[0]).stayTime={value:3600,text:Je(3600)},e.next=11,Ke(t,a[c].formatted_address,l.formatted_address);case 11:return o=e.sent,u=o.routes[0].legs[0],e.next=15,Ke(t,l.formatted_address,a[c+1].formatted_address);case 15:for(j=e.sent,b=j.routes[0].legs[0],u.duration.value*=2,u.duration.newText=Je(u.duration.value),b.duration.value*=2,b.duration.newText=Je(b.duration.value),d=a[c].departureTime.value+u.duration.value,h=u.duration.value+l.stayTime.value+b.duration.value,l.arrivalTime={value:d,text:He(d)},d+=l.stayTime.value,l.departureTime={value:d,text:He(d)},d+=b.duration.value,x=c+1;x<a.length;x++)a[x].arrivalTime.value+=h,a[x].arrivalTime.text=He(a[x].arrivalTime.value),a[x].departureTime.value+=h,a[x].departureTime.text=He(a[x].departureTime.value);return a.splice(c,0,l),r.splice(c,1,u,b),e.abrupt("break",34);case 31:c++,e.next=1;break;case 34:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(ie.a)(ce.a.mark((function e(t,n,a,r){var c,i,s;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new t.maps.places.PlacesService(n),i={query:a,fields:["name","geometry","formatted_address","photos"]},null!=r&&(i.locationBias={lat:r.lat(),lng:r.lng()}),e.next=5,new Promise((function(e){c.findPlaceFromQuery(i,(function(n,a){a===t.maps.places.PlacesServiceStatus.OK&&e(n)}))}));case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(ie.a)(ce.a.mark((function e(t,n,a,r){var c,i,s;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new t.maps.places.PlacesService(n),i={location:new t.maps.LatLng(r.lat(),r.lng()),radius:"5000",query:a},e.next=4,new Promise((function(e){c.textSearch(i,(function(n,a){a==t.maps.places.PlacesServiceStatus.OK&&e(n)}))}));case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(ie.a)(ce.a.mark((function e(t,n,a,r){var c,i,s;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new t.maps.DirectionsService,i={origin:n,destination:a,travelMode:t.maps.TravelMode.DRIVING},null!=r&&(i.waypoints=r,i.optimizeWaypoints=!0),e.next=5,c.route(i).then((function(e){return e})).catch((function(e){return console.log("Directions request failed due to "+e)}));case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}();function He(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60);return"".concat(("00"+t).slice(-2),":").concat(("00"+n).slice(-2))}function Je(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),a="";return t>0&&(a+="".concat(t,"hour")),(0==n&&0==t||n>0)&&(a+="".concat(n,"min")),a}function Qe(e){var t=Object(a.useState)(""),n=Object(w.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),s=Object(w.a)(i,2),o=s[0],u=s[1],j=Object(l.f)(),b=Object(a.useContext)(Ye),d=b.google,x=b.map,p=b.plan,O=b.setPlan,m=function(){var e=Object(ie.a)(ce.a.mark((function e(t){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Ve(d,x,r);case 3:n=e.sent,new d.maps.Marker({position:{lat:n[0].geometry.location.lat(),lng:n[0].geometry.location.lng()},label:"!",map:x}),u(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(v.a,{mx:5,my:5,children:[Object(f.jsx)("form",{onSubmit:m,children:Object(f.jsx)(k.a,{fullWidth:!0,variant:"filled",onChange:function(e){c(e.target.value)}})}),Object(f.jsx)(v.a,{my:5,children:Object(f.jsx)(We,{place:o,onClick:function(){console.log(o),p.newSpots.push(o[0]),O(Object(q.a)({},p)),j.push("/plan/edit")}})}),Object(f.jsx)(v.a,{display:"flex",justifyContent:"center",my:5,children:Object(f.jsx)(h.a,{type:"submit",variant:"contained",onClick:function(){j.push("/plan/edit")},children:"\u623b\u308b"})})]})})}var Ye=Object(a.createContext)();function Ze(e){var t=Object(a.useState)(null),n=Object(w.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),s=Object(w.a)(i,2),o=s[0],u=s[1],j=Object(a.useState)(null),b=Object(w.a)(j,2),d={google:r,setGoogle:c,map:o,setMap:u,plan:b[0],setPlan:b[1]};return Object(f.jsxs)(Ye.Provider,{value:d,children:[Object(f.jsx)(g,{}),Object(f.jsx)(se,{google:r}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/plan/edit",children:Object(f.jsx)(Oe,{})}),Object(f.jsx)(l.a,{path:"/plan/add",children:Object(f.jsx)(Qe,{})}),Object(f.jsx)(l.a,{path:"/plan",children:Object(f.jsx)(Xe,{})})]})]})}function Xe(){var e=Object(l.f)(),t=Object(l.g)().state,n=$e(t);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(De,{plan:n}),Object(f.jsx)(v.a,{display:"flex",justifyContent:"center",my:5,children:Object(f.jsx)(h.a,{type:"submit",variant:"contained",onClick:function(){e.push("/plan/edit")},children:"EDIT"})})]})}var $e=function(e){!function(){var e=Object(a.useContext)(Ye),t=e.google,n=e.setGoogle;Object(a.useEffect)((function(){null==t&&new o.a({apiKey:"AIzaSyCkNip5D4glIDSddF__OlVzY1ovG5yVf7g",version:"weekly",libraries:["places"]}).load().then((function(e){n(e)}))}))}();var t=Object(a.useContext)(Ye),n=t.google,r=t.map,c=t.plan,i=t.setPlan;return Object(a.useEffect)(Object(ie.a)(ce.a.mark((function t(){var a,s,l,o,u,j,b;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=n&&null!=r){t.next=2;break}return t.abrupt("return");case 2:if(a=e.regionName,s=e.originName,l=e.destinationName,e.meal,"first"!=(o=e.status)){t.next=13;break}return t.next=6,Ve(n,r,a);case 6:return u=t.sent,t.next=9,Ue(n,r,"\u89b3\u5149",u[0].geometry.location);case 9:j=(j=t.sent).slice(0,5),t.next=22;break;case 13:if("new"!=o){t.next=18;break}u=c.region,j=c.newSpots,t.next=22;break;case 18:if("cancel"!=o){t.next=22;break}return c.newSpots=Object(A.a)(c.spots),i(Object(q.a)({},c)),t.abrupt("return",c);case 22:return t.next=24,ze(n,r,s,l,u,j);case 24:(b=t.sent).newSpots=Object(A.a)(b.spots),Be(n,r,b.itinerary),i(b),console.log(u),console.log(j),console.log(b);case 31:case"end":return t.stop()}}),t)}))),[n,r]),c};function et(){return Object(f.jsx)(s.a,{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/condition",children:Object(f.jsx)(ae,{})}),Object(f.jsx)(l.a,{path:"/plan",children:Object(f.jsx)(Ze,{})}),Object(f.jsx)(l.a,{path:"/",children:Object(f.jsx)(L,{})})]})})}var tt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(116);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(et,{})}),document.getElementById("root")),tt()}},[[117,1,2]]]);
//# sourceMappingURL=main.74bfefea.chunk.js.map