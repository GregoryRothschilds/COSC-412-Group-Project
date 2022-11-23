const template = document.createElement('template');

template.innerHTML = `
    <div class="header_nav_bar">
        <div class="section">
            <div class="top_navbar">
                <div class="hamburger">
                    <a href="#">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
            </div>
    </div>
        <div class="sidebar">
            <div class="profile">
                    <img src="https://www.pngkey.com/png/detail/142-1424655_format-towson-university-tiger.png" alt="Format - Towson University Tiger@pngkey.com">
            </div>
            <!--menu item-->
            <ul>
                <li>
                    <a href="index.html">
                    <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">Home and Infromation</span>
                    </a>
                </li>
                <li>
                    <a href="textTranslation.html" >
                        <span class="icon"><i class="fas fa-retweet"></i></span>
                        <span class="item">Text Translation</span>
                    </a>
                </li>
                <li>
                    <a href="fileTranslation.html">
                        <span class="icon"><i class="fas fa-file"></i></span>
                        <span class="item">File Traslation</span>
                    </a>
                </li>
                <li>
                    <a href="currencyConvertor.html">
                        <span class="icon"><i class="fas fa-calculator"></i></span>
                        <span class="item">Currency Convertor</span>
                    </a>
                </li>
                <li>
                    <a href="roadmap.html">
                        <span class="icon"><i class="fas fa-calendar"></i></span>
                        <span class="item">Roadmap</span>
                    </a>
                </li>
                <li>
                    <a href="other.html">
                        <span class="icon"><i class="fas fa-question-circle"></i></span>
                        <span class="item">Others</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
`;

document.body.appendChild(template.content);