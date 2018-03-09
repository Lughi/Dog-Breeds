var generateList = document.getElementById("getBreeds");
var breeds = document.getElementById("breedList");
var genBreeds = document.getElementById("generatedBreeds");

showBreeds();

function showBreeds() {
  var myRequest = new XMLHttpRequest();

  myRequest.addEventListener("load", function getBreedList(e) {
    var myRequestAsText = e.target.response;
    var myResponseAsAJSON = JSON.parse(myRequestAsText);
    addBreedList(myResponseAsAJSON.message);
  });
  myRequest.open("GET", "https://dog.ceo/api/breeds/list");
  myRequest.send();
}

function addBreedList(list) {
  for (let i = 0; i < list.length; i++) {
    var myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", function getBreedPhotos(e) {
      genBreeds.innerHTML += "<p>" + list[i] + "</p>";
      var myRequestAsText = e.target.response;
      var myResponseAsAJSON = JSON.parse(myRequestAsText);
      genBreeds.innerHTML += "<img src=" + myResponseAsAJSON.message[0] + ">";
    });
    myRequest.open("GET", "https://dog.ceo/api/breed/" + list[i] + "/images");
    myRequest.send();
  }
}
