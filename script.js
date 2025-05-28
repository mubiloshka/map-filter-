const products = [
  {
    name: "Mars rug",
    price: 100,
    quantity: 24,
    image: "image 10.png",
  },
  {
    name: "Keyboard sticker",
    price: 49,
    quantity: 11,
    image: "image 10.png",
  },
  {
    name: "Smart watch",
    price: 899,
    quantity: 4,
    image: "image 23.png",
  },
  {
    name: "Wireless keyboard",
    price: 350,
    quantity: 0,
    image: "image 6.png",
  },
  {
    name: "Mouse",
    price: 359,
    quantity: 24,
    image: "",
  },
  {
    name: "AirPods",
    price: 499,
    quantity: 11,
    image: "",
  },
  {
    name: "Powerbank",
    price: 899,
    quantity: 7,
    image: "",
  }
];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const productsContainer = document.getElementById("productsContainer");

function displayProducts(list) {
  productsContainer.innerHTML = "";

  list.forEach(item => {
    if (item.quantity > 0) {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>💰 Narxi: ${item.price} Coins</p>
        <p>📦 Qoldiq: ${item.quantity} dona</p>
      `;
      productsContainer.appendChild(div);
    }
  });
}

displayProducts(products);

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query) && product.quantity > 0
  );

  displayProducts(filtered);
});
