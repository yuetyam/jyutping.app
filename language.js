const selectElement = document.querySelector(".language");
selectElement.addEventListener("change", (event) => {
        const langTag = event.target.value;
        const url = new URL(window.location.href);
        const pathParts = url.pathname.split('/');
        if (['cmn', 'en'].includes(pathParts[1])) {
                pathParts[1] = langTag;
        } else if (langTag) {
                pathParts.unshift(langTag);
        }
        url.pathname = pathParts.join('/');
        window.location.href = url.toString();
});
