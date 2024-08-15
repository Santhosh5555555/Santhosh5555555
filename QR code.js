let form = document.querySelector("#frm");
let loading = document.querySelector("#loading");
let saveBtn = document.querySelector(".btnSave");
let qrcodeElement = document.querySelector("#qrcode");

function genQR(e){
       e.preventDefault();
       let url = document.querySelector("#url").value;
       let size = document.querySelector("#size").value;
       let colorBlack = document.querySelector("#colorDark").value;
       let colorWhite = document.querySelector("#colorLight").value;
       
     if(url === ""){
         alert("Please Enter URL");
     }
     else{         
         loading.style.display ="flex";
         qrcodeElement.innerHTML = "";
         
         setTimeout(()=>{
             loading.style.display = "none";
             
             const qrcode=new QRCode('qrcode',{
          text: url,
          width: size,
	        height: size,
          colorDark : colorBlack,
	        colorLight : colorWhite,
          correctLevel : QRCode.CorrectLevel.H
        });                       
     },1000)
     savePic();
   
     
   }    
}

function savePic(){
let imgSrc = qrcodeElement.querySelector('img').src;
      console.log(imgSrc);
      saveBtn.href = imgSrc;
      }
      
saveBtn.addEventListener("click",save)

function save(){
    setTimeout(()=>{  
        saveBtn.download = 'qrcode';
    },200)
}
form.addEventListener("submit",genQR); 
       
