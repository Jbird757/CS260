<template>
  <div class="home">
    <div onload="getFact()" id="inspirational-fact">
      <h3 id="factResult"></h3>
        </div>
        <div class="container">
            <div class="text-center mt-5 red-title">
                <h1>Survey Site</h1>
                <p class="lead">High-quality surveys</p>
            </div>
            <div class="container mt-5 body-container">
                <div class="body-item-1">
                    <h1 class="content-heading">Set up a survey</h1>
                    <div>
                        <p class="content-question">How many questions in your survey?</p>
                        <input type="text" id="numQuestions">
                        <input id="qSubmit" type="submit" value="Go!"></input>
                    </div>
                </div>
            </div>

            <div id="questionGen" class="container mt-5 body-container"></div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

function getFact() {
  url = "https://uselessfacts.jsph.pl/random.json?language=en";
  fetch(url)
      .then(function(response) {
      return response.json();
      }).then(function(json) {
      console.log(json);
      const result = document.getElementById('factResult');
      result.innerHTML = json.text;
      });
}

document.getElementById("qSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const num = document.getElementById('numQuestions').value;
  let contents = "";
  if (num === "") {
    return;
  }
  for (let i = 0; i < num; i++) {
    contents += "<div class='body-item-1'>";
    contents += "<p class='content-question'>New Question (uneditable as of yet)</p>";
    contents += "<ul class='questionnaire'>";
    contents += "<li class='content-body'><a>These questions are an example only</li>";
    contents += "<li class='content-body'><a>I called an API for a random fact at the top of this page</a></li>";
    contents += "<li class='content-body'><a>Github link is at the bottom</a></li>";
    contents += "<li class='content-body'><a>Enjoy</a></li>";
    contents += "</ul>";
    contents += "</div>";
  }
  document.getElementById('questionGen').innerHTML = contents;
});

window.onload = getFact;

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
