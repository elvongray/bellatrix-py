(function(){var k,l,o=[].indexOf||function(c){for(var a=0,d=this.length;a<d;a++)if(a in this&&this[a]===c)return a;return-1};self.JSREPLEngine=function(){function c(a,d,e,p,b,c){this.result=e;this.error=p;this.Ruby=b.Ruby;b.print=function(){};this.error_buffer=[];e=function(){return function(a){if(a!=null)return d(String.fromCharCode(a))}}(this);a=function(a){return function(b){if(b!=null)return a.error_buffer.push(String.fromCharCode(b))}}(this);this.Ruby.initialize(null,e,a);c()}c.prototype.Eval=
function(a){var d;this.error_buffer=[];try{return d=this.Ruby.eval(a),this.result(this.Ruby.stringify(d))}catch(e){return typeof e!=="number"?this.error("Internal error: "+e):this.error_buffer.length?this.error(this.error_buffer.join("")):this.error("Unknown error.")}};c.prototype.RawEval=function(a){return this.Eval(a)};c.prototype.GetNextLineIndent=function(a){var d,e,c,b,m,n,g,h,i,j,f;b=e=d=h=g=0;i=a.split("\n");for(a=0,m=i.length;a<m;a++){c=i[a];b=0;j=c.match(l)||[];for(c=0,n=j.length;c<n;c++)if(f=
j[c],o.call(k,f)>=0?(g++,b++):f==="("?(h++,b++):f==="{"?(d++,b++):f==="["?(e++,b++):f==="end"?(g--,b--):f===")"?(h--,b--):f==="]"?(d--,b--):f==="}"&&(e--,b--),g<0||h<0||d<0||e<0)return false}return g>0||h>0||d>0||e>0?b>0?1:0:false};return c}();k="begin,module,def,class,if,unless,case,for,while,until,do".split(",");l=/\s+|\d+(?:\.\d*)?|"(?:[^"]|\\.)*"|'(?:[^']|\\.)*'|\/(?:[^\/]|\\.)*\/|[-+\/*]|[<>=]=?|:?[a-z@$][\w?!]*|[{}()\[\]]|[^\w\s]+/ig}).call(this);