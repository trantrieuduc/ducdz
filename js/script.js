// ===================== INIT DATA =====================
let users = [
  { email: "admin@gmail.com", name: "admin", password: "admin123", role: "admin" }
];

if (!localStorage.getItem("users")) localStorage.setItem("users", JSON.stringify(users));
else users = JSON.parse(localStorage.getItem("users"));

if (!localStorage.getItem("products")) {
  const sampleProducts = [
    // Porsche (20 sản phẩm)
    { id: "1", brand: "Porsche", name: "Porsche 911 Carrera", price: 8000000000, img: "img/porsche1.jpg", desc: "Porsche 911 Carrera là biểu tượng tốc độ và đẳng cấp." },
    { id: "2", brand: "Porsche", name: "Porsche 911 Turbo S", price: 12000000000, img: "img/porsche1.jpg", desc: "Mẫu 911 mạnh mẽ nhất với động cơ Turbo kép." },
    { id: "3", brand: "Porsche", name: "Porsche 911 GT3 RS", price: 14000000000, img: "img/porsche1.jpg", desc: "Xe thể thao đường đua với hiệu suất cực cao." },
    { id: "4", brand: "Porsche", name: "Porsche Panamera", price: 9000000000, img: "img/porsche1.jpg", desc: "Sedan hạng sang, kết hợp thể thao và tiện nghi." },
    { id: "5", brand: "Porsche", name: "Porsche Taycan", price: 7000000000, img: "img/porsche1.jpg", desc: "Siêu xe điện với thiết kế hiện đại và tốc độ ấn tượng." },
    { id: "6", brand: "Porsche", name: "Porsche Cayenne", price: 6000000000, img: "img/porsche1.jpg", desc: "SUV hạng sang với khả năng vận hành mạnh mẽ." },
    { id: "7", brand: "Porsche", name: "Porsche Macan", price: 4500000000, img: "img/porsche1.jpg", desc: "SUV nhỏ gọn nhưng đầy phong cách." },
    { id: "8", brand: "Porsche", name: "Porsche 718 Cayman", price: 3800000000, img: "img/porsche1.jpg", desc: "Coupe thể thao nhỏ gọn, động cơ mid-engine." },
    { id: "9", brand: "Porsche", name: "Porsche 718 Boxster", price: 4000000000, img: "img/porsche9.jpg", desc: "Roadster thể thao mui trần phong cách." },
    { id: "10", brand: "Porsche", name: "Porsche 911 Carrera 4S", price: 9500000000, img: "img/porsche10.jpg", desc: "Phiên bản dẫn động 4 bánh mạnh mẽ của 911." },
    { id: "11", brand: "Porsche", name: "Porsche 911 Targa", price: 10000000000, img: "img/porsche11.jpg", desc: "Phiên bản mui bán cứng độc đáo." },
    { id: "12", brand: "Porsche", name: "Porsche 911 Speedster", price: 15000000000, img: "img/porsche12.jpg", desc: "Phiên bản giới hạn, thiết kế mui trần độc đáo." },
    { id: "13", brand: "Porsche", name: "Porsche Taycan Turbo S", price: 9800000000, img: "img/porsche13.jpg", desc: "Siêu xe điện hiệu năng cao." },
    { id: "14", brand: "Porsche", name: "Porsche Cayenne Coupe", price: 7000000000, img: "img/porsche14.jpg", desc: "SUV coupe phong cách." },
    { id: "15", brand: "Porsche", name: "Porsche Macan GTS", price: 5000000000, img: "img/porsche15.jpg", desc: "SUV nhỏ gọn hiệu suất cao." },
    { id: "16", brand: "Porsche", name: "Porsche 911 GT2 RS", price: 18000000000, img: "img/porsche16.jpg", desc: "911 mạnh mẽ nhất, dành cho đường đua." },
    { id: "17", brand: "Porsche", name: "Porsche Panamera Turbo", price: 11000000000, img: "img/porsche17.jpg", desc: "Sedan sang trọng với động cơ mạnh mẽ." },
    { id: "18", brand: "Porsche", name: "Porsche 911 Carrera GTS", price: 10000000000, img: "img/porsche18.jpg", desc: "Phiên bản thể thao đặc biệt của 911." },
    { id: "19", brand: "Porsche", name: "Porsche 718 Spyder", price: 6000000000, img: "img/porsche19.jpg", desc: "Roadster thể thao đầy phấn khích." },
    { id: "20", brand: "Porsche", name: "Porsche Taycan Cross Turismo", price: 8000000000, img: "img/porsche20.jpg", desc: "Phiên bản wagon đa dụng của Taycan." },

    // Ferrari (5 sản phẩm)
    { id: "21", brand: "Ferrari", name: "Ferrari 488 GTB", price: 12000000000, img: "img/porsche1.jpg", desc: "Siêu xe thể thao với động cơ V8 mạnh mẽ." },
    { id: "22", brand: "Ferrari", name: "Ferrari F8 Tributo", price: 15000000000, img: "img/porsche1.jpg", desc: "Hậu duệ của 488 với hiệu suất vượt trội." },
    { id: "23", brand: "Ferrari", name: "Ferrari SF90 Stradale", price: 20000000000, img: "img/porsche1.jpg", desc: "Siêu xe hybrid với công suất cực lớn." },
    { id: "24", brand: "Ferrari", name: "Ferrari Roma", price: 10000000000, img: "img/porsche1.jpg", desc: "GT coupe thanh lịch nhưng vẫn mạnh mẽ." },
    { id: "25", brand: "Ferrari", name: "Ferrari Portofino", price: 9000000000, img: "img/porsche1.jpg", desc: "Roadster mui trần sang trọng." },

    // Lamborghini (5 sản phẩm)
    { id: "26", brand: "Lamborghini", name: "Lamborghini Aventador", price: 20000000000, img: "img/porsche1.jpg", desc: "Siêu xe V12 đỉnh cao của Lamborghini." },
    { id: "27", brand: "Lamborghini", name: "Lamborghini Huracan", price: 13000000000, img: "img/porsche1.jpg", desc: "Siêu xe V10 nổi tiếng với hiệu năng vượt trội." },
    { id: "28", brand: "Lamborghini", name: "Lamborghini Urus", price: 8000000000, img: "img/porsche1.jpg", desc: "SUV thể thao mạnh mẽ và sang trọng." },
    { id: "29", brand: "Lamborghini", name: "Lamborghini Sian", price: 30000000000, img: "img/porsche1.jpg", desc: "Siêu xe hybrid giới hạn cực hiếm." },
    { id: "30", brand: "Lamborghini", name: "Lamborghini Revuelto", price: 40000000000, img: "img/porsche1.jpg", desc: "Mẫu siêu xe hybrid V12 mới nhất." },

    // Mercedes (5 sản phẩm)
    { id: "31", brand: "Mercedes", name: "Mercedes S-Class", price: 7000000000, img: "img/porsche1.jpg", desc: "Sedan hạng sang với công nghệ tiên tiến." },
    { id: "32", brand: "Mercedes", name: "Mercedes E-Class", price: 3500000000, img: "img/porsche1.jpg", desc: "Mẫu sedan tầm trung hạng sang." },
    { id: "33", brand: "Mercedes", name: "Mercedes G-Class", price: 12000000000, img: "img/porsche1.jpg", desc: "SUV địa hình sang trọng, biểu tượng của Mercedes." },
    { id: "34", brand: "Mercedes", name: "Mercedes AMG GT", price: 11000000000, img: "img/mercedes4.jpg", desc: "Coupe thể thao hiệu suất cao." },
    { id: "35", brand: "Mercedes", name: "Mercedes EQS", price: 9000000000, img: "img/mercedes5.jpg", desc: "Sedan điện sang trọng và hiện đại." },

    // BMW (5 sản phẩm)
    { id: "36", brand: "BMW", name: "BMW M4", price: 6000000000, img: "img/porsche1.jpg", desc: "Coupe thể thao hiệu suất cao." },
    { id: "37", brand: "BMW", name: "BMW 7 Series", price: 8000000000, img: "img/porsche1.jpg", desc: "Sedan hạng sang cao cấp." },
    { id: "38", brand: "BMW", name: "BMW X5", price: 4500000000, img: "img/porsche1.jpg", desc: "SUV đa dụng sang trọng." },
    { id: "39", brand: "BMW", name: "BMW i8", price: 7500000000, img: "img/bmw4.jpg", desc: "Siêu xe hybrid với thiết kế tương lai." },
    { id: "40", brand: "BMW", name: "BMW Z4", price: 3800000000, img: "img/bmw5.jpg", desc: "Roadster thể thao 2 chỗ ngồi." },

    // Audi (5 sản phẩm)
    { id: "41", brand: "Audi", name: "Audi R8", price: 11000000000, img: "img/porsche1.jpg", desc: "Siêu xe động cơ đặt giữa nổi tiếng của Audi." },
    { id: "42", brand: "Audi", name: "Audi A8", price: 6000000000, img: "img/porsche1.jpg", desc: "Sedan hạng sang cao cấp." },
    { id: "43", brand: "Audi", name: "Audi Q7", price: 3800000000, img: "img/audi3.jpg", desc: "SUV cỡ lớn sang trọng." },
    { id: "44", brand: "Audi", name: "Audi TT", price: 2500000000, img: "img/porsche1.jpg", desc: "Coupe thể thao nhỏ gọn." },
    { id: "45", brand: "Audi", name: "Audi e-tron GT", price: 7000000000, img: "img/audi5.jpg", desc: "Sedan điện thể thao hiện đại." },

    // Rolls-Royce (5 sản phẩm)
    { id: "46", brand: "Rolls-Royce", name: "Rolls-Royce Phantom", price: 35000000000, img: "img/porsche1.jpg", desc: "Biểu tượng của sự xa hoa và đẳng cấp." },
    { id: "47", brand: "Rolls-Royce", name: "Rolls-Royce Ghost", price: 25000000000, img: "img/porsche1.jpg", desc: "Sedan sang trọng tinh tế." },
    { id: "48", brand: "Rolls-Royce", name: "Rolls-Royce Cullinan", price: 32000000000, img: "img/porsche1.jpg", desc: "SUV siêu sang mạnh mẽ." },
    { id: "49", brand: "Rolls-Royce", name: "Rolls-Royce Wraith", price: 28000000000, img: "img/rolls4.jpg", desc: "Coupe siêu sang với phong cách quý tộc." },
    { id: "50", brand: "Rolls-Royce", name: "Rolls-Royce Dawn", price: 30000000000, img: "img/rolls5.jpg", desc: "Roadster sang trọng bậc nhất." },

    // Bentley (5 sản phẩm)
    { id: "51", brand: "Bentley", name: "Bentley Continental GT", price: 18000000000, img: "img/porsche1.jpg", desc: "Coupe siêu sang đậm chất Anh Quốc." },
    { id: "52", brand: "Bentley", name: "Bentley Flying Spur", price: 15000000000, img: "img/porsche1.jpg", desc: "Sedan siêu sang đẳng cấp." },
    { id: "53", brand: "Bentley", name: "Bentley Bentayga", price: 12000000000, img: "img/porsche1.jpg", desc: "SUV sang trọng mạnh mẽ." },
    { id: "54", brand: "Bentley", name: "Bentley Mulsanne", price: 20000000000, img: "img/bentley4.jpg", desc: "Sedan siêu sang biểu tượng của Bentley." },
    { id: "55", brand: "Bentley", name: "Bentley Azure", price: 22000000000, img: "img/bentley5.jpg", desc: "Xe mui trần siêu sang hiếm có." },

    // Nissan (5 sản phẩm)
    { id: "56", brand: "Nissan", name: "Nissan GT-R", price: 4000000000, img: "img/porsche1.jpg", desc: "Huyền thoại tốc độ đến từ Nhật Bản." },
    { id: "57", brand: "Nissan", name: "Nissan 370Z", price: 2200000000, img: "img/porsche1.jpg", desc: "Coupe thể thao cỡ nhỏ nhưng mạnh mẽ." },
    { id: "58", brand: "Nissan", name: "Nissan Ariya", price: 1800000000, img: "img/porsche1.jpg", desc: "SUV điện hiện đại của Nissan." },
    { id: "59", brand: "Nissan", name: "Nissan Patrol", price: 3200000000, img: "img/nissan4.jpg", desc: "SUV địa hình cỡ lớn." },
    { id: "60", brand: "Nissan", name: "Nissan Altima", price: 1500000000, img: "img/nissan5.jpg", desc: "Sedan cỡ trung sang trọng." },

    // Maserati (5 sản phẩm)
    { id: "61", brand: "Maserati", name: "Maserati Quattroporte", price: 6000000000, img: "img/porsche1.jpg", desc: "Sedan hạng sang của Ý." },
    { id: "62", brand: "Maserati", name: "Maserati Ghibli", price: 4500000000, img: "img/porsche1.jpg", desc: "Sedan thể thao sang trọng." },
    { id: "63", brand: "Maserati", name: "Maserati Levante", price: 5000000000, img: "img/porsche1.jpg", desc: "SUV thể thao phong cách Ý." },
    { id: "64", brand: "Maserati", name: "Maserati MC20", price: 16000000000, img: "img/maserati4.jpg", desc: "Siêu xe mới nhất của Maserati." },
    { id: "65", brand: "Maserati", name: "Maserati GranTurismo", price: 8000000000, img: "img/porsche1.jpg", desc: "Coupe sang trọng và mạnh mẽ." }
  ];

  localStorage.setItem("products", JSON.stringify(sampleProducts));
}

