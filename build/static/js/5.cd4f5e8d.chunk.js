(window["webpackJsonpecharts-excel"]=window["webpackJsonpecharts-excel"]||[]).push([[5],{489:function(e,t,n){var i=n(293);n(490),n(491),n(492);var a=n(494),r=n(303);i.registerProcessor(a),r.registerSubTypeDefaulter("legend",(function(){return"plain"}))},490:function(e,t,n){var i=n(293),a=n(291),r=n(302),o=n(292).isNameSpecified,l=i.extendComponentModel({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(e,t,n){this.mergeDefaultAndTheme(e,n),e.selected=e.selected||{}},mergeOption:function(e){l.superCall(this,"mergeOption",e)},optionUpdated:function(){this._updateData(this.ecModel);var e=this._data;if(e[0]&&"single"===this.get("selectedMode")){for(var t=!1,n=0;n<e.length;n++){var i=e[n].get("name");if(this.isSelected(i)){this.select(i),t=!0;break}}!t&&this.select(e[0].get("name"))}},_updateData:function(e){var t=[],n=[];e.eachRawSeries((function(i){var a,r=i.name;if(n.push(r),i.legendDataProvider){var l=i.legendDataProvider(),s=l.mapArray(l.getName);e.isSeriesFiltered(i)||(n=n.concat(s)),s.length?t=t.concat(s):a=!0}else a=!0;a&&o(i)&&t.push(i.name)})),this._availableNames=n;var i=this.get("data")||t,l=a.map(i,(function(e){return"string"!==typeof e&&"number"!==typeof e||(e={name:e}),new r(e,this,this.ecModel)}),this);this._data=l},getData:function(){return this._data},select:function(e){var t=this.option.selected;if("single"===this.get("selectedMode")){var n=this._data;a.each(n,(function(e){t[e.get("name")]=!1}))}t[e]=!0},unSelect:function(e){"single"!==this.get("selectedMode")&&(this.option.selected[e]=!1)},toggleSelected:function(e){var t=this.option.selected;t.hasOwnProperty(e)||(t[e]=!0),this[t[e]?"unSelect":"select"](e)},isSelected:function(e){var t=this.option.selected;return!(t.hasOwnProperty(e)&&!t[e])&&a.indexOf(this._availableNames,e)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}}),s=l;e.exports=s},491:function(e,t,n){var i=n(293),a=n(291);function r(e,t,n){var i,r={},o="toggleSelected"===e;return n.eachComponent("legend",(function(n){o&&null!=i?n[i?"select":"unSelect"](t.name):(n[e](t.name),i=n.isSelected(t.name));var l=n.getData();a.each(l,(function(e){var t=e.get("name");if("\n"!==t&&""!==t){var i=n.isSelected(t);r.hasOwnProperty(t)?r[t]=r[t]&&i:r[t]=i}}))})),{name:t.name,selected:r}}i.registerAction("legendToggleSelect","legendselectchanged",a.curry(r,"toggleSelected")),i.registerAction("legendSelect","legendselected",a.curry(r,"select")),i.registerAction("legendUnSelect","legendunselected",a.curry(r,"unSelect"))},492:function(e,t,n){n(295).__DEV__;var i=n(293),a=n(291),r=n(328).createSymbol,o=n(294),l=n(493).makeBackground,s=n(306),c=a.curry,g=a.each,u=o.Group,h=i.extendComponentView({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new u),this._backgroundEl,this._isFirstRender=!0},getContentGroup:function(){return this._contentGroup},render:function(e,t,n){var i=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),e.get("show",!0)){var r=e.get("align");r&&"auto"!==r||(r="right"===e.get("left")&&"vertical"===e.get("orient")?"right":"left"),this.renderInner(r,e,t,n);var o=e.getBoxLayoutParams(),c={width:n.getWidth(),height:n.getHeight()},g=e.get("padding"),u=s.getLayoutRect(o,c,g),h=this.layoutInner(e,r,u,i),d=s.getLayoutRect(a.defaults({width:h.width,height:h.height},o),c,g);this.group.attr("position",[d.x-h.x,d.y-h.y]),this.group.add(this._backgroundEl=l(h,e))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl)},renderInner:function(e,t,n,i){var r=this.getContentGroup(),o=a.createHashMap(),l=t.get("selectedMode"),s=[];n.eachRawSeries((function(e){!e.get("legendHoverLink")&&s.push(e.id)})),g(t.getData(),(function(a,g){var h=a.get("name");if(this.newlineDisabled||""!==h&&"\n"!==h){var m=n.getSeriesByName(h)[0];if(!o.get(h))if(m){var v=m.getData(),y=v.getVisual("color");"function"===typeof y&&(y=y(m.getDataParams(0)));var S=v.getVisual("legendSymbol")||"roundRect",x=v.getVisual("symbol");this._createItem(h,g,a,t,S,x,e,y,l).on("click",c(d,h,i)).on("mouseover",c(p,m.name,null,i,s)).on("mouseout",c(f,m.name,null,i,s)),o.set(h,!0)}else n.eachRawSeries((function(n){if(!o.get(h)&&n.legendDataProvider){var r=n.legendDataProvider(),u=r.indexOfName(h);if(u<0)return;var m=r.getItemVisual(u,"color");this._createItem(h,g,a,t,"roundRect",null,e,m,l).on("click",c(d,h,i)).on("mouseover",c(p,null,h,i,s)).on("mouseout",c(f,null,h,i,s)),o.set(h,!0)}}),this)}else r.add(new u({newline:!0}))}),this)},_createItem:function(e,t,n,i,l,s,c,g,h){var d=i.get("itemWidth"),p=i.get("itemHeight"),f=i.get("inactiveColor"),m=i.get("symbolKeepAspect"),v=i.isSelected(e),y=new u,S=n.getModel("textStyle"),x=n.get("icon"),w=n.getModel("tooltip"),I=w.parentModel;if(l=x||l,y.add(r(l,0,0,d,p,v?g:f,null==m||m)),!x&&s&&(s!==l||"none"===s)){var b=.8*p;"none"===s&&(s="circle"),y.add(r(s,(d-b)/2,(p-b)/2,b,b,v?g:f,null==m||m))}var A="left"===c?d+5:-5,M=c,_=i.get("formatter"),L=e;"string"===typeof _&&_?L=_.replace("{name}",null!=e?e:""):"function"===typeof _&&(L=_(e)),y.add(new o.Text({style:o.setTextStyle({},S,{text:L,x:A,y:p/2,textFill:v?S.getTextColor():f,textAlign:M,textVerticalAlign:"middle"})}));var D=new o.Rect({shape:y.getBoundingRect(),invisible:!0,tooltip:w.get("show")?a.extend({content:e,formatter:I.get("formatter",!0)||function(){return e},formatterParams:{componentType:"legend",legendIndex:i.componentIndex,name:e,$vars:["name"]}},w.option):null});return y.add(D),y.eachChild((function(e){e.silent=!0})),D.silent=!h,this.getContentGroup().add(y),o.setHoverStyle(y),y.__legendDataIndex=t,y},layoutInner:function(e,t,n){var i=this.getContentGroup();s.box(e.get("orient"),i,e.get("itemGap"),n.width,n.height);var a=i.getBoundingRect();return i.attr("position",[-a.x,-a.y]),this.group.getBoundingRect()},remove:function(){this.getContentGroup().removeAll(),this._isFirstRender=!0}});function d(e,t){t.dispatchAction({type:"legendToggleSelect",name:e})}function p(e,t,n,i){var a=n.getZr().storage.getDisplayList()[0];a&&a.useHoverLayer||n.dispatchAction({type:"highlight",seriesName:e,name:t,excludeSeriesId:i})}function f(e,t,n,i){var a=n.getZr().storage.getDisplayList()[0];a&&a.useHoverLayer||n.dispatchAction({type:"downplay",seriesName:e,name:t,excludeSeriesId:i})}e.exports=h},493:function(e,t,n){var i=n(306),a=i.getLayoutRect,r=i.box,o=i.positionElement,l=n(301),s=n(294);t.layout=function(e,t,n){var i=t.getBoxLayoutParams(),l=t.get("padding"),s={width:n.getWidth(),height:n.getHeight()},c=a(i,s,l);r(t.get("orient"),e,t.get("itemGap"),c.width,c.height),o(e,i,s,l)},t.makeBackground=function(e,t){var n=l.normalizeCssArray(t.get("padding")),i=t.getItemStyle(["color","opacity"]);return i.fill=t.get("backgroundColor"),e=new s.Rect({shape:{x:e.x-n[3],y:e.y-n[0],width:e.width+n[1]+n[3],height:e.height+n[0]+n[2],r:t.get("borderRadius")},style:i,silent:!0,z2:-1})}},494:function(e,t){e.exports=function(e){var t=e.findComponents({mainType:"legend"});t&&t.length&&e.filterSeries((function(e){for(var n=0;n<t.length;n++)if(!t[n].isSelected(e.name))return!1;return!0}))}},495:function(e,t,n){var i=n(293),a=n(291);n(496),n(499);var r=n(500),o=n(501),l=n(502),s=n(504);r("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),i.registerVisual(o("pie")),i.registerLayout(a.curry(l,"pie")),i.registerProcessor(s("pie"))},496:function(e,t,n){var i=n(293),a=n(497),r=n(291),o=n(292),l=n(296).getPercentWithPrecision,s=n(498),c=n(310).retrieveRawAttr,g=i.extendSeriesModel({type:"series.pie",init:function(e){g.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(e)},mergeOption:function(e){g.superCall(this,"mergeOption",e),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(e,t){return a(this,["value"])},_createSelectableList:function(){for(var e=this.getRawData(),t=e.mapDimension("value"),n=[],i=0,a=e.count();i<a;i++)n.push({name:e.getName(i),value:e.get(t,i),selected:c(e,i,"selected")});return n},getDataParams:function(e){var t=this.getData(),n=g.superCall(this,"getDataParams",e),i=[];return t.each(t.mapDimension("value"),(function(e){i.push(e)})),n.percent=l(i,e,t.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(e){o.defaultEmphasis(e,"labelLine",["show"]);var t=e.labelLine,n=e.emphasis.labelLine;t.show=t.show&&e.label.show,n.show=n.show&&e.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});r.mixin(g,s);var u=g;e.exports=u},497:function(e,t,n){var i=n(346),a=n(344),r=n(291),o=r.extend,l=r.isArray;e.exports=function(e,t,n){t=l(t)&&{coordDimensions:t}||o({},t);var r=e.getSource(),s=i(r,t),c=new a(s,e);return c.initData(r,n),c}},498:function(e,t,n){var i=n(291),a={updateSelectedMap:function(e){this._targetList=i.isArray(e)?e.slice():[],this._selectTargetMap=i.reduce(e||[],(function(e,t){return e.set(t.name,t),e}),i.createHashMap())},select:function(e,t){var n=null!=t?this._targetList[t]:this._selectTargetMap.get(e);"single"===this.get("selectedMode")&&this._selectTargetMap.each((function(e){e.selected=!1})),n&&(n.selected=!0)},unSelect:function(e,t){var n=null!=t?this._targetList[t]:this._selectTargetMap.get(e);n&&(n.selected=!1)},toggleSelected:function(e,t){var n=null!=t?this._targetList[t]:this._selectTargetMap.get(e);if(null!=n)return this[n.selected?"unSelect":"select"](e,t),n.selected},isSelected:function(e,t){var n=null!=t?this._targetList[t]:this._selectTargetMap.get(e);return n&&n.selected}};e.exports=a},499:function(e,t,n){var i=n(291),a=n(294),r=n(341);function o(e,t,n,i){var a=t.getData(),r=this.dataIndex,o=a.getName(r),s=t.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:e,name:o,seriesId:t.id}),a.each((function(e){l(a.getItemGraphicEl(e),a.getItemLayout(e),t.isSelected(a.getName(e)),s,n)}))}function l(e,t,n,i,a){var r=(t.startAngle+t.endAngle)/2,o=n?i:0,l=[Math.cos(r)*o,Math.sin(r)*o];a?e.animate().when(200,{position:l}).start("bounceOut"):e.attr("position",l)}function s(e,t){a.Group.call(this);var n=new a.Sector({z2:2}),i=new a.Polyline,r=new a.Text;this.add(n),this.add(i),this.add(r),this.updateData(e,t,!0)}var c=s.prototype;c.updateData=function(e,t,n){var r=this.childAt(0),o=this.childAt(1),s=this.childAt(2),c=e.hostModel,g=e.getItemModel(t),u=e.getItemLayout(t),h=i.extend({},u);(h.label=null,n)?(r.setShape(h),"scale"===c.getShallow("animationType")?(r.shape.r=u.r0,a.initProps(r,{shape:{r:u.r}},c,t)):(r.shape.endAngle=u.startAngle,a.updateProps(r,{shape:{endAngle:u.endAngle}},c,t))):a.updateProps(r,{shape:h},c,t);var d=e.getItemVisual(t,"color");r.useStyle(i.defaults({lineJoin:"bevel",fill:d},g.getModel("itemStyle").getItemStyle())),r.hoverStyle=g.getModel("emphasis.itemStyle").getItemStyle();var p=g.getShallow("cursor");p&&r.attr("cursor",p),l(this,e.getItemLayout(t),c.isSelected(null,t),c.get("selectedOffset"),c.get("animation")),this._updateLabel(e,t),this.highDownOnUpdate=g.get("hoverAnimation")&&c.isAnimationEnabled()?function(e,t){"emphasis"===t?(o.ignore=o.hoverIgnore,s.ignore=s.hoverIgnore,r.stopAnimation(!0),r.animateTo({shape:{r:u.r+c.get("hoverOffset")}},300,"elasticOut")):(o.ignore=o.normalIgnore,s.ignore=s.normalIgnore,r.stopAnimation(!0),r.animateTo({shape:{r:u.r}},300,"elasticOut"))}:null,a.setHoverStyle(this)},c._updateLabel=function(e,t){var n=this.childAt(1),i=this.childAt(2),r=e.hostModel,o=e.getItemModel(t),l=e.getItemLayout(t).label,s=e.getItemVisual(t,"color");if(!l||isNaN(l.x)||isNaN(l.y))i.ignore=i.normalIgnore=i.hoverIgnore=n.ignore=n.normalIgnore=n.hoverIgnore=!0;else{a.updateProps(n,{shape:{points:l.linePoints||[[l.x,l.y],[l.x,l.y],[l.x,l.y]]}},r,t),a.updateProps(i,{style:{x:l.x,y:l.y}},r,t),i.attr({rotation:l.rotation,origin:[l.x,l.y],z2:10});var c=o.getModel("label"),g=o.getModel("emphasis.label"),u=o.getModel("labelLine"),h=o.getModel("emphasis.labelLine");s=e.getItemVisual(t,"color");a.setLabelStyle(i.style,i.hoverStyle={},c,g,{labelFetcher:e.hostModel,labelDataIndex:t,defaultText:e.getName(t),autoColor:s,useInsideStyle:!!l.inside},{textAlign:l.textAlign,textVerticalAlign:l.verticalAlign,opacity:e.getItemVisual(t,"opacity")}),i.ignore=i.normalIgnore=!c.get("show"),i.hoverIgnore=!g.get("show"),n.ignore=n.normalIgnore=!u.get("show"),n.hoverIgnore=!h.get("show"),n.setStyle({stroke:s,opacity:e.getItemVisual(t,"opacity")}),n.setStyle(u.getModel("lineStyle").getLineStyle()),n.hoverStyle=h.getModel("lineStyle").getLineStyle();var d=u.get("smooth");d&&!0===d&&(d=.4),n.setShape({smooth:d})}},i.inherits(s,a.Group);var g=r.extend({type:"pie",init:function(){var e=new a.Group;this._sectorGroup=e},render:function(e,t,n,a){if(!a||a.from!==this.uid){var r=e.getData(),l=this._data,c=this.group,g=t.get("animation"),u=!l,h=e.get("animationType"),d=i.curry(o,this.uid,e,g,n),p=e.get("selectedMode");if(r.diff(l).add((function(e){var t=new s(r,e);u&&"scale"!==h&&t.eachChild((function(e){e.stopAnimation(!0)})),p&&t.on("click",d),r.setItemGraphicEl(e,t),c.add(t)})).update((function(e,t){var n=l.getItemGraphicEl(t);n.updateData(r,e),n.off("click"),p&&n.on("click",d),c.add(n),r.setItemGraphicEl(e,n)})).remove((function(e){var t=l.getItemGraphicEl(e);c.remove(t)})).execute(),g&&u&&r.count()>0&&"scale"!==h){for(var f=r.getItemLayout(0),m=1;isNaN(f.startAngle)&&m<r.count();++m)f=r.getItemLayout(m);var v=Math.max(n.getWidth(),n.getHeight())/2,y=i.bind(c.removeClipPath,c);c.setClipPath(this._createClipPath(f.cx,f.cy,v,f.startAngle,f.clockwise,y,e))}else c.removeClipPath();this._data=r}},dispose:function(){},_createClipPath:function(e,t,n,i,r,o,l){var s=new a.Sector({shape:{cx:e,cy:t,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return a.initProps(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},l,o),s},containPoint:function(e,t){var n=t.getData().getItemLayout(0);if(n){var i=e[0]-n.cx,a=e[1]-n.cy,r=Math.sqrt(i*i+a*a);return r<=n.r&&r>=n.r0}}});e.exports=g},500:function(e,t,n){var i=n(293),a=n(291);e.exports=function(e,t){a.each(t,(function(t){t.update="updateView",i.registerAction(t,(function(n,i){var a={};return i.eachComponent({mainType:"series",subType:e,query:n},(function(e){e[t.method]&&e[t.method](n.name,n.dataIndex);var i=e.getData();i.each((function(t){var n=i.getName(t);a[n]=e.isSelected(n)||!1}))})),{name:n.name,selected:a,seriesId:n.seriesId}}))}))}},501:function(e,t,n){var i=n(291).createHashMap;e.exports=function(e){return{getTargetSeries:function(t){var n={},a=i();return t.eachSeriesByType(e,(function(e){e.__paletteScope=n,a.set(e.uid,e)})),a},reset:function(e,t){var n=e.getRawData(),i={},a=e.getData();a.each((function(e){var t=a.getRawIndex(e);i[t]=e})),n.each((function(t){var r=i[t],o=null!=r&&a.getItemVisual(r,"color",!0);if(o)n.setItemVisual(t,"color",o);else{var l=n.getItemModel(t).get("itemStyle.color")||e.getColorFromPalette(n.getName(t)||t+"",e.__paletteScope,n.count());n.setItemVisual(t,"color",l),null!=r&&a.setItemVisual(r,"color",l)}}))}}}},502:function(e,t,n){var i=n(296),a=i.parsePercent,r=i.linearMap,o=n(503),l=n(291),s=2*Math.PI,c=Math.PI/180;e.exports=function(e,t,n,i){t.eachSeriesByType(e,(function(e){var t=e.getData(),i=t.mapDimension("value"),g=e.get("center"),u=e.get("radius");l.isArray(u)||(u=[0,u]),l.isArray(g)||(g=[g,g]);var h=n.getWidth(),d=n.getHeight(),p=Math.min(h,d),f=a(g[0],h),m=a(g[1],d),v=a(u[0],p/2),y=a(u[1],p/2),S=-e.get("startAngle")*c,x=e.get("minAngle")*c,w=0;t.each(i,(function(e){!isNaN(e)&&w++}));var I=t.getSum(i),b=Math.PI/(I||w)*2,A=e.get("clockwise"),M=e.get("roseType"),_=e.get("stillShowZeroSum"),L=t.getDataExtent(i);L[0]=0;var D=s,P=0,N=S,T=A?1:-1;if(t.each(i,(function(e,n){var i;if(isNaN(e))t.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:A,cx:f,cy:m,r0:v,r:M?NaN:y});else{(i="area"!==M?0===I&&_?b:e*b:s/w)<x?(i=x,D-=x):P+=e;var a=N+T*i;t.setItemLayout(n,{angle:i,startAngle:N,endAngle:a,clockwise:A,cx:f,cy:m,r0:v,r:M?r(e,L,[v,y]):y}),N=a}})),D<s&&w)if(D<=.001){var C=s/w;t.each(i,(function(e,n){if(!isNaN(e)){var i=t.getItemLayout(n);i.angle=C,i.startAngle=S+T*n*C,i.endAngle=S+T*(n+1)*C}}))}else b=D/P,N=S,t.each(i,(function(e,n){if(!isNaN(e)){var i=t.getItemLayout(n),a=i.angle===x?x:e*b;i.startAngle=N,i.endAngle=N+T*a,N+=T*a}}));o(e,y,h,d)}))}},503:function(e,t,n){var i=n(304),a=Math.PI/180;function r(e,t,n,i,a,r,o){function l(t,n,i,a){for(var r=t;r<n;r++)if(e[r].y+=i,r>t&&r+1<n&&e[r+1].y>e[r].y+e[r].height)return void s(r,i/2);s(n-1,i/2)}function s(t,n){for(var i=t;i>=0&&(e[i].y-=n,!(i>0&&e[i].y>e[i-1].y+e[i-1].height));i--);}function c(e,t,n,i,a,r){for(var o=t?Number.MAX_VALUE:0,l=0,s=e.length;l<s;l++){var c=Math.abs(e[l].y-i),g=e[l].len,u=e[l].len2,h=c<a+g?Math.sqrt((a+g+u)*(a+g+u)-c*c):Math.abs(e[l].x-n);t&&h>=o&&(h=o-10),!t&&h<=o&&(h=o+10),e[l].x=n+h*r,o=h}}e.sort((function(e,t){return e.y-t.y}));for(var g,u=0,h=e.length,d=[],p=[],f=0;f<h;f++)(g=e[f].y-u)<0&&l(f,h,-g),u=e[f].y+e[f].height;o-u<0&&s(h-1,u-o);for(f=0;f<h;f++)e[f].y>=n?p.push(e[f]):d.push(e[f]);c(d,!1,t,n,i,a),c(p,!0,t,n,i,a)}function o(e){return"center"===e.position}e.exports=function(e,t,n,l,s){var c,g,u=e.getData(),h=[],d=!1,p=(e.get("minShowLabelAngle")||0)*a;u.each((function(n){var a=u.getItemLayout(n),r=u.getItemModel(n),o=r.getModel("label"),l=o.get("position")||r.get("emphasis.label.position"),s=r.getModel("labelLine"),f=s.get("length"),m=s.get("length2");if(!(a.angle<p)){var v,y,S,x,w=(a.startAngle+a.endAngle)/2,I=Math.cos(w),b=Math.sin(w);c=a.cx,g=a.cy;var A="inside"===l||"inner"===l;if("center"===l)v=a.cx,y=a.cy,x="center";else{var M=(A?(a.r+a.r0)/2*I:a.r*I)+c,_=(A?(a.r+a.r0)/2*b:a.r*b)+g;if(v=M+3*I,y=_+3*b,!A){var L=M+I*(f+t-a.r),D=_+b*(f+t-a.r),P=L+(I<0?-1:1)*m;v=P+(I<0?-5:5),y=D,S=[[M,_],[L,D],[P,D]]}x=A?"center":I>0?"left":"right"}var N,T=o.getFont(),C=o.get("rotate");N="number"===typeof C?C*(Math.PI/180):C?I<0?-w+Math.PI:-w:0;var k=e.getFormattedLabel(n,"normal")||u.getName(n),R=i.getBoundingRect(k,T,x,"top");d=!!N,a.label={x:v,y:y,position:l,height:R.height,len:f,len2:m,linePoints:S,textAlign:x,verticalAlign:"middle",rotation:N,inside:A},A||h.push(a.label)}})),!d&&e.get("avoidLabelOverlap")&&function(e,t,n,i,a,l){for(var s=[],c=[],g=0;g<e.length;g++)o(e[g])||(e[g].x<t?s.push(e[g]):c.push(e[g]));for(r(c,t,n,i,1,0,l),r(s,t,n,i,-1,0,l),g=0;g<e.length;g++)if(!o(e[g])){var u=e[g].linePoints;if(u){var h=u[1][0]-u[2][0];e[g].x<t?u[2][0]=e[g].x+3:u[2][0]=e[g].x-3,u[1][1]=u[2][1]=e[g].y,u[1][0]=u[2][0]+h}}}(h,c,g,t,0,l)}},504:function(e,t){e.exports=function(e){return{seriesType:e,reset:function(e,t){var n=t.findComponents({mainType:"legend"});if(n&&n.length){var i=e.getData();i.filterSelf((function(e){for(var t=i.getName(e),a=0;a<n.length;a++)if(!n[a].isSelected(t))return!1;return!0}))}}}}}}]);
//# sourceMappingURL=5.cd4f5e8d.chunk.js.map