const filterDropdown = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product");

filterDropdown.addEventListener("change", function () {
  const selectedCategory = this.value;

  products.forEach((product) => {
    const productCategory = product.getAttribute("data-category");

    if (selectedCategory === "all" || selectedCategory === productCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