if (!localStorage.getItem("orders")) localStorage.setItem("orders", JSON.stringify([]));
if (!localStorage.getItem("cart")) localStorage.setItem("cart", JSON.stringify([]));
if (!localStorage.getItem("favorites")) localStorage.setItem("favorites", JSON.stringify([]));

// ===================== USER FUNCTIONS =====================
function login(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    updateUserUI();
    alert("Đăng nhập thành công!");
    return true;
  }
  alert("Email hoặc mật khẩu không đúng!");
  return false;
}

function register(name, email, password) {
  if (users.find(u => u.email === email)) { alert("Email đã được đăng ký!"); return false; }
  const newUser = { name, email, password, role: "user" };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công! Bạn đã được đăng nhập tự động.");
  login(email, password);
  return true;
}

function logout() {
  localStorage.removeItem("currentUser");
  updateUserUI();
}

function updateUserUI() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const btnLogin = document.getElementById("btn-login");
  const userMenu = document.getElementById("userMenu");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const adminMenu = document.getElementById("adminMenu");

  if (user) {
    btnLogin?.classList.add("d-none");
    userMenu?.classList.remove("d-none");
    userNameDisplay.innerText = user.name;
    if (user.role === "admin") adminMenu?.classList.remove("d-none");
    else adminMenu?.classList.add("d-none");
  } else {
    btnLogin?.classList.remove("d-none");
    userMenu?.classList.add("d-none");
    adminMenu?.classList.add("d-none");
  }
}

