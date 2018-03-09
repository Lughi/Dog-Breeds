var generateList = document.getElementById("getBreeds");
var breeds = document.getElementById("breedList");
var breedName 
generateList.addEventListener("click", showBreeds);

function showBreeds() {
  var myRequest = new XMLHttpRequest();

  myRequest.addEventListener("load", function getBreedPhotos(e) {
      var myRequestAsText = e.target.response;
      var myResponseAsAJSON = JSON.parse(myRequestAsText);
      addBreedList(myResponseAsAJSON.message)
breedName = myResponseAsAJSON.message
      console.log(myResponseAsAJSON.message)
    });
  myRequest.open("GET", "https://dog.ceo/api/breeds/list");
  myRequest.send();



}



function addBreedList(list) {
    for (var i = 0; i < list.length; i++) {
        breeds.innerHTML += "<p>" + list[i] + "</p>";
      }
}

generateList.addEventListener("click", showBreedsPhotos);

function showBreedsPhotos () {
    var myRequest = new XMLHttpRequest();

  myRequest.addEventListener("load", function getBreedPhotos(e) {
      var myRequestAsText = e.target.response;
      var myResponseAsAJSON = JSON.parse(myRequestAsText);
      addBreedPhotos(myResponseAsAJSON.message)
      console.log(myResponseAsAJSON.message[0])
    });
  myRequest.open("GET", "https://dog.ceo/api/breed/african/images");
  myRequest.send();
} 

// function addBreedPhotos(list) {
//     for (var i = 0; i 
//         breeds.innerHTML += "<img src="+ list[j] + "/>"
//       }}
// }

