let webTypeBtns= document.querySelectorAll('.website-buttons button');

let startPrice =0;


webTypeBtns.forEach((webtypebtn,index)=>{
    webtypebtn.addEventListener('click', ()=>{
        document.querySelector('.webtypeaddHandler').classList.remove('webtypeaddHandler');
        webtypebtn.classList.add('webtypeaddHandler');
        
    })
})