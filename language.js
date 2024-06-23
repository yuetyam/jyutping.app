const selectElement = document.querySelector(".language");
selectElement.addEventListener("change", (event) => {
        const langTag = event.target.value;
        const url = new URL(window.location.href);
        let pathParts = url.pathname.split('/').filter(part => part !== '');
        if (pathParts[0] && ['cmn', 'en'].includes(pathParts[0])) {
                pathParts[0] = langTag;
        } else if (langTag) {
                pathParts.unshift(langTag);
        }
        url.pathname = '/' + pathParts.join('/').replace(/\/+$/, '');
        window.location.href = url.toString().replace(/\/+$/, '');
});
