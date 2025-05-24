const categories =()=> {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then ((res) => res.json())
    .then ((data)=> loadCategories(data.categories))
}

const loadCategories=(data)=>
{
    
   const PetButtonDiv= document.getElementById("allCategories")
   data.forEach(element => {
   
    const CategoryButtons= document.createElement('div')
    CategoryButtons.innerHTML=`
    
    <div class="border-1 border-stone-500 rounded-lg" onclick=categoryCliked('${element?.category}') >
    <div class="py-3 px-5 lg:py-3 lg:px-10  flex gap-2 justify-center items-center">
       
    <div>
     <img src=${element?.category_icon} alt="" class="w-10 h-10 ">
    </div>
    <div>
    <p class="text-xl font-bold">${element?.category}</p>
    </div>

    </div>


    </div>
    
    `
    PetButtonDiv.appendChild(CategoryButtons)
   });
 


}

const categoryCliked =(data)=>
{
 console.log(data)
}
categories()