document.addEventListener("DOMContentLoaded", function () {

    const notice = document.getElementById("cookie-notice");
    const acceptButton = document.getElementById("cookie-accept");
    const closeButton = document.getElementById("cookie-close");

    if (!notice) return;

    const storageKey = "beyondwork_cookie_notice_dismissed";

    // Show popup if visitor has not dismissed it
    try {
        if (localStorage.getItem(storageKey) !== "true") {
            notice.hidden = false;
        }
    } catch (error) {
        notice.hidden = false;
    }

    // Close and remember visitor's choice
    function closeNotice() {
        notice.hidden = true;

        try {
            localStorage.setItem(storageKey, "true");
        } catch (error) {
            // Popup still closes if storage is unavailable
        }
    }

    acceptButton.addEventListener("click", closeNotice);
    closeButton.addEventListener("click", closeNotice);

});