function isAdmin() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user && user.role === "admin";
}

// ===================== PRODUCT FUNCTIONS =====================
function getAllProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function renderProducts(productsArr) {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  productList.innerHTML = "";

  if (!productsArr.length) {
    productList.innerHTML = "<p class='text-center'>Chưa có sản phẩm!</p>";
    return;
  }

  productsArr.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 col-12 mb-3";
    const isFav = favorites.includes(p.id);

    col.innerHTML = `
      <div class="card h-100 shadow-sm product-card">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body d-flex flex-column text-center">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">Hãng: ${p.brand}</p>
          <p class="card-text fw-bold text-primary">${p.price.toLocaleString()} VNĐ</p>
          <div class="mt-auto d-flex justify-content-around">
            <button class="btn btn-outline-danger btn-fav">${isFav ? '❤️ Đã thích' : '🤍 Yêu thích'}</button>
            <button class="btn btn-outline-success btn-cart">➕ Thêm vào giỏ hàng</button>

          </div>
          <a href="chitiet.html?id=${p.id}" class="btn btn-outline-primary mt-2">Xem chi tiết</a>
        </div>
      </div>
    `;

    col.querySelector(".btn-fav").addEventListener("click", () => toggleFavorite(p.id));
    col.querySelector(".btn-cart").addEventListener("click", () => addToCart(p.id));
    productList.appendChild(col);
  });
}

