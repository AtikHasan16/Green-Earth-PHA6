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
  //   console.log(data);

  const categoryContainer = document.getElementById("category-container");
  document.getElementById("all-trees").classList.add("select-btn");
  data.forEach((d) => {
    // console.log(d);

    categoryContainer.innerHTML += `<div id="cat-btn-${d.id}" onclick="loadCard(${d.id})" 
    class=" category rounded-md hover:bg-green-700 hover:text-white py-2 pl-2 mb-2 hover:transition-colors duration-200">
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
  const removeBtn = document.querySelectorAll(".category");
  removeBtn.forEach((element) => {
    element.classList.remove("select-btn");
    document.getElementById("all-trees").classList.add("select-btn");
  });
};
loadAllTrees();
/**should get hint for this: how to short */
// display all plants by clicking all trees
const displayAllTrees = (data) => {
  //   console.log(data);
  const allTrees = document.getElementById("card-container");
  allTrees.innerHTML = "";
  data.forEach((element) => {
    // console.log(element);

    allTrees.innerHTML += `
    <div class="card bg-white p-4 rounded-xl space-y-2 h-[380px]">
            <figure class="h-[185px] rounded-xl">
              <img
                class="bg-cover"
                src="${element.image}"
              />
            </figure>

            <h2 onclick="openModal(${element.id})" class="text-[14px] font-semibold">${element.name}</h2>
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

            <button onclick="addToCard(${element.id})" id="add-btn-${element.id}" class="btn btn-block rounded-full bg-green-700 text-white">
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

  const removeBtn = document.querySelectorAll(".category");
  removeBtn.forEach((element) => {
    element.classList.remove("select-btn");
  });
  //   console.log(removeBtn);
  const selectBtn = document.getElementById(`cat-btn-${id}`);
  selectBtn.classList.add("select-btn");
};

// displaying card section by category
const displayCards = (data) => {
  let cardContainer = document.getElementById("card-container");
  const allTrees = document.getElementById("card-container");

  allTrees.innerHTML = "";
  cardContainer.innerHTML = "";
  data.forEach((element) => {
    console.log(element);

    cardContainer.innerHTML += `
    <div class="card bg-white p-4 rounded-xl space-y-2 h-[380px]">
            <figure class="h-[185px] rounded-xl">
              <img
                class="bg-cover"
                src="${element.image}"
              />
            </figure>

            <h2 onclick="openModal(${element.id})" class="text-[14px] font-semibold">${element.name}</h2>
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

            <button onclick="addToCard(${element.id})" id="add-btn-${element.id}" class="btn add-button btn-block rounded-full bg-green-700 text-white">
              Add to Cart
            </button>
          </div>
    
    `;
  });
};

const addToCard = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/plant/${id}`
  );
  const data = await response.json();
  displayAddToCart(data.plants);
};

const displayAddToCart = (data) => {
  const addCartContainer = document.getElementById("add-card-container");
  let totalCount = document.getElementById("total-count");
  let totalAmount = Number(totalCount.innerText);
  addCartContainer.innerHTML += `
    <div id="cart-${data.id}"
              class="bg-green-50 h-[64px] rounded-lg p-2 flex justify-between items-center mb-2"
            >
              <div class="mb-2">
                <h1 class="text-[14px] font-semibold">${data.name}</h1>
                <p class="text-gray-500"><span id="price-count-${data.id}">${data.price}</span></p>
              </div>
              <button id="hide-cart-${data.id}" onclick="removeCart(this, ${data.id})" class="btn btn-ghost p-0 text-2xl text-gray-500">
                <i class="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
    `;
  document.getElementById("total-count").innerText = totalAmount + data.price;
};

const removeCart = (buttonElement, id) => {
  const cartDiv = buttonElement.parentElement;
  cartDiv.style.display = "none";

  let totalCount = document.getElementById("total-count");
  let totalAmount = Number(totalCount.innerText);
  console.log(totalAmount);

  const cartId = document.getElementById(`price-count-${id}`);
  const cartPrice = Number(cartId.innerText);
  console.log(cartPrice);

  document.getElementById("total-count").innerText = totalAmount - cartPrice;
};

const openModal = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/plant/${id}`
  );
  const data = await response.json();
  displayModal(data.plants);
};

const displayModal = (data) => {
  console.log(data);

  const modalBox = document.getElementById("my_modal_5");
  modalBox.innerHTML = "";
  console.log(modalBox);

  modalBox.innerHTML += `
<div class="modal-box">
        <h3 class="text-2xl text-center font-bold mb-3">${data.name}</h3>
        <div class="flex justify-center items-center gap-4">
        <figure class="rounded-2xl flex-1/2">
          <img class="rounded-xl" src="${data.image}" alt="" />
        </figure>
        <div class="flex-1/2">
        <p class="font-semibold pt-4 text-xl">Category: ${data.category}</p>
        <p class="py-2 text-lg font-semibold">Price: <i class="fa-solid fa-bangladeshi-taka-sign"></i>${data.price}</p>
        <p class="">
          <span class="font-bold">Description:</span> ${data.description}
        </p>
        </div>
        
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn rounded-lg bg-green-700 text-white">
              Close
            </button>
          </form>
        </div>
      </div>

`;

  my_modal_5.showModal();
};
