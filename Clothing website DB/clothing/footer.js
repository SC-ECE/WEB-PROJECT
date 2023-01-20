const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
            <img src="light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">dress</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
            
        </div>
        <p class="footer-title">about company</p>
            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corporis vel? Assumenda ullam facilis officiis, expedita quaerat exercitationem earum, quia similique tempora hic illum eaque libero! Nobis officiis fugit corrupti laboriosam aperiam quod quam sint sapiente, facere dolore at accusantium, aut non quia, optio laudantium adipisci asperiores ab! Expedita, magni velit. Perferendis molestias accusantium repudiandae voluptates cumque nihil id ea nam ad consectetur aspernatur in, totam vitae eum veniam, blanditiis, ipsam maiores natus quae doloremque aut vero. Ullam cum quo labore libero, nisi maiores debitis iste vitae dolorem, aliquid quidem sint pariatur voluptas esse earum error placeat nihil possimus id.
            </p>
            <p class="info">support emails - help@clothing.com,customersuppport@clothing.com</p>
            <p class="info">telephone - 1800 250 361, 1800 450 235</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Clothing, Best apparels online store</p>
            `;
}
createFooter();