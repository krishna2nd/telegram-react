(this.webpackJsonptelegram_react=this.webpackJsonptelegram_react||[]).push([[3],{591:function(e,t,n){},593:function(e,t,n){},594:function(e,t,n){},595:function(e,t,n){},597:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),s=n(19),i=n(3),c=n(4),o=n(6),l=n(5),u=n(7),d=n(0),p=n.n(d),f=n(21),h=n.n(f),k=n(49),m=n(138),S=n.n(m),v=n(20),b=n(306),w=n(520),E=n(236),g=n(596),y=n(175),j=n(41),C=n(40),O=n(45),P=n(592),M=n.n(P),R=n(72),U=n(8),x=(n(591),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var a=this.props,r=a.info;return a.theme!==e.theme||r!==e.info}},{key:"render",value:function(){var e=this.props,t=e.info,n=e.onSelect,a=e.onMouseDown,r=e.onMouseEnter,s=e.onDeleteClick;if(!t)return null;var i=t.title,c=t.stickers.map(function(e,t){return p.a.createElement("div",{className:"sticker-set-item",key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:function(){return n(e)},onMouseEnter:r,onMouseDown:a,style:{width:U.ib,height:U.ib}},p.a.createElement(R.b,{key:e.sticker.id,sticker:e,autoplay:!1,blur:!1,displaySize:U.ib-6,preview:!0,source:R.a.PICKER}))});return p.a.createElement("div",{className:"sticker-set"},p.a.createElement("div",{className:"sticker-set-title"},p.a.createElement("div",{className:"sticker-set-title-wrapper"},p.a.createElement("span",null,i)),s&&p.a.createElement(w.a,{"aria-label":"delete",classes:{root:"sticker-set-icon-root"},size:"small",onClick:s},p.a.createElement(M.a,{fontSize:"inherit"}))),p.a.createElement("div",{className:"sticker-set-content"},c))}}]),t}(p.a.Component)),D=function(){function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(i.a)(this,e),this.start=function(){n.stopped=!1,n.id=requestAnimationFrame(n.startAnim)},this.startAnim=function(e){var t=n.start,a=n.duration;n.start=e,n.end=t+a,n.draw(e)},this.draw=function(t){var a=n.stopped,r=n.duration,s=n.start,i=n.options;if(t-s>r&&i.every(function(e){return e.to===e.last})&&(n.stopped=!0),!a){var c=Math.min(t-s,r),o=0===r?1:c/r,l=e.outSine(o);i.forEach(function(e){var t=e.from,n=e.to,a=e.func;e.last=t+(n-t)*l,a(e.last)}),n.id=requestAnimationFrame(n.draw)}},this.stop=function(){n.stopped=!0,cancelAnimationFrame(n.id)},this.options=a,this.duration=t}return Object(c.a)(e,null,[{key:"outSine",value:function(e){return Math.sin(e*Math.PI/2)}}]),e}(),T=n(53),I=(n(593),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onClientUpdateStickerSetPosition=function(e){var t=e.position;n.setState({position:t})},n.scrollToPosition=function(){var e=n.state.position,t=Object(j.a)(n),a=t.animator,r=t.anchorRef,s=t.scrollRef.current,i=r.current,c=C.findDOMNode(i),o=s.scrollLeft,l=44*e-147,u=Number(c.style.left.replace("px","")),d=44*e;a&&a.stop(),n.animator=new D(0,[{from:o,to:l,func:function(e){return s.scrollLeft=e}},{from:Math.abs(d-u)>338?d-338*Math.sign(d-u):u,to:d,func:function(e){return c.style.left=e+"px"}}]),setTimeout(function(){n.animator&&n.animator.start()},0)},n.handleWheel=function(e){var t=Object(j.a)(n).scrollRef;0===e.deltaX&&(t.current.scrollLeft+=e.deltaY)},n.handleSelect=function(e){var t=n.props,a=t.stickers;(0,t.onSelect)(a.indexOf(e))},n.scrollRef=p.a.createRef(),n.anchorRef=p.a.createRef(),n.state={position:0},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){T.a.on("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentWillUnmount",value:function(){T.a.off("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentDidUpdate",value:function(e,t,n){t.position!==this.state.position&&this.scrollToPosition()}},{key:"render",value:function(){var e=this,t=this.props,n=(t.classes,t.stickers.map(function(t){return p.a.createElement(R.b,{key:t.sticker.id,className:"stickers-picker-header-sticker",style:{width:32,height:32},sticker:t,play:!1,autoplay:!1,blur:!1,displaySize:32,preview:!0,source:R.a.PICKER_HEADER,openMedia:function(){return e.handleSelect(t)}})}));return p.a.createElement("div",{className:"stickers-picker-header"},p.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-header-scroll",onWheel:this.handleWheel},p.a.createElement("div",{className:"stickers-picker-header-items"},n),p.a.createElement("div",{ref:this.anchorRef,className:"stickers-picker-header-anchor"})))}}]),t}(p.a.Component)),N=n(24),L=n(18),_=n(44),V=n(2),A=n(1),F=(n(594),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onUpdateInstalledStickerSets=function(e){var t=e.is_masks;e.sticker_set_ids;t&&n.filterSets()},n.onUpdateRecentStickers=function(e){n.reloadRecentContent()},n.scrollTop=function(){n.scrollRef.current.scrollTop=0},n.loadContent=function(){var e=Object(s.a)(r.a.mark(function e(t,a,s){var i,c,o,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,A.a.send({"@type":"getRecentStickers",is_attached:!1});case 3:t=e.sent;case 4:if(s){e.next=13;break}return e.next=7,A.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return i=e.sent,c=[],i.sets.forEach(function(e){c.push(A.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=12,Promise.all(c);case 12:s=e.sent;case 13:o=s.slice(0,5),l=s.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]),n.setState({recent:t,stickerSets:a,sets:o,fullSets:s,headerStickers:l}),n.setsLength=o.length;case 17:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),n.loadInViewContentOnScroll=function(){n.loadInViewContent()},n.loadInViewContentOnScrollEnd=function(){n.loadInViewContent(400)},n.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=n.scrollRef.current,a=n.state.sets,r=[];a.forEach(function(a){var s=n.itemsMap.get(a.id),i=C.findDOMNode(s);if(i){var c=t.scrollTop-e,o=t.scrollTop+t.offsetHeight+e,l=i.offsetTop,u=i.offsetTop+i.clientHeight;l>=c&&i.offsetTop<=o?r.push(a):u>=c&&u<=o?r.push(a):l<=c&&u>=o&&r.push(a)}}),r.forEach(function(e){var t=V.a.getStore();n.loadedSets.has(e.id)||(n.loadedSets.set(e.id,e.id),Object(L.x)(t,e))})},n.updatePosition=function(){var e=n.scrollRef.current,t=n.state.sets,a=e.scrollHeight,r=0,s=0;t.forEach(function(t,i){var c=n.itemsMap.get(t.id);if(c){var o=C.findDOMNode(c);if(o){s=0===i?o.offsetTop:s;var l=o.offsetTop-s;if(o&&l<=e.scrollTop){var u=Math.abs(e.scrollTop-l);u<=a&&(a=u,r=i)}}}}),A.a.clientUpdate({"@type":"clientUpdateStickerSetPosition",position:r})},n.handleScroll=Object(s.a)(r.a.mark(function e(){var t,a,s,i,c,o,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loadInViewContentOnScrollEnd(),n.updatePosition(),t=n.scrollRef.current,!n.loadingChunk){e.next=5;break}return e.abrupt("return");case 5:if(a=!1,t.scrollTop+t.offsetHeight>=t.scrollHeight-400&&(a=!0),a){e.next=9;break}return e.abrupt("return",!1);case 9:if(s=n.state,i=s.sets,(c=s.stickerSets).sets.length!==i.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,o=[],c.sets.slice(n.setsLength,n.setsLength+5).forEach(function(e){o.push(A.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=17,Promise.all(o).finally(function(){n.loadingChunk=!1});case 17:l=e.sent,n.setsLength+=l.length,n.setState({sets:i.concat(l)});case 20:case"end":return e.stop()}},e)})),n.loadPreviewContent=function(e){var t=n.state,a=t.recent,r=t.sets,s=Object(_.e)([a].concat(r)).find(function(t){return t.sticker.id===e});if(s){var i=V.a.getStore();Object(L.w)(i,s,null);Object(_.d)(s,r,5).forEach(function(e){Object(L.w)(i,e,null)})}},n.handleMouseEnter=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t&&n.mouseDown){n.mouseDownStickerId!==t&&(n.mouseDownStickerId=null),n.setState({previewStickerId:t}),n.loadPreviewContent(t);var a=n.props.onPreview,r=n.state,s=r.recent,i=r.sets;a(Object(_.e)([s].concat(i)).find(function(e){return e.sticker.id===t}))}},n.handleMouseDown=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t){n.mouseDownStickerId=t;var a=Date.now();return n.setState({previewStickerId:t,timestamp:a,showPreview:!1,cancelSend:!1}),setTimeout(function(){n.state.timestamp===a&&n.setState({showPreview:!0,cancelSend:!0},function(){var e=n.props.onPreview,a=n.state,r=a.recent,s=a.sets;e(Object(_.e)([r].concat(s)).find(function(e){return e.sticker.id===t}))})},500),n.loadPreviewContent(t),n.mouseDown=!0,document.addEventListener("mouseup",n.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1}},n.handleMouseUp=function(){n.setState({previewStickerId:0,timestamp:0,showPreview:!1}),(0,n.props.onPreview)(null),n.mouseDown=!1,document.removeEventListener("mouseup",n.handleMouseUp)},n.handleStickerSelect=function(e){var t=n.props.onSelect;n.state.cancelSend||t(e)},n.handleSelectSet=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,s,i,c,o,l,u,d,p,f;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state,s=a.sets,i=a.stickerSets,c=Object(j.a)(n),o=c.scrollRef,!(t<s.length)){e.next=7;break}(l=n.itemsMap.get(s[t].id))&&(u=C.findDOMNode(l))&&(o.current.scrollTop=u.offsetTop),e.next=21;break;case 7:if(!(t<i.sets.length)){e.next=21;break}if(!n.loadingChunk){e.next=10;break}return e.abrupt("return");case 10:if(i.sets.length!==s.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,d=[],i.sets.slice(n.setsLength,t+1).forEach(function(e){d.push(A.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=17,Promise.all(d).finally(function(){return n.loadingChunk=!1});case 17:p=e.sent,n.setsLength+=p.length,f=s.concat(p),n.setState({sets:f},function(){t<f.length&&n.handleSelectSet(t)});case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleDeleteRecent=function(){A.a.send({"@type":"clearRecentStickers",is_attached:!1})},n.handleDeleteStickerSet=function(e){A.a.send({"@type":"changeStickerSet",set_id:e,is_installed:!1})},n.scrollRef=p.a.createRef(),n.itemsMap=new Map,n.loadedSets=new Map,n.state={recent:null,stickerSets:null,sets:[],headerStickers:[],position:0},n.loadInViewContentOnScrollEnd=Object(N.c)(n.loadInViewContentOnScrollEnd,100),n.loadInViewContentOnScroll=Object(N.y)(n.loadInViewContentOnScroll,2e3),n.updatePosition=Object(N.y)(n.updatePosition,250),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var a=this.state,r=a.position,s=a.recent,i=a.stickerSets,c=a.sets,o=a.showPreview;return t.recent!==s||(t.stickerSets!==i||(t.sets!==c||(t.showPreview!==o||t.position!==r)))}},{key:"componentDidMount",value:function(){T.a.on("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),T.a.on("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"componentWillUnmount",value:function(){T.a.off("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),T.a.off("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"filterSets",value:function(e){var t=this.state;t.sets,t.stickerSets}},{key:"reloadRecentContent",value:function(){var e=Object(s.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.send({"@type":"getRecentStickers",is_attached:!1});case 2:t=e.sent,this.setState({recent:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.t,n=this.state,a=n.recent,r=(n.stickerSets,n.sets),s=n.headerStickers;this.itemsMap.clear();var i=r.map(function(t){return p.a.createElement(x,{key:t.id,ref:function(n){return e.itemsMap.set(t.id,n)},info:t,onSelect:e.handleStickerSelect,onMouseDown:e.handleMouseDown,onMouseEnter:e.handleMouseEnter})}),c=a&&a.stickers.length>0?{stickers:a.stickers,title:t("RecentStickers")}:null;return p.a.createElement("div",{className:"stickers-picker"},p.a.createElement(I,{onSelect:this.handleSelectSet,stickers:s}),p.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-scroll",onScroll:this.handleScroll},Boolean(c)&&p.a.createElement(x,{info:c,onSelect:this.handleStickerSelect,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onDeleteClick:this.handleDeleteRecent}),i))}}]),t}(p.a.Component)),B=Object(k.a)(Object(O.c)(),Object(v.c)(),Object(O.b)())(F),H=n(12),W=n(91),z=(n(595),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).onClientUpdateChange=function(e){n.picker=null},n.handleButtonMouseEnter=function(e){n.buttonEnter=!0,setTimeout(function(){n.buttonEnter&&(n.updatePicker(!0),n.loadStickerSets())},U.f)},n.loadStickerSets=Object(s.a)(r.a.mark(function e(){var t,a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.sets){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,A.a.send({"@type":"getRecentStickers",is_attached:!1});case 4:return n.recent=e.sent,e.next=7,A.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return n.stickerSets=e.sent,t=[],n.stickerSets.sets.forEach(function(e){t.push(A.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=12,Promise.all(t);case 12:n.sets=e.sent,a=n.stickersPickerRef.current,s=V.a.getStore(),Object(L.v)(s,n.recent),n.sets.slice(0,5).reverse().forEach(function(e){Object(L.x)(s,e),a.loadedSets.set(e.id,e.id)}),n.sets.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]).forEach(function(e){Object(L.y)(s,e)});case 20:case"end":return e.stop()}},e)})),n.handleButtonMouseLeave=function(){n.buttonEnter=!1,setTimeout(function(){n.tryClosePicker()},U.f)},n.tryClosePicker=function(){var e=n.state.sticker;n.paperEnter||n.buttonEnter||e||n.updatePicker(!1)},n.handlePaperMouseEnter=function(){n.paperEnter=!0},n.handlePaperMouseLeave=function(){n.paperEnter=!1,setTimeout(function(){n.tryClosePicker()},U.f)},n.updatePicker=function(e){n.setState({open:e})},n.handleEmojiClick=function(){n.setState({tab:0})},n.handleStickersClick=function(){var e=n.stickersPickerRef.current,t=n.state.tab;e.loadContent(n.recent,n.stickerSets,n.sets),n.setState({tab:1}),1===t&&e.scrollTop()},n.handleStickerSend=function(e){e&&(A.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),n.updatePicker(!1))},n.handleStickerPreview=function(e){n.setState({sticker:e}),A.a.clientUpdate({"@type":"clientUpdateStickerPreview",sticker:e}),e||n.tryClosePicker()},n.state={open:!1,tab:0},n.emojiPickerRef=p.a.createRef(),n.stickersPickerRef=p.a.createRef(),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){H.a.on("clientUpdateThemeChange",this.onClientUpdateChange),W.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"componentWillUnmount",value:function(){H.a.off("clientUpdateThemeChange",this.onClientUpdateChange),W.a.off("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.t,a=this.state,r=a.open,s=a.tab,i=a.sticker;if(r&&!this.picker){var c={search:n("Search"),notfound:n("NotEmojiFound"),skintext:n("ChooseDefaultSkinTone"),categories:{search:n("SearchResults"),recent:n("Recent"),people:n("SmileysPeople"),nature:n("AnimalsNature"),foods:n("FoodDrink"),activity:n("Activity"),places:n("TravelPlaces"),objects:n("Objects"),symbols:n("Symbols"),flags:n("Flags"),custom:n("Custom")}};this.picker=p.a.createElement(g.a,{ref:this.emojiPickerRef,set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:t.palette.primary.dark,i18n:c,native:Object(N.p)(),style:{width:338,overflowX:"hidden"}}),this.stickersPicker=p.a.createElement(B,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend,onPreview:this.handleStickerPreview})}return p.a.createElement(p.a.Fragment,null,p.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===t.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),p.a.createElement(w.a,{className:"inputbox-icon-button","aria-label":"Emoticon",onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},p.a.createElement(E.a,null)),p.a.createElement("div",{className:h()("emoji-picker-root",{"emoji-picker-root-opened":r}),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},p.a.createElement("div",{className:"emoji-picker-header"},p.a.createElement(b.a,{color:0===s?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleEmojiClick},n("Emoji")),p.a.createElement(b.a,{color:1===s?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleStickersClick},n("Stickers"))),p.a.createElement("div",{className:h()("emoji-picker-content",{"emoji-picker-content-stickers":1===s})},this.picker,this.stickersPicker),Boolean(i)&&p.a.createElement(y.a,{sticker:i})))}}]),t}(p.a.Component)),q=Object(k.a)(Object(v.c)(),S.a);t.default=q(z)}}]);
//# sourceMappingURL=3.1e9e812f.chunk.js.map