const artGallery = {
    1: { title: 'wow im a cool title', author: 'Skibidi Toilet', grade: "6", caption : "hey this is a demo caption just to see how itd look la tee ta tee ta tis i ajklsdfjlkasdljkfajklsdfjlkasdljkfajklsdfjlkasdljkfajklsdfjlkasdljkfajklsdfjlkasdljkf", imageURL: "./workTypes/images/BingoPFP.jpg", coverImage: "./workTypes/images/BingoPFP.jpg"},
    2: { title: 'very unique title', author: 'Name One & Name Two', grade: "7 & 8", caption : "hey this is a demo caption just to see how itd look", imageURL: "./workTypes/images/dababy.jpg", coverImage: "./workTypes/images/dababy.jpg"},
    3: { title: 'nice art', author: 'I have an uncessarily long name', grade: "8", caption : "hey this is a demo caption just to see how itd look", imageURL: "./workTypes/images/fatdog.jpg", coverImage: "./workTypes/images/fatdog.jpg"},
    4: { title: 'egwin my beloved', author: 'Daghan', grade: "6", caption : "this is my egwin hes very cool and this caption is also very cool. also hes a test for cover images being different", imageURL: "./workTypes/images/egwin.jpg", coverImage: "./workTypes/images/squaresquirrel.jpg"}
};

const textGallery = {
    1: { title: 'Example Text 1', author: 'Brennan Wong', grade: "8", caption : "this is a short bit of text made to fill space and see how a text would look in the website.", imageURL: "./workTypes/text/exampletext1.pdf", coverImage: "./workTypes/images/dopecoverimage1.jpg"},
    2: { title: 'Example Text 2', author: 'Real Person', grade: "6", caption : "this is a short bit of text made to fill space and see how a text would look in the website. but this time i lengthened it for more pages", imageURL: "./workTypes/text/longerexampletext.pdf", coverImage: "./workTypes/images/dopecoverimage2.jpg"},
};

const hybridGallery = {

};

const Galleries = [
  artGallery,
  textGallery,
  hybridGallery,
];

function loadPage(type, id) {
  const targetWindow = window.open('gallery.html');

  targetWindow.onload = function() {

  targetWindow.document.getElementById("gimage").src = (Galleries[type])[id].imageURL + '#toolbar=0';
  targetWindow.document.getElementById("gtitle").innerHTML = (Galleries[type])[id].title;
  targetWindow.document.getElementById("gauthor").innerHTML = (Galleries[type])[id].author + ', Grade ' + (Galleries[type])[id].grade;
  targetWindow.document.getElementById("gcaption").innerHTML = (Galleries[type])[id].caption;
  };
};

function fillArt(type) {
  const length = Object.keys(Galleries[type]).length;

  for (let i=1; i<length+1; i++) {
    console.log((Galleries[type])[i]);

    document.getElementById("gallerygrid").innerHTML += `<div class="artwhole" onclick="loadPage(${type + ", " + i});"> \
                <img class="Art" src="${(Galleries[type])[i].coverImage}">    \
                <div class="captionback">\
                    <p class="title">${(Galleries[type])[i].title}</p>\
                    <p class="author">${(Galleries[type])[i].author + ", Grade " + (Galleries[type])[i].grade}</p>\
                </div>\
            </div>`;
  };
};
