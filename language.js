const selectElement = document.querySelector(".language");
selectElement.addEventListener("change", (event) => {
        const code = event.target.value;
        const url = new URL(window.location.href);
        if (code) {
                if (url.pathname.startsWith("/cmn/")) {
                        url.pathname = url.pathname.replace("/cmn/", `/${code}/`)
                } else if (url.pathname.startsWith("/en/")) {
                        url.pathname = url.pathname.replace("/en/", `/${code}/`)
                } else {
                        url.pathname = "/" + code + url.pathname
                }
        } else {
                if (url.pathname.startsWith("/cmn/")) {
                        url.pathname = url.pathname.replace("/cmn/", '/')
                } else if (url.pathname.startsWith("/en/")) {
                        url.pathname = url.pathname.replace("/en/", '/')
                }
        }
        url.pathname = url.pathname.replace(/\/+$/, '');
        window.location.href = url.toString().replace(/\/+$/, '');
});
