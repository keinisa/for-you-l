// ==========================
// PASSWORD
// ==========================

const PASSWORD = "0912";

function checkPassword() {

    const input = document.getElementById("password").value;

    if (input === PASSWORD) {

        document.getElementById("login").style.display = "none";
        document.getElementById("main").style.display = "block";

        startTyping();
        startConfetti();

    } else {

        alert("Password salah 😢");

    }

}

// ==========================
// LETTER
// ==========================

const letter = `

Hi, sayang.

Thank you for everything.
Thank you for being in my life.

Aku bersyukur banget bisa kenal sama kamu.
Mungkin secara nggak sadar, kehadiran kamu bikin banyak hal di hidup aku berubah menjadi lebih baik.

Kamu selalu sabar ngehadapin tingkah aku yang...
yaa, kamu tau lah yaa. 🤍

Thank you untuk kamu yang, mungkin nerima atau enggak,
latar belakang aku yang yaa... begini lah ya,
yang masih berantakan.

Thank you for always being patient with me,
for understanding me even when I can't explain what I feel,
and for loving me in ways I never thought I deserved.

Aku tahu kita sama-sama nggak sempurna.
Kita sama-sama punya kekurangan,
dan pernah bikin satu sama lain kecewa.

But despite everything...

I still choose you.

Because loving you feels like home.

Aku cuma berharap,
semoga kita selalu diberi kesempatan
buat tumbuh bersama,
saling memperbaiki diri,
dan saling menguatkan.

I don't need a perfect relationship.

I just need you
to keep holding my hand
no matter how difficult life gets.

I love you
more than you know.

And I'll never stop
being grateful
that you're mine.

❤️

`;

// ==========================
// OPEN LETTER
// ==========================

function showLetter() {

    const letterBox = document.getElementById("letter");
    const target = document.getElementById("letterText");

    letterBox.style.display = "block";
    target.innerHTML = "";

    let i = 0;

    function type() {

        if (i >= letter.length) return;

        const char = letter.charAt(i);

        if (char === "\n") {
            target.innerHTML += "<br>";
            i++;
            setTimeout(type, 300);
            return;
        }

        target.innerHTML += char;

        let speed = 35;

        if (char === ",") speed = 180;
        if (char === ".") speed = 600;

        const current = target.textContent;

        if (current.endsWith("Thank you for everything.")) speed = 1200;
        if (current.endsWith("Thank you for being in my life.")) speed = 1800;
        if (current.endsWith("But despite everything...")) speed = 2500;
        if (current.endsWith("I still choose you.")) speed = 1800;
        if (current.endsWith("Because loving you feels like home.")) speed = 2200;
        if (current.endsWith("I don't need a perfect relationship.")) speed = 1800;
        if (current.endsWith("more than you know.")) speed = 2200;
        if (current.endsWith("that you're mine.")) speed = 3000;

        i++;

        letterBox.scrollTop = letterBox.scrollHeight;

        setTimeout(type, speed);

    }

    type();

}

// ==========================
// PLAY MUSIC
// ==========================

function playMusic() {

    const music = document.getElementById("music");

    music.play();

}

// ==========================
// TYPING TEXT
// ==========================

const text =
"Every moment with you becomes one of my favorite memories. Thank you for always being here. ❤️";

let index = 0;

function startTyping() {

    const typing = document.querySelector(".typing");

    typing.innerHTML = "";
    index = 0;

    function type() {

        if (index < text.length) {

            typing.innerHTML += text.charAt(index);

            index++;

            setTimeout(type, 60);

        }

    }

    type();

}

// ==========================
// SLIDESHOW
// ==========================

const photos = [
    "asset/foto1.jpg",
    "asset/foto2.jpg",
    "asset/foto3.jpg",
    "asset/foto4.jpg"
];

let current = 0;

setInterval(() => {

    const slide = document.getElementById("slide");

    if (!slide) return;

    current++;

    if (current >= photos.length) {
        current = 0;
    }

    slide.src = photos[current];

}, 3000);

// ==========================
// HEART ANIMATION
// ==========================

setInterval(() => {

    const container = document.querySelector(".hearts");

    if (!container) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 250);

// ==========================
// CONFETTI
// ==========================

function startConfetti() {

    const canvas = document.getElementById("confetti");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 150; i++) {

        pieces.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 8 + 4,
            speed: Math.random() * 3 + 2

        });

    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ff4d88";

        pieces.forEach(p => {

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.y += p.speed;

            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }

        });

    }

    const animation = setInterval(draw, 20);

    setTimeout(() => {

        clearInterval(animation);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }, 5000);

}

