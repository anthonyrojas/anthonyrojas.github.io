(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{51:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a(54),n=a.n(r),c=(a(56),a(57),n.a.initializeApp({apiKey:"AIzaSyDBx8FbnckJ35W1T6ivH9wwpfX6f_I7QvQ",authDomain:"portfolio-6d2f6.firebaseapp.com",databaseURL:"https://portfolio-6d2f6.firebaseio.com",projectId:"portfolio-6d2f6",storageBucket:"portfolio-6d2f6.appspot.com",messagingSenderId:"419510442110"})),s=n.a.firestore();s.settings({timestampsInSnapshots:!0});var o=s;c.storage()},62:function(e,t,a){},82:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(52),s=a.n(c),o=a(13),i=a(53),u=a(5),l=a(6),p=a(8),d=a(7),f=a(9),m=a(51),h=n.a.createContext(),b=h.Consumer,v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={err:!1,loading:!0,workContent:""},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"fetchWorkContent",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.collection("entries").where("title","==","Work").limit(1).get();case 3:if(!((t=e.sent).docs.length>0)){e.next=6;break}return e.abrupt("return",{err:!1,data:Object(o.a)({id:t.docs[0].id},t.docs[0].data())});case 6:return e.abrupt("return",{err:!0,data:{}});case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{err:!0,data:{}});case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"fetchJobs",value:function(){var e=Object(i.a)(s.a.mark(function e(t){var a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=[],e.next=4,m.a.collection("listItems").where("entryID","==",m.a.collection("entries").doc(t)).get();case 4:if(!((r=e.sent).docs.length>0)){e.next=9;break}return e.next=8,r.docs.forEach(function(){var e=Object(i.a)(s.a.mark(function e(t){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(o.a)({id:t.id},t.data()),a.push(r);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 8:case 9:return e.abrupt("return",{err:!1,data:a});case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{err:!1,data:[]});case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchDuties",value:function(){var e=Object(i.a)(s.a.mark(function e(t){var a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=[],e.next=4,m.a.collection("subListItems").where("listItemID","==",m.a.collection("listItems").doc(t)).get();case 4:if(!((r=e.sent).docs.length>0)){e.next=9;break}return e.next=8,r.docs.forEach(function(){var e=Object(i.a)(s.a.mark(function e(t){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(o.a)({id:t.id},t.data()),a.push(r);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 8:case 9:return e.abrupt("return",{err:!1,data:a});case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{err:!1,data:[]});case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()},{key:"setSuccessState",value:function(){var e=Object(i.a)(s.a.mark(function e(t,a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(o.a)({},this.state,{loading:!1,err:!1,workContent:Object(o.a)({},t,{jobs:a})}));case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"setErrorState",value:function(){var e=Object(i.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(o.a)({},this.state,{err:!0,loading:!1,workContent:""}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t,a,r,n,c,o,i,u,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchWorkContent();case 3:if((t=e.sent).err){e.next=39;break}return e.next=7,this.fetchJobs(t.data.id);case 7:a=e.sent,r=!0,n=!1,c=void 0,e.prev=11,o=a.data[Symbol.iterator]();case 13:if(r=(i=o.next()).done){e.next=23;break}return(u=i.value).duties=[],e.next=18,this.fetchDuties(u.id);case 18:l=e.sent,u.duties=l.data;case 20:r=!0,e.next=13;break;case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(11),n=!0,c=e.t0;case 29:e.prev=29,e.prev=30,r||null==o.return||o.return();case 32:if(e.prev=32,!n){e.next=35;break}throw c;case 35:return e.finish(32);case 36:return e.finish(29);case 37:return e.next=39,this.setSuccessState(t.data,a.data);case 39:e.next=46;break;case 41:return e.prev=41,e.t1=e.catch(0),console.error(e.t1),e.next=46,this.setErrorState();case 46:case"end":return e.stop()}},e,this,[[0,41],[11,25,29,37],[30,,32,36]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(h.Provider,{value:Object(o.a)({},this.state)},this.props.children)}}]),t}(r.Component),k=a(14),j=(a(82),a(62),function(e){return n.a.createElement("div",{className:"duties-list-container"},n.a.createElement("h4",{className:"duties-list-header"},"Job Duties"),n.a.createElement("ul",{className:"duties-list"},e.duties.map(function(e){return n.a.createElement("li",{key:e.id,className:"duties-list-item"},e.body)})))}),w=function(e){return n.a.createElement("div",{className:"jobs"},e.jobs.map(function(e){return n.a.createElement("div",{className:"row",key:e.id},n.a.createElement("div",{className:"col-10 col-md-9 col-lg-8"},n.a.createElement("div",{className:"paper job-container"},n.a.createElement("img",{src:e.imageSource,alt:e.body,className:"job-logo"}),n.a.createElement("div",{className:"job-info"},n.a.createElement("h3",{className:"job-title"},e.title),n.a.createElement("h4",{className:"job-company"},e.body),n.a.createElement("p",{className:"job-location"},e.location),n.a.createElement("p",{className:"job-timeline"},e.startDate," to ",""!==e.endDate?e.endDate:"Present")),n.a.createElement(j,{duties:e.duties}))))}))},E=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(b,null,function(e){return e.loading?n.a.createElement(k.a,null):e.err?n.a.createElement("div",{className:"error-page-display"},n.a.createElement("p",null,"Error loading data...")):n.a.createElement("div",{className:"Work"},n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"section-header"},"Work")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-10 col-md-8 col-lg-7"},n.a.createElement("div",{className:"paper"},n.a.createElement("div",{className:"section-description",dangerouslySetInnerHTML:{__html:e.workContent.body}})))),n.a.createElement(w,{jobs:e.workContent.jobs}))})}}]),t}(r.Component);t.default=function(e){return n.a.createElement(v,null,n.a.createElement(E,null))}}}]);
//# sourceMappingURL=4.e460f3ed.chunk.js.map