const statements = [
    { text: "The sound of windmills causes cancer.", real: true, source: "Donald Trump, 2019" },
    { text: "We have the cleanest air in the world because of my uncle, a great scientist.", real: false, source: "Fake" },
    { text: "Nobody knew health care could be so complicated.", real: true, source: "Donald Trump, 2017" },
    { text: "If you inject sunlight into the body, it might cure COVID.", real: false, source: "Fake" },
    { text: "We will build a wall and Mexico will pay for it.", real: true, source: "Donald Trump, 2015" }
];

let currentStatement = {};

function newStatement() {
    currentStatement = statements[Math.floor(Math.random() * statements.length)];
    document.getElementById("statement").textContent = currentStatement.text;
    document.getElementById("result").textContent = "";
}

function guess(userGuess) {
    let correct = userGuess === currentStatement.real;
    document.getElementById("result").innerHTML = correct 
        ? `✅ Correct! (${currentStatement.source})`
        : `❌ Wrong! (${currentStatement.source})`;
    setTimeout(newStatement, 2000);
}

newStatement();
