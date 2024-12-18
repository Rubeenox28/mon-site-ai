document.getElementById("send").addEventListener("click", function() {
    var input = document.getElementById("input").value;
    if (input !== "") {
        document.getElementById("chatbox").innerHTML += "<p>Toi: " + input + "</p>";
        aiResponse(input);
        document.getElementById("input").value = "";
    }
});

function aiResponse(userInput) {
    var responses = {
        "salut": "Salut! Comment puis-je t'aider aujourd'hui?",
        "ça va": "Je suis un AI, donc je vais toujours bien!",
        "merci": "De rien!",
        "au revoir": "Au revoir! À bientôt!"
    };

    var response = responses[userInput.toLowerCase()] || "Désolé, je ne comprends pas.";
    document.getElementById("chatbox").innerHTML += "<p>AI: " + response + "</p>";
}
