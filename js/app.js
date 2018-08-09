// grabbing all relevant page elements for future use
let catList = document.getElementById("list-details");
let catImage = document.getElementById("image-container");
let catName = document.getElementById("cat-name");
let catCount = document.getElementById("clicker-counter");

// listing all cats information
let allCats = [
    { name: 'Mieze',
      picture: 'img/mieze.png',
      clickCount: 0
    },
    { name: 'Feathers',
      picture: 'img/feathers.png',
      clickCount: 0
    },
    { name: 'Penelope',
      picture: 'img/penelope.png',
      clickCount: 0
    },
    { name: 'Lala',
      picture: 'img/lala.png',
      clickCount: 0
    },
    { name: 'Hank',
      picture: 'img/hank.png',
      clickCount: 0
    }
  ];

window.onload = function(){
  init();
}

function init (){
  renderList();
  renderCard();
}

function renderList(){
  for (let i = 0; i < allCats.length; i++ ){
    newLi = document.createElement("li");
    newLi.innerHTML = allCats[i].name
    catList.appendChild(newLi);
    };
  }

function renderCard(){
  let starterCatName = allCats[0].name;
  let starterCatPicture = allCats[0].picture;
  let starterCatCount = allCats[0].clickCount;
  catName.innerText = starterCatName;
  catImage.innerHTML += "<img src="+starterCatPicture+" />";
  catCount.innerText = starterCatCount;
}
