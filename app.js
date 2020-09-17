function navbarShowIconMobile() {
    var blogLink = document.getElementById('blogLinks')
    if (blogLink.style.display === 'block') {
        blogLink.style.display = 'none'
    } else {
        blogLink.style.display = 'block'
    }
}