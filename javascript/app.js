//var menuitems=document.getElementById("menuitem");
//menuitems.style.maxHeight="0px";
//function menutoggle() {
//                   if (menuitems.style.maxHeight="0px") {
//                    menuitems.style.maxHeight="200px"
//                   } 
//                   else{
//                    menuitems.style.maxHeight="0px"
//                   }
//}

const menuitems=document.querySelector("#menuitems");

menuitems.style.width="0px";
document.getElementById("menuicon").addEventListener("click",ano)
function ano(){
          if (menuitems.style.maxHeight="0px") {
                    menuitems.style.maxHeight="200px"
          } 
          else{
                    menuitems.style.maxHeight="0px"
          }
}
