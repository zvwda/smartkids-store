var sliderimg= Array.from(document.querySelectorAll(".slidercontaner img")) ;
var currentslide = 1 ;
var next =document.getElementById("next");
var prev =document.getElementById("prev");
next.onclick=nextslide ; 
prev.onclick=prevslide ; 
var ulelement=document.createElement("ul");
ulelement.setAttribute("id" , "ulname") ;
for(var i=1 ; i<=4 ; i++){
    var ulitem =document.createElement("li");
    ulitem.setAttribute("data-index" , i);


    ulitem.appendChild(document.createTextNode(i));
    ulelement.appendChild(ulitem);
}

document.getElementById("num").appendChild(ulelement);


var createdul= document.getElementById("ulname");


var ulpullets = Array.from(document.querySelectorAll("#ulname li"));


for(var i=0 ; i<4 ; i++){
      ulpullets[i].onclick=function() {
        currentslide= parseInt(this.getAttribute("data-index"));
               check();
      }


}


Check();

 function prevslide(){
if(!prev.classList.contains("disable")){
    currentslide--;
    check();
}
 }
 function nextslide(){
 if(!next.classList.contains("disable")){
    currentslide++;
    check();
 }
}
  
 function check(){
    removeactive();
    sliderimg[currentslide-1].classList.add("active");

    createdul.children[currentslide-1].classList.add("active");

    if(currentslide==1){
        prev.classList.add("disable");
    }
    else{
        prev.classList.remove("disable");
        }
        if(currentslide==4){
            next.classList.add("disable");
        }
        else{
            next.classList.remove("disable");
            }




 




 }


 function removeactive(){
    sliderimg.forEach(function(img)
    {
             img.classList.remove("active");
      }
    )
    ulpullets.forEach(function(ul)
    {
             ul.classList.remove("active");
      }
    )
 }

console.log("jk.fvefjklbekljbewjen;")

