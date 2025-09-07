// get category data from API
const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await response.json();
  displayCategory(data.categories);
};
// displaying category section
const displayCategory = (data) => {
  const categoryContainer = document.getElementById("category-container");
  data.forEach((d) => {
    // console.log(d.id);
    categoryContainer.innerHTML += `<div id="cat-btn-${d.id}" onclick="loadCard(${d.id})" 
    class="rounded-md hover:bg-green-700 hover:text-white py-2 pl-2">
              <p>${d.category_name}</p>
            </div>`;
  });
};
loadCategory();

// get all cards for all trees
const loadAllTrees = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/plants"
  );
  const data = await response.json();
  displayAllTrees(data.plants);
};
loadAllTrees();
/**should get hint for this: how to short */
// display all plants by clicking all trees
const displayAllTrees = (data) => {
  console.log(data);
  const allTrees = document.getElementById("card-container");
  allTrees.innerHTML = "";
  data.forEach((element) => {
    allTrees.innerHTML += `
    <div class="card bg-white p-4 rounded-xl space-y-2 h-[380px]">
            <figure class="h-[185px] rounded-xl">
              <img
                class="bg-cover"
                src="${element.image}"
              />
            </figure>

            <h2 class="text-[14px] font-semibold">${element.name}</h2>
            <p class="text-xs">
              ${element.description}
            </p>
            <div class="flex justify-between items-center mb-4">
              <div
                class="py-2 px-3 bg-green-100 rounded-2xl text-green-700 text-[14px]"
              >
                ${element.category}
              </div>
              <p class="font-semibold text-right text-[14px]"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${element.price}</p>
            </div>

            <button id="add-btn-${element.id}" class="btn btn-block rounded-full bg-green-700 text-white">
              Add to Cart
            </button>
          </div>
    `;
  });
};

// get card details from API by clicking category
const loadCard = async (id) => {
  //   console.log(id);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/category/${id}`
  );
  const data = await response.json();
  displayCards(data.plants);
  console.log(data.plants);
};
// category: "Flowering Tree";
// description: "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.";
// id: 4;
// image: "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg";
// name: "Gulmohar";
// price: 400;

// displaying card section by category
const displayCards = (data) => {
  let cardContainer = document.getElementById("card-container");
  const allTrees = document.getElementById("card-container");
  allTrees.innerHTML = "";
  cardContainer.innerHTML = "";
  data.forEach((element) => {
    cardContainer.innerHTML += `
    <div class="card bg-white p-4 rounded-xl space-y-2 h-[380px]">
            <figure class="h-[185px] rounded-xl">
              <img
                class="bg-cover"
                src="${element.image}"
              />
            </figure>

            <h2 class="text-[14px] font-semibold">${element.name}</h2>
            <p class="text-xs">
              ${element.description}
            </p>
            <div class="flex justify-between items-center mb-4">
              <div
                class="py-2 px-3 bg-green-100 rounded-2xl text-green-700 text-[14px]"
              >
                ${element.category}
              </div>
              <p class="font-semibold text-right text-[14px]"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${element.price}</p>
            </div>

            <button id="add-btn-${element.id}" class="btn btn-block rounded-full bg-green-700 text-white">
              Add to Cart
            </button>
          </div>
    
    `;
  });
};
