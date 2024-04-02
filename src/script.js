function waitingInterpretation() {
  new Typewriter("#interpretation", {
    strings: `Finding meanings to your dream...`,
    autoStart: true,
  });
  interpretDream();
}

function interpretDream() {
  let key = "ot351f8facfc3d0f699be8054cb84374";
  let prompt = "cat with a hat";
  let context =
    "you are a dream interpreter expert. Provide a concise interpretation of the prompt as best as you can even if the user gave one keyword. The format should be one or two emotes followed by a few keywords relating to the meaning then an underscore followed by the meaning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log(apiUrl);
  axios.get(apiUrl).then((response) => showAnswer(prompt, response)); //callback
  console.log("dream meaning found");
}

function showAnswer(prompt, response) {
  console.log(response.data.answer);
  new Typewriter("#interpretation", {
    strings: `${prompt} - ${response.data.answer}`,
    autoStart: true,
  });
}

document
  .getElementById("interpret-btn")
  .addEventListener("click", waitingInterpretation);
