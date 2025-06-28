document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeStylesheet = document.getElementById('dark-mode-style');
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        enableDarkMode();
        darkModeToggle.checked = true;
    }
    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    function enableDarkMode() {
        darkModeStylesheet.disabled = false;
    }

    function disableDarkMode() {
        darkModeStylesheet.disabled = true;
    }
});