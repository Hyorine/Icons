document.getElementById('menuIcon').addEventListener('click', function() {
    const menuIcon = this;
    const socialIcons = document.getElementById('social-icons');

    if (!socialIcons.classList.contains('show')) {
        menuIcon.classList.remove('bi-list');
        menuIcon.classList.add('bi-x');
        socialIcons.classList.remove('hidden');
        setTimeout(() => {
            socialIcons.classList.add('show');
        }, 10); // Rövid késleltetés a transition működéséhez
    } else {
        menuIcon.classList.remove('bi-x');
        menuIcon.classList.add('bi-list');
        socialIcons.classList.remove('show');
        setTimeout(() => {
            socialIcons.classList.add('hidden');
        }, 500); // Az animáció időtartama
    }
});
