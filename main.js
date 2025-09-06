// get category data from API
const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await response.json();
  displayCategory(data.categories);
};

const displayCategory = (data) => {
  const categoryContainer = document.getElementById("category-container");
  data.forEach((d) => {
    console.log(d.category_name);
    categoryContainer.innerHTML += `<div class="rounded-md hover:bg-green-700 hover:text-white py-2 pl-2">
              <p>${d.category_name}</p>
            </div>`;
  });
};

loadCategory();
// Add event listener to the container and delegate to the category  buttons
