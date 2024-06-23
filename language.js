const selectElement = document.querySelector(".language");
selectElement.addEventListener("change", (event) => {
        const code = event.target.value;
        const url = new URL(window.location.href);
        if (code) {
                url.pathname = url.pathname.replace("/cmn/", `/${code}/`).replace("/en/", `/${code}/`);
        } else {
                url.pathname = url.pathname.replace("/cmn/", '/').replace("/en/", '/');
        }
        url.pathname = url.pathname.replace(/\/+$/, '');
        window.location.href = url.toString().replace(/\/+$/, '');
});
