(self.webpackChunkpfan_blog=self.webpackChunkpfan_blog||[]).push([[788],{35931:function(e,t,i){var n=i(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var r=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),o=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function l(e){if(7===e.length)return e;for(var t="#",i=1;i<4;i+=1)t+=e[i]+e[i];return t}function s(e,t,i,n,a){return function(e,t,i,n,a){var r=(e-i)/(t-i);if(0===r)return n;if(1===r)return a;for(var o="#",l=1;l<6;l+=2){var s=parseInt(n.substr(l,2),16),c=parseInt(a.substr(l,2),16),d=Math.round((1-r)*s+r*c).toString(16);1===d.length&&(d="0"+d),o+=d}return o}(e,t,i,l(n),l(a))}var c=function(e){function t(t){e.call(this,t);var i=t.height,n=t.width,a=t.checked;this.t=t.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:a?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,i=t.R,n=t.h,a=(this.props.checked?this.i:this.o)+e-i;t.N||e===i||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,a));r!==n&&this.setState({h:r})},t.prototype.U=function(e){var t=this.state,i=t.h,n=t.N,a=t.B,r=this.props.checked,o=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var l=Date.now()-a;(!n||l<250||r&&i<=o||!r&&i>=o)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.M=function(e){this.L(e.touches[0].clientX)},t.prototype.m=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,i=e.disabled,r=e.className,o=e.offColor,l=e.onColor,c=e.offHandleColor,d=e.onHandleColor,u=e.checkedIcon,h=e.uncheckedIcon,f=e.checkedHandleIcon,m=e.uncheckedHandleIcon,p=e.boxShadow,g=e.activeBoxShadow,y=e.height,b=e.width,v=e.borderRadius,E=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(i[n]=e[n]);return i}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),k=this.state,w=k.h,S=k.N,x=k.j,I={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:y/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:y,width:b,margin:Math.max(0,(this.t-y)/2),position:"relative",background:s(w,this.i,this.o,o,l),borderRadius:"number"==typeof v?v:y/2,cursor:i?"default":"pointer",WebkitTransition:S?null:"background 0.25s",MozTransition:S?null:"background 0.25s",transition:S?null:"background 0.25s"},L={height:y,width:Math.min(1.5*y,b-(this.t+y)/2+1),position:"relative",opacity:(w-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},N={height:y,width:Math.min(1.5*y,b-(this.t+y)/2+1),position:"absolute",opacity:1-(w-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},M={height:this.t,width:this.t,background:s(w,this.i,this.o,c,d),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof v?v-1:"50%",position:"absolute",transform:"translateX("+w+"px)",top:Math.max(0,(y-this.t)/2),outline:0,boxShadow:x?g:p,border:0,WebkitTransition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},T={height:this.t,width:this.t,opacity:Math.max(2*(1-(w-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},z={height:this.t,width:this.t,opacity:Math.max(2*((w-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"};return n.createElement("div",{className:r,style:I},n.createElement("div",{className:"react-switch-bg",style:C,onClick:i?null:this.T,onMouseDown:function(e){return e.preventDefault()}},u&&n.createElement("div",{style:L},u),h&&n.createElement("div",{style:N},h)),n.createElement("div",{className:"react-switch-handle",style:M,onClick:function(e){return e.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},m&&n.createElement("div",{style:T},m),f&&n.createElement("div",{style:z},f)),n.createElement("input",a({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},E,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(n.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:o,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},t.default=c},97389:function(e,t,i){e.exports=i(35931)},51496:function(e,t,i){"use strict";var n=i(95318);t.Z=void 0;var a,r=n(i(81506)),o=n(i(85354)),l=n(i(37316)),s=n(i(67154)),c=n(i(67294)),d=n(i(45697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],h=function(e){var t=(0,s.default)({},e),i=t.resolutions,n=t.sizes,a=t.critical;return i&&(t.fixed=i,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,i=e.fixed,n=p(t||i||[]);return n&&n.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},g=Object.create({}),y=function(e){var t=h(e),i=m(t);return g[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,k=new WeakMap;function w(e){return e.map((function(e){var t=e.src,i=e.srcSet,n=e.srcSetWebp,a=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:r}),i&&c.default.createElement("source",{media:a,srcSet:i,sizes:r}))}))}function S(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function x(e){return e.map((function(e){var t=e.src,i=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:i,srcSet:n})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:i,srcSet:n})}))}function C(e,t){var i=e.srcSet,n=e.srcSetWebp,a=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:i)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var L=function(e,t){var i=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(k.has(e.target)){var t=k.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),k.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return i&&(i.observe(e),k.set(e,t)),function(){i.unobserve(e),k.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+l+i+n+t+r+a+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},M=c.default.forwardRef((function(e,t){var i=e.src,n=e.imageVariants,a=e.generateSources,r=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(T,(0,s.default)({ref:t,src:i},r,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),l):l})),T=c.default.forwardRef((function(e,t){var i=e.sizes,n=e.srcSet,a=e.src,r=e.style,o=e.onLoad,d=e.onError,h=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,u);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:i,srcSet:n,src:a},p,{onLoad:o,onError:d,ref:t,loading:h,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));T.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=v&&y(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&E&&!i.isCritical&&!i.seenBefore;var n=i.isCritical||v&&(b||!i.useIOSupport);return i.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn,isHydrated:!1},i.imageRef=c.default.createRef(),i.placeholderRef=t.placeholderRef||c.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)(i)),i.handleRef=i.handleRef.bind((0,r.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=h(e),(i=m(t))&&(g[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=h(this.props),t=e.title,i=e.alt,n=e.className,a=e.style,r=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,k=e.loading,S=e.draggable,C=m||g;if(!C)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,s.default)({opacity:L?1:0,transition:z?"opacity "+b+"ms":"none"},l),P="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},_=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&R,l,u),F={title:t,alt:this.state.isVisible?"":i,style:_,className:f,itemProp:E},O=this.state.isHydrated?p(C):C[0];if(m)return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:O.maxWidth?O.maxWidth+"px":null,maxHeight:O.maxHeight?O.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),P&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&R)}),O.base64&&c.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:O.base64,spreadProps:F,imageVariants:C,generateSources:I}),O.tracedSVG&&c.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:O.tracedSVG,spreadProps:F,imageVariants:C,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(C),c.default.createElement(T,{alt:i,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:k,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,s.default)({alt:i,title:t,loading:k},O,{imageVariants:C}))}}));if(g){var D=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},r);return"inherit"===r.display&&delete D.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},P&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:P,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},z&&R)}),O.base64&&c.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:O.base64,spreadProps:F,imageVariants:C,generateSources:I}),O.tracedSVG&&c.default.createElement(M,{ariaHidden:!0,ref:this.placeholderRef,src:O.tracedSVG,spreadProps:F,imageVariants:C,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(C),c.default.createElement(T,{alt:i,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:k,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,s.default)({alt:i,title:t,loading:k},O,{imageVariants:C}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),P=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function R(e){return function(t,i,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");d.default.checkPropTypes(((a={})[i]=e,a),t,"prop",n)}}z.propTypes={resolutions:H,sizes:P,fixed:R(d.default.oneOfType([H,d.default.arrayOf(H)])),fluid:R(d.default.oneOfType([P,d.default.arrayOf(P)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var _=z;t.Z=_},89556:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var n=i(67294),a=i(9925),r=i(51721),o=i(97389),l=i(33364),s=i(35514),c=i(29885),d=i.n(c),u=i(5610),h=i.n(u),f=function(e){function t(t){var i;return(i=e.call(this,t)||this).handleToggle=function(e){i.setState({checked:e}),i.props.onClick()},"dark"===h().defaultTheme?i.state={checked:!0}:i.state={checked:!1},i}(0,r.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){"dark"!==this.props.theme.mode?this.setState({checked:!1}):this.setState({checked:!0})},i.render=function(){return n.createElement("div",{className:"custom-switch"},n.createElement(o.default,{onChange:this.handleToggle,checked:this.state.checked,offColor:"#bbb",onColor:"#4a4a4a",uncheckedIcon:n.createElement(l.G,{className:"icon-moon",icon:s.DBF}),checkedIcon:n.createElement(d(),{className:"icon-sun"}),handleDiameter:21,height:23,width:40,onHandleColor:"#333"}))},t}(n.Component),m=(0,a.Zz)(f),p=function(e){return n.createElement(a.Sf,null,(function(e){return n.createElement(m,{onClick:function(t){return e.setTheme("dark"===e.mode?{mode:"light"}:{mode:"dark"})}})}))}},85471:function(e,t,i){"use strict";i.d(t,{Z:function(){return z}});var n=i(67294),a=i(9925),r=i(25444),o=i(5610),l=i.n(o),s=function(){return n.createElement(n.Fragment,null,o.enableAbout?n.createElement(c,{className:"main-card-name"},n.createElement("h2",null,n.createElement(r.Link,{to:"/about"},o.author))):n.createElement(d,null,n.createElement("h2",null,o.author)))},c=a.ZP.div.withConfig({displayName:"AboutLink__StyledMainCardName",componentId:"sc-gbezkk-0"})(["display:inline-block;cursor:pointer;h2{padding:0.2rem 0.4rem;}"]),d=a.ZP.div.withConfig({displayName:"AboutLink__StyledMainCardNameAboutDisabled",componentId:"sc-gbezkk-1"})(["display:inline-block;h2{padding:0.2rem 0rem;}"]),u=function(e){var t=e.accountInfo,i=e.mediaName,a=e.preHref;return n.createElement(n.Fragment,null,t&&""!==t&&n.createElement("a",{href:""+a+t,target:"_blank",rel:"noopener noreferrer"},i))},h=function(){return n.createElement(f,null,n.createElement(u,{accountInfo:o.socialMediaLinks.email.emailAddress,mediaName:"Email",preHref:"mailto:"}),n.createElement(u,{accountInfo:o.socialMediaLinks.github.accountName,mediaName:"GitHub",preHref:"https://github.com/"}),n.createElement(u,{accountInfo:o.socialMediaLinks.facebook.accountName,mediaName:"Facebook",preHref:"https://www.facebook.com/"}),n.createElement(u,{accountInfo:o.socialMediaLinks.instagram.accountName,mediaName:"Instagram",preHref:"https://instagram.com/"}),n.createElement(u,{accountInfo:o.socialMediaLinks.twitter.accountName,mediaName:"Twitter",preHref:"https://twitter.com/"}),n.createElement(u,{accountInfo:o.socialMediaLinks.linkedIn.accountName,mediaName:"LinkedIn",preHref:"https://linkedin.com/"}),n.createElement(u,{accountInfo:o.socialMediaLinks.medium.accountName,mediaName:"Medium",preHref:"https://medium.com/@"}))},f=a.ZP.div.withConfig({displayName:"MediaLinks__StyledMediaLinks",componentId:"sc-6hlfif-0"})(["display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;a{color:steelblue;margin:0 0.2rem;font-size:0.8rem;}"]),m=i(35514),p=i(33364),g=function(){return o.location?n.createElement(y,{className:"profile-texts-location"},n.createElement("a",{href:"https://www.google.com/maps/search/"+o.location,target:"_blank",rel:"noopener noreferrer"},n.createElement(p.G,{className:"icon-fa icon-location",icon:m.FGq}),o.location)):null},y=a.ZP.p.withConfig({displayName:"ProfileLocation__StyledTextsLocation",componentId:"sc-x6bbqu-0"})(["font-size:0.85rem;margin:0.3rem !important;.icon-location{font-size:0.8rem;}"]),b=function(e){var t=e.home;return n.createElement(n.Fragment,null,t?n.createElement(E,{className:"profile-texts"},n.createElement(s,null),n.createElement("p",null,o.profileDescription),n.createElement(g,null),n.createElement(h,null)):n.createElement(v,{className:"profile-texts"},n.createElement("h4",null,"WRITTEN BY"),n.createElement(s,null),n.createElement("p",null,o.profileDescription),n.createElement(g,null),n.createElement(h,null)))},v=a.ZP.div.withConfig({displayName:"ProfileTexts__StyledProfileTexts",componentId:"sc-1m6cuzf-0"})(["margin:0 1rem;flex:10;padding:1rem;h4{margin:0.3rem 0;font-size:0.9rem;}p{margin:0.5rem 0;}@media (max-width:500px){p{margin:0.3rem 0;}}"]),E=a.ZP.div.withConfig({displayName:"ProfileTexts__StyledProfileTextsHome",componentId:"sc-1m6cuzf-1"})(['display:flex;flex-direction:column;align-items:center;padding:1rem 3rem;text-align:center;h4{margin:0.3rem 0;font-size:0.9rem;text-align:"center";}p{margin:0.5rem 0;text-align:"center";}div:last-child{justify-content:center;}@media (max-width:500px){padding:1rem 0.5rem;p{margin:0.3rem 0;}}']),k=i(51496),w=function(){var e=(0,r.useStaticQuery)("1703067421").images.edges.find((function(e){return e.node.relativePath.includes(l().profileImageName)}));return e?n.createElement(k.Z,{className:"img-profile",fluid:e.node.childImageSharp.fluid}):null},S=i(2138),x=function(e){var t=e.home;return n.createElement(n.Fragment,null,t?n.createElement(L,{className:"profile-image-home"},n.createElement(N,{className:"profile-image-inner"},n.createElement(M,{className:"profile-image-inner-inner"})),n.createElement(w,{objectFit:"cover",objectPosition:"50% 50%",alt:"profileImage"})):n.createElement(C,{className:"profile-image"},n.createElement(N,{className:"profile-image-inner"},n.createElement(M,{className:"profile-image-inner-inner"})),n.createElement(w,{objectFit:"cover",objectPosition:"50% 50%",alt:"profileImage"})))},I="80px",C=a.ZP.div.withConfig({displayName:"ProfileImg__StyledImage",componentId:"sc-1mnn2kn-0"})(["position:relative;width:",";height:",";div{border-radius:50%;}"],I,I),L=a.ZP.div.withConfig({displayName:"ProfileImg__StyledImageHome",componentId:"sc-1mnn2kn-1"})(["position:absolute;top:-22%;left:50%;transform:translateX(-50%);width:",";height:",";div{border-radius:50%;}"],I,I),N=a.ZP.div.withConfig({displayName:"ProfileImg__StyledInner",componentId:"sc-1mnn2kn-2"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:94px;height:94px;border:1px solid ",";"],S.r.mintColor),M=a.ZP.div.withConfig({displayName:"ProfileImg__StyledInnerInner",componentId:"sc-1mnn2kn-3"})(["position:absolute;z-index:-1;top:50%;left:50%;transform:translate(-50%,-50%);width:100px;height:30px;border-radius:0 !important;"]),T=i(46821),z=function(e){var t=e.home;return n.createElement(n.Fragment,null,t?n.createElement(P,{className:"profile-home"},n.createElement(x,null),n.createElement(b,{home:!0})):n.createElement(H,{className:"profile"},n.createElement(x,null),n.createElement(b,null)))},H=a.ZP.div.withConfig({displayName:"Profile__StyledProfile",componentId:"sc-17iypbc-0"})(["font-family:",";position:relative;display:flex;align-items:center;padding:0.1rem 0.5rem 0.5rem 0.5rem;"],T.fontProfile+T.fontsBackUp),P=a.ZP.div.withConfig({displayName:"Profile__StyledProfileHome",componentId:"sc-17iypbc-1"})(["font-family:",";display:flex;flex-direction:column;align-items:center;padding:0 3rem;@media (max-width:500px){padding:0rem 0.5rem;}"],T.fontProfile+T.fontsBackUp)},29885:function(e,t,i){var n=i(67294);function a(e){return n.createElement("svg",e,[n.createElement("path",{style:{fill:"#F2B303"},d:"M400.912,237.513L339.07,130.442c-5.199-8.995-14.777-14.541-25.182-14.541H190.243\n\tc-10.39,0-19.992,5.545-25.175,14.541l-61.85,107.079c-5.191,8.995-5.191,20.086,0,29.074l61.85,107.095\n\tc5.183,9.011,14.785,14.541,25.175,14.541H313.88c10.405,0,19.984-5.53,25.182-14.541l61.85-107.095\n\tC406.095,257.599,406.095,246.508,400.912,237.513z",key:0}),n.createElement("path",{style:{fill:"#FFC022"},d:"M299.567,115.901H190.243c-10.39,0-19.992,5.545-25.175,14.541l-61.85,107.079\n\tc-5.191,8.995-5.191,20.086,0,29.074l27.727,48.026h109.316c10.405,0,19.999-5.545,25.198-14.549l61.85-107.087\n\tc5.167-9.003,5.167-20.086,0-29.082L299.567,115.901z",key:1}),n.createElement("path",{style:{fill:"#F9D500"},d:"M190.243,115.901c-10.39,0-19.992,5.545-25.175,14.541l-61.85,107.079\n\tc-5.191,8.995-5.191,20.086,0,29.074l27.727,48.026",key:2}),n.createElement("g",{key:3},[n.createElement("path",{style:{fill:"#FFC022"},d:"M260.498,67.497c0,4.663-3.773,8.428-8.436,8.428l0,0c-4.663,0-8.436-3.773-8.436-8.428V8.436\n\t\tc0-4.663,3.773-8.436,8.436-8.436l0,0c4.663,0,8.436,3.773,8.436,8.436V67.497z",key:0}),n.createElement("path",{style:{fill:"#FFC022"},d:"M260.498,495.687c0,4.663-3.773,8.436-8.436,8.436l0,0c-4.663,0-8.436-3.773-8.436-8.436v-59.061\n\t\tc0-4.663,3.773-8.428,8.436-8.428l0,0c4.663,0,8.436,3.773,8.436,8.428V495.687z",key:1}),n.createElement("path",{style:{fill:"#FFC022"},d:"M388.529,127.52c-3.293,3.293-8.633,3.293-11.934,0l0,0c-3.293-3.3-3.293-8.641,0-11.934\n\t\tl41.771-41.748c3.293-3.316,8.625-3.316,11.934,0l0,0c3.293,3.285,3.293,8.617,0,11.918L388.529,127.52z",key:2}),n.createElement("path",{style:{fill:"#FFC022"},d:"M85.756,430.301c-3.293,3.293-8.633,3.293-11.934,0l0,0c-3.3-3.3-3.3-8.641,0-11.934l41.763-41.771\n\t\tc3.3-3.293,8.633-3.293,11.941,0l0,0c3.293,3.3,3.293,8.641-0.008,11.934L85.756,430.301z",key:3}),n.createElement("path",{style:{fill:"#FFC022"},d:"M436.626,260.498c-4.663,0-8.436-3.773-8.436-8.436l0,0c0-4.655,3.773-8.436,8.436-8.428h59.061\n\t\tc4.655-0.008,8.436,3.765,8.436,8.436l0,0c0,4.663-3.781,8.428-8.436,8.436L436.626,260.498z",key:4}),n.createElement("path",{style:{fill:"#FFC022"},d:"M8.436,260.498c-4.663,0-8.436-3.773-8.436-8.436l0,0c0-4.655,3.773-8.436,8.428-8.436l59.077-0.008\n\t\tc4.655,0.008,8.428,3.781,8.428,8.444l0,0c0,4.663-3.773,8.436-8.444,8.428L8.436,260.498z",key:5}),n.createElement("path",{style:{fill:"#FFC022"},d:"M376.604,388.529c-3.293-3.293-3.3-8.633,0-11.934l0,0c3.293-3.293,8.641-3.293,11.934,0.008\n\t\tl41.763,41.763c3.3,3.293,3.308,8.633,0,11.941l0,0c-3.3,3.293-8.633,3.285-11.934,0L376.604,388.529z",key:6}),n.createElement("path",{style:{fill:"#FFC022"},d:"M73.823,85.756c-3.3-3.293-3.3-8.625,0-11.934l0,0c3.3-3.285,8.641-3.293,11.934-0.008\n\t\tl41.771,41.771c3.293,3.3,3.293,8.641,0,11.941l0,0c-3.308,3.293-8.641,3.293-11.941-0.016L73.823,85.756z",key:7})]),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15}),n.createElement("g",{key:16}),n.createElement("g",{key:17}),n.createElement("g",{key:18})])}a.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 504.123 504.123",style:{enableBackground:"new 0 0 504.123 504.123"},xmlSpace:"preserve"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=204781124b14bc04700bcab80c57d5a0d8ad4b16-4a6d73ac8ded23f69c56.js.map