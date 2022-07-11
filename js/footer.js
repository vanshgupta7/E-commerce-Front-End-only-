const Footer = () =>{
    let footer= document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
        <div class="footer-brand">
            <img src="img/logo.png" alt="" class="footer-logo">
            <h1 class="footer-name">Flimzon</h1>
        </div>
        <div class="links">
            <ul class="category">
                <li class="category-title">get to know us</li>
                <li><a href="#" class="footer-link">our history</a></li>
                <li><a href="#" class="footer-link">beginning</a></li>
                <li><a href="#" class="footer-link">careers</a></li>
                <li><a href="#" class="footer-link">journey</a></li>
                <li><a href="#" class="footer-link">blog</a></li>
                <li><a href="#" class="footer-link">investors</a></li>
                <li><a href="#" class="footer-link">sister companies</a></li>
                <li><a href="#" class="footer-link">flimzon devices</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="social-link"><i class="fa-brands fa-twitter"></i></a>
        </div>
    </div>
    <p class="footer-credit">Flimzon, Best online store</p>
    `;
}

Footer();