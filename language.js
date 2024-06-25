const selectElement = document.querySelector(".language");
selectElement.addEventListener("change", (event) => {
        const code = event.target.value;
        const url = new URL(window.location.href);
        const pn = url.pathname;
        if (code) {
                if (pn.startsWith("/cmn/")) {
                        const regex = /^\/cmn/;
                        url.pathname = pn.replace(regex, `/${code}`);
                } else if (pn.startsWith("/en/")) {
                        const regex = /^\/en/;
                        url.pathname = pn.replace(regex, `/${code}`);
                } else {
                        url.pathname = "/" + code + pn;
                }
        } else {
                if (pn.startsWith("/cmn/")) {
                        const regex = /^\/cmn/;
                        url.pathname = pn.replace(regex, '');
                } else if (pn.startsWith("/en/")) {
                        const regex = /^\/en/;
                        url.pathname = pn.replace(regex, '');
                }
        }
        const trailingSlash = /\/+$/;
        url.pathname = url.pathname.replace(trailingSlash, '');
        window.location.href = url.toString().replace(trailingSlash, '');
});