// ===================== FAVORITES =====================
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function toggleFavorite(productId) {
  let fav = getFavorites();
  if (fav.includes(productId)) fav = fav.filter(id => id !== productId);
  else fav.push(productId);
  localStorage.setItem("favorites", JSON.stringify(fav));
  renderProducts(getAllProducts());
}

// ===================== CART =====================

// ✅ Lấy giỏ hàng từ localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ✅ Lưu giỏ hàng
function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ✅ Thêm sản phẩm vào giỏ
function addToCart(productId, quantity = 1) {
  const products = getAllProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return alert("Sản phẩm không tồn tại!");

  let cart = getCart();
  const existing = cart.find(i => i.id === productId);

  if (existing) existing.quantity += quantity; // tăng số lượng
  else cart.push({ id: productId, quantity });

  setCart(cart);
  renderCart();
  updateCartCount();

  alert(`Đã thêm ${quantity} sản phẩm "${product.name}" vào giỏ hàng.`);
}

// ✅ Cập nhật số lượng sản phẩm trong giỏ
function updateCartQuantity(productId, newQuantity) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, newQuantity);
    setCart(cart);
    renderCart();
  }
}

// ✅ Xóa sản phẩm
function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  setCart(cart);
  renderCart();
  updateCartCount();
}

// ✅ Hiển thị giỏ hàng trong modal
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (!cartItems) return;

  const cart = getCart();
  const products = getAllProducts();

  cartItems.innerHTML = "";
  let total = 0;

  if (!cart.length) {
    cartItems.innerHTML = "<p class='text-center text-muted'>Giỏ hàng trống!</p>";
  }

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const subtotal = product.price * item.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "list-group-item d-flex justify-content-between align-items-center";
    div.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${product.img}" width="70" class="me-3 rounded">
        <div>
          <b>${product.name}</b><br>
          <span>${product.price.toLocaleString()} VNĐ</span>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <input type="number" class="form-control form-control-sm me-2" value="${item.quantity}" min="1" style="width:70px">
        <button class="btn btn-sm btn-danger">Xóa</button>
      </div>
    `;

    // Gắn sự kiện
    const input = div.querySelector("input");
    input.addEventListener("change", e => {
      updateCartQuantity(product.id, parseInt(e.target.value));
    });

    div.querySelector("button").addEventListener("click", () => removeFromCart(product.id));

    cartItems.appendChild(div);
  });

  cartTotal.textContent = total.toLocaleString() + " VNĐ";
}

// ✅ Hiển thị modal giỏ hàng
function openCart() {
  renderCart();
  const modal = new bootstrap.Modal(document.getElementById("cartModal"));
  modal.show();
}

// ✅ Cập nhật số lượng trên icon
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  const totalItems = getCart().reduce((sum, i) => sum + i.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;
}

// ✅ Thanh toán
function checkout() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return alert("Vui lòng đăng nhập để thanh toán!");

  const cart = getCart();
  if (!cart.length) return alert("Giỏ hàng trống!");

  const products = getAllProducts();
  const paymentMethod = document.getElementById("payment-method")?.value || "Tiền mặt";

  const total = cart.reduce((sum, i) => {
    const p = products.find(p => p.id === i.id);
    return sum + (p ? p.price * i.quantity : 0);
  }, 0);

  const order = {
    id: Date.now().toString(),
    user: user.email,
    items: cart,
    total,
    paymentMethod,
    date: new Date().toLocaleString(),
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.setItem("cart", JSON.stringify([]));
  renderCart();
  updateCartCount();
  alert("Thanh toán thành công!");
  bootstrap.Modal.getInstance(document.getElementById("cartModal"))?.hide();
}

// ✅ Khi trang load
document.addEventListener("DOMContentLoaded", updateCartCount);

// ===================== CHECKOUT =====================
function checkout() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) { alert("Vui lòng đăng nhập để thanh toán!"); return; }

  const cart = getCart();
  if (!cart.length) { alert("Giỏ hàng trống!"); return; }

  const paymentMethod = document.getElementById("payment-method")?.value || "Tiền mặt";

  const order = {
    id: Date.now().toString(),
    user: user.email,
    items: cart,
    total: cart.reduce((sum, i) => {
      const p = getAllProducts().find(x => x.id === i.id);
      return sum + (p ? p.price * i.quantity : 0);
    }, 0),
    paymentMethod,
    date: new Date().toLocaleString()
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.setItem("cart", JSON.stringify([]));
  renderCart();
  alert("Thanh toán thành công!");
  bootstrap.Modal.getInstance(document.getElementById("cartModal"))?.hide();
}

// ===================== ORDERS =====================
function renderOrders() {
  const ordersList = document.getElementById("ordersList");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  let allOrders = JSON.parse(localStorage.getItem("orders")) || [];
  if (!ordersList) return;

  if (!user) {
    ordersList.innerHTML = "<p>Vui lòng đăng nhập để xem lịch sử đơn hàng!</p>";
    return;
  }

  const userOrders = allOrders.filter(o => o.user === user.email);
  if (!userOrders.length) {
    ordersList.innerHTML = "<p>Chưa có đơn hàng nào!</p>";
    return;
  }

  ordersList.innerHTML = "";
  userOrders.forEach(order => {
    const div = document.createElement("div");
    div.className = "border p-2 mb-2 rounded";
    div.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-1">
        <b>Đơn hàng #${order.id}</b>
        <span>${order.date}</span>
      </div>
      <div>Phương thức thanh toán: <i>${order.paymentMethod}</i></div>
      <ul class="mb-1">
        ${order.items.map(i => {
      const p = getAllProducts().find(x => x.id === i.id);
      return `<li>${p ? p.name : "Sản phẩm đã xóa"} x ${i.quantity} (${p ? p.price.toLocaleString() : 0} VNĐ)</li>`;
    }).join("")}
      </ul>
      <b>Tổng: ${order.total.toLocaleString()} VNĐ</b>
      <button class="btn btn-sm btn-danger mt-1 btn-delete-order">Xóa</button>
    `;

    const deleteBtn = div.querySelector(".btn-delete-order");
    deleteBtn.addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn xóa đơn hàng này?")) {
        allOrders = allOrders.filter(o => o.id !== order.id); // xóa đơn hàng
        localStorage.setItem("orders", JSON.stringify(allOrders));
        renderOrders(); // render lại danh sách
      }
    });

    ordersList.appendChild(div);
  });
}

