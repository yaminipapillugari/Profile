function ajax(file,callback){
  var obj=new XMLHttpRequest();
  obj.overrideMimeType("application/json");
  obj.open("GET",file,true);
  obj.onreadystatechange=function(){
    if(obj.readyState===4 && obj.status=="200"){
      callback(obj.responseText);
    }
  }
  obj.send(null);
}
ajax("data1.json",function (x) {
  var data0=JSON.parse(x);
  // console.log(data);
  detail(data0.details);
  objec(data0.object);
  objec1(data0.object1);


});

var dat=document.querySelector(".a");
function detail(details1) {
  let image=document.createElement("img");
  image.src="img/download.png";
  dat.appendChild(image);
  dat.appendChild(document.createElement("hr"));

  let jav1=document.createElement("h2");
   jav1.textContent=details1.name;
   dat.appendChild(jav1);

   let jav2=document.createElement("h2");
    jav2.textContent=details1.address;
    dat.appendChild(jav2);
}
 var da=document.querySelector(".b");
  function objec(v) {
    let jav11=document.createElement("h1");
    jav11.textContent=v.obj1;
    da.appendChild(jav11);
    da.appendChild(document.createElement("hr"));

    let jav12=document.createElement("li");
    jav12.textContent=v.obj2;
    da.appendChild(jav12);

    let jav13=document.createElement("li");
    jav13.textContent=v.obj3;
    da.appendChild(jav13);

    let jav14=document.createElement("li");
    jav14.textContent=v.obj4;
    da.appendChild(jav14);
  }
var da1=document.querySelector(".b");
function objec1(v1) {
  let jav111=document.createElement("h1");
   jav111.textContent=v1.obj1;
   da1.appendChild(jav111);
   da1.appendChild(document.createElement("hr"));

  let jav112=document.createElement("p");
   jav112.textContent=v1.obj2;
   da1.appendChild(jav112);

  let jav113=document.createElement("h1");
    jav113.textContent=v1.obj3;
    da1.appendChild(jav113);
    da1.appendChild(document.createElement("hr"));

  let jav114=document.createElement("p");
    jav114.textContent=v1.obj4;
    da1.appendChild(jav114);

  let jav115=document.createElement("h1");
     jav115.textContent=v1.obj5;
     da1.appendChild(jav115);
     da1.appendChild(document.createElement("hr"));

  let jav116=document.createElement("p");
     jav116.textContent=v1.obj6;
     da1.appendChild(jav116);

  let jav117=document.createElement("h1");
     jav117.textContent=v1.obj7;
     da1.appendChild(jav117);
     da1.appendChild(document.createElement("hr"));

  let jav118=document.createElement("p");
     jav118.textContent=v1.obj8;
     da1.appendChild(jav118);
}
