// grabbing all relevant page elements for future use
let catList = document.getElementById("list-details");


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

// adding elements to cat list

function renderList(){
  for (let i = 0; i < allCats.length; i++ ){
    newLi = document.createElement("li");
    newLi.innerHTML = allCats[i].name
    catList.appendChild(newLi);
    };
  }
renderList();