function openOrdersModal() {
  const orderModal = new bootstrap.Modal(document.getElementById("ordersModal"));
  renderOrders();
  orderModal.show();
}

// ===================== FILTER + SEARCH =====================
function createFilter(products) {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  const filterContainer = document.createElement("div");
  filterContainer.className = "mb-4 text-center";

  // Tạo nút hãng
  const allBtn = document.createElement("button");
  allBtn.className = "btn btn-outline-primary me-2 mb-2 active";
  allBtn.dataset.brand = "all";
  allBtn.textContent = "Tất cả";
  filterContainer.appendChild(allBtn);

  [...new Set(products.map(p => p.brand))].forEach(b => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary me-2 mb-2";
    btn.textContent = b;
    btn.dataset.brand = b;
    filterContainer.appendChild(btn);
  });

  productList.parentElement.prepend(filterContainer);

  // === LOGIC ĐỒNG BỘ ===
  let currentBrand = localStorage.getItem("selectedBrand") || "all";
  let currentSearch = localStorage.getItem("searchTerm") || "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = currentSearch;

  // Hàm render có kết hợp filter + search
  function applyFilters() {
    let filtered = [...products];

    // lọc theo hãng
    if (currentBrand !== "all") {
      filtered = filtered.filter(p => p.brand === currentBrand);
    }

    // lọc theo từ khóa
    if (currentSearch.trim() !== "") {
      const term = currentSearch.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term)
      );
    }

    renderProducts(filtered);
  }

  // === EVENT FILTER ===
  filterContainer.addEventListener("click", e => {
    if (e.target.tagName !== "BUTTON") return;
    currentBrand = e.target.dataset.brand;
    localStorage.setItem("selectedBrand", currentBrand);

    // đổi style active
    filterContainer.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");

    applyFilters();
  });

  // === EVENT SEARCH REALTIME ===
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearch = e.target.value;
      localStorage.setItem("searchTerm", currentSearch);
      applyFilters();
    });
  }

  // === Khi load trang, áp dụng lại ===
  applyFilters();
}


