const webTypeBtns= document.querySelectorAll('.website-buttons button');
const brandButtons=document.querySelectorAll('.branding-buttons button');

const additionalBtns=document.querySelectorAll('.additional-buttons button');

let webtypeText=document.querySelector('.websyte-type');
let lastPrice = document.querySelector('.last-price');
let lastHour=document.querySelector('.last-hours');

let brandList=document.querySelector('.brand-list');

let addList=document.querySelector('.add-list');

let startPrice =100;
let startHours=3;

lastPrice.innerText=`$ ${startPrice}`;
lastHour.innerText=`${startHours} HOUR`;

let booleanbrand=false

let brandMassive=[];

let additionalMassive=[];


const webTypes= [
    {
        id:1,
        name: 'Corporate',
        price: 100,
        hours: 3,
    },
    {
        id:2,
        name: 'Portfolio',
        price: 50,
        hours: 2,
    },
    {
        id:3,
        name: 'News',
        price: 150,
        hours: 4,
    },
    {
        id:4,
        name: 'E-commerce',
        price: 100,
        hours: 3,
    },
    {
        id:5,
        name: 'Booking',
        price: 200,
        hours: 4.3,
    },
    {
        id:6,
        name: 'Social media',
        price: 300,
        hours: 5,
    },
]


const brandTypes=[
    {
        id:1,
        name: 'Industry analysis',
        price: 100,
        hours: 3,
    },
    {
        id:2,
        name: 'Business Positioning',
        price: 50,
        hours: 1,
    },
    {
        id:3,
        name: 'Consumer insights',
        price: 150,
        hours: 3.5,
    },
    {
        id:4,
        name: 'Brand strategy',
        price: 100,
        hours: 2,
    },
    {
        id:5,
        name: 'Visual identify',
        price: 200,
        hours: 4,
    },
]

const additionalTypes=[
    {
        id:1,
        name: 'Payments',
        price: 150,
        hours: 2,
    },
    {
        id:2,
        name: 'Reservations',
        price: 50,
        hours: 0.5,
    },
    {
        id:3,
        name: 'Blog',
        price: 100,
        hours: 1,
    },
    {
        id:4,
        name: 'User profiles',
        price: 80,
        hours: 0.8,
    },
    {
        id:5,
        name: 'Contact forms',
        price: 700,
        hours: 6,
    }, {
        id:6,
        name: 'Live chat',
        price: 200,
        hours: 2.3,
    },
    {
        id:7,
        name: 'File uploads',
        price: 50,
        hours: 0.5,
    },
    {
        id:8,
        name: 'Forum',
        price: 90,
        hours: 0.9,
    },
    {
        id:9,
        name: 'Mobile-Responsive',
        price: 80,
        hours: 0.8,
    },
    {
        id: 10,
        name: 'Multilanguage',
        price: 110,
        hours: 2.1,
    }, {
        id: 11,
        name: 'Custom cms',
        price: 160,
        hours: 2.6,
    },
]




    webTypeBtns.forEach((webtypebtn,index)=>{
        webtypebtn.addEventListener('click', ()=>{
            
            document.querySelector('.webtypeaddHandler').classList.remove('webtypeaddHandler');
            webtypebtn.classList.add('webtypeaddHandler');
            webtypeText.textContent=webTypes[index].name;
    
            startPrice=webTypes[index].price;
            startHours=webTypes[index].hours;
            
            lastPrice.innerText=`$ ${startPrice}`;
            lastHour.innerText=`${startHours} HOUR`;
        })
    })
    
 
    
    brandButtons.forEach((brandbutton,index)=>{
    
        brandbutton.addEventListener('click',()=>{
            
            brandbutton.classList.toggle('brandaddHandler');
    
    
            let liststyle =brandbutton.classList.contains('brandaddHandler');

            if(liststyle){
               brandMassive.push(brandTypes[index]);
                startPrice+=brandTypes[index].price;
                startHours+=brandTypes[index].hours;
            } else{
                brandMassive=brandMassive.filter(item=> item.id!==brandTypes[index].id)
                startPrice-=brandTypes[index].price;
                startHours-=brandTypes[index].hours;
            }

           let brandChild=brandMassive.map((item)=>{
            let list = document.createElement('li');
            list.textContent = item.name;
            return list.outerHTML;
           })
       
           console.log(brandChild)
           
           lastPrice.innerText=`$ ${startPrice}`;
           lastHour.innerText=`${startHours.toFixed(2)} HOUR`;

            brandList.innerHTML= brandChild;
        
    
        })
        
    })
    
    additionalBtns.forEach((additionalBtn,index)=>{
        additionalBtn.addEventListener('click',()=>{
            additionalBtn.classList.toggle('additionalHandler');
            let listStyle=additionalBtn.classList.contains('additionalHandler');

            if(listStyle){
                additionalMassive.push(additionalTypes[index]);
                startPrice+=additionalTypes[index].price;
                startHours+=additionalTypes[index].hours;
            } else{
                additionalMassive=additionalMassive.filter(item=>item.id!==additionalTypes[index].id);
                startPrice-=additionalTypes[index].price;
                startHours-=additionalTypes[index].hours;
            }

            let additionChild=additionalMassive.map(item=>{
                let list = document.createElement('li');
                list.textContent=item.name;
                return list.outerHTML;
            })

            lastPrice.innerText=`$ ${startPrice}`;
            lastHour.innerText=`${startHours.toFixed(2)} HOUR`;

            addList.innerHTML=additionChild;

        })
    })


