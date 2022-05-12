(this["webpackJsonpjandreo-space-rockets"]=this["webpackJsonpjandreo-space-rockets"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a,c=n(0),i=n.n(c),s=n(56),r=n.n(s),l=n(177),o=n(172),d=n(26),u=n(5),j=n(9),h=n(157),b=n(178),x=n(154),m=n(155),O=n(156),f=n(158),p=n(1),g=function(){return Object(p.jsxs)(b.a,{m:"6",spacing:"6",children:[Object(p.jsx)(v,{url:"/launches",title:"Browse SpaceX Launches"}),Object(p.jsx)(v,{url:"/launch-pads",title:"Browse SpaceX Launch Pads"})]})},v=function(e){var t=e.url,n=e.title;return Object(p.jsx)(x.a,{as:d.b,to:t,children:Object(p.jsxs)(m.a,{justifyContent:"space-between",p:"6",boxShadow:"md",borderWidth:"1px",rounded:"lg",children:[Object(p.jsx)(O.a,{fontSize:"lg",children:n}),Object(p.jsx)(h.a,{as:f.a})]})})},S=n(185),_=n(179),w=function(){return Object(p.jsx)(m.a,{alignItems:"center",justifyContent:"center",width:"100%",children:Object(p.jsxs)(_.a,{status:"error",variant:"left-accent",flexDirection:"column",justifyContent:"center",textAlign:"center",p:"8",children:[Object(p.jsx)(_.c,{boxSize:"6",mr:0}),Object(p.jsx)(_.d,{mt:4,mb:1,fontSize:"lg",children:"Problems loading the data"}),Object(p.jsx)(_.b,{maxWidth:"md",children:"If the problem persists, try to refresh the page or wait a few minutes and try again."})]})})},y=n(183),k=n(159),L=function(e){var t=e.items;return Object(p.jsx)(y.a,{m:"6",spacing:"1",separator:Object(p.jsx)(h.a,{boxSize:"1em",as:k.a,color:"gray.300"}),children:t.map((function(e,n){var a=t.length===n+1;return Object(p.jsx)(y.b,{isCurrentPage:a,children:Object(p.jsx)(y.c,{as:d.b,to:e.to||"",children:e.label})},e.label)}))})},z=n(175),C=n(160),F=function(e){var t=e.loadMore,n=e.data,a=e.pageSize,c=e.isLoadingMore,i=n&&(0===n.length||n[n.length-1].length<a);return Object(p.jsx)(m.a,{justifyContent:"center",my:"100px",children:Object(p.jsx)(z.a,{onClick:t,disabled:i||c,children:c?Object(p.jsx)(C.a,{}):i?"That's all!":"Show more..."})})},P=n(4),I="favorites";!function(e){e.Launches="launches",e.LaunchPads="launch_pads"}(a||(a={}));var M,W,R=function(e){var t=window.localStorage.getItem(e);return t?JSON.parse(t):null},J=function(e,t){var n,a=R(I);if(a){var c=a[e];if(c)if(-1===c.indexOf(t.toString()))c.push(t.toString()),a[e]=c,n=a,window.localStorage.setItem(I,JSON.stringify(n));else{var i=c.indexOf(t.toString());c.splice(i,1),a[e]=c,0==c.length&&delete a[e],n=a,window.localStorage.setItem(I,JSON.stringify(n)),Object.keys(a).length<=0&&window.localStorage.removeItem(I)}else a[e]=[t.toString()],n=a,window.localStorage.setItem(I,JSON.stringify(n))}else n=Object(P.a)({},e,[t.toString()]),window.localStorage.setItem(I,JSON.stringify(n))},N=Object(c.createContext)({favoritesContext:R(I),updateFavorites:function(e,t){J(e,t),R(I)}}),E=function(){return Object(c.useContext)(N)},A=n(184),H=n(162);!function(e){e.Cape_Canaveral="ccafs_slc_40",e.Kennedy_Space_Center="ksc_lc_39a",e.Vandenberg_Air_Force_Base="vafb_slc_4e"}(M||(M={})),function(e){e[e.local=0]="local",e[e.user=1]="user"}(W||(W={}));var D,V=function(e){var t;switch(e.kind){case W.local:t=e.launchSite===(M.Cape_Canaveral||M.Kennedy_Space_Center)?"America/New_York":e.launchSite===M.Vandenberg_Air_Force_Base?"America/Los_Angeles":void 0;break;case W.user:default:t=void 0}return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZone:t,timeZoneName:"short"}).format(new Date(e.timestamp))},T=n(103),B=n(161);!function(e){e[e.List=0]="List",e[e.Detail=1]="Detail"}(D||(D={}));var K=function(e){var t=e.isFavorite,n=e.updateFavorites,a=Object(c.useState)(!1),i=Object(u.a)(a,2),s=i[0],r=i[1];return Object(p.jsxs)(z.a,{display:"flex",justifyContent:"flex-start",width:s?"100%":"38px",maxWidth:"max-content",onClick:function(e){e.preventDefault(),n()},onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},transition:"width 0.2s",zIndex:"1",size:"sm",children:[Object(p.jsx)(T.a,{display:"inline",children:Object(p.jsx)(B.a,{fill:t?"gold":"none"})}),Object(p.jsx)(O.a,{display:"inline",verticalAlign:"middle",fontSize:"sm",opacity:s?1:0,transition:"all 0.3s",paddingLeft:"0.5em",children:s&&(t?"Remove from favorites":"Mark as favorite")})]})},U=n(73),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250;return"hsl(".concat(e+t*Math.random(),", 80%, 90%)")},Y=function(e){var t,n,i,s,r=e.item,l=e.updateFavorites,o=E().favoritesContext,u=r.kind===a.Launches?null===o||void 0===o?void 0:o.launches:null===o||void 0===o?void 0:o.launch_pads,j=Object(c.useMemo)((function(){return"linear-gradient(".concat(X(),", ").concat(X(),")")}),[]),b=r.kind===a.Launches?null!==(t=null===(n=r.launch.links.flickr_images[0])||void 0===n?void 0:n.replace("_o.jpg","_z.jpg"))&&void 0!==t?t:r.launch.links.mission_patch_small:null,x=null!==b&&void 0!==b?b:j;return Object(p.jsxs)(h.a,{as:d.b,to:r.kind===a.Launches?"/launches/".concat(r.launch.flight_number):"/launch-pads/".concat(r.launchPad.site_id),boxShadow:"md",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[Object(p.jsxs)(m.a,{position:"relative",p:[2,6],height:r.kind===a.Launches?["200px",null,"300px"]:"80px",bgImage:x,title:r.kind===a.Launches?"".concat(r.launch.mission_name," launch"):"".concat(r.launchPad.name," launch pad"),bgPos:"bottom",bgSize:"cover",backgroundRepeat:"no-repeat",justifyContent:"space-between",direction:"column",boxSizing:"border-box",children:[Object(p.jsx)(K,{isFavorite:null!==(i=null===u||void 0===u?void 0:u.includes(JSON.stringify(r.kind===a.Launches?r.launch:r.launchPad)))&&void 0!==i&&i,updateFavorites:function(){return r.kind===a.Launches?l(a.Launches,r.launch):l(a.LaunchPads,r.launchPad)}}),r.kind===a.Launches&&r.launch.links.mission_patch_small&&Object(p.jsx)(A.a,{position:"absolute",top:"5",right:"5",src:r.launch.links.mission_patch_small,height:"75px",objectFit:"contain",objectPosition:"bottom"}),r.kind===a.Launches&&!b&&Object(p.jsx)(O.a,{margin:"auto",children:"Preview unavailable"})]}),Object(p.jsxs)(h.a,{p:"6",children:[Object(p.jsxs)(h.a,{d:"flex",flexWrap:"wrap",alignItems:"baseline",children:[r.kind===a.Launches?Object(p.jsx)(H.a,{px:"2",variant:"solid",colorScheme:r.launch.launch_success?"green":"red",mr:"2",children:r.launch.launch_success?"Successful":"Failed"}):Object(p.jsx)(H.a,{px:"2",variant:"solid",colorScheme:"active"===r.launchPad.status?"green":"red",mr:"2",children:"active"===r.launchPad.status?"Active":"Retired"}),Object(p.jsx)(h.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",children:r.kind===a.Launches?"".concat(r.launch.rocket.rocket_name," \u2022 ").concat(r.launch.launch_site.site_name):"".concat(r.launchPad.attempted_launches," attempted \u2022 ").concat(r.launchPad.successful_launches," succeeded")})]}),Object(p.jsx)(h.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:r.kind===a.Launches?r.launch.mission_name:r.launchPad.name}),Object(p.jsx)(m.a,{flexWrap:"wrap",children:r.kind===a.Launches?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(O.a,{fontSize:"sm",mr:"2",children:[(s=r.launch.launch_date_utc,new Intl.DateTimeFormat("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(new Date(s)))," "]}),Object(p.jsx)(O.a,{color:"gray.500",fontSize:"sm",children:Object(U.a)(r.launch.launch_date_utc)})]}):Object(p.jsx)(O.a,{color:"gray.500",fontSize:"sm",children:r.launchPad.vehicles_launched.join(", ")})})]})]})},Z=function(e){var t=e.launches,n=e.isValidating,i=e.loadMore,s=E().updateFavorites;return Object(c.useEffect)((function(){n||t.setSize(t.size+1)}),[i]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(L,{items:[{label:"Home",to:"/"},{label:"Launches"}]}),Object(p.jsxs)(S.a,{m:[2,null,6],minChildWidth:"350px",spacing:"4",children:[t.error&&Object(p.jsx)(w,{}),t.data&&(null===t||void 0===t?void 0:t.data.flat().map((function(e){return Object(p.jsx)(Y,{item:{kind:a.Launches,launch:e},updateFavorites:function(){s(a.Launches,JSON.stringify(e))}},e.flight_number)})))]}),Object(p.jsx)(F,{loadMore:function(){return t.setSize(t.size+1)},data:t.data,pageSize:Ie,isLoadingMore:n})]})},q=n(165),G=n(166),Q=n(167),$=n(168),ee=n(169),te=n(163),ne=n(164),ae=n(174),ce=n(170),ie=n(80),se=n(81),re=n.n(se),le=n(96),oe=n(82),de=function(){var e=Object(le.a)(re.a.mark((function e(t){var n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw Error(n.statusText);case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(e,t){var n=new URLSearchParams;for(var a in t)n.append(a,t[a]);return"".concat("https://api.spacexdata.com/v3").concat(e,"?").concat(n.toString())},je=function(e,t){var n=ue(e,t);return Object(oe.a)(e?n:null,de)},he=function(e,t){return Object(oe.b)((function(n,a){return a&&!a.length?null:ue(e,Object(ie.a)(Object(ie.a)({},t),{},{offset:t.limit*n}))}),de)},be=function(){var e=E(),t=e.favoritesContext,n=e.updateFavorites,i=Object(c.useState)(!1),s=Object(u.a)(i,2),r=s[0],l=s[1],o=Object(j.g)().launchId,d=je("/launches/".concat(o),{}),b=d.data,x=d.error;return Object(c.useEffect)((function(){(null===t||void 0===t?void 0:t.launches)&&b?l(t.launches.includes(JSON.stringify(b))):l(!1)}),[t]),x?Object(p.jsx)(w,{}):b?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(L,{items:[{label:"Home",to:"/"},{label:"Launches",to:"/launches"},{label:"#".concat(b.flight_number)}]}),Object(p.jsx)(xe,{launch:b,isFavorite:r,updateFavorites:function(){n(a.Launches,JSON.stringify(b))}}),Object(p.jsxs)(h.a,{m:[3,6],children:[Object(p.jsx)(me,{launch:b}),Object(p.jsx)(Oe,{launch:b}),Object(p.jsx)(O.a,{color:"gray.700",fontSize:["md",null,"lg"],my:"8",children:b.details}),Object(p.jsx)(fe,{launch:b}),Object(p.jsx)(pe,{images:b.links.flickr_images})]})]}):Object(p.jsx)(m.a,{justifyContent:"center",alignItems:"center",minHeight:"50vh",children:Object(p.jsx)(C.a,{size:"lg"})})},xe=function(e){var t=e.launch,n=e.isFavorite,a=e.updateFavorites;return Object(p.jsxs)(m.a,{bgImage:"url(".concat(t.links.flickr_images[0],")"),bgPos:"center",bgSize:"cover",backgroundRepeat:"no-repeat",minHeight:"30vh",position:"relative",p:[2,6],justifyContent:"space-between",direction:"column",children:[Object(p.jsx)(K,{isFavorite:n,updateFavorites:a}),Object(p.jsxs)(m.a,{direction:"row",alignItems:"flex-end",justifyContent:"space-between",children:[Object(p.jsx)(A.a,{position:"absolute",top:"5",right:"5",src:t.links.mission_patch_small,height:["85px","150px"],objectFit:"contain",objectPosition:"bottom"}),Object(p.jsx)(te.a,{color:"white",display:"inline",backgroundColor:"#718096b8",fontSize:["lg","5xl"],px:"4",py:"2",borderRadius:"lg",children:t.mission_name}),Object(p.jsxs)(b.a,{isInline:!0,spacing:"3",children:[Object(p.jsxs)(H.a,{colorScheme:"purple",fontSize:["xs","md"],children:["#",t.flight_number]}),t.launch_success?Object(p.jsx)(H.a,{colorScheme:"green",fontSize:["xs","md"],children:"Successful"}):Object(p.jsx)(H.a,{colorScheme:"red",fontSize:["xs","md"],children:"Failed"})]})]})]})},me=function(e){var t=e.launch,n=Object(c.useState)(!1),a=Object(u.a)(n,2),i=a[0],s=a[1],r=V({kind:W.user,timestamp:t.launch_date_local});return Object(p.jsxs)(S.a,{columns:[1,1,2],borderWidth:"1px",p:"4",borderRadius:"md",children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsxs)(ne.d,{display:"flex",children:[Object(p.jsx)(h.a,{as:q.a,width:"1em"})," ",Object(p.jsx)(h.a,{ml:"2",as:"span",children:"Launch Date"})]}),Object(p.jsxs)(ne.e,{display:"inline",fontSize:["md","xl"],children:[V({kind:W.local,timestamp:t.launch_date_local,launchSite:t.launch_site.site_id}),Object(p.jsx)(ae.a,{hasArrow:!0,isOpen:i,label:r,children:Object(p.jsx)(T.a,{alt:r,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},onTouchEnd:function(){return s(!i)},marginLeft:"0.2em",children:Object(p.jsx)(G.a,{})})})]}),Object(p.jsx)(ne.c,{children:Object(U.a)(t.launch_date_utc)})]}),Object(p.jsxs)(ne.a,{children:[Object(p.jsxs)(ne.d,{display:"flex",children:[Object(p.jsx)(h.a,{as:Q.a,width:"1em"})," ",Object(p.jsx)(h.a,{ml:"2",as:"span",children:"Launch Site"})]}),Object(p.jsx)(ne.e,{fontSize:["md","xl"],children:Object(p.jsx)(x.a,{as:d.b,to:"/launch-pads/".concat(t.launch_site.site_id),children:t.launch_site.site_name_long})}),Object(p.jsx)(ne.c,{children:t.launch_site.site_name})]})]})},Oe=function(e){var t=e.launch,n=t.rocket.first_stage.cores;return Object(p.jsxs)(S.a,{columns:[1,1,2],borderWidth:"1px",mt:"4",p:"4",borderRadius:"md",children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsxs)(ne.d,{display:"flex",children:[Object(p.jsx)(h.a,{as:$.a,width:"1em"})," ",Object(p.jsx)(h.a,{ml:"2",as:"span",children:"Rocket"})]}),Object(p.jsx)(ne.e,{fontSize:["md","xl"],children:t.rocket.rocket_name}),Object(p.jsx)(ne.c,{children:t.rocket.rocket_type})]}),Object(p.jsxs)(ne.b,{children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsxs)(ne.d,{display:"flex",children:[Object(p.jsx)(h.a,{as:ee.a,width:"1em"})," ",Object(p.jsx)(h.a,{ml:"2",as:"span",children:"First Stage"})]}),Object(p.jsx)(ne.e,{fontSize:["md","xl"],children:n.map((function(e){return e.core_serial})).join(", ")}),Object(p.jsx)(ne.c,{children:n.every((function(e){return e.land_success}))?1===n.length?"Recovered":"All recovered":"Lost"})]}),Object(p.jsxs)(ne.a,{children:[Object(p.jsxs)(ne.d,{display:"flex",children:[Object(p.jsx)(h.a,{as:ee.a,width:"1em"})," ",Object(p.jsx)(h.a,{ml:"2",as:"span",children:"Second Stage"})]}),Object(p.jsxs)(ne.e,{fontSize:["md","xl"],children:["Block ",t.rocket.second_stage.block]}),Object(p.jsxs)(ne.c,{children:["Payload:"," ",t.rocket.second_stage.payloads.map((function(e){return e.payload_type})).join(", ")]})]})]})]})},fe=function(e){var t=e.launch;return Object(p.jsx)(ce.a,{maxH:"400px",ratio:1.7,children:Object(p.jsx)(h.a,{as:"iframe",title:t.mission_name,src:"https://www.youtube.com/embed/".concat(t.links.youtube_id),allowFullScreen:!0})})},pe=function(e){var t=e.images;return Object(p.jsx)(S.a,{my:"6",minChildWidth:"350px",spacing:"4",children:t.map((function(e){return Object(p.jsx)("a",{href:e,children:Object(p.jsx)(A.a,{src:e.replace("_o.jpg","_z.jpg")})},e)}))})},ge=function(e){var t=e.launchPads,n=e.loadMore,i=e.isValidating,s=E().updateFavorites;return Object(c.useEffect)((function(){i||t.setSize(t.size+1)}),[n]),Object(p.jsxs)(h.a,{children:[Object(p.jsx)(L,{items:[{label:"Home",to:"/"},{label:"Launch Pads"}]}),Object(p.jsxs)(S.a,{m:[2,null,6],minChildWidth:"350px",spacing:"4",children:[t.error&&Object(p.jsx)(w,{}),t.data&&(null===t||void 0===t?void 0:t.data.flat().map((function(e){return Object(p.jsx)(Y,{item:{kind:a.LaunchPads,launchPad:e},updateFavorites:function(){s(a.LaunchPads,JSON.stringify(e))}},e.site_id)})))]}),Object(p.jsx)(F,{loadMore:function(){return t.setSize(t.size+1)},data:t.data,pageSize:Ie,isLoadingMore:i})]})},ve=function(){var e=Object(j.g)().launchPadId,t=je("/launchpads/".concat(e),{}),n=t.data,a=t.error,c=je(n?"/launches/past":null,{limit:3,order:"desc",sort:"launch_date_utc",site_id:null===n||void 0===n?void 0:n.site_id}),i=c.data,s=c.error;return a||s?Object(p.jsx)(w,{}):n?Object(p.jsxs)(h.a,{children:[Object(p.jsx)(L,{items:[{label:"Home",to:"/"},{label:"Launch Pads",to:"/launch-pads"},{label:n.name}]}),Object(p.jsx)(Se,{launchPad:n}),Object(p.jsxs)(h.a,{m:[3,6],children:[Object(p.jsx)(_e,{launchPad:n}),Object(p.jsx)(O.a,{color:"gray.700",fontSize:["md",null,"lg"],my:"8",children:n.details}),Object(p.jsx)(we,{location:n.location}),i&&Object(p.jsx)(ye,{launches:i})]})]}):Object(p.jsx)(m.a,{justifyContent:"center",alignItems:"center",minHeight:"50vh",children:Object(p.jsx)(C.a,{size:"lg"})})},Se=function(e){var t=e.launchPad,n=E(),i=n.favoritesContext,s=n.updateFavorites,r=Object(c.useState)(!1),l=Object(u.a)(r,2),o=l[0],d=l[1],j=Object(c.useMemo)((function(){return"linear-gradient(".concat(X(),", ").concat(X(),")")}),[]);return Object(c.useEffect)((function(){(null===i||void 0===i?void 0:i.launch_pads)?d(i.launch_pads.includes(JSON.stringify(t))):d(!1)}),[i]),Object(p.jsxs)(m.a,{background:j,bgPos:"center",bgSize:"cover",backgroundRepeat:"no-repeat",minHeight:"15vh",position:"relative",p:[2,6],justifyContent:"space-between",direction:"column",children:[Object(p.jsx)(K,{isFavorite:o,updateFavorites:function(){s(a.LaunchPads,JSON.stringify(t))}}),Object(p.jsxs)(m.a,{direction:"row",alignItems:"flex-end",justifyContent:"space-between",children:[Object(p.jsx)(te.a,{color:"gray.900",display:"inline",px:"4",py:"2",fontSize:["md","3xl"],borderRadius:"lg",children:t.site_name_long}),Object(p.jsxs)(b.a,{isInline:!0,spacing:"3",children:[Object(p.jsxs)(H.a,{colorScheme:"purple",fontSize:["sm","md"],children:[t.successful_launches,"/",t.attempted_launches," ","successful"]}),"active"===t.status?Object(p.jsx)(H.a,{colorScheme:"green",fontSize:["sm","md"],children:"Active"}):Object(p.jsx)(H.a,{colorScheme:"red",fontSize:["sm","md"],children:"Retired"})]})]})]})},_e=function(e){var t=e.launchPad;return Object(p.jsxs)(S.a,{columns:[1,1,2],borderWidth:"1px",p:"4",borderRadius:"md",children:[Object(p.jsxs)(ne.a,{children:[Object(p.jsxs)(ne.d,{display:"flex",children:[Object(p.jsx)(h.a,{as:Q.a,width:"1em"})," ",Object(p.jsx)(h.a,{ml:"2",as:"span",children:"Location"})]}),Object(p.jsx)(ne.e,{fontSize:"xl",children:t.location.name}),Object(p.jsx)(ne.c,{children:t.location.region})]}),Object(p.jsxs)(ne.a,{children:[Object(p.jsxs)(ne.d,{display:"flex",children:[Object(p.jsx)(h.a,{as:$.a,width:"1em"})," ",Object(p.jsx)(h.a,{ml:"2",as:"span",children:"Vehicles launched"})]}),Object(p.jsx)(ne.e,{fontSize:"xl",children:t.vehicles_launched.map((function(e){return Object(p.jsxs)(c.Fragment,{children:[e,Object(p.jsx)("br",{})]})}))})]})]})},we=function(e){var t=e.location;return Object(p.jsx)(ce.a,{ratio:3.2,children:Object(p.jsx)(h.a,{as:"iframe",src:"https://maps.google.com/maps?q=".concat(t.latitude,", ").concat(t.longitude,"&z=15&output=embed")})})},ye=function(e){var t=e.launches;return(null===t||void 0===t?void 0:t.length)?Object(p.jsxs)(b.a,{my:"8",spacing:"3",children:[Object(p.jsx)(O.a,{fontSize:"xl",fontWeight:"bold",children:"Last launches"}),Object(p.jsx)(S.a,{minChildWidth:"350px",spacing:"4",children:t.flat().map((function(e){return Object(p.jsx)(Y,{item:{kind:a.Launches,launch:e},updateFavorites:function(){return null}},e.flight_number)}))})]}):null},ke=n(186),Le=n(187),ze=n(32),Ce=n(176),Fe=function(){var e,t,n=Object(c.useContext)(N),i=n.favoritesContext,s=n.updateFavorites,r=Object(ke.a)(),l=r.isOpen,o=r.onOpen,d=r.onClose,j=Object(c.useState)(!1),h=Object(u.a)(j,2),b=h[0],x=h[1],m=Object(c.useState)(""),f=Object(u.a)(m,2),g=f[0],v=f[1],_=Object(c.useRef)(null),w=null===i||void 0===i||null===(e=i.launches)||void 0===e?void 0:e.filter((function(e){return-1!==e.toLowerCase().search(g.toLowerCase())})).reverse(),y=null===i||void 0===i||null===(t=i.launch_pads)||void 0===t?void 0:t.filter((function(e){return-1!==e.toLowerCase().search(g.toLowerCase())})).reverse();return w||y?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(z.a,{ref:_,colorScheme:"gray",onClick:o,color:"black",display:"flex",justifyContent:"flex-start",width:b?"100%":"38px",maxWidth:"max-content",onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},transition:"width 0.2s",size:"sm",children:[Object(p.jsx)(T.a,{display:"inline",children:Object(p.jsx)(B.a,{fill:"gold"})}),Object(p.jsx)(O.a,{paddingLeft:"0.5em",children:b&&"Open Favorites"})]}),Object(p.jsxs)(Le.a,{isOpen:l,placement:"right",onClose:d,finalFocusRef:_,children:[Object(p.jsx)(ze.f,{}),Object(p.jsxs)(Le.b,{children:[Object(p.jsx)(ze.c,{}),Object(p.jsx)(ze.e,{fontSize:"2xl",children:"Favorites"}),Object(p.jsxs)(ze.b,{children:[Object(p.jsx)(Ce.a,{onChange:function(e){v(e.target.value)},placeholder:"Start typing to filter..."}),w&&Object(p.jsx)(O.a,{fontSize:"xl",fontWeight:"bold",m:"1em 0",children:"Launches (".concat(w.length,")")}),Object(p.jsx)(S.a,{spacing:"4",children:null===w||void 0===w?void 0:w.map((function(e){var t=JSON.parse(e).flight_number;return Object(p.jsx)(Y,{item:{kind:a.Launches,launch:JSON.parse(e)},updateFavorites:function(){return s(a.Launches,e)}},t)}))}),y&&Object(p.jsx)(O.a,{fontSize:"xl",fontWeight:"bold",m:"1em 0",children:"Launch Pads (".concat(y.length,")")}),Object(p.jsx)(S.a,{spacing:"4",children:null===y||void 0===y?void 0:y.map((function(e){var t=JSON.parse(e).site_id;return Object(p.jsx)(Y,{item:{kind:a.LaunchPads,launchPad:JSON.parse(e)},updateFavorites:function(){return s(a.LaunchPads,e)}},t)}))})]})]})]})]}):null},Pe=function(e){var t=e.children;return Object(p.jsxs)(m.a,{as:"nav",align:"center",justify:"space-between",wrap:"wrap",padding:"6",bg:"gray.800",color:"white",children:[Object(p.jsx)(O.a,{fontFamily:"mono",letterSpacing:"2px",fontWeight:"bold",fontSize:"lg",children:"\xa1SPACE\xb7R0CKETS!"}),t]})},Ie=12,Me=function(){var e=Object(c.useState)(R(I)),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(u.a)(i,2),r=s[0],l=s[1],o=Object(c.useRef)(null),d=he("/launches/past",{limit:Ie,order:"desc",sort:"launch_date_utc"}),b=he("/launchpads",{limit:Ie}),x=function(){if(o.current){var e=window.innerHeight,t=e+window.scrollY,n=o.current.offsetHeight;l(!!(t>=n-e))}};return Object(c.useEffect)((function(){return window.addEventListener("scroll",x),function(){window.removeEventListener("scroll",x)}}),[]),Object(p.jsx)(h.a,{ref:o,children:Object(p.jsxs)(N.Provider,{value:{favoritesContext:n,updateFavorites:function(e,t){J(e,t),a(R(I))}},children:[Object(p.jsx)(Pe,{children:n&&Object(p.jsx)(Fe,{})}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/",element:Object(p.jsx)(g,{})}),Object(p.jsx)(j.a,{path:"/launches",element:d&&Object(p.jsx)(Z,{launches:d,isValidating:d.isValidating,loadMore:r})}),Object(p.jsx)(j.a,{path:"/launches/:launchId",element:Object(p.jsx)(be,{})}),Object(p.jsx)(j.a,{path:"/launch-pads",element:b&&Object(p.jsx)(ge,{launchPads:b,isValidating:b.isValidating,loadMore:r})}),Object(p.jsx)(j.a,{path:"/launch-pads/:launchPadId",element:Object(p.jsx)(ve,{})})]})]})})};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(d.a,{basename:"/jandreo-space-rockets",children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(o.a,{}),Object(p.jsx)(Me,{})]})})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.322384e2.chunk.js.map