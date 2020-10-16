document.getElementById("showMenuIcon").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show");
  document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("menu").classList.remove("show");
  });
});

let mobieProductHTML = document.getElementById("product-wrapper-mobile");
let desktopProductHTML = document.getElementById("product-wrapper-desktop");
let content = "";
for (let i = 0; i < 6; i++) {
  content += `
  <div class="product-card">
  <div class="product-card-img">
    <img src="./images/bicycle.jpg" alt="bicycle" />
  </div>
  <div class="product-card-content">
    <p>Bicycle</p>
  </div>
  <div class="product-card-btn">
    <button class="addCart-btn">$50</button>
    <button class="wishlist">
      <i class="far fa-heart"></i>
    </button>
  </div>
</div>
  `;
}

mobieProductHTML.innerHTML = content;
desktopProductHTML.innerHTML = content;
