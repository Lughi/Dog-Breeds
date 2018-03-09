var generateList = document.getElementById("getBreeds");
var breeds = document.getElementById("breedList");
var genBreeds = document.getElementById('generatedBreeds')

generateList.addEventListener("click", showBreeds);

function showBreeds() {
  var myRequest = new XMLHttpRequest();

  myRequest.addEventListener("load", function getBreedPhotos(e) {
    var myRequestAsText = e.target.response;
    var myResponseAsAJSON = JSON.parse(myRequestAsText);
    addBreedList(myResponseAsAJSON.message);
  });
  myRequest.open("GET", "https://dog.ceo/api/breeds/list");
  myRequest.send();
}

function addBreedList(list) {
  for (var i = 0; i < list.length; i++) {
    var myRequest = new XMLHttpRequest();
    let j = i;
    myRequest.addEventListener("load", function getBreedPhotos(e) {
      genBreeds.innerHTML += "<p>" + list[j] + "</p>";
      var myRequestAsText = e.target.response;
      var myResponseAsAJSON = JSON.parse(myRequestAsText);

      addBreedPhotos(myResponseAsAJSON.message);
    });
    myRequest.open("GET", "https://dog.ceo/api/breed/" + list[i] + "/images");
    myRequest.send();
  }
}

function addBreedPhotos(dogs) {
  genBreeds.innerHTML += "<img src=" + dogs[0] + ">";
}
