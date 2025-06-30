<script>
  document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const title = btn.dataset.title;
        const price = btn.dataset.price;
        const desc = btn.dataset.desc;

        const item = { title, price, desc };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));

        // Open cart tab
        window.open("order.html", "_blank");
      });
    });
  });
</script>
