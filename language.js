const selectElement = document.querySelector(".language");
selectElement.addEventListener("change", (event) => {
        const langTag = event.target.value;
        const address = window.location.href;
        let url = new URL(address);
        let pathParts = url.pathname.split('/');
        switch (pathParts[1]) {
                case 'cmn':
                        pathParts[1] = langTag
                        url.pathname = pathParts.join('/')
                        break
                case 'en':
                        pathParts[1] = langTag
                        url.pathname = pathParts.join('/')
                        break
                default:
                        url.pathname = '/' + langTag + '/' + url.pathname
                        break
        }
        window.location.href = url.toString();
});
