ace.define("ace/mode/haskell_cabal_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,i){"use strict";var l=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment",regex:"^\\s*--.*$"},{token:["keyword"],regex:/^(\s*\w.*?)(:(?:\s+|$))/},{token:"constant.numeric",regex:/[\d_]+(?:(?:[\.\d_]*)?)/},{token:"constant.language.boolean",regex:"(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"},{token:"markup.heading",regex:/^(\w.*)$/}]}};l.inherits(o,n),t.CabalHighlightRules=o})),ace.define("ace/mode/folding/haskell_cabal",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,i){"use strict";var l=e("../../lib/oop"),n=e("./fold_mode").FoldMode,o=e("../../range").Range,a=t.FoldMode=function(){};l.inherits(a,n),function(){this.isHeading=function(e,t){var i="markup.heading",l=e.getTokens(t)[0];return 0==t||l&&0===l.type.lastIndexOf(i,0)},this.getFoldWidget=function(e,t,i){if(this.isHeading(e,i))return"start";if("markbeginend"===t&&!/^\s*$/.test(e.getLine(i))){var l=e.getLength();while(++i<l)if(!/^\s*$/.test(e.getLine(i)))break;if(i==l||this.isHeading(e,i))return"end"}return""},this.getFoldWidgetRange=function(e,t,i){var l=e.getLine(i),n=l.length,a=e.getLength(),s=i,r=i;if(this.isHeading(e,i)){while(++i<a)if(this.isHeading(e,i)){i--;break}if(r=i,r>s)while(r>s&&/^\s*$/.test(e.getLine(r)))r--;if(r>s){var h=e.getLine(r).length;return new o(s,n,r,h)}}else if("end"===this.getFoldWidget(e,t,i)){r=i,h=e.getLine(r).length;while(--i>=0)if(this.isHeading(e,i))break;l=e.getLine(i),n=l.length;return new o(i,n,r,h)}}}.call(a.prototype)})),ace.define("ace/mode/haskell_cabal",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/haskell_cabal_highlight_rules","ace/mode/folding/haskell_cabal"],(function(e,t,i){"use strict";var l=e("../lib/oop"),n=e("./text").Mode,o=e("./haskell_cabal_highlight_rules").CabalHighlightRules,a=e("./folding/haskell_cabal").FoldMode,s=function(){this.HighlightRules=o,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};l.inherits(s,n),function(){this.lineCommentStart="--",this.blockComment=null,this.$id="ace/mode/haskell_cabal"}.call(s.prototype),t.Mode=s})),function(){ace.require(["ace/mode/haskell_cabal"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}))}();