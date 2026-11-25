/* JSVisuals intro fades away after 2.4 seconds */
document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("intro");
    document.body.classList.add("intro-open");

    window.setTimeout(function () {
        intro.classList.add("hide");
        document.body.classList.remove("intro-open");
    }, 2400);
});

/* Mobile menu toggle */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", function () {
    const opened = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(opened));
});

/* Close menu after tapping a navigation item */
nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});

/* Wish character count */
const wishMessage = document.getElementById("wishMessage");
const charCount = document.getElementById("charCount");

function updateCount() {
    charCount.textContent = wishMessage.value.length;
}

updateCount();
wishMessage.addEventListener("input", updateCount);

/* Validate allowed MRCE roll number patterns */
function isValidRollNumber(value) {
    const patterns = [
        /^21Q91A66[A-Z0-9]{2}$/i,
        /^21Q91A66A[A-Z0-9]$/i,
        /^21Q91A66B[A-Z0-9]$/i,
        /^21Q91A66C[A-Z0-9]$/i
    ];

    return patterns.some(function (pattern) {
        return pattern.test(value);
    });
}

/* Prepare and open the WhatsApp message */
const wishForm = document.getElementById("wishForm");
const formError = document.getElementById("formError");

wishForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim().toUpperCase();
    const wish = wishMessage.value.trim();
    formError.textContent = "";

    if (!name || !roll || !wish) {
        formError.textContent = "Please fill in all fields.";
        return;
    }

    if (!isValidRollNumber(roll)) {
        formError.textContent = "Please enter a valid MRCE roll number.";
        return;
    }

    /* Update this phone number if needed. Include country code, no plus sign. */
    const whatsappNumber = "919705068085";
    const message = [
        "Name: " + name,
        "MRCE Roll Number: " + roll,
        "",
        "Wish:",
        wish
    ].join("\n");

    const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank", "noopener,noreferrer");
});

/* Screenshot/recording limitation:
   Websites cannot reliably prevent OS screenshot or recording features.
   No fake screenshot-blocking behavior is advertised or implemented. */
/* =========================================
   BACKGROUND MUSIC CONTROL
   ========================================= */

// Find the music player
const backgroundMusic = document.getElementById("backgroundMusic");

// Find the music button
const musicToggle = document.getElementById("musicToggle");

// Find the button text
const musicLabel = musicToggle.querySelector(".music-label");

// Find the music icon
const musicIcon = musicToggle.querySelector(".music-icon");

// Set music volume to 35%
backgroundMusic.volume = 0.35;


// Update the button according to music status
function showMusicState() {

    // If music is stopped
    if (backgroundMusic.paused) {

        musicLabel.textContent = "PLAY MUSIC";
        musicIcon.textContent = "♪";

        musicToggle.classList.remove("is-playing");

        musicToggle.setAttribute(
            "aria-label",
            "Play background music"
        );

        musicToggle.setAttribute(
            "aria-pressed",
            "false"
        );

        return;
    }


    // If music is muted
    if (backgroundMusic.muted) {

        musicLabel.textContent = "UNMUTE MUSIC";
        musicIcon.textContent = "♪";

        musicToggle.classList.remove("is-playing");

        musicToggle.setAttribute(
            "aria-label",
            "Unmute background music"
        );

        musicToggle.setAttribute(
            "aria-pressed",
            "false"
        );

        return;
    }


    // If music is playing normally
    musicLabel.textContent = "";
    musicIcon.textContent = "♫";

    musicToggle.classList.add("is-playing");

    musicToggle.setAttribute(
        "aria-label",
        "Mute background music"
    );

    musicToggle.setAttribute(
        "aria-pressed",
        "true"
    );

}


// When visitor clicks the music button
musicToggle.addEventListener("click", function () {

    // If music is currently stopped
    if (backgroundMusic.paused) {

        // Make sure it is not muted
        backgroundMusic.muted = false;

        // Start playing music
        backgroundMusic.play()

            .then(function () {

                // Update button text
                showMusicState();

            })

            .catch(function () {

                // If music file is missing
                musicLabel.textContent = "ADD MUSIC FILE";

                musicToggle.setAttribute(
                    "aria-label",
                    "Background music file not found"
                );

            });

        return;

    }


    // If music is already playing,
    // toggle mute and unmute
    backgroundMusic.muted = !backgroundMusic.muted;

    // Update button
    showMusicState();

});


// Update button if audio finishes
backgroundMusic.addEventListener("ended", function () {

    showMusicState();

});