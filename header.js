(function() {
    // 1. 定義需要載入的 JS (順序很重要)
    const scripts = [
        "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    ];

    // 2. 定義你的 HTML 內容 (把原本的 var a 搬過來)
    var navbarHTML = `
        <header>
            <section id='main'>
                <div class='main-picture'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-md-12'>
                                <h1>　2026 IMOCamp</h1>
                                <p class='lead'>　　　　2026 數學競賽研習營</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class='container'>
                <nav class='navbar navbar-expand-lg navbar-light'>
                    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul class='navbar-nav mr-auto'>
                            <li class='nav-item active'><a class='nav-link' href='index.html'>首頁</a></li>
                            <li><a class='nav-link' href='news.html'>最新消息</a></li>
                            <li class='nav-item dropdown'>
                                <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown1' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>關於研習營</a>
                                <div class='dropdown-menu' aria-labelledby='navbarDropdown1'>
                                    <a class='dropdown-item' href='intro.html'>營隊簡介</a>
                                    <a class='dropdown-item' href='time.html'>上課時間表</a>
                                    <a class='dropdown-item' href='QA.html'>Q&A</a>
                                </div>
                            </li>
                            <li class='nav-item dropdown'>
                                <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown2' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>報名資訊</a>
                                <div class='dropdown-menu' aria-labelledby='navbarDropdown2'>
                                    <a class='dropdown-item' href='signup.html'>報名題目</a>
                                </div>
                            </li>
                            <li class='nav-item dropdown'>
                                <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown3' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>歷屆資料</a>
                                <div class='dropdown-menu' aria-labelledby='navbarDropdown3'>
                                    <a class='dropdown-item' href='index.html'>2026</a>
                                    <a class='dropdown-item' href='2025/index.html'>2025</a>
                                    <a class='dropdown-item' href='2024/index.html'>2024</a>
                                    <a class='dropdown-item' href='2023/index.html'>2023</a>
                                    <a class='dropdown-item' href='2022/index.html'>2022</a>
                                </div>
                            </li>
                            <li><a class='nav-link' href='contact.html'>聯絡我們</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>`;

    // 3. 遞迴載入腳本的函數
    function loadScripts(index) {
        if (index < scripts.length) {
            let script = document.createElement('script');
            script.src = scripts[index];
            script.async = false;
            script.onload = () => loadScripts(index + 1);
            document.head.appendChild(script);
        } else {
            // 4. JS 載入完畢後，初始化 Navbar
            initNavbar();
        }
    }

    function initNavbar() {
        // 使用 document.write 或是插入特定 div
        // 如果你的 HTML 裡有 <div id="header"></div> 就用 innerHTML
        // 如果沒有，維持 document.write (但建議改用插入的方式)
        const headerDiv = document.getElementById('header');
        if (headerDiv) {
            headerDiv.innerHTML = navbarHTML;
        } else {
            // 如果沒找到容器，只好暴力插入到 body 開頭
            document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        }

        // 5. 重要：手動啟動 Bootstrap 選單功能
        $(document).ready(function() {
            $('.dropdown-toggle').dropdown();
            $('.navbar-toggler').on('click', function() {
                $($(this).data('target')).collapse('toggle');
            });
        });
    }

    // 啟動執行
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', () => loadScripts(0));
    } else {
        loadScripts(0);
    }
})();
