let button=document.getElementById("btnCift");
let sonuc=document.getElementById("sonuc");

button.addEventListener("click", ()=>{
    for(let i=1; i<=50; i++){
        if(i%2==0){
            document.write(i+"<br>");
        }
    }
});
