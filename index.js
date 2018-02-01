var curPrompt;

var responses

setup = function() {
  curPrompt = "How are you doing today?";
}

var draw = function() {
  curPrompt = respond(talk(curPrompt));
};

var talk = function(p) {var input = prompt(p); return input;};

var respond = function(input) {
  if (input == "hi" || input.toLowerCase() == "hello" || input == "Hi") {
    return "Yo home dogg";
  } else if (input == "what" || input == "What") {
    return "ther aint no kwestonz 2 be asked brutha";
  } else if (input == "stop"){
    exit();
  } else {
    return input + "? I aint understood you. Loosa.";
  }
}