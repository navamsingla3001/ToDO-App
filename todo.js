var inputItem=document.getElementById("input");
inputItem.onkeyup=function(e){
    if(e.keyCode==13){
    addValue();
    }
}
function addValue(){
    var item=document.querySelector("#input").value;
    var ul=document.querySelector("#list");
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    document.querySelector("#input").value="";

    li.onclick=function(e){
        var ul=document.querySelector("#list");
        ul.removeChild(e.target);
    }
}
