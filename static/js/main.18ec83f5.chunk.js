(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{167:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),o=a(8),s=a(36),l=a(17),u=a(278),j=a(60),b=a(76),d=a.n(b),p=a(1);var m=a(277);function O(e){var t=Object(n.useState)(e.initialValue),a=Object(o.a)(t,2),r=a[0],i=a[1];return Object(p.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(r)},children:Object(p.jsx)(m.a,{required:!0,fullWidth:e.fullWidth,id:"standard-basic",label:e.label,variant:"filled",onChange:function(e){i(e.target.value)},value:r})})}var x=a(237);a(238),a(239),a(240),Object(x.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:"white"},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}}));var f=a.p+"static/media/img_osaka.c9ba6993.jpg";a.p,a.p;var h=a(259),g=a(26),v=a.n(g),y=a(14),w=a(23),k=a(40),S=a(105),C=function(){var e=Object(k.a)(v.a.mark((function e(t,a,n,r){var i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t,a,n);case 2:return e.sent,e.next=5,q(t,a,r);case 5:return i=e.sent,e.next=8,z(t,a,n+"\u89b3\u5149",i[0].geometry.location);case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),M=function(){var e=Object(n.useContext)(qe),t=e.google,a=e.setGoogle;console.log(t),Object(n.useEffect)((function(){new S.a({apiKey:"AIzaSyCkNip5D4glIDSddF__OlVzY1ovG5yVf7g",version:"weekly",libraries:["places"]}).load().then((function(e){a(e)}))}),[])};function T(e,t,a,n){var r="abcdefghijklmnopqrstuvwxyz",i={position:{lat:a[0].geometry.location.lat(),lng:a[0].geometry.location.lng()},map:t,icon:{url:"http://maps.google.com/mapfiles/ms/icons/flag.png"}},c=new e.maps.Marker(i);c.setMap(t);var o={position:{lat:a.slice(-1)[0].geometry.location.lat(),lng:a.slice(-1)[0].geometry.location.lng()},map:t,icon:{url:"http://maps.google.com/mapfiles/ms/icons/flag.png"}},s=new e.maps.Marker(o);s.setMap(t);for(var l=[],u=(new e.maps.InfoWindow,1);u<a.length-1;u++){var j=N(e,t,a[u],r[(u-1)%r.length],u-1,n);l.push(j)}return t.setCenter({lat:a[0].geometry.location.lat(),lng:a[0].geometry.location.lng()}),{originMarker:c,destinationMarker:s,spotMarkers:l}}function N(e,t,a,n,r,i){var c=new e.maps.InfoWindow,o={position:{lat:a.geometry.location.lat(),lng:a.geometry.location.lng()},map:t,label:{text:n,color:"white"},title:a.name,optimized:!1,animation:e.maps.Animation.DROP},s=new e.maps.Marker(o);return s.addListener("click",(function(){c.close(),c.setContent(s.getTitle()),c.open(s.getMap(),s),i(r)})),s.setMap(t),s}function P(e,t,a,n,r){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(v.a.mark((function e(t,a,n,r,i){var c,o,s,l,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=i.map((function(e){return{location:e.formatted_address,stopover:!0}})),e.next=3,F(t,n,r,c);case 3:return o=e.sent,(s=o.routes[0].legs).map((function(e){e.duration.value*=2,e.duration.newText=G(e.duration.value)})),l=I(o,i),u=_(l,s,o),e.abrupt("return",{spots:l,itinerary:u,legs:s});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e,t){return e.routes[0].waypoint_order.map((function(e){var a=t[e];return a.stayTime={value:3600,text:G(3600)},a}))},_=function(e,t,a){var n=e.slice(),r={name:a.request.origin.query,geometry:{location:a.routes[0].legs[0].start_location},stayTime:{value:0,text:G(0)}},i={name:a.request.destination.query,geometry:{location:a.routes[0].legs.slice(-1)[0].end_location},stayTime:{value:0,text:G(0)}};n.unshift(r),n.push(i);for(var c=32400,o=0;o<n.length;o++)n[o].arrivalTime={text:W(c),value:c},c+=n[o].stayTime.value,n[o].departureTime={text:W(c),value:c},o<t.length&&(c+=t[o].duration.value);return n},B=function(){var e=Object(k.a)(v.a.mark((function e(t,a,n){var r,i,c,s,l,u,j,b,d,p,m,O,x,f;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.itinerary,i=n.legs,c=n.spots,s=0;case 2:if(!(s<r.length-1)){e.next=36;break}if(!(r[s].departureTime.value>=43200)){e.next=33;break}return e.next=6,q(t,a,"\u663c\u98df",r[s].geometry.location);case 6:return l=e.sent,u=Object(o.a)(l,1),(j=u[0]).stayTime={value:3600,text:G(3600)},e.next=12,F(t,r[s].formatted_address,j.formatted_address);case 12:return b=e.sent,d=b.routes[0].legs[0],e.next=16,F(t,j.formatted_address,r[s+1].formatted_address);case 16:for(p=e.sent,m=p.routes[0].legs[0],d.duration.value*=2,d.duration.newText=G(d.duration.value),m.duration.value*=2,m.duration.newText=G(m.duration.value),O=r[s].departureTime.value+d.duration.value,x=d.duration.value+j.stayTime.value+m.duration.value,j.arrivalTime={value:O,text:W(O)},O+=j.stayTime.value,j.departureTime={value:O,text:W(O)},O+=m.duration.value,f=s+1;f<r.length;f++)r[f].arrivalTime.value+=x-i[s].duration.value,r[f].arrivalTime.text=W(r[f].arrivalTime.value),r[f].departureTime.value+=x-i[s].duration.value,r[f].departureTime.text=W(r[f].departureTime.value);return r.splice(s+1,0,j),i.splice(s,1,d,m),c.splice(s+1,0,j),e.abrupt("break",36);case 33:s++,e.next=2;break;case 36:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(k.a)(v.a.mark((function e(t,a,n,r){var i,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new t.maps.places.PlacesService(a),(c={query:n,fields:["name","geometry","formatted_address","photos"]}).locationBias=null==r?{north:45.29328154474485,east:153.2360484603554,south:26.151593390188783,west:126.5636657976794}:{lat:r.lat(),lng:r.lng()},e.next=5,new Promise((function(e){i.findPlaceFromQuery(c,(function(a,n){n===t.maps.places.PlacesServiceStatus.OK&&e(a)}))}));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),z=function(){var e=Object(k.a)(v.a.mark((function e(t,a,n,r){var i,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new t.maps.places.PlacesService(a),c={query:n},null==r?c.bounds={north:45.29328154474485,east:153.2360484603554,south:26.151593390188783,west:126.5636657976794}:(c.location={lat:r.lat(),lng:r.lng()},c.radius=5e4),e.next=5,new Promise((function(e){i.textSearch(c,(function(a,n){n==t.maps.places.PlacesServiceStatus.OK&&e(a)}))}));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(k.a)(v.a.mark((function e(t,a,n,r){var i,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new t.maps.DirectionsService,c={origin:a,destination:n,travelMode:t.maps.TravelMode.DRIVING},null!=r&&(c.waypoints=r,c.optimizeWaypoints=!0),e.next=5,i.route(c).then((function(e){return e})).catch((function(e){return console.log("Directions request failed due to "+e)}));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}();function W(e){var t=Math.floor(e/3600),a=Math.floor(e%3600/60);return"".concat(("00"+t).slice(-2),":").concat(("00"+a).slice(-2))}function G(e){var t=Math.floor(e/3600),a=Math.floor(e%3600/60),n="";return t>0&&(n+="".concat(t,"hour")),(0==a&&0==t||a>0)&&(n+="".concat(a,"min")),n}var L=a(12),R=a(4),A=a(280),V=a(265),E=a(236),K=a(253),H=a(254),J=a(255),U=a(82),Q=a.n(U),Y=a(83),Z=a.n(Y),X=(a(3),a(267),a(279),a(268),a(266)),$=(a(250),a(241),a(243),a(245),a(246),a(242),a(106),a(283));a(251),a(244),a(285),a(93),a(284),a(248),a(249),a(86),Object(x.a)((function(e){return{paper:{padding:"6px 16px"}}}));var ee=a(256),te=a(252),ae=a(257),ne=a(107),re=a.n(ne),ie=a(80),ce=a.n(ie),oe=a(92),se=a.n(oe),le=a(281),ue=a(247),je=a(258),be=a(87),de=a.n(be),pe=Object(x.a)((function(e){return{root:{},fab:{position:"fixed",bottom:e.spacing(10)}}}));function me(e){pe();var t=Object(n.useState)(["checkBox"]),a=Object(o.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(e.condition.regionName),s=Object(o.a)(c,2),l=s[0],j=s[1],b=Object(n.useState)(e.condition.originName),d=Object(o.a)(b,2),O=d[0],x=d[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),g=h[0],v=h[1],y=function(e){return function(){var t=r.indexOf(e),a=Object(w.a)(r);-1===t?a.push(e):a.splice(t,1),i(a)}};return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=-1!=r.indexOf("meal"),n={regionName:l,originName:O,destinationName:g,meal:a};-1!=r.indexOf("checkBox")&&(n.destinationName=O),e.onSubmit(n)},children:[Object(p.jsxs)(E.a,{subheader:Object(p.jsx)(te.a,{children:"Settings"}),children:[Object(p.jsxs)(K.a,{children:[Object(p.jsx)(H.a,{children:Object(p.jsx)(ce.a,{})}),Object(p.jsx)(m.a,{label:"\u30a8\u30ea\u30a2",required:!0,variant:"filled",onChange:function(e){j(e.target.value)},value:l})]}),Object(p.jsxs)(K.a,{children:[Object(p.jsx)(H.a,{children:Object(p.jsx)(se.a,{})}),Object(p.jsx)(m.a,{label:"\u51fa\u767a",required:!0,variant:"filled",onChange:function(e){x(e.target.value)},value:O})]}),Object(p.jsxs)(K.a,{children:[Object(p.jsx)(le.a,{checked:-1!==r.indexOf("checkBox"),onChange:y("checkBox"),inputProps:{"aria-label":"primary checkbox"}}),Object(p.jsx)(J.a,{primary:"\u51fa\u767a\u5730\u70b9\u3068\u5230\u7740\u5730\u70b9\u304c\u540c\u3058"})]}),Object(p.jsx)(ue.a,{in:-1==r.indexOf("checkBox"),children:Object(p.jsxs)(K.a,{children:[Object(p.jsx)(H.a,{children:Object(p.jsx)(se.a,{})}),Object(p.jsx)(J.a,{primary:"\u5230\u7740"}),Object(p.jsx)(m.a,{variant:"filled",onChange:function(e){v(e.target.value)},value:g})]})}),Object(p.jsxs)(K.a,{children:[Object(p.jsx)(H.a,{children:Object(p.jsx)(re.a,{})}),Object(p.jsx)(J.a,{id:"switch-list-label-bluetooth",primary:"\u663c\u98df\u3092\u81ea\u52d5\u3067\u8ffd\u52a0"}),Object(p.jsx)(ee.a,{children:Object(p.jsx)(ae.a,{edge:"end",onChange:y("meal"),checked:-1!==r.indexOf("meal"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]}),Object(p.jsx)(u.a,{width:"100%",children:Object(p.jsx)(u.a,{display:"flex",justifyContent:"center",children:Object(p.jsxs)(je.a,{color:"primary",variant:"extended",type:"submit",children:[Object(p.jsx)(de.a,{}),"Navigate"]})})})]})}a(116),a(108),a(109),a(88),Object(x.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{},icon:{color:"rgba(255, 255, 255, 0.54)"},addIcon:{width:50,height:50}}}));var Oe=a(260),xe=a(261),fe=a(264),he=a(263),ge=a(262),ve=a(282),ye=Object(x.a)((function(e){return{root:{height:"100%"},media:{height:100}}}));function we(e){var t=ye(),a=e.place;return null==a?Object(p.jsxs)(Oe.a,{className:t.root,children:[Object(p.jsxs)(xe.a,{children:[Object(p.jsx)(ge.a,{className:t.media,image:f,title:"Contemplative Reptile"}),Object(p.jsxs)(he.a,{children:[Object(p.jsxs)(j.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Title",e.index]}),Object(p.jsxs)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:[Object(p.jsxs)(u.a,{display:"flex",alignItems:"center",children:["Rating",Object(p.jsx)($.a,{name:"read-only",value:5,precision:.5,readOnly:!0,size:"small"})]}),["\u89b3\u5149","\u5927\u962a","\u4eba\u6c17"].map((function(e){return Object(p.jsx)(ve.a,{label:e,color:"primary"})}))]})]})]}),Object(p.jsx)(fe.a,{disableSpacing:!0,children:Object(p.jsx)(V.a,{size:"small",color:"primary",onClick:e.onClick,children:"ADD"})})]}):Object(p.jsxs)(Oe.a,{className:t.root,children:[Object(p.jsxs)(xe.a,{children:[Object(p.jsx)(ge.a,{className:t.media,image:a.photos[0].getUrl(),title:"Contemplative Reptile"}),Object(p.jsxs)(he.a,{children:[Object(p.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a.name}),Object(p.jsxs)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:[Object(p.jsxs)(u.a,{display:"flex",alignItems:"center",children:[a.rating,Object(p.jsx)($.a,{name:"read-only",value:a.rating,precision:.5,readOnly:!0,size:"small"})]}),a.types.map((function(e){return Object(p.jsx)(ve.a,{label:e,color:"primary"})}))]})]})]}),Object(p.jsx)(fe.a,{disableSpacing:!0,children:Object(p.jsx)(V.a,{size:"small",color:"primary",onClick:e.onClick,children:"ADD"})})]})}Object(x.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));a(110);var ke=Object(x.a)({list:{width:250},fullList:{width:"auto"}});function Se(e){var t=ke(),a=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(o.a)(a,2),i=n[0],c=n[1],s=e.place,l=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c(Object(y.a)(Object(y.a)({},i),{},Object(L.a)({},e,t)))}},j=function(e){return Object(p.jsxs)("div",{className:Object(R.a)(t.list,Object(L.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:l(e,!1),onKeyDown:l(e,!1),children:[Object(p.jsx)("img",{src:s.photos[0].getUrl(),width:"100%"}),Object(p.jsx)(E.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(p.jsxs)(K.a,{button:!0,children:[Object(p.jsx)(H.a,{children:t%2===0?Object(p.jsx)(Q.a,{}):Object(p.jsx)(Z.a,{})}),Object(p.jsx)(J.a,{primary:e})]},e)}))}),Object(p.jsx)(h.a,{}),Object(p.jsx)(E.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(p.jsxs)(K.a,{button:!0,children:[Object(p.jsx)(H.a,{children:t%2===0?Object(p.jsx)(Q.a,{}):Object(p.jsx)(Z.a,{})}),Object(p.jsx)(J.a,{primary:e})]},e)}))})]})};return Object(p.jsxs)("div",{children:[["left","right","top","bottom"].map((function(e){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)(V.a,{onClick:l(e,!0),children:e}),Object(p.jsx)(A.a,{anchor:e,open:i[e],onClose:l(e,!1),onOpen:l(e,!0),children:j(e)})]},e)})),Object(p.jsx)(u.a,{onClick:l("bottom",!0),children:Object(p.jsx)(we,{place:e.place})})]})}var Ce=a.p+"static/media/img_travel.b5321376.jpg",Me=Object(x.a)((function(e){return{root:{width:"100%",height:"30vh"}}}));function Te(e){var t=Me();return Object(p.jsx)("img",{className:t.root,src:null==e.img?Ce:e.img})}function Ne(e){var t=Object(l.f)(),a=Object(l.g)(),r=Object(n.useContext)(qe).setCondition,i=a.state.name,c=a.state.originName,o=a.state.img,s={regionName:i,originName:c};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(X.a,{in:!0,mountOnEnter:!0,children:Object(p.jsx)(u.a,{children:Object(p.jsx)(Te,{img:o})})}),Object(p.jsx)(u.a,{display:"flex",justifyContent:"center",children:Object(p.jsx)(u.a,{width:"100%",maxWidth:500,children:Object(p.jsx)(me,{onSubmit:function(e){r(Object(y.a)(Object(y.a)({},e),{},{status:"first"})),t.push("/plan")},condition:s})})})]})}var Pe=Object(x.a)((function(e){return{root:{}}}));function De(e){var t=Pe(),a=Object(n.useRef)(null);!function(e){var t=Object(n.useContext)(qe),a=t.google,r=t.setMap;Object(n.useEffect)((function(){if(console.log("useMap"),null!=a&&null!=e){var t=new a.maps.Map(e.current,{zoom:15,center:{lat:35.6432027,lng:139.6729435}});r(t)}}),[a,e])}(a);var r=window.innerHeight;return console.log(r),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{ref:a,className:t.root,style:{height:"100%"},children:"I can use the DOM with react ref"})})}function Ie(e){return function(){var e=Object(n.useContext)(qe),t=e.google,a=e.map,r=e.plan,i=e.setPlan,c=e.markers,o=e.setMarkers,s=e.condition,l=e.setPlaces,u=e.setValue;Object(n.useEffect)(Object(k.a)(v.a.mark((function e(){var n,s,j,b,d,p,m,O;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&null!=a){e.next=2;break}return e.abrupt("return");case 2:if(null!=c&&(c.originMarker.setMap(null),c.destinationMarker.setMap(null),c.spotMarkers.map((function(e){e.setMap(null)}))),s=(n={regionName:"\u5927\u962a",originName:"\u5927\u962a\u99c5",destinationName:"\u8431\u5d8b\u99c5",meal:!1,status:"first"}).regionName,j=n.originName,b=n.destinationName,d=n.meal,n.status,null!=r){e.next=13;break}return e.next=8,C(t,a,s,j);case 8:p=e.sent,l(p.slice(5)),p=p.slice(0,5),e.next=15;break;case 13:p=r.newSpots,i(null);case 15:return e.next=17,P(t,a,j,b,p);case 17:if(m=e.sent,!d){e.next=21;break}return e.next=21,B(t,a,m);case 21:m.newSpots=Object(w.a)(m.spots),i(Object(y.a)({},m)),O=T(t,a,m.itinerary,u),o(Object(y.a)({},O)),console.log(m);case 26:case"end":return e.stop()}}),e)}))),[t,a,s])}(),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(De,{}),Object(p.jsx)(Se,{})]})}a(269),a(111),Object(x.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));a(270),a(271),a(114),a(112),a(113),Object(x.a)({root:{position:"fixed",bottom:0,width:"100%"}});a(89),Object(x.a)({list:{width:250},fullList:{width:"auto"}});var _e=Object(x.a)((function(e){return{root:{position:"relative"}}}));function Be(){var e=_e(),t=Object(n.useState)(0),a=Object(o.a)(t,2),r=(a[0],a[1],Object(n.useState)(0)),i=Object(o.a)(r,2),c=(i[0],i[1]),s=Object(n.useState)("default"),l=Object(o.a)(s,2),j=l[0],b=l[1];M();var m=function(){c(0),b("primary")},x=function(){c(1),b("default")};return Object(p.jsxs)(u.a,{className:e.root,children:[Object(p.jsx)("div",{style:{height:window.innerHeight},children:Object(p.jsx)(De,{})}),Object(p.jsx)(u.a,{style:{position:"absolute",width:"100%",top:0},children:Object(p.jsxs)(u.a,{p:5,children:[Object(p.jsxs)(u.a,{sx:{display:"flex"},children:[Object(p.jsx)(u.a,{style:{flexGrow:1},children:Object(p.jsx)(u.a,{sx:{display:"flex",justifyContent:"center",height:"100%",alignItems:"center"},children:Object(p.jsx)(d.a,{color:"secondary",fontSize:"large"})})}),Object(p.jsx)(u.a,{style:{flexGrow:1},children:Object(p.jsx)(O,{fullWidth:!0})})]}),Object(p.jsx)(ve.a,{label:"PLAN",variant:"outlined",onClick:m,color:j}),Object(p.jsx)(ve.a,{label:"\u4eba\u6c17\u306e\u30a8\u30ea\u30a2",variant:"outlined",onClick:x}),Object(p.jsx)(ve.a,{label:"\u30ec\u30b9\u30c8\u30e9\u30f3",variant:"outlined",onClick:x})]})})]})}a(272),a(276),a(274),a(275),a(273);var qe=Object(n.createContext)(),ze=Object(x.a)((function(e){return{root:{},bottomNavigation:{position:"fixed",bottom:e.spacing(2)}}}));function Fe(){ze();var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),c=Object(o.a)(i,2),j=c[0],b=c[1],d=Object(n.useState)(null),m=Object(o.a)(d,2),O=m[0],x=m[1],f=Object(n.useState)(null),h=Object(o.a)(f,2),g=h[0],v=h[1],y=Object(n.useState)(null),w=Object(o.a)(y,2),k=w[0],S=w[1],C=Object(n.useState)(null),M=Object(o.a)(C,2),T=M[0],N=M[1],P=Object(n.useState)(0),D=Object(o.a)(P,2),I={google:a,setGoogle:r,map:j,setMap:b,plan:O,setPlan:x,markers:g,setMarkers:v,condition:k,setCondition:S,places:T,setPlaces:N,value:D[0],setValue:D[1]};return Object(p.jsx)(qe.Provider,{value:I,children:Object(p.jsx)(s.a,{children:Object(p.jsx)(u.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/condition",children:Object(p.jsx)(Ne,{})}),Object(p.jsx)(l.a,{path:"/plan",children:Object(p.jsx)(Ie,{})}),Object(p.jsx)(l.a,{path:"/",children:Object(p.jsx)(Be,{})})]})})})})}var We=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,287)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};a(167);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Fe,{})}),document.getElementById("root")),We()}},[[168,1,2]]]);
//# sourceMappingURL=main.18ec83f5.chunk.js.map