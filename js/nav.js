const Nav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML =`
        <div class="nav">
            <div class="brand">

                <img src="img/logo.png" class="brand-logo" alt="">
                <a href="#" class="brand-name">Flimzon</a>
            </div>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <!-- <a href="#"><img src="img/user.jpg" alt=""></a> -->
                <!-- <a href="#"><img src="img/cart.jpg" alt=""></a> -->
                <a href="#"><i class="fa-regular fa-circle-user"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">clothing</a></li>
            <li class="link-item"><a href="#" class="link">electronics</a></li>
            <li class="link-item"><a href="#" class="link">books</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
            <li class="link-item"><a href="#" class="link">furniture</a></li>
        </ul>
    `;
}

Nav()