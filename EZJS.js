var h = window.innerHeight;
var w = window.innerWidth;
var w2 = w;
if(h > w){
 w = h;   
 h = w2;
}

function ge(ename){
return document.getElementById(ename);
}

function display(ename,displayState){
ge(ename).style.display=displayState;
}

function background(r,g,b){
document.body.style.backgroundColor="rgb(" + r + "," + g + "," + b + ")";
}

//animation
function startAnim(id){
ge(id).style.webkitAnimationPlayState="running";
ge(id).style.animationPlayState="running";
}

function stopAnim(id){
ge(id).style.webkitAnimationPlayState="pause";
ge(id).style.animationPlayState="pause";
}

//append elements to body
function appendScript(jsCode){
var script = document.createElement("SCRIPT");
var js = document.createTextNode(jsCode);
script.appendChild(js);
document.body.appendChild(script);
}

function appendStyle(cssCode){
var style = document.createElement("STYLE");
var css = document.createTextNode(cssCode);
style.appendChild(css);
document.body.appendChild(style);
}

function makeElement(tagname,text,attrVar){
    tagname = tagname.toUpperCase();
    if(text == ""){
       var textCode = "document.body.appendChild(" + attrVar + ");";
    }
    else{
        var textCode = "var tNode = document.createTextNode('" + text + "'); " + attrVar + ".appendChild(tNode); document.body.appendChild(" + attrVar + ");" ;
    }
appendScript("var " + attrVar + " = document.createElement('" + tagname + "');" + textCode + "");
}

function createAnimationById(id,duration,animateName,cssCode){
var style = document.createElement("STYLE");
var css = document.createTextNode("#" + id + "{webkit-animation:" + animateName + " " + duration + "s" + ";" + "animation:" + animateName + " " + duration + "s" + ";" + "}" + "@webkit-keyframes " + animateName + "{" + cssCode + ";" + "@keyframes " + animateName + "{" + cssCode + ";");
style.appendChild(css);
document.body.appendChild(style);
}

//Math
//methods
function pow(num1,num2){
return Math.pow(num1,num2);
}

function random(){
return Math.random();
}

function round(num){
return Math.round(num);
}

function ceil(num){
return Math.ceil(num);
}

function floor(num){
return Math.floor(num);
}

function abs(x){
return Math.abs(x);
}

function acos(x){
return Math.acos(x);
}

function asin(x){
return Math.asin(x);
}

function atan(x){
return Math.atan(x);
}

function atan2(y,x){
return Math.atan2(y,x);
}

function exp(x){
return Math.exp(x);
}

function log(x){
return Math.log(x);
}

function sin(x){
return Math.sin(x);
}

function sqrt(x){
return Math.sqrt(x);
}

function tan(x){
return Math.tan(x);
}


//constants
var PI = Math.PI;

var E = Math.E;

var SQRT2 = Math.SQRT2;


var SQRT1_2 = Math.SQRT1_2;


var LN2 = Math.LN2;


var LN10 = Math.LN10;


var LOG2E = Math.LOG2E;


var LOG10E = Math.LOG10E;


function print(x){
    makeElement("a",x,"a");
    a.setAttribute("id", "print");
    a.setAttribute("style", "font-family:'Arial'; color:green;");
    
}