// ===================== ADMIN PANEL (OPTIMIZED) =====================
function openAdminPanel() {
  if (!isAdmin()) return;

  if (document.getElementById("adminPanelModal")) {
    new bootstrap.Modal(document.getElementById("adminPanelModal")).show();
    return;
  }

  const modalHTML = `
  <div class="modal fade" id="adminPanelModal" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content shadow-lg">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title fw-bold">⚙️ Bảng điều khiển Admin</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body bg-light">
          <div class="accordion" id="adminAccordion">

            <!-- SẢN PHẨM -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingProduct">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="true">
                  🛒 Quản lý sản phẩm
                </button>
              </h2>
              <div id="collapseProduct" class="accordion-collapse collapse show" data-bs-parent="#adminAccordion">
                <div class="accordion-body">
                  <form id="productForm" class="mb-3">
                    <input type="hidden" id="productId">
                    <div class="row g-2">
                      <div class="col"><input type="text" id="productName" class="form-control" placeholder="Tên sản phẩm" required></div>
                      <div class="col"><input type="text" id="productBrand" class="form-control" placeholder="Thương hiệu" required></div>
                      <div class="col"><input type="number" id="productPrice" class="form-control" placeholder="Giá (VNĐ)" required></div>
                      <div class="col">
                        <input type="file" id="productImg" class="form-control" accept="image/*">
                        <img id="previewImg" src="" alt="Preview" style="width:80px;margin-top:5px;display:none;">
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-success">💾 Lưu</button>
                      </div>
                      <div class="col-auto">
                        <button type="button" id="resetFormBtn" class="btn btn-secondary">↺ Reset</button>
                      </div>
                    </div>
                  </form>
                  <table class="table table-bordered align-middle">
                    <thead class="table-dark">
                      <tr><th>ID</th><th>Ảnh</th><th>Tên</th><th>Thương hiệu</th><th>Giá</th><th>Hành động</th></tr>
                    </thead>
                    <tbody id="productTableBody"></tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- ĐƠN HÀNG -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOrder">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOrder">
                  📦 Quản lý đơn hàng
                </button>
              </h2>
              <div id="collapseOrder" class="accordion-collapse collapse" data-bs-parent="#adminAccordion">
                <div class="accordion-body">
                  <table class="table table-bordered align-middle">
                    <thead class="table-dark">
                      <tr><th>ID Đơn</th><th>Người mua</th><th>Tổng tiền</th><th>Thanh toán</th><th>Trạng thái</th><th>Hành động</th></tr>
                    </thead>
                    <tbody id="orderTableBody"></tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
  const modal = new bootstrap.Modal(document.getElementById("adminPanelModal"));
  modal.show();

  const fileInput = document.getElementById("productImg");
  const previewImg = document.getElementById("previewImg");
  const productForm = document.getElementById("productForm");
  const resetBtn = document.getElementById("resetFormBtn");

  // === Preview ảnh sản phẩm ===
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return (previewImg.style.display = "none");
    const reader = new FileReader();
    reader.onload = e => {
      previewImg.src = e.target.result;
      previewImg.style.display = "inline-block";
    };
    reader.readAsDataURL(file);
  });

  // === Lưu / Sửa sản phẩm ===
  productForm.addEventListener("submit", e => {
    e.preventDefault();
    const id = document.getElementById("productId").value;
    const name = document.getElementById("productName").value.trim();
    const brand = document.getElementById("productBrand").value.trim();
    const price = parseInt(document.getElementById("productPrice").value);
    const img = previewImg.src || "img/default.jpg";

    if (id) editProduct(id, { name, brand, price, img });
    else addProduct({ name, brand, price, img });

    productForm.reset();
    previewImg.style.display = "none";
    renderProductsTable();
  });

  resetBtn.addEventListener("click", () => {
    productForm.reset();
    previewImg.style.display = "none";
    document.getElementById("productId").value = "";
  });

  renderProductsTable();
  renderOrdersTable();
}

// === Bảng sản phẩm ===
function renderProductsTable() {
  const body = document.getElementById("productTableBody");
  if (!body) return;
  const products = getAllProducts();
  body.innerHTML = "";
  products.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td><img src="${p.img}" width="70"></td>
      <td>${p.name}</td>
      <td>${p.brand}</td>
      <td>${p.price.toLocaleString()} VNĐ</td>
      <td>
        <button class="btn btn-sm btn-primary me-1" onclick="fillProductForm('${p.id}')">Sửa</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProductConfirm('${p.id}')">Xóa</button>
      </td>`;
    body.appendChild(tr);
  });
}

