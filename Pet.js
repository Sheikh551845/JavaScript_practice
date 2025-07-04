const LoadCategoriesButtons = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => ShowCategoriesButton(data.categories))
}

const LoadAllCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => ShowAllCategories(data.pets))
}

const ShowCategoriesButton = (data) => {

    const PetButtonDiv = document.getElementById("allCategories")
    data.forEach(element => {

        const CategoryButtons = document.createElement('div')
        CategoryButtons.innerHTML = `
    
    <div class="border-1 border-stone-500 rounded-lg" onclick=CategoryButtonCliked('${element?.category}') >
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

const ShowAllCategories = (pets) => {

    const cardContainer = document.getElementById("CardContainer")
     
    cardContainer.innerHTML = ""

    if (pets?.length == 0) {
      cardContainer.classList=""
       
        const singleCard = document.createElement('div')

        singleCard.innerHTML = NoResult()
        cardContainer.appendChild(singleCard)
    }


    pets?.forEach(element => {
 cardContainer.classList="grid grid-cols-1 lg:grid-cols-3 gap-2 place-items-center"
        const singleCard = document.createElement('div')

        singleCard.innerHTML = cards(element)

        cardContainer.appendChild(singleCard)



    })

}

const LoadAllCategoryById = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then((res) => res.json())
        .then((data) => ShowAllCategories(data.data))
}

//Pet liked
const PetLiked = (photo) => {
  const LikedContainer = document.getElementById("Liked");
  const LikedPhoto = document.createElement('div');


  LikedPhoto.innerHTML = `
    <div>
      <img src='${photo}' alt="" class="w-32 h-32 object-cover rounded" />
    </div>
  `;

  LikedContainer.appendChild(LikedPhoto); 
};


const CategoryButtonCliked = (data) => {
    LoadAllCategoryById(data)
}
LoadCategoriesButtons()
LoadAllCategories()

