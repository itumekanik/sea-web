ace.define("ace/ext/spellcheck",["require","exports","module","ace/lib/event","ace/editor","ace/config"],(function(e,t,n){"use strict";var i=e("../lib/event");t.contextMenuHandler=function(e){var t=e.target,n=t.textInput.getElement();if(t.selection.isEmpty()){var o=t.getCursorPosition(),s=t.session.getWordRange(o.row,o.column),r=t.session.getTextRange(s);if(t.session.tokenRe.lastIndex=0,t.session.tokenRe.test(r)){var c="",l=r+" "+c;n.value=l,n.setSelectionRange(r.length,r.length+1),n.setSelectionRange(0,0),n.setSelectionRange(0,r.length);var u=!1;i.addListener(n,"keydown",(function e(){i.removeListener(n,"keydown",e),u=!0})),t.textInput.setInputHandler((function(e){if(e==l)return"";if(0===e.lastIndexOf(l,0))return e.slice(l.length);if(e.substr(n.selectionEnd)==l)return e.slice(0,-l.length);if(e.slice(-2)==c){var i=e.slice(0,-2);if(" "==i.slice(-1))return u?i.substring(0,n.selectionEnd):(i=i.slice(0,-1),t.session.replace(s,i),"")}return e}))}}};var o=e("../editor").Editor;e("../config").defineOptions(o.prototype,"editor",{spellcheck:{set:function(e){var n=this.textInput.getElement();n.spellcheck=!!e,e?this.on("nativecontextmenu",t.contextMenuHandler):this.removeListener("nativecontextmenu",t.contextMenuHandler)},value:!0}})})),function(){ace.require(["ace/ext/spellcheck"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}))}();