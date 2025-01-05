document.getElementById("input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        let command = e.target.value;
        e.target.value = ""; // Clear the input immediately after capturing the command
        executeCommand(command); // Execute the command
    }
});

function executeCommand(command) {
    const outputDiv = document.getElementById("output");

    // Clear previous output before adding new output
    outputDiv.innerHTML = ""; // Clear the terminal output area

    // Function to type the text with a delay
    function typeText(text, callback) {
        let i = 0;
        let interval = setInterval(() => {
            outputDiv.innerHTML += `<span class='response'>${text[i]}</span>`; // Add one character at a time
            i++;
            outputDiv.scrollTop = outputDiv.scrollHeight;
            if (i === text.length) {
                clearInterval(interval);
                if (callback) callback(); // Execute callback when typing finishes
            }
        }, 50); // Adjust speed of typing
    }

    // Commands handling
    if (command === "hello") {
        typeText("Hello, User!\n", () => {});
    } else if (command === "clear") {
        outputDiv.innerHTML = ""; // Clear terminal output
    } else if (command === "help") {
        typeText("Available commands: hello, clear, help, time, date, dir, joke, fortune, spin, echo, color, flip, memes, weather, quote, random, balloons, confetti, fireworks, stars, venom, happy, rm -rf, sudo su, fart, laughs\n", () => {});
    } else if (command === "time") {
        const currentTime = new Date().toLocaleTimeString();
        typeText(`Current time: ${currentTime}\n`, () => {});
    } else if (command === "date") {
        const currentDate = new Date().toLocaleDateString();
        typeText(`Current date: ${currentDate}\n`, () => {});
    } else if (command === "dir") {
        const directories = ["Documents", "Downloads", "Music", "Pictures", "Videos"];
        typeText("Listing directories:\n", () => {
            directories.forEach(dir => {
                typeText(`${dir}\n`, () => {});
            });
        });
    } else if (command === "weather") {
        const weatherOptions = [
            "Sunny and warm 🌞",
            "Cloudy with a chance of rain ☁️🌧️",
            "Rainy and cool 🌧️",
            "Stormy with lightning ⚡",
            "Snowy and cold ❄️"
        ];
        const randomWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
        typeText(`Current weather: ${randomWeather}\n`, () => {});
    } else if (command === "quote") {
        const quotes = [
            "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "Do what you can, with what you have, where you are. - Theodore Roosevelt",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        typeText(`${randomQuote}\n`, () => {});
    } else if (command === "random") {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        typeText(`Random number: ${randomNumber}\n`, () => {});
    } else if (command === "joke") {
        const jokes = [
            "Why don't skeletons fight each other? They don't have the guts! 💀",
            "I told my wife she was drawing her eyebrows too high. She looked surprised! 😂",
            "Why don't programmers like nature? It has too many bugs. 🐛",
            "I told my computer I needed a break, and now it won't stop sending me Kit-Kats. 🍫"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        typeText(`${randomJoke}\n`, () => {});
    } else if (command === "balloons") {
        createBalloons(); // Call the function to create the balloon animation
    } else if (command === "confetti") {
        createConfetti(); // Call the function to create the confetti animation
    } else if (command === "fireworks") {
        createFireworks(); // Call the function to create the fireworks animation
    } else if (command === "stars") {
        createStars(); // Call the function to create the stars animation
    } else if (command === "venom") {
        typeText("Happy\n", () => {});
    } else if (command === "happy") {
        typeText("Venom\n", () => {});
    } else if (command.startsWith("echo ")) {
        const message = command.slice(5).trim();
        if (message) {
            typeText(`${message}\n`, () => {});
        } else {
            typeText("Error: No message provided after echo!\n", () => {});
        }
    } else if (command === "rm -rf") {
        typeText("Deleting all your files... just kidding! 😅\n", () => {});
    } else if (command === "sudo su") {
        typeText("You're now root... but only in this simulation. 😎\n", () => {});
    } else if (command === "fart") {
        typeText("💨 Pfft! Excuse you! 😂\n", () => {});
    } else if (command === "laughs") {
        typeText("🤣 Haha! Glad you're having fun!\n", () => {});
    } else {
        typeText("Command not recognized. Type 'help' for a list of commands.\n", () => {});
    }

    // Scroll to the bottom of the output after the text finishes
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function createBalloons() {
    const balloonColors = ['#FF6347', '#1E90FF', '#32CD32', '#FFD700', '#FF1493', '#8A2BE2'];
    const balloonCount = 10; // Number of balloons to float

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.style.position = 'absolute';
        balloon.style.bottom = '0';
        balloon.style.left = `${Math.random() * 100}%`; // Random horizontal position
        balloon.style.width = '50px';
        balloon.style.height = '70px';
        balloon.style.borderRadius = '50%';
        balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.animation = `floatBalloon ${Math.random() * 3 + 3}s linear infinite`;

        document.body.appendChild(balloon);
    }

    // Adding CSS for the animation of the balloons floating up
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes floatBalloon {
            0% { bottom: 0; opacity: 1; }
            100% { bottom: 100%; opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

function createConfetti() {
    const confettiCount = 30;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.top = '0';  // Start from top
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#FF6347', '#1E90FF', '#FFD700', '#8A2BE2'][Math.floor(Math.random() * 4)];
        confetti.style.opacity = Math.random();
        confetti.style.animation = `fallConfetti ${Math.random() * 2 + 2}s linear infinite`;

        document.body.appendChild(confetti);
    }

    // Adding CSS for confetti falling animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fallConfetti {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

function createFireworks() {
    const firework = document.createElement('div');
    firework.style.position = 'absolute';
    firework.style.bottom = '0';
    firework.style.left = `${Math.random() * 100}%`; // Random horizontal position
    firework.style.width = '30px';
    firework.style.height = '30px';
    firework.style.backgroundColor = getRandomColor(); // Random color
    firework.style.borderRadius = '50%';
    firework.style.animation = `explodeFirework 1s ease-out`;

    document.body.appendChild(firework);

    firework.addEventListener('animationend', () => {
        firework.remove();
    });

    // Adding CSS for firework explosion animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes explodeFirework {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(3); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

function getRandomColor() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
}
