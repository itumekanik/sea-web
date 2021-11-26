!function(t){if(("undefined"==typeof t.window||!t.document)&&(!t.require||!t.define)){t.console||(t.console=function(){var t=Array.prototype.slice.call(arguments,0);postMessage({type:"log",data:t})},t.console.error=t.console.warn=t.console.log=t.console.trace=t.console),t.window=t,t.ace=t,t.onerror=function(t,e,n,i,r){postMessage({type:"error",data:{message:t,data:r.data,file:e,line:n,col:i,stack:r.stack}})},t.normalizeModule=function(e,n){if(-1!==n.indexOf("!")){var i=n.split("!");return t.normalizeModule(e,i[0])+"!"+t.normalizeModule(e,i[1])}if("."==n.charAt(0)){var r=e.split("/").slice(0,-1).join("/");n=(r?r+"/":"")+n;while(-1!==n.indexOf(".")&&s!=n){var s=n;n=n.replace(/^\.\//,"").replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}}return n},t.require=function(e,n){if(n||(n=e,e=null),!n.charAt)throw new Error("worker.js require() accepts only (parentId, id) as arguments");n=t.normalizeModule(e,n);var r=t.require.modules[n];if(r)return r.initialized||(r.initialized=!0,r.exports=r.factory().exports),r.exports;if(!t.require.tlns)return console.log("unable to load "+n);var s=i(n,t.require.tlns);return".js"!=s.slice(-3)&&(s+=".js"),t.require.id=n,t.require.modules[n]={},importScripts(s),t.require(e,n)},t.require.modules={},t.require.tlns={},t.define=function(e,n,i){if(2==arguments.length?(i=n,"string"!=typeof e&&(n=e,e=t.require.id)):1==arguments.length&&(i=e,n=[],e=t.require.id),"function"==typeof i){n.length||(n=["require","exports","module"]);var r=function(n){return t.require(e,n)};t.require.modules[e]={exports:{},factory:function(){var t=this,e=i.apply(this,n.slice(0,i.length).map((function(e){switch(e){case"require":return r;case"exports":return t.exports;case"module":return t;default:return r(e)}})));return e&&(t.exports=e),t}}}else t.require.modules[e]={exports:i,initialized:!0}},t.define.amd={},require.tlns={},t.initBaseUrls=function(t){for(var e in t)require.tlns[e]=t[e]},t.initSender=function(){var e=t.require("ace/lib/event_emitter").EventEmitter,n=t.require("ace/lib/oop"),i=function(){};return function(){n.implement(this,e),this.callback=function(t,e){postMessage({type:"call",id:e,data:t})},this.emit=function(t,e){postMessage({type:"event",name:t,data:e})}}.call(i.prototype),new i};var e=t.main=null,n=t.sender=null;t.onmessage=function(i){var r=i.data;if(r.event&&n)n._signal(r.event,r.data);else if(r.command)if(e[r.command])e[r.command].apply(e,r.args);else{if(!t[r.command])throw new Error("Unknown command:"+r.command);t[r.command].apply(t,r.args)}else if(r.init){t.initBaseUrls(r.tlns),n=t.sender=t.initSender();var s=require(r.module)[r.classname];e=t.main=new s(n)}}}function i(t,e){var n=t,i="";while(n){var r=e[n];if("string"==typeof r)return r+i;if(r)return r.location.replace(/\/*$/,"/")+(i||r.main||r.name);if(!1===r)return"";var s=n.lastIndexOf("/");if(-1===s)break;i=n.substr(s)+i,n=n.slice(0,s)}return t}}(this),ace.define("ace/lib/oop",[],(function(t,e,n){"use strict";e.inherits=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})},e.mixin=function(t,e){for(var n in e)t[n]=e[n];return t},e.implement=function(t,n){e.mixin(t,n)}})),ace.define("ace/range",[],(function(t,e,n){"use strict";var i=function(t,e){return t.row-e.row||t.column-e.column},r=function(t,e,n,i){this.start={row:t,column:e},this.end={row:n,column:i}};(function(){this.isEqual=function(t){return this.start.row===t.start.row&&this.end.row===t.end.row&&this.start.column===t.start.column&&this.end.column===t.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(t,e){return 0==this.compare(t,e)},this.compareRange=function(t){var e,n=t.end,i=t.start;return e=this.compare(n.row,n.column),1==e?(e=this.compare(i.row,i.column),1==e?2:0==e?1:0):-1==e?-2:(e=this.compare(i.row,i.column),-1==e?-1:1==e?42:0)},this.comparePoint=function(t){return this.compare(t.row,t.column)},this.containsRange=function(t){return 0==this.comparePoint(t.start)&&0==this.comparePoint(t.end)},this.intersects=function(t){var e=this.compareRange(t);return-1==e||0==e||1==e},this.isEnd=function(t,e){return this.end.row==t&&this.end.column==e},this.isStart=function(t,e){return this.start.row==t&&this.start.column==e},this.setStart=function(t,e){"object"==typeof t?(this.start.column=t.column,this.start.row=t.row):(this.start.row=t,this.start.column=e)},this.setEnd=function(t,e){"object"==typeof t?(this.end.column=t.column,this.end.row=t.row):(this.end.row=t,this.end.column=e)},this.inside=function(t,e){return 0==this.compare(t,e)&&(!this.isEnd(t,e)&&!this.isStart(t,e))},this.insideStart=function(t,e){return 0==this.compare(t,e)&&!this.isEnd(t,e)},this.insideEnd=function(t,e){return 0==this.compare(t,e)&&!this.isStart(t,e)},this.compare=function(t,e){return this.isMultiLine()||t!==this.start.row?t<this.start.row?-1:t>this.end.row?1:this.start.row===t?e>=this.start.column?0:-1:this.end.row===t?e<=this.end.column?0:1:0:e<this.start.column?-1:e>this.end.column?1:0},this.compareStart=function(t,e){return this.start.row==t&&this.start.column==e?-1:this.compare(t,e)},this.compareEnd=function(t,e){return this.end.row==t&&this.end.column==e?1:this.compare(t,e)},this.compareInside=function(t,e){return this.end.row==t&&this.end.column==e?1:this.start.row==t&&this.start.column==e?-1:this.compare(t,e)},this.clipRows=function(t,e){if(this.end.row>e)var n={row:e+1,column:0};else if(this.end.row<t)n={row:t,column:0};if(this.start.row>e)var i={row:e+1,column:0};else if(this.start.row<t)i={row:t,column:0};return r.fromPoints(i||this.start,n||this.end)},this.extend=function(t,e){var n=this.compare(t,e);if(0==n)return this;if(-1==n)var i={row:t,column:e};else var s={row:t,column:e};return r.fromPoints(i||this.start,s||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return r.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new r(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new r(this.start.row,0,this.end.row,0)},this.toScreenRange=function(t){var e=t.documentToScreenPosition(this.start),n=t.documentToScreenPosition(this.end);return new r(e.row,e.column,n.row,n.column)},this.moveBy=function(t,e){this.start.row+=t,this.start.column+=e,this.end.row+=t,this.end.column+=e}}).call(r.prototype),r.fromPoints=function(t,e){return new r(t.row,t.column,e.row,e.column)},r.comparePoints=i,r.comparePoints=function(t,e){return t.row-e.row||t.column-e.column},e.Range=r})),ace.define("ace/apply_delta",[],(function(t,e,n){"use strict";e.applyDelta=function(t,e,n){var i=e.start.row,r=e.start.column,s=t[i]||"";switch(e.action){case"insert":var o=e.lines;if(1===o.length)t[i]=s.substring(0,r)+e.lines[0]+s.substring(r);else{var a=[i,1].concat(e.lines);t.splice.apply(t,a),t[i]=s.substring(0,r)+t[i],t[i+e.lines.length-1]+=s.substring(r)}break;case"remove":var c=e.end.column,u=e.end.row;i===u?t[i]=s.substring(0,r)+s.substring(c):t.splice(i,u-i+1,s.substring(0,r)+t[u].substring(c));break}}})),ace.define("ace/lib/event_emitter",[],(function(t,e,n){"use strict";var i={},r=function(){this.propagationStopped=!0},s=function(){this.defaultPrevented=!0};i._emit=i._dispatchEvent=function(t,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var n=this._eventRegistry[t]||[],i=this._defaultHandlers[t];if(n.length||i){"object"==typeof e&&e||(e={}),e.type||(e.type=t),e.stopPropagation||(e.stopPropagation=r),e.preventDefault||(e.preventDefault=s),n=n.slice();for(var o=0;o<n.length;o++)if(n[o](e,this),e.propagationStopped)break;return i&&!e.defaultPrevented?i(e,this):void 0}},i._signal=function(t,e){var n=(this._eventRegistry||{})[t];if(n){n=n.slice();for(var i=0;i<n.length;i++)n[i](e,this)}},i.once=function(t,e){var n=this;if(this.on(t,(function i(){n.off(t,i),e.apply(null,arguments)})),!e)return new Promise((function(t){e=t}))},i.setDefaultHandler=function(t,e){var n=this._defaultHandlers;if(n||(n=this._defaultHandlers={_disabled_:{}}),n[t]){var i=n[t],r=n._disabled_[t];r||(n._disabled_[t]=r=[]),r.push(i);var s=r.indexOf(e);-1!=s&&r.splice(s,1)}n[t]=e},i.removeDefaultHandler=function(t,e){var n=this._defaultHandlers;if(n){var i=n._disabled_[t];if(n[t]==e)i&&this.setDefaultHandler(t,i.pop());else if(i){var r=i.indexOf(e);-1!=r&&i.splice(r,1)}}},i.on=i.addEventListener=function(t,e,n){this._eventRegistry=this._eventRegistry||{};var i=this._eventRegistry[t];return i||(i=this._eventRegistry[t]=[]),-1==i.indexOf(e)&&i[n?"unshift":"push"](e),e},i.off=i.removeListener=i.removeEventListener=function(t,e){this._eventRegistry=this._eventRegistry||{};var n=this._eventRegistry[t];if(n){var i=n.indexOf(e);-1!==i&&n.splice(i,1)}},i.removeAllListeners=function(t){t||(this._eventRegistry=this._defaultHandlers=void 0),this._eventRegistry&&(this._eventRegistry[t]=void 0),this._defaultHandlers&&(this._defaultHandlers[t]=void 0)},e.EventEmitter=i})),ace.define("ace/anchor",[],(function(t,e,n){"use strict";var i=t("./lib/oop"),r=t("./lib/event_emitter").EventEmitter,s=e.Anchor=function(t,e,n){this.$onChange=this.onChange.bind(this),this.attach(t),"undefined"==typeof n?this.setPosition(e.row,e.column):this.setPosition(e,n)};(function(){function t(t,e,n){var i=n?t.column<=e.column:t.column<e.column;return t.row<e.row||t.row==e.row&&i}function e(e,n,i){var r="insert"==e.action,s=(r?1:-1)*(e.end.row-e.start.row),o=(r?1:-1)*(e.end.column-e.start.column),a=e.start,c=r?a:e.end;return t(n,a,i)?{row:n.row,column:n.column}:t(c,n,!i)?{row:n.row+s,column:n.column+(n.row==c.row?o:0)}:{row:a.row,column:a.column}}i.implement(this,r),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(t){if((t.start.row!=t.end.row||t.start.row==this.row)&&!(t.start.row>this.row)){var n=e(t,{row:this.row,column:this.column},this.$insertRight);this.setPosition(n.row,n.column,!0)}},this.setPosition=function(t,e,n){var i;if(i=n?{row:t,column:e}:this.$clipPositionToDocument(t,e),this.row!=i.row||this.column!=i.column){var r={row:this.row,column:this.column};this.row=i.row,this.column=i.column,this._signal("change",{old:r,value:i})}},this.detach=function(){this.document.off("change",this.$onChange)},this.attach=function(t){this.document=t||this.document,this.document.on("change",this.$onChange)},this.$clipPositionToDocument=function(t,e){var n={};return t>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):t<0?(n.row=0,n.column=0):(n.row=t,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,e))),e<0&&(n.column=0),n}}).call(s.prototype)})),ace.define("ace/document",[],(function(t,e,n){"use strict";var i=t("./lib/oop"),r=t("./apply_delta").applyDelta,s=t("./lib/event_emitter").EventEmitter,o=t("./range").Range,a=t("./anchor").Anchor,c=function(t){this.$lines=[""],0===t.length?this.$lines=[""]:Array.isArray(t)?this.insertMergedLines({row:0,column:0},t):this.insert({row:0,column:0},t)};(function(){i.implement(this,s),this.setValue=function(t){var e=this.getLength()-1;this.remove(new o(0,0,e,this.getLine(e).length)),this.insert({row:0,column:0},t)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(t,e){return new a(this,t,e)},0==="aaa".split(/a/).length?this.$split=function(t){return t.replace(/\r\n|\r/g,"\n").split("\n")}:this.$split=function(t){return t.split(/\r\n|\r|\n/)},this.$detectNewLine=function(t){var e=t.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine=e?e[1]:"\n",this._signal("changeNewLineMode")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n";case"unix":return"\n";default:return this.$autoNewLine||"\n"}},this.$autoNewLine="",this.$newLineMode="auto",this.setNewLineMode=function(t){this.$newLineMode!==t&&(this.$newLineMode=t,this._signal("changeNewLineMode"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(t){return"\r\n"==t||"\r"==t||"\n"==t},this.getLine=function(t){return this.$lines[t]||""},this.getLines=function(t,e){return this.$lines.slice(t,e+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(t){return this.getLinesForRange(t).join(this.getNewLineCharacter())},this.getLinesForRange=function(t){var e;if(t.start.row===t.end.row)e=[this.getLine(t.start.row).substring(t.start.column,t.end.column)];else{e=this.getLines(t.start.row,t.end.row),e[0]=(e[0]||"").substring(t.start.column);var n=e.length-1;t.end.row-t.start.row==n&&(e[n]=e[n].substring(0,t.end.column))}return e},this.insertLines=function(t,e){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(t,e)},this.removeLines=function(t,e){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(t,e)},this.insertNewLine=function(t){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),this.insertMergedLines(t,["",""])},this.insert=function(t,e){return this.getLength()<=1&&this.$detectNewLine(e),this.insertMergedLines(t,this.$split(e))},this.insertInLine=function(t,e){var n=this.clippedPos(t.row,t.column),i=this.pos(t.row,t.column+e.length);return this.applyDelta({start:n,end:i,action:"insert",lines:[e]},!0),this.clonePos(i)},this.clippedPos=function(t,e){var n=this.getLength();void 0===t?t=n:t<0?t=0:t>=n&&(t=n-1,e=void 0);var i=this.getLine(t);return void 0==e&&(e=i.length),e=Math.min(Math.max(e,0),i.length),{row:t,column:e}},this.clonePos=function(t){return{row:t.row,column:t.column}},this.pos=function(t,e){return{row:t,column:e}},this.$clipPosition=function(t){var e=this.getLength();return t.row>=e?(t.row=Math.max(0,e-1),t.column=this.getLine(e-1).length):(t.row=Math.max(0,t.row),t.column=Math.min(Math.max(t.column,0),this.getLine(t.row).length)),t},this.insertFullLines=function(t,e){t=Math.min(Math.max(t,0),this.getLength());var n=0;t<this.getLength()?(e=e.concat([""]),n=0):(e=[""].concat(e),t--,n=this.$lines[t].length),this.insertMergedLines({row:t,column:n},e)},this.insertMergedLines=function(t,e){var n=this.clippedPos(t.row,t.column),i={row:n.row+e.length-1,column:(1==e.length?n.column:0)+e[e.length-1].length};return this.applyDelta({start:n,end:i,action:"insert",lines:e}),this.clonePos(i)},this.remove=function(t){var e=this.clippedPos(t.start.row,t.start.column),n=this.clippedPos(t.end.row,t.end.column);return this.applyDelta({start:e,end:n,action:"remove",lines:this.getLinesForRange({start:e,end:n})}),this.clonePos(e)},this.removeInLine=function(t,e,n){var i=this.clippedPos(t,e),r=this.clippedPos(t,n);return this.applyDelta({start:i,end:r,action:"remove",lines:this.getLinesForRange({start:i,end:r})},!0),this.clonePos(i)},this.removeFullLines=function(t,e){t=Math.min(Math.max(0,t),this.getLength()-1),e=Math.min(Math.max(0,e),this.getLength()-1);var n=e==this.getLength()-1&&t>0,i=e<this.getLength()-1,r=n?t-1:t,s=n?this.getLine(r).length:0,a=i?e+1:e,c=i?0:this.getLine(a).length,u=new o(r,s,a,c),l=this.$lines.slice(t,e+1);return this.applyDelta({start:u.start,end:u.end,action:"remove",lines:this.getLinesForRange(u)}),l},this.removeNewLine=function(t){t<this.getLength()-1&&t>=0&&this.applyDelta({start:this.pos(t,this.getLine(t).length),end:this.pos(t+1,0),action:"remove",lines:["",""]})},this.replace=function(t,e){return t instanceof o||(t=o.fromPoints(t.start,t.end)),0===e.length&&t.isEmpty()?t.start:e==this.getTextRange(t)?t.end:(this.remove(t),n=e?this.insert(t.start,e):t.start,n);var n},this.applyDeltas=function(t){for(var e=0;e<t.length;e++)this.applyDelta(t[e])},this.revertDeltas=function(t){for(var e=t.length-1;e>=0;e--)this.revertDelta(t[e])},this.applyDelta=function(t,e){var n="insert"==t.action;(n?t.lines.length<=1&&!t.lines[0]:!o.comparePoints(t.start,t.end))||(n&&t.lines.length>2e4?this.$splitAndapplyLargeDelta(t,2e4):(r(this.$lines,t,e),this._signal("change",t)))},this.$safeApplyDelta=function(t){var e=this.$lines.length;("remove"==t.action&&t.start.row<e&&t.end.row<e||"insert"==t.action&&t.start.row<=e)&&this.applyDelta(t)},this.$splitAndapplyLargeDelta=function(t,e){for(var n=t.lines,i=n.length-e+1,r=t.start.row,s=t.start.column,o=0,a=0;o<i;o=a){a+=e-1;var c=n.slice(o,a);c.push(""),this.applyDelta({start:this.pos(r+o,s),end:this.pos(r+a,s=0),action:t.action,lines:c},!0)}t.lines=n.slice(o),t.start.row=r+o,t.start.column=s,this.applyDelta(t,!0)},this.revertDelta=function(t){this.$safeApplyDelta({start:this.clonePos(t.start),end:this.clonePos(t.end),action:"insert"==t.action?"remove":"insert",lines:t.lines.slice()})},this.indexToPosition=function(t,e){for(var n=this.$lines||this.getAllLines(),i=this.getNewLineCharacter().length,r=e||0,s=n.length;r<s;r++)if(t-=n[r].length+i,t<0)return{row:r,column:t+n[r].length+i};return{row:s-1,column:t+n[s-1].length+i}},this.positionToIndex=function(t,e){for(var n=this.$lines||this.getAllLines(),i=this.getNewLineCharacter().length,r=0,s=Math.min(t.row,n.length),o=e||0;o<s;++o)r+=n[o].length+i;return r+t.column}}).call(c.prototype),e.Document=c})),ace.define("ace/lib/lang",[],(function(t,e,n){"use strict";e.last=function(t){return t[t.length-1]},e.stringReverse=function(t){return t.split("").reverse().join("")},e.stringRepeat=function(t,e){var n="";while(e>0)1&e&&(n+=t),(e>>=1)&&(t+=t);return n};var i=/^\s\s*/,r=/\s\s*$/;e.stringTrimLeft=function(t){return t.replace(i,"")},e.stringTrimRight=function(t){return t.replace(r,"")},e.copyObject=function(t){var e={};for(var n in t)e[n]=t[n];return e},e.copyArray=function(t){for(var e=[],n=0,i=t.length;n<i;n++)t[n]&&"object"==typeof t[n]?e[n]=this.copyObject(t[n]):e[n]=t[n];return e},e.deepCopy=function t(e){if("object"!==typeof e||!e)return e;var n;if(Array.isArray(e)){n=[];for(var i=0;i<e.length;i++)n[i]=t(e[i]);return n}if("[object Object]"!==Object.prototype.toString.call(e))return e;for(var i in n={},e)n[i]=t(e[i]);return n},e.arrayToMap=function(t){for(var e={},n=0;n<t.length;n++)e[t[n]]=1;return e},e.createMap=function(t){var e=Object.create(null);for(var n in t)e[n]=t[n];return e},e.arrayRemove=function(t,e){for(var n=0;n<=t.length;n++)e===t[n]&&t.splice(n,1)},e.escapeRegExp=function(t){return t.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},e.escapeHTML=function(t){return(""+t).replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},e.getMatchOffsets=function(t,e){var n=[];return t.replace(e,(function(t){n.push({offset:arguments[arguments.length-2],length:t.length})})),n},e.deferredCall=function(t){var e=null,n=function(){e=null,t()},i=function(t){return i.cancel(),e=setTimeout(n,t||0),i};return i.schedule=i,i.call=function(){return this.cancel(),t(),i},i.cancel=function(){return clearTimeout(e),e=null,i},i.isPending=function(){return e},i},e.delayedCall=function(t,e){var n=null,i=function(){n=null,t()},r=function(t){null==n&&(n=setTimeout(i,t||e))};return r.delay=function(t){n&&clearTimeout(n),n=setTimeout(i,t||e)},r.schedule=r,r.call=function(){this.cancel(),t()},r.cancel=function(){n&&clearTimeout(n),n=null},r.isPending=function(){return n},r}})),ace.define("ace/worker/mirror",[],(function(t,e,n){"use strict";t("../range").Range;var i=t("../document").Document,r=t("../lib/lang"),s=e.Mirror=function(t){this.sender=t;var e=this.doc=new i(""),n=this.deferredUpdate=r.delayedCall(this.onUpdate.bind(this)),s=this;t.on("change",(function(t){var i=t.data;if(i[0].start)e.applyDeltas(i);else for(var r=0;r<i.length;r+=2){if(Array.isArray(i[r+1]))var o={action:"insert",start:i[r],lines:i[r+1]};else o={action:"remove",start:i[r],end:i[r+1]};e.applyDelta(o,!0)}if(s.$timeout)return n.schedule(s.$timeout);s.onUpdate()}))};(function(){this.$timeout=500,this.setTimeout=function(t){this.$timeout=t},this.setValue=function(t){this.doc.setValue(t),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(t){this.sender.callback(this.doc.getValue(),t)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(s.prototype)})),ace.define("ace/mode/json/json_parse",[],(function(t,e,n){"use strict";var i,r,s,o,a={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},c=function(t){throw{name:"SyntaxError",message:t,at:i,text:s}},u=function(t){return t&&t!==r&&c("Expected '"+t+"' instead of '"+r+"'"),r=s.charAt(i),i+=1,r},l=function(){var t,e="";"-"===r&&(e="-",u("-"));while(r>="0"&&r<="9")e+=r,u();if("."===r){e+=".";while(u()&&r>="0"&&r<="9")e+=r}if("e"===r||"E"===r){e+=r,u(),"-"!==r&&"+"!==r||(e+=r,u());while(r>="0"&&r<="9")e+=r,u()}if(t=+e,!isNaN(t))return t;c("Bad number")},h=function(){var t,e,n,i="";if('"'===r)while(u()){if('"'===r)return u(),i;if("\\"===r)if(u(),"u"===r){for(n=0,e=0;e<4;e+=1){if(t=parseInt(u(),16),!isFinite(t))break;n=16*n+t}i+=String.fromCharCode(n)}else{if("string"!==typeof a[r])break;i+=a[r]}else{if("\n"==r||"\r"==r)break;i+=r}}c("Bad string")},f=function(){while(r&&r<=" ")u()},d=function(){switch(r){case"t":return u("t"),u("r"),u("u"),u("e"),!0;case"f":return u("f"),u("a"),u("l"),u("s"),u("e"),!1;case"n":return u("n"),u("u"),u("l"),u("l"),null}c("Unexpected '"+r+"'")},m=function(){var t=[];if("["===r){if(u("["),f(),"]"===r)return u("]"),t;while(r){if(t.push(o()),f(),"]"===r)return u("]"),t;u(","),f()}}c("Bad array")},p=function(){var t,e={};if("{"===r){if(u("{"),f(),"}"===r)return u("}"),e;while(r){if(t=h(),f(),u(":"),Object.hasOwnProperty.call(e,t)&&c('Duplicate key "'+t+'"'),e[t]=o(),f(),"}"===r)return u("}"),e;u(","),f()}}c("Bad object")};return o=function(){switch(f(),r){case"{":return p();case"[":return m();case'"':return h();case"-":return l();default:return r>="0"&&r<="9"?l():d()}},function(t,e){var n;return s=t,i=0,r=" ",n=o(),f(),r&&c("Syntax error"),"function"===typeof e?function t(n,i){var r,s,o=n[i];if(o&&"object"===typeof o)for(r in o)Object.hasOwnProperty.call(o,r)&&(s=t(o,r),void 0!==s?o[r]=s:delete o[r]);return e.call(n,i,o)}({"":n},""):n}})),ace.define("ace/mode/json_worker",[],(function(t,e,n){"use strict";var i=t("../lib/oop"),r=t("../worker/mirror").Mirror,s=t("./json/json_parse"),o=e.JsonWorker=function(t){r.call(this,t),this.setTimeout(200)};i.inherits(o,r),function(){this.onUpdate=function(){var t=this.doc.getValue(),e=[];try{t&&s(t)}catch(i){var n=this.doc.indexToPosition(i.at-1);e.push({row:n.row,column:n.column,text:i.message,type:"error"})}this.sender.emit("annotate",e)}}.call(o.prototype)}));