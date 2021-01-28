function gotoLink(link) {
    if (link == '' || link == 'javascript:;') return;
    let main = document.getElementsByTagName('main')[0];
    main.setAttribute('style', 'animation: fade-out 1s ease-in; opacity: 0; position: relative; top: 50px;');
    setTimeout(function() { window.location.href = link; }, 1000);
}

function initLink() {
    let links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i ++) {
        if (!links[i].getAttribute('href')) continue;
        let href = links[i].getAttribute('href');
        links[i].setAttribute('href', 'javascript: gotoLink(\'' + href + '\');');
    }
}

(function() {
    window.addEventListener('load', initLink, false);
})();
