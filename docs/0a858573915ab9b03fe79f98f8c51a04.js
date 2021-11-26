ace.define("ace/mode/sql_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,i){"use strict";var n=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function(){var e="select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|when|then|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|foreign|not|references|default|null|inner|cross|natural|database|drop|grant",t="true|false",i="avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",n="int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer",o=this.createKeywordMapper({"support.function":i,keyword:e,"constant.language":t,"storage.type":n},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",start:"/\\*",end:"\\*/"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"string",regex:"`.*?`"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};n.inherits(r,o),t.SqlHighlightRules=r})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,i){"use strict";var n=e("../../lib/oop"),o=e("../../range").Range,r=e("./fold_mode").FoldMode,s=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(s,r),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var n=e.getLine(i);if(this.singleLineBlockCommentRe.test(n)&&!this.startRegionRe.test(n)&&!this.tripleStarBlockCommentRe.test(n))return"";var o=this._getFoldWidgetBase(e,t,i);return!o&&this.startRegionRe.test(n)?"start":o},this.getFoldWidgetRange=function(e,t,i,n){var o=e.getLine(i);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,i);var r=o.match(this.foldingStartMarker);if(r){var s=r.index;if(r[1])return this.openingBracketBlock(e,r[1],i,s);var l=e.getCommentFoldRange(i,s+r[0].length,1);return l&&!l.isMultiLine()&&(n?l=this.getSectionRange(e,i):"all"!=t&&(l=null)),l}if("markbegin"!==t){r=o.match(this.foldingStopMarker);if(r){s=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],i,s):e.getCommentFoldRange(i,s,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),n=i.search(/\S/),r=t,s=i.length;t+=1;var l=t,a=e.getLength();while(++t<a){i=e.getLine(t);var g=i.search(/\S/);if(-1!==g){if(n>g)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=r)break;if(c.isMultiLine())t=c.end.row;else if(n==g)break}l=t}}return new o(r,s,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,i){var n=t.search(/\s*$/),r=e.getLength(),s=i,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++i<r){t=e.getLine(i);var g=l.exec(t);if(g&&(g[1]?a--:a++,!a))break}var c=i;if(c>s)return new o(s,n,c,t.length)}}.call(s.prototype)})),ace.define("ace/mode/folding/sql",["require","exports","module","ace/lib/oop","ace/mode/folding/cstyle"],(function(e,t,i){"use strict";var n=e("../../lib/oop"),o=e("./cstyle").FoldMode,r=t.FoldMode=function(){};n.inherits(r,o),function(){}.call(r.prototype)})),ace.define("ace/mode/sql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sql_highlight_rules","ace/mode/folding/sql"],(function(e,t,i){"use strict";var n=e("../lib/oop"),o=e("./text").Mode,r=e("./sql_highlight_rules").SqlHighlightRules,s=e("./folding/sql").FoldMode,l=function(){this.HighlightRules=r,this.foldingRules=new s,this.$behaviour=this.$defaultBehaviour};n.inherits(l,o),function(){this.lineCommentStart="--",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/sql",this.snippetFileId="ace/snippets/sql"}.call(l.prototype),t.Mode=l})),function(){ace.require(["ace/mode/sql"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}))}();