// === Bảng đơn hàng ===
function renderOrdersTable() {
  const body = document.getElementById("orderTableBody");
  if (!body) return;
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  body.innerHTML = "";
  orders.forEach(o => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${o.id}</td>
      <td>${o.user}</td>
      <td>${o.total.toLocaleString()} VNĐ</td>
      <td>${o.paymentMethod}</td>
      <td>${o.status || "Đang xử lý"}</td>
      <td><button class="btn btn-sm btn-danger" onclick="deleteOrder('${o.id}')">Xóa</button></td>`;
    body.appendChild(tr);
  });
}



// ================== RENDER SẢN PHẨM ==================
function renderProductsTable() {
  const body = document.getElementById("productTableBody");
  if (!body) return;
  const products = getAllProducts();
  body.innerHTML = "";
  products.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td><img src="${p.img}" width="70"></td>
      <td>${p.name}</td>
      <td>${p.brand}</td>
      <td>${p.price.toLocaleString()} VNĐ</td>
      <td>
        <button class="btn btn-sm btn-primary me-1" onclick="fillProductForm('${p.id}')">Sửa</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProductConfirm('${p.id}')">Xóa</button>
      </td>`;
    body.appendChild(tr);
  });
}

function fillProductForm(id) {
  const p = getAllProducts().find(p => p.id === id);
  if (!p) return;
  document.getElementById("productId").value = p.id;
  document.getElementById("productName").value = p.name;
  document.getElementById("productBrand").value = p.brand;
  document.getElementById("productPrice").value = p.price;
  document.getElementById("previewImg").src = p.img;
  document.getElementById("previewImg").style.display = "inline-block";
}

