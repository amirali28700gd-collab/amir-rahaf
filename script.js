/* =========================
   الباسورد
========================= */

function checkPassword() {

    const password =
        document.getElementById("password").value;

    const correctPassword =
        "love rahaf";

    const wrongPassword =
        document.getElementById("wrongPassword");


    if (password === correctPassword) {
        const music = document.getElementById("loveMusic");
music.play();

        document
            .getElementById("loginScreen")
            .style
            .display = "none";

        document
            .getElementById("welcomeScreen")
            .classList
            .remove("hidden");

        createHearts();

    } else {

        wrongPassword.style.display = "block";

        document
            .getElementById("password")
            .value = "";

    }
}


/* Enter من الكيبورد */

document
    .getElementById("password")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                checkPassword();

            }

        }
    );


/* =========================
   بداية الموقع
========================= */

function startLove() {

    document
        .getElementById("welcomeScreen")
        .style
        .display = "none";

    document
        .getElementById("mainSite")
        .classList
        .remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   فتح الرسائل
========================= */

function nextMessage(button) {

    const message =
        button
            .parentElement
            .querySelector(".hidden-message");


    if (
        message.style.display === "block"
    ) {

        message.style.display = "none";

        button.innerText =
            "كملي الرسالة ❤️";

    } else {

        message.style.display = "block";

        button.innerText =
            "خلاص كفاية دلع 😂❤️";

        heartExplosion();

    }
}


/* =========================
   القلوب المتحركة
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "heart-particle";


    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💓",
        "💞",
        "🥺"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (
            15 +
            Math.random() * 30
        ) + "px";


    heart.style.animationDuration =
        (
            5 +
            Math.random() * 7
        ) + "s";


    document
        .getElementById("particles")
        .appendChild(heart);


    setTimeout(
        () => heart.remove(),
        13000
    );

}
let heartsInterval;

function createHearts() {
    if (heartsInterval) return;

    heartsInterval = setInterval(() => {
        createHeart();
    }, 1000);
}






/* =========================
   انفجار القلوب
========================= */

let taps = 0;


function heartExplosion() {

    taps++;


    document
        .getElementById("heartCounter")
        .innerText =
        "وصل " +
        taps +
        " قلب لرهوفتي ❤️";


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "explosion-heart";


        heart.innerHTML =
            [
                "❤️",
                "💖",
                "💕",
                "💗",
                "💘"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];


        heart.style.left =
            "50%";

        heart.style.top =
            "50%";


        const x =
            (
                Math.random() - .5
            ) * 600;


        const y =
            (
                Math.random() - .5
            ) * 600;


        heart.style.setProperty(
            "--x",
            x + "px"
        );


        heart.style.setProperty(
            "--y",
            y + "px"
        );


        document
            .body
            .appendChild(heart);


        setTimeout(
            () => heart.remove(),
            1600
        );

    }
}


/* =========================
   الرسالة الأخيرة
========================= */

function finalLove() {

    const message =
        document.getElementById(
            "finalMessage"
        );


    message.style.display =
        "block";


    heartExplosion();


    setTimeout(() => {

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

}


/* =========================
   قلوب عند الضغط على الأزرار
========================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.tagName === "BUTTON"
        ) {

            for (
                let i = 0;
                i < 3;
                i++
            ) {

                const heart =
                    document.createElement(
                        "div"
                    );


                heart.className =
                    "explosion-heart";


                heart.innerHTML =
                    "❤️";


                heart.style.left =
                    event.clientX + "px";


                heart.style.top =
                    event.clientY + "px";


                const x =
                    (
                        Math.random() - .5
                    ) * 200;


                const y =
                    (
                        Math.random() - .5
                    ) * 200;


                heart.style.setProperty(
                    "--x",
                    x + "px"
                );


                heart.style.setProperty(
                    "--y",
                    y + "px"
                );


                document
                    .body
                    .appendChild(heart);


                setTimeout(
                    () => heart.remove(),
                    1600
                );

            }

        }

    }
 );
