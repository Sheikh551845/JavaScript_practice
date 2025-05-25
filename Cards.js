const cards=(pet)=>
{
    

    singleCard=`     
<div class="card bg-base-100 max-w-fit shadow-sm">
<div class="p-2">
  <figure>
    <img
      src='${pet?.image}'
      alt="" / class="w-[250px] h-[150px] rounded-t-2xl">
  </figure>
  <div class="">
    <h2 class="text-2xl font-bold">
      ${pet?.pet_name}
      
    </h2>

    <div class="flex justify-start items-center gap-1 mt-1">
    <div>
    <svg class=" w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/></svg>
    </div>
    <div> 
     <p>Breed:${pet?.breed? pet.breed : "No Information"}</p>
    </div>
    </div>

   <div class="flex justify-start items-center gap-1 mt-1">
    <div>
    <svg class=" w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM416 192L32 192l0 256c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32z"/></svg>
    </div>
    <div> 
     <p>Birth: ${pet?.date_of_birth? pet.date_of_birth.split("-")[0] : "No Information" }</p>
    </div>
    </div>

  <div class="flex justify-start items-center gap-1 mt-1">
    <div>
   <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M72.1 7C85.8-4 106-1.8 117 12c17.6 22 44.7 36 75 36s57.3-14 75-36c11.1-13.8 31.2-16 45-5s16 31.2 5 45c-7.8 9.7-16.6 18.4-26.4 26.1C337.3 109.7 368 163.3 368 224c0 89.1-66.2 162.7-152 174.4l0 25.6 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-25.6C82.2 386.7 16 313.1 16 224c0-60.7 30.7-114.3 77.5-145.9C83.7 70.5 74.9 61.7 67.1 52c-11.1-13.8-8.8-33.9 5-45zM80 224a112 112 0 1 0 224 0A112 112 0 1 0 80 224z"/></svg>
    </div>
    <div> 
     <p>Gender: ${pet?.gender? pet.gender : "No Information" }</p>
    </div>
    </div>

    <div class="flex justify-start items-center gap-1 mt-1">
    <div>
   <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"/></svg>
    </div>
    <div> 
     <p>Price: ${pet?.price? `${pet.price}$` : "No Information" }</p>
    </div>
    </div>
<hr class="my-4 border-t-2 border-gray-300" />
    <div class="card-actions justify-between items-center mb-3">
    <button class="btn border-1 border-blue-400 rounded-xl "><svg class=" text-xl font-bold text-black w-4 h-4"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"/></svg></button>
      <button class=" border-1 border-blue-400 rounded-xl  font-bold text-green-500 p-2">Adopt</button>
      <button class=" border-1 border-blue-400 rounded-xl  font-bold  text-green-500 p-2">Details</button>
    </div>
  </div>
  </div>
</div>
    `
    return singleCard
}