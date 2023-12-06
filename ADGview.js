//--------------------------------------------//
// ADG javascript panorama and aspect viewer. //
// 2008 (C)opyright by Albatross Design Group //
// www.albatrossdesign.com         02/10/2008 //
//--------------------------------------------//

// function createPanorama (width,height,url,partial)
// function createAspect   (width,height,url,partial)
//	  
// width   - window width 
// height  - window height 
// url     - url of pnoramic/aspect image 
// partial - partial/closed
//
// function setLink(x,y,w,h,url,icon,alt)
// 
// x,y,w,h - link rectangle
// url     - link url
// icon    - link image
// alt     - link info

// function setVel(vx,vy,vz) // set initial velocity
// function setPos(px,py,pz) // set initial position

var interval    = 20;  // redraw interval ms
var sens_mouse  = 1;   // mouse    sensitivity
var sens_key    = 1;   // keyboard sensitivity
var linkcolor   = '#80FFFF';

function ADGLink(x,y,w,h,u,i,t){this.x=x;this.y=y;this.w=w;this.h=h;this. u= u;
this.i=i;this.t=t?t:"";}function ADGObject(r,a){this.a=a;this.width=r[0]; this.
height=r[1];this.u=r[2];this.title=r[3];this.partial='partial'==(r[4]?r[4]:r[3]
);this.x=0;this.y=0;this.s=1;if(!this.v)this.v=0; if( ! window. ADGObjectArray)
window. ADGObjectArray= [ ] ; this. n= window. ADGObjectArray. length;  window.
ADGObjectArray[this.n]=this;}function setLink(x,y,w,h,u,i,t){var o=g();if( ! o)
return;if(!o.ll)o.ll=[];o.ll[o.ll.length]=new ADGLink( x, y, w, h, u, i, t) ; }
function setTitle(s){var o=g();if(!o)return;o.title=s;}function setPartial(s) {
var o=g();if(!o)return;o.partial=s;}function setVel(v){var o=g();if(!o) return;
o.v=v;}function setPos(x,y,z){var o=g();if(!o)return;o.pos=[x?x:0,y?y:0,z?z:1];
}function setOffset(x,y){var o=g();if(!o)return;o.x=x;o.y=y; } function g( l) {
var a=window.ADGObjectArray;if(!a)return null;if(!l)return a[a.length-1] ; for(
var i= 0; i<a. length; i++ ) if( a[ i] . l== l) return a[ i] ;  return null;  }
function createPanorama(width,height,u,v){return createObject(arguments, 0) ; }
function createAspect(width,height,u,v){ return createObject( arguments, 1) ; }
function createObject(r,a){var panel,slider,s1,s2,s3,div=!document. layers; if(
typeof(r[0])!='number'||typeof(r[1])!='number'){panel=r[0];r[0]=380;slider=r[1]
;r[1]=210;}if(panel){document.write('<table ondragstart="return false;" onsele'
+'ctstart="return false;" border=0 background="'+panel+'" width=504 height=304'
+' cellspacing=0 cellpadding=0><tr><td valign=top align=left>')  ;   if(   div)
document.write('<div style="position:relative;">');if(div)document.write('<div'
+' style="position:absolute;left:408px;top:94px;">'); s1= createAspect( 91, 14,
slider);if(div)document.write('</div>');if(div)document.write('<div style="pos'
+'ition:absolute;left:408px;top:149px;">');s2=createAspect(91,14, slider) ; if(
div)document.write('</div>');if(div)document.write('<div style="position:absol'
+'ute;left:408px;top:204px;">');s3=createAspect(91,14,slider);if(div) document.
write('</div>');}if(!window.ADGObjectArray&&!document.layers){document.write(''
+'<style id="ADGStyle">#ADGStyle table{margin:0px;}</style>')   ;   }    var o=
new ADGObject(r,a);if(panel){setOffset(14,13);if(o.title){ if( div) { document.
write('<div valign=top style="position:absolute;left:15px;top:236px;width:380;'
+'height:28;"><center><b><font color=#A0A0A0 size=5 face="arial">'+o.title+'</'
+'font></b></center></div>');document.write('<div valign=top style="position:a'
+'bsolute;left:14px;top:235px;width:380;height:28;"><center><b><font color=#E6'
+'E6E6 size=5 face="arial">'+o.title+'</font></b></center></div>'); }} if( div)
document.write('<div style="position:absolute;">');if(!div){s1.x=408;s1. y= 94;
s2.x=408;s2.y=149;s3.x=408;s3.y=204;}}var onload=document.layers?'':' onload="'
+'ADGLoad(this,'+o.n+');"';var e='';e+='<table width='+o.width+'px'+' height='+
o.height+'px'+' cellspacing=0 cellpadding=0 border=0><tr>';e+='<td><img src="'+
o. u+ '" border=0 galleryimg="no"'+ onload+ '></td>'; e+= '</tr></table>';  if(
document.layers){e=''+'<ilayer'+' width="'+o.width+'"'+' height="'+o.height+'"'
+'>'+'<layer'+' pagex=0'+' pagey=0'+ ' width="'+ o. width+ '"'+ ' height="'+ o.
height+'"'+' clip="0,0,'+o.width+','+o.height+'"'+'>'+ '<layer'+ ' width="'+ o.
width+'"'+' height="'+o.height+'"'+' onload="ADGLoad(this,'+o.n+');"'+' onmous'
+'eover="ADGOver(this,'+o.n+');"'+'>'+e+'</layer>'+'</layer>'+'</ilayer>'}else{
e=''+'<div id="ADGStyle">'+'<table border=0 cellspacing=0 cellpadding=0 width='
+o.width+'px'+' height='+o.height+'px'+'><tr><td valign=top>'+'<div align=left'
+' style="position:relative;">'+'<div align=left style="position:absolute;over'
+'flow:hidden;">'+ '<div align=left style="position:relative;overflow:hidden;'+
' width:'+o.width+'px;'+' height:'+o.height+'px;'+'">'+'<div style="position:a'
+'bsolute;"'+' onmouseover="ADGOver(this,'+o.n+');"'+' ondragstart="return fal'
+'se;"'+' onselectstart="return false;"'+'>'+e+'</div>'+'</div>'+'</div>'+'</d'
+'iv>'+'</td></tr></table>'+'</div>'}document.write(e);if(panel){s1.target=[ 0,
o,0];s2.target=[o,0,0];s3.target=[0,0,o];if(div)document.write('</div></div>');
document.write('</td></tr></table>');}return o;}function createLinks(e,a,o,w,h,
id){if(o.ll)for(var i=0;i<o.ll.length;i++){var l=o.ll[i];if(!l)continue;var lw=
l.w*o.s;var lh=l.h*o.s;var lx=l.x*o.s-lw/2;var ly=l.y*o.s-lh/2;var n=!o.a&&! o.
partial?(l.x<0||lx+lw>w)?3:2:1;var x0=!o.a&&!o.partial&&lx+lw>w?-1:0;for(var x=
x0;x<x0+n;x++){if(document.getElementById&&document.getElementById(id+a)){ if((
v=document.getElementById(id+a++))!=null){v.style.left=lx+x*w;v.style. top= ly+
h/2;}if((v=document.getElementById(id+a++))!=null){v.width=lw;v. height= lh; }}
else{var b=document.layers&&linkcolor?'bordercolor:'+linkcolor+';borderwidth:2'
+';':'';e+='<div id="'+(id+a++)+'" style="position:absolute;'+b+'left:'+(lx+ x*
w)+'px;top:'+(ly+h/2)+'px;">';e+='<a href="'+l.u+'"><img id="'+(id+a++)+'" alt'
+'="'+l.t+'" src="'+l.i+'" width='+lw+' height='+lh+' border=0"';if(! document.
layers&&linkcolor)e+=' onmouseover="this.border=2" onmouseout="this.border=0" '
+'onmousedown="this.border=0" style="border-color:'+linkcolor+';"';e+='></a></'
+'div>';}}}return e;}function cc(o){if(!o||!o.u)return false;if(! o. i) { o. i=
new Image();o.i.src=o.u;}if(!o.pos)o.pos=[0,0,1];if(!o.c)o.c=[-6*o.v,0,0];if( !
o.l||!o.i.width)return false;if(o.e&&o.s==o.pos[2])return true;if(!o.e&&!o. v&&
o.t){clearInterval(o.t);o.t=null;}o.s=o.pos[2];var w= o. i. width; var h= o. i.
height;var s=(o.height/h>o.width/w)?o.height/h:o.width/w;if(o.a)s=1;if(o.s<s) {
o.s=s;o.c[2]=0;}if(o.s>2){o.s=2;o.c[2]=0;}o.pos[2]=o.s;w=Math.round(w*o.s) ; h=
Math.round(h*o.s);var v,a=0,id='ADGimg'+o.n+'-',e='';if(!o.e){e+='<table width'
+'='+o.width+'px'+' height='+o.height+'px'+' cellspacing=0 cellpadding=0 borde'
+'r=0><tr>';if(!o.a&&!o.partial)e+='<td><img id="'+(id+a++)+'" src="'+o.u+'" b'
+'order=0 galleryimg="no"></td>';e+='<td><img id="'+(id+a++)+'" src="'+o.u+'" '
+'border=0 galleryimg="no"></td>';e+='</tr></table>';e=createLinks(e,a,o, w, h,
id);if(e!='')if(document.layers){o.l.document.write(e);o.l.document.close() ; }
else{o.l.innerHTML=e;}if(o.x||o.y){var p=o.l;for(var i=0;p&&p.parentNode&& i<3;
i++,p=p.parentNode);for(var i=0;p&&p.parentLayer&&i<2;i++,p=p.parentLayer); if(
p)if(document.layers){p.left=o.x;p.top=o.y;}else{p.style.left=o.x+"px";p.style.
top=o.y+"px";}}o.e=true;}if(document.getElementById){a=0;if(!o.a&&! o. partial)
if((v=document.getElementById(id+a++))!=null){v.width=w;v. height= h; } if(( v=
document.getElementById(id+a++))!=null){v.width=w;v.height=h;}createLinks('',a,
o,w,h,id);}return true;}function ADGMouse(e){var r=[0,0]; r. right= ! document.
getElementById?0:e?e.which!=1:window.event.button!=1;if(!e)e=window.event;if( !
e)return r;if(typeof(e.pageX)=='number')return r[0]=e.pageX,r[1]=e.pageY,r; if(
typeof(e.clientX)=='number')return r[0]=e.clientX,r[1]=e.clientY,r; return r; }
function ADGWheel(delta){var o=window.curObject;if(!o||!o.l)return;var e=[]; e.
which=delta>0?33:34;o.l. onkeydown( e) ; onTimer( o. n) ; o. l. onkeyup( e) ; }
function wheel(event){var delta=0;if( ! event) event= window. event; if( event.
wheelDelta)delta=event.wheelDelta / 120;else if( event. detail) delta= - event.
detail / 3; if( delta) ADGWheel( delta) ;  if(  event.  preventDefault)  event.
preventDefault();event.returnValue=false;}function ADGOver(l,n){if( window. ct)
return true;if(l.captureEvents)l.captureEvents(Event.MOUSEDOWN); var o= window.
ADGObjectArray[n];if(!o.l)ADGLoad(l, n) ; window. curObject= o; l. onmousedown=
ADGStart;l.oncontextmenu=function(){return false;};if(window. addEventListener)
l.addEventListener('DOMMouseScroll',wheel,false);l.onmousewheel=wheel; cc( o) ;
return false;}function ADGStart(e){if( e&& e. target&& e. target. toString( ) .
toLowerCase().indexOf('[object')!=0)return true;var o=g(this);if(!o)return;o.m=
"start";o.c=[0,0,0];o. p= ADGMouse( e) ; if( document. captureEvents) document.
captureEvents(Event.MOUSEMOVE|Event. MOUSEUP) ; document. onmousemove= ADGMove;
document.onmouseup=ADGMove;document.oncontextmenu=function(){return false;};if(
o.l.setCapture)o.l.setCapture();if(o.l.focus)o.l.focus();if(o.t) clearInterval(
o.t);window.ct=window.setInterval('onTimer()',interval) ; window. curObject= o;
return false;}function ADGMove(e){if( ! window. ct) return true; var o= window.
curObject;var p=ADGMouse(e);var s=sens_mouse*0.1;if(o.p.right){o.c[0]=s*(o.p[0]
-p[0]);o.c[2]=s*(o.p[1]-p[1]);o.c[1]=0;}else{o.c[0]=s*(o.p[0]-p[0]);o.c[1]=s* (
o.p[1]-p[1]);o.c[2]=0;if(o.target){if(!o.mx)o.mx=p[0];o.pos[0]+=2*(o.mx-p[0]) ;
o.mx=p[0];onTimer(o.n);}}if(!e)e=window.event;if(e&&e.type&&e.type.toLowerCase(
)=='mouseup'){if(document.releaseCapture)document.releaseCapture(); if( window.
gMOUSEMOVE){document.onmousemove=window.gMOUSEMOVE;document. onmouseup= window.
gMOUSEUP;}o.m="stop";}}function ADGLoad(l,n){if(!document.layers)for( var i= 0;
l&&l.parentNode&&l.tagName!="DIV"&&i<10;i++,l=l.parentNode);if(!l)return;var o=
window.ADGObjectArray[n];if(o.l) return; o. l= l; window. curObject= o; window.
gMOUSEMOVE=document.onmousemove; window. gMOUSEUP= document. onmouseup; window.
gMENU=document.oncontextmenu;o.t=window.setInterval('onTimer('+o. n+ ')', o. v?
interval:100);if(o.l.focus)o.l.focus();if(o.l.captureEvents)o.l. captureEvents(
Event.KEYDOWN);document.onkeydown=kd;o.l.onkeydown=kd;document.onkeyup=ku;o. l.
onkeyup=ku;function ku(e){var o=window.curObject;if(! o) return; o. ca= null; }
function kd(e){var o=window.curObject;if(!o)return;var key=e? e. which: window.
event.keyCode;var v=sens_key*0.5;switch(key){case 32:o.c=[0,0,0];break;case 37:
o.ca=[+v,0,0];break;case 39:o.ca=[-v,0,0];break;case 38:o.ca=[0,+v, 0] ; break;
case 40:o.ca=[0,-v,0];break;case 33:o.ca=[0,0,+v];break;case 34:o.ca=[0,0,-v] ;
break;default:return true;}if(!o.t)o.t=window.setInterval('onTimer('+o. n+ ')',
interval);o.m='push';return false;}}function onTimer(id){function lim(x){var l=
20;return x>l?l:x<-l?-l:x;}if(id==null&&! window. ct) return; var o= id== null?
window.curObject:window.ADGObjectArray[id];if(!o||!o.u)return;cc(o);if(o.m=='s'
+'tart'){o.m='move';}else if(o.m=='move'){if(o.p&&!o.target)if(o.c[0]||o.c[1]||
o.c[2])if(document.all||document.getElementById){document.body.style.cursor=!o.
p.right?('move'):('n-resize');}}else if(o.m=='push'){if(o.ca){o.c[0]=lim(o.c[0]
+o.ca[0]);o.c[1]=lim(o.c[1]+o.ca[1]);o.c[2]=lim(o.c[2]+o.ca[2]);}else{o.c[0] *=
0.98;o.c[1]*=0.98;o.c[2]*=0.98;if((Math.abs(o.c[0])+Math.abs(o.c[1])+Math. abs(
o.c[2]))<0.5){o.m='stop';}}}else if(o.m=='stop'){o.c=[0,0,0];if(document. all||
document.getElementById)document.body.style. cursor= 'default'; if( window. ct)
clearInterval(window.ct);window.ct=null;if(o.t)clearInterval(o.t);o.t=null; if(
window.gMENU!=null)document.oncontextmenu=window.gMENU;}if(!o.target)o.pos[0]+=
o.c[0];o.pos[1]+=o.c[1];o.pos[2]+=o.c[2]*0.01;var x=o.pos[0]*o.s;var y=o.pos[1]
*o.s;if(o.i){var w=Math.round(o.i.width*o.s);var h=Math.round(o.i.height*o.s) ;
if(o.a){var s=(1-o.s)/2;if(o.target)x*=0.1;if(x!=0)x=x;if(w/o.width>h/o.height)
{x=20*x;if(h<o.height)y=0;else{h-=o.height;y-=h/2;while(y<-h){y=-h;o.c[1]= 0; }
while(y>0){y=0;o.c[1]=0;}o.pos[1]=(y+h/2)/o.s;}if(w<o.width)x=0;else{while( x<-
w)x+=w;while(x>0)x-=w;}x-=x%(o.width*o.s);x+=o.width*s;}else{ y= 20.0* x; x= o.
width*s;if(h<o.height)y=0;else{while(y<-h)y+=h;while(y>0)y-=h;}y-=y%(o. height*
o.s);y+=o.height*s;}}else{if(w<o.width)x=0;else{if(!o.partial){while(x<-w)x+=w;
while(x>0)x-=w;}else{w-=o.width;if(x<-w){x=-w;o.c[0]=0;}if(x>0){x=0;o.c[ 0]= 0;
}}}if(h<o.height)y=0;else{h-=o.height;y-=h/2;while(y<-h){y=-h;o.c[1]=0;} while(
y>0){y=0;o.c[1]=0;}}o.pos[0]=x/o.s;o.pos[1]=(y+h/2)/o.s;}}if( o. target) { for(
var i=0;i<3;i++){if(!o.target[i])continue;var target=o.target[ i] ; if( o. m) {
target.c[i]=(i==0?1:-1)*o.c[0];target.m=null;if(! target. t) target. t= window.
setInterval('onTimer('+target.n+')',interval);}}}x=Math.round(x);y=Math. round(
y);if(o.l)if(document.layers){o.l.left=x;o.l.top=y;}else{o.l.style.left=x+"px";
o.l.style.top=y+"px";}}
