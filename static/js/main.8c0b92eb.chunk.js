(this.webpackJsonpomdb_searcher=this.webpackJsonpomdb_searcher||[]).push([[0],{241:function(e,t,n){},242:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),s=(n(241),n(242),n(20)),o=n.n(s),l=n(38),j=n(111),u=n(16),d=n(216),b=n.n(d),p="SEARCH_MOVIE",m="ADD_NOMINATION",O="REMOVE_NOMINATION",h="REMOVE_ALL_NOMINATION",f="MOVIE_ERROR",x="ADD_MESSAGE",y="REMOVE_MESSAGE",v="REFRESH_LOCAL_STORAGE",g="LOAD_NOMINATED_MOVIES",S="LOAD_NOMINATED_MOVIES_ERROR",E=n(317),N=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3,r=Object(E.a)();n({type:x,payload:{message:e,alertType:t,id:r}}),setTimeout((function(){return n({type:y,payload:r})}),a)},I=function(){var e=Object(l.a)(o.a.mark((function e(t,n,a,r){var c,i,s,l,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="","----"!==a?(console.log("sss"),c="https://www.omdbapi.com/?s=".concat(t,"&type=movie&apikey=9c01b986&page=").concat(n,"&y=").concat(a)):c="https://www.omdbapi.com/?s=".concat(t,"&type=movie&apikey=9c01b986&page=").concat(n),e.next=5,b.a.get(c);case 5:i=e.sent,console.log(i),i.data.Search?(s=i.data.Search.map((function(e){return{title:e.Title,yearOfLease:e.Year,poster:e.Poster,imdbID:e.imdbID}})),l=n,j=i.data.totalResults,r({type:p,payload:{movieItems:s,newPageNum:l,totalResults:j,searchInput:t,movieLeaseYear:a}}),1===n&&N(j+" movies found,cheers!","success",r)):i.data.Error?N(i.data.Error,"error",r):N("Too many results. or invalid input!","error",r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),N("Invalid input!","error",r);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),w=n(299),A=n(316),R=n(291),T=n(293),k=n(294),M=n(295),D=n(298),L=n(233),_=n(223),C=n.n(_),F=n(4),W=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(j.a)(i,2),d=s[0],b=s[1],p=Object(u.b)(),m=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,I(n,1,d,p);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsx)("div",{style:{margin:"20px",width:"100%"},children:Object(F.jsx)(r.a.Fragment,{children:Object(F.jsx)(A.a,{children:Object(F.jsx)(R.a,{style:{marginTop:"20px"},children:Object(F.jsx)("form",{onSubmit:m,children:Object(F.jsx)(T.a,{children:Object(F.jsxs)(k.a,{container:!0,children:[Object(F.jsx)(k.a,{item:!0,lg:12,sm:12,xl:12,xs:12,children:Object(F.jsxs)(A.a,{style:{justifyContent:"start",display:"flex",flexWrap:"wrap"},children:[Object(F.jsx)("div",{style:{width:"80%"},children:Object(F.jsx)(M.a,{required:!0,label:"movie title",fullWidth:!0,InputProps:{startAdornment:Object(F.jsx)(D.a,{position:"start",children:Object(F.jsx)(L.a,{fontSize:"small",color:"action",children:Object(F.jsx)(C.a,{})})})},onChange:function(e){c(e.target.value)},placeholder:"Search a movie",variant:"outlined",value:n})}),Object(F.jsx)("div",{style:{width:"19%",marginLeft:"5px"},children:Object(F.jsx)(M.a,{id:"outlined-select-currency-native",select:!0,label:"Lease year",value:d,onChange:function(e){b(e.target.value)},SelectProps:{native:!0},defaultValue:"Default Value",fullWidth:!0,variant:"outlined",children:function(){var e=[];e.push(Object(F.jsx)("option",{value:"blank",children:"----"},1900));for(var t=(new Date).getFullYear(),n=1960;n<=t;n++)e.push(Object(F.jsx)("option",{value:n,children:n},n));return e}()})}),Object(F.jsx)("div",{style:{width:"20%"},children:Object(F.jsx)(w.a,{variant:"contained",color:"primary",type:"submit",value:"Submit",style:{textTransform:"none",float:"left",marginTop:"10px"},children:"Search"})})]})}),Object(F.jsx)(k.a,{children:Object(F.jsx)(A.a,{})})]})})})})})})})},P=n(277),V=n(303),z=n(304),Y=n(306),G=n(305),J=n(318),q=n(300),B=n(29),H=n(301),U=n(302),K=n(224),Q=n.n(K),X=n(225),Z=n.n(X),$=function(){var e=Object(u.c)((function(e){return e.movies})),t=e.movieSearched,n=e.movieNominated,a=Object(u.c)((function(e){return e.movies})),c=a.pageNum,i=a.pageSize,s=a.totalResults,j=a.searchInput,d=a.movieLeaseYear,b=Object(u.b)(),p=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c*i>=s)){e.next=4;break}N("Last page","info",b),e.next=6;break;case 4:return e.next=6,I(j,c+1,d,b);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==c){e.next=4;break}N("First page","info",b),e.next=6;break;case 4:return e.next=6,I(j,c-1,d,b);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return n.length<5?n.some((function(t){return t.imdbID===e.imdbID}))?void 0:Object(F.jsx)(w.a,{variant:"contained",color:"primary",style:{textTransform:"none"},onClick:function(){return function(e,t){try{t({type:m,payload:e}),t({type:v,payload:{}}),N("Success nominate "+e.title.substring(0,10)+"...","info",t)}catch(n){N("Nomination Error :( ","error",t),t({type:f,payload:{msg:n}})}}(e,b)},children:"Nominate"}):(N("Well done! 5 movies nominated :)","success",b),null)};return Object(F.jsx)("div",{style:{margin:"20px"},children:Object(F.jsx)(r.a.Fragment,{children:Object(F.jsxs)(R.a,{style:{marginTop:"20px"},children:[Object(F.jsx)("div",{slot:"header",style:{textAlign:"left"},children:Object(F.jsx)(q.a,{title:""!==j?'Results for "'.concat(j,'"'):"Results",action:Object(F.jsxs)("div",{style:{justifyContent:"space-between",display:"flex"},children:[Object(F.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(F.jsx)(B.a,{align:"center",children:"".concat(c," / ").concat(Math.floor(s/i+1)," - ").concat(s)})}),Object(F.jsx)("div",{style:{},children:Object(F.jsx)(H.a,{color:"primary",onClick:O,"aria-label":"pre page",children:Object(F.jsx)(Q.a,{})})}),Object(F.jsx)("div",{style:{},children:Object(F.jsx)(H.a,{color:"primary",onClick:p,"aria-label":"next page",children:Object(F.jsx)(Z.a,{})})})]})})}),Object(F.jsx)(U.a,{}),0!==t.length&&Object(F.jsx)(P.a,{children:t.map((function(e,n){return Object(F.jsxs)(V.a,{divider:n<t.length-1,children:[Object(F.jsx)(z.a,{children:Object(F.jsx)(J.a,{src:e.poster})}),Object(F.jsx)(G.a,{primary:e.title,secondary:"Posted on ".concat(e.yearOfLease)}),Object(F.jsx)(Y.a,{children:h(e)})]},e.imdbID)}))})]})})})},ee=n(226),te=n.n(ee),ne=function(){var e=Object(u.c)((function(e){return e.movies})),t=Object(u.b)(),n=e.movieNominated;return Object(F.jsx)("div",{style:{margin:"20px"},children:Object(F.jsx)(r.a.Fragment,{children:Object(F.jsxs)(R.a,{style:{marginTop:"20px"},children:[Object(F.jsx)(q.a,{title:"Nominated Movies",style:{textAlign:"left"},action:Object(F.jsx)("div",{children:Object(F.jsx)(H.a,{color:"secondary",onClick:function(){!function(e){try{e({type:h,payload:null}),e({type:v,payload:{}}),N("Success remove all nominated ","success",e)}catch(t){e({type:f,payload:{msg:t}})}}(t)},"aria-label":"clear",children:Object(F.jsx)(te.a,{})})})}),Object(F.jsx)(U.a,{}),0!==n.length&&Object(F.jsx)(P.a,{children:n.map((function(e,a){return Object(F.jsxs)(V.a,{divider:a<n.length-1,children:[Object(F.jsx)(z.a,{children:Object(F.jsx)(J.a,{src:e.poster})}),Object(F.jsx)(G.a,{primary:e.title,secondary:"Posted on ".concat(e.yearOfLease)}),Object(F.jsx)(Y.a,{children:Object(F.jsx)(w.a,{variant:"contained",color:"secondary",style:{textTransform:"none"},onClick:function(){return function(e,t){try{t({type:O,payload:e}),t({type:v,payload:{}}),N("Success remove "+e.title.substring(0,10)+"...","success",t)}catch(n){N("Remove Nomination Error :(","error",t),t({type:f,payload:{msg:n}})}}(e,t)},children:"Remove"})})]},e.imdbID)}))})]})})})},ae=n(313),re=n(307),ce=n(308),ie=n(309),se=n(227),oe=n.n(se),le=function(){return Object(F.jsx)(re.a,{position:"static",elevation:0,children:Object(F.jsxs)(ce.a,{style:{height:20},children:[Object(F.jsx)(ie.a,{children:Object(F.jsx)(oe.a,{})}),Object(F.jsx)(B.a,{variant:"h3",color:"inherit",children:"\xa0 The Shoppies"})]})})},je=n(90),ue=function(){var e=Object(u.c)((function(e){return e.messages})),t=e?e.messageArray:[],n=Object(je.b)().enqueueSnackbar;return Object(a.useEffect)((function(){null!==t&&t.length>0&&t.map((function(e,t){return n(e.message,{variant:e.alertType,preventDuplicate:!0})}))}),[t,n]),null},de=function(){var e=Object(u.b)();return Object(a.useEffect)((function(){!function(e){try{if(localStorage.nominatedMovies){var t=JSON.parse(localStorage.getItem("nominatedMovies")||"[]");e({type:g,payload:t}),N("Success load nominated movie","info",e),N("Welcome back ! :)","success",e)}}catch(n){N("Load error :(","warning",e),e({type:S,payload:{msg:n}})}}(e)})),Object(F.jsxs)(r.a.Fragment,{children:[Object(F.jsx)(le,{}),Object(F.jsx)(ue,{}),Object(F.jsxs)(ae.a,{style:{margin:"auto"},children:[Object(F.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(F.jsx)(W,{})}),Object(F.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(F.jsxs)(k.a,{container:!0,children:[Object(F.jsx)(k.a,{item:!0,xl:6,lg:6,md:6,sm:12,xs:12,children:Object(F.jsx)($,{})}),Object(F.jsx)(k.a,{item:!0,xl:6,lg:6,md:6,sm:12,xs:12,children:Object(F.jsx)(ne,{})})]})})]})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,320)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},pe=n(66),me=n(228),Oe="USER_TYPE",he=n(91),fe=n(14),xe={movieSearched:[],movieNominated:[],searchInput:"",movieLeaseYear:"",pageNum:1,pageSize:10,totalResults:0,error:{}},ye={messageArray:[]},ve=Object(pe.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return console.log("user reducer",t.payload),t.payload;default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case p:return Object(fe.a)(Object(fe.a)({},e),{},{movieSearched:a.movieItems,pageNum:a.newPageNum,totalResults:a.totalResults,searchInput:a.searchInput,movieLeaseYear:a.movieLeaseYear});case m:return Object(fe.a)(Object(fe.a)({},e),{},{movieNominated:[].concat(Object(he.a)(e.movieNominated),[a])});case O:return Object(fe.a)(Object(fe.a)({},e),{},{movieNominated:e.movieNominated.filter((function(e){return e!==a}))});case h:return Object(fe.a)(Object(fe.a)({},e),{},{movieNominated:[]});case v:return localStorage.setItem("nominatedMovies",JSON.stringify(e.movieNominated)),e;case g:return Object(fe.a)(Object(fe.a)({},e),{},{movieNominated:a});case S:case f:return Object(fe.a)(Object(fe.a)({},e),{},{error:a});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_MESSAGE":return Object(fe.a)(Object(fe.a)({},e),{},{messageArray:[].concat(Object(he.a)(e.messageArray),[a])});case"REMOVE_MESSAGE":return Object(fe.a)(Object(fe.a)({},e),{},{messageArray:e.messageArray.filter((function(e){return e.id!==a}))});default:return e}}}),ge={},Se=function(){return Object(pe.createStore)(ve,ge,Object(me.composeWithDevTools)())},Ee=n(229),Ne=n(35),Ie=Object(Ee.a)({palette:{primary:{main:"#339df1",contrastText:"#fff"},background:{default:"#F4F6F8",paper:Ne.a.common.white},text:{primary:"#172b4d",secondary:"#6b778c"}},typography:{h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}}}),we=n(314);i.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(u.a,{store:Se(),children:Object(F.jsx)(je.a,{maxSnack:5,children:Object(F.jsx)(we.a,{theme:Ie,children:Object(F.jsx)(de,{})})})})}),document.getElementById("root")),be()}},[[267,1,2]]]);
//# sourceMappingURL=main.8c0b92eb.chunk.js.map