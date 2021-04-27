function show(view) {
    const elem = document.getElementById(view);
    const views = document.querySelectorAll(".view");
    views.forEach(view => {
        view.setAttribute("style", "display: none");
    })
    elem.setAttribute("style", "display: inline");
}