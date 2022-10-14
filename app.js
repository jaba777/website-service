let webTypeBtns= document.querySelectorAll('.website-buttons button');
let brandButtons=document.querySelectorAll('.branding-buttons button');

let webtypeText=document.querySelector('.websyte-type');
let lastPrice = document.querySelector('.last-price');

let brandList=document.querySelector('.brand-list');

let startPrice =100;

let booleanbrand=false

let brandMassive=[];


const webTypes= [
    {
        id:1,
        name: 'Corporate',
        price: 100,
    },
    {
        id:2,
        name: 'Portfolio',
        price: 50,
    },
    {
        id:3,
        name: 'News',
        price: 150,
    },
    {
        id:4,
        name: 'E-commerce',
        price: 100,
    },
    {
        id:5,
        name: 'Booking',
        price: 200,
    },
    {
        id:6,
        name: 'Social media',
        price: 300,
    },
]


const brandTypes=[
    {
        id:1,
        name: 'Industry analysis',
        price: 100,
    },
    {
        id:2,
        name: 'Business Positioning',
        price: 50,
    },
    {
        id:3,
        name: 'Consumer insights',
        price: 150,
    },
    {
        id:4,
        name: 'Brand strategy',
        price: 100,
    },
    {
        id:5,
        name: 'Visual identify',
        price: 200,
    },
]




    webTypeBtns.forEach((webtypebtn,index)=>{
        webtypebtn.addEventListener('click', ()=>{
            
            document.querySelector('.webtypeaddHandler').classList.remove('webtypeaddHandler');
            webtypebtn.classList.add('webtypeaddHandler');
            webtypeText.textContent=webTypes[index].name;
    
            startPrice=webTypes[index].price;
            //console.log(startPrice)
            lastPrice.innerText=`$ ${startPrice}`;
        })
    })
    
    
    brandButtons.forEach((brandbutton,index)=>{
    
        brandbutton.addEventListener('click',()=>{
            
            brandbutton.classList.toggle('brandaddHandler');
    
    
            let liststyle =brandbutton.classList.contains('brandaddHandler');

            if(liststyle){
               brandMassive.push(brandTypes[index]);
    
            } else{
                brandMassive=brandMassive.filter(item=> item.id!==brandTypes[index].id)
               // console.log(brandMassive)
              // brandList.remove(brandMassive[index].name)
            }

           brandMassive.forEach((item)=>{
            brandList.innerHTML=`
                <li>${item.name}</li>
            `
           })
           

           
        })
        
    })
    
   
    




