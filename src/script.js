function waitingInterpretation() {
  let interpretationarea = document.querySelector("#interpretation");
  interpretationarea.classList.remove("hidden");
  interpretationarea.innerHTML = `<div class="loader"></div>`;
  interpretDream();
}

function interpretDream() {
  let key = "ot351f8facfc3d0f699be8054cb84374";
  let prompt = document.getElementById("dreamInput").value; // Retrieve user input
  document.getElementById("dreamInput").value = "";
  let context =
    "you are a dream interpreter expert. Provide a concise interpretation of the prompt as best as you can even if the user gave one keyword. The format should be one or two emotes followed by a few keywords relating to the meaning then only one underscore here followed by the meaning which needs to be at least 30 words";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then((response) => showAnswer(prompt, response));
  console.log("dream meaning found");
}

function showAnswer(prompt, response) {
  console.log(response.data.answer);
  // Split the answer on the first underscore and insert <br> tag
  let [title, text] = response.data.answer.split("_");
  let formattedAnswer = `<b>${prompt}</b> - ${title}<br/><br/><i>${text}</i>`;

  new Typewriter("#interpretation", {
    strings: formattedAnswer,
    autoStart: true,
    delay: 30,
  });
}

document
  .getElementById("interpret-btn")
  .addEventListener("click", waitingInterpretation);
