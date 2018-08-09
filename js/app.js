// grabbing all relevant page elements for future use
let catList = document.getElementById("list-details");
let catImage = document.getElementById("image-container");
let catName = document.getElementById("cat-name");
let catCount = document.getElementById("clicker-counter");
let x = 0;

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

function emptyCard(){
  catName.innerText = "";
  catImage.innerHTML = "";
  catCount.innerText = "";
}

function renderCard(){
  emptyCard();
  catName.innerText = allCats[x].name;
  catImage.innerHTML += "<img src="+allCats[x].picture+" />";
  catCount.innerText = allCats[x].clickCount;
}

catImage.addEventListener("click", function(){
  allCats[x].clickCount +=1;
  console.log("click");
  catCount.innerText = allCats[x].clickCount;
})

let catArray = document.getElementsByTagName("li");
