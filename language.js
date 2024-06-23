const selectElement = document.querySelector(".language");
selectElement.addEventListener("change", (event) => {
        const code = event.target.value;
        const url = new URL(window.location.href);
        let pathParts = url.pathname.split('/').filter(part => part !== '');
        if (pathParts[0] && ['cmn', 'en'].includes(pathParts[0])) {
                pathParts[0] = langTuage
        } else if (code) {
                pathParts.unshift(code);
        }
        url.pathname = '/' + pathParts.join('/').replace(/\/+$/, '');
        url.pathname = url.pathname.replace(/\/+$/, '');
        window.location.href = url.toString().replace(/\/+$/, '');
});
