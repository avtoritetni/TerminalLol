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

    // Command handling
    if (command === "hello") {
        typeText("Hello, User!\n", () => {});
    } else if (command === "clear") {
        outputDiv.innerHTML = ""; // Clear terminal output
    } else if (command === "help") {
        typeText("Available commands: hello, clear, help, time, date, dir, joke, fortune, spin, echo, color, flip, memes, weather, quote, random, balloons, confetti, fireworks, stars, venom, happy, troll, laugh, dance, cookie, fart, insult, blame, spaceship\n", () => {});
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
    } else if (command === "laugh") {
        const laughs = [
            "Ha ha ha! 😂",
            "Ho ho ho! 🎅",
            "Hee hee hee! 😄",
            "Mwahahahaha! 😈"
        ];
        const randomLaugh = laughs[Math.floor(Math.random() * laughs.length)];
        typeText(`${randomLaugh}\n`, () => {});
    } else if (command === "cookie") {
        typeText("🍪 Here's a cookie for you! But be careful, it might disappear when you least expect it! 🤭\n", () => {});
    } else if (command === "fart") {
        typeText("💨 Pfffft! Oops, sorry about that! 😅\n", () => {});
    } else if (command === "insult") {
        const insults = [
            "You're like a cloud. When you disappear, it’s a beautiful day. ☁️",
            "If I had a nickel for every time you said something smart, I'd be poor. 💸",
            "You're proof that even evolution can have a bad day. 🦖",
            "You're like a software update. Whenever I see you, I think, 'Not now!' ⏳"
        ];
        const randomInsult = insults[Math.floor(Math.random() * insults.length)];
        typeText(`Insult: ${randomInsult}\n`, () => {});
    } else if (command === "blame") {
        typeText("Blame it on the system! 🤷‍♂️ It's always the system's fault. 💻\n", () => {});
    } else if (command === "spaceship") {
        typeText("🚀 Launching spaceship... Wait, where's the fuel? Looks like we're stuck on Earth... for now. 🌍\n", () => {});
    } else if (command === "fortune") {
        const fortunes = [
            "You will find a cookie in your future. 🍪",
            "Beware of ducks... they're plotting something. 🦆",
            "Your destiny is to be the greatest couch potato. 🛋️",
            "A mysterious package will arrive soon... it might be a pizza. 🍕"
        ];
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        typeText(`Your fortune: ${randomFortune}\n`, () => {});
    } else if (command === "dance") {
        typeText("💃🕺 Let's get the party started! *Dance moves activated* 💃🕺\n", () => {});
    } else if (command === "flip") {
        typeText("Flipping... *Flips entire terminal upside down* 🔄 Oh wait, I forgot how to flip back. 🤔\n", () => {});
    } else if (command === "memes") {
        typeText("Here’s a meme for you: 'Why don’t skeletons fight each other? They don’t have the guts!' 💀\n", () => {});
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
    } else {
        typeText("Command not recognized. Type 'help' for a list of commands.\n", () => {});
    }

    // Scroll to the bottom of the output after the text finishes
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
