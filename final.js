
function useImg(){
    currImg=document.querySelectorAll(".f img")
    for (let i = 0; i <currImg.length; i++) {
        console.log("Image"+ i);
        currImg[i].setAttribute("tabindex","0");
        currImg[i].setAttribute("onfocus","upDate(this)");
        currImg[i].setAttribute("onblur","unDo()");
    }
}

function upDate(previewPic){

    var image = previewPic.src;
    document.getElementById("image").style.backgroundImage = "url('" + image +"')";
     
    var text = previewPic.alt;
    document.getElementById("image").innerHTML = text;
     
    }
   
function unDo(){

    document.getElementById("image").style.backgroundImage = "url('" + null +"')";
       
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
           
    }