function deleteProductConfirm(id) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    deleteProduct(id);
    renderProductsTable();
  }
}

// ================== RENDER ĐƠN HÀNG ==================
function renderOrdersTable() {
  const body = document.getElementById("orderTableBody");
  if (!body) return;
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  body.innerHTML = "";
  orders.forEach(o => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${o.id}</td>
      <td>${o.user}</td>
      <td>${o.total.toLocaleString()} VNĐ</td>
      <td>${o.method}</td>
      <td>${o.status || "Đang xử lý"}</td>
      <td><button class="btn btn-sm btn-danger" onclick="deleteOrder('${o.id}')">Xóa</button></td>`;
    body.appendChild(tr);
  });
}

function deleteOrder(id) {
  if (!confirm("Xóa đơn hàng này?")) return;
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders = orders.filter(o => o.id !== id);
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrdersTable();
}

// ===================== INIT =====================
document.addEventListener("DOMContentLoaded", () => {
  updateUserUI();
  renderCart();

  const allProducts = getAllProducts();
  createFilter(allProducts); // ✅ filter + search đều nằm trong đây, không cần thêm search ngoài
  renderProducts(allProducts);

  // Auth
  document.getElementById("btn-logout")?.addEventListener("click", logout);
  document.getElementById("loginForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    login(email, password);
  });
  document.getElementById("registerForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    register(name, email, password);
  });

  // Orders
  document.getElementById("orderHistoryBtn")?.addEventListener("click", openOrdersModal);

  // Admin
  document.getElementById("openAdmin")?.addEventListener("click", openAdminPanel);
});

renderOrders();
