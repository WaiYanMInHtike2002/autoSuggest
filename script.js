const ulArray = [
  {
    id: 1,
    name: "Most Popular",
  },
  {
    id: 2,
    name: "Appetizer",
  },
  {
    id: 3,
    name: "Main Dish",
  },
  {
    id: 4,
    name: "Soup",
  },
  {
    id: 5,
    name: "Salad",
  },
  {
    id: 6,
    name: "Hot Dish",
  },
  {
    id: 7,
    name: "Drink",
  },
  {
    id: 8,
    name: "Dessert",
  },
];
const menus = [
  {
    id: 1,
    name: "Mont Him Khar",
    description: "Burmese rice noodle soup with fish and soft banana plant",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844433945_mohinga.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/mohinga.jpg",
    menuCategoryIds: [1, 4, 6],
  },
  {
    id: 2,
    name: "Shan Kout Swell",
    description: "Shan noodle with chicken and Mustard",
    price: 2000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873747360_shan.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/shan.jpg",
    menuCategoryIds: [1, 5, 3],
  },
  {
    id: 3,
    name: "Laphet Tote",
    description: "Tea-leaf salad with mixed fries beans and nuts",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844451016_laphet.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/laphettote.jpg",
    menuCategoryIds: [1, 2, 5],
  },
  {
    id: 4,
    name: "Ohn Noe Kout Swell",
    description: "Rice noodle wtih coconut milk and chicken",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875560465_ohnoe.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/ohnoe.jpg",
    menuCategoryIds: [1, 2, 5],
  },
  {
    id: 5,
    name: "NanGyi Tote",
    description: "Noddle salad with chicken curry and  egg ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844722576_nangyi.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/nangyi.jpg",
    menuCategoryIds: [1, 2, 5],
  },
  {
    id: 6,
    name: "Tofu Nway",
    description: " Shan style Tofu soup.",
    price: 3500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875627104_tofunway.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tofunway.jpg",
    menuCategoryIds: [1, 3, 6],
  },
  {
    id: 7,
    name: "Tamin Si San",
    description: "Rice with peanut oil and yellow peas",
    price: 500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701846134044_photo-520.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/rice1.jpg",
    menuCategoryIds: [2, 8],
  },
  {
    id: 8,
    name: "Si Tamin",
    description: "Sticky rice with fries-dry-fish and coconut chip",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873644110_sitamin.jpg",
    assetUrl2:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873644110_sitamin.jpg",
    menuCategoryIds: [2, 8],
  },
  {
    id: 9,
    name: "Akyaw Sone",
    description:
      "Fries mixed vegetables with rice-powder,serve with tamarind sauce",
    price: 3000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701846333050_AKyawSone-7ef8e742b8c74aebb8fc4aff087f3fca.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/akyaw.jpeg",
    menuCategoryIds: [2],
  },
  {
    id: 10,
    name: "Mont lin mayer",
    description: " Burmese pancake (couple) with peanuts and salted Sesame",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873714161_lmy.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/lmy.jpg",
    menuCategoryIds: [2, 8],
  },
  {
    id: 11,
    name: "Mont Kywel Thel",
    description: "Burmese sticky brown cake with coconut chip",
    price: 2000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875598596_mont1.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/mont1.jpg",
    menuCategoryIds: [8],
  },
  {
    id: 12,
    name: "Shwe Yin Aye",
    description: "Mixed gelly with sweet coconut milk",
    price: 2500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874351631_kout.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/shweyinaye.jpeg",
    menuCategoryIds: [7, 8],
  },
  {
    id: 13,
    name: "Cho Saint",
    description: "Burmese tea with cream and evaporated milk",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874461625_tea.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tea.jpg",
    menuCategoryIds: [1, 2, 7],
  },
  {
    id: 14,
    name: "Kaw Pyan Late",
    description: "Spring-roll with vegerables inside",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845271896_sproll.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/sproll.jpg",
    menuCategoryIds: [2],
  },
  {
    id: 15,
    name: "Ham & Cheese Sandwish",
    description: "Grilled ham and cheese sandwish",
    price: 2500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845289327_hcsand.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/hcsand.jpg",
    menuCategoryIds: [2],
  },
  {
    id: 16,
    name: "Boil Eggs",
    description: "Boil eggs ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874413116_egg.jpeg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/egg.jpeg",
    menuCategoryIds: [2, 6],
  },
  {
    id: 16,
    name: "B.E.T",
    description: "fries eggs with bacon and tomato",
    price: 2000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845325397_bet.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/bet.jpg",
    menuCategoryIds: [2],
  },
  {
    id: 17,
    name: "DTH steak",
    description: "Grilled Pork steak with flat chip ",
    price: 5500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873772313_steak1.png",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/steak1.jpg",
    menuCategoryIds: [3],
  },
  {
    id: 18,
    name: "Tomato soup",
    description: "Classic tomato soup with gallic-bread ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874480687_tmtsoup.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tmtsoup.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 19,
    name: "Tomato Cream soup",
    description: "Tomato soup with cream and orzo-basil",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875540559_029e34723a299a9706ab58d1c635cb16.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tmt2.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 20,
    name: "Mushroom soup",
    description: "Mushroom soup with milk cream and sinamon",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874496814_msc.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/msc.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 21,
    name: "Carrot Soup",
    description: "Carrot soup with white cream ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844158661_carrot.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/carrot.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 22,
    name: "Rice Soup",
    description: "Rice soup with chicken ",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874987989_Screenshot%202023-12-06%20220254.png",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/rsoup1.jpg",
    menuCategoryIds: [2, 4],
  },
  {
    id: 23,
    name: "Orange Juice",
    description: "Fresh orange juice with orange slice",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875076205_Screenshot%202023-12-06%20220417.png",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/orange.jpg",
    menuCategoryIds: [7],
  },
  {
    id: 24,
    name: "Watermelon Juice",
    description: "Fresh Watermelon juice with Watermelon slice",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875441618_85649244ed9724c534d1ba28656745c8.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/wm.jpg",
    menuCategoryIds: [7],
  },
  {
    id: 25,
    name: "Avocado Juice",
    description: "Fresh Avocado juice with Avocados",
    price: 2000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845343058_juice1.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/juice1.jpg",
    menuCategoryIds: [7],
  },
  {
    id: 26,
    name: "stewberry Juice",
    description: "Fresh stewberry juice with stewberry",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873686537_stew.png",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/stew.png",
    menuCategoryIds: [7],
  },
  {
    id: 27,
    name: "Tamarind Juice",
    description: " Tamarind juice with burmese brown sugar",
    price: 1000,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875102003_tamarind.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tamarind.jpg",
    menuCategoryIds: [7],
  },
  {
    id: 28,
    name: "French Fries",
    description: "serve with Mayonnaise and Ketchup",
    price: 1500,
    assetUrl:
      "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701886026173_french-fries.jpg",
    assetUrl2:
      "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/ff.jpg",
    menuCategoryIds: [1, 2],
  },
];

const ulContainerTag = document.querySelector(".ulContainer");
const inputSearchTag = document.querySelector(".inputSearch");
const infoContainerTag = document.querySelector(".infoContainer");
const detailInfoTag = document.querySelector(".detailInfo");
const mostPopularTag = document.querySelector(".mostPopular");
let matchArr = [];
let liContainer;

for (let i = 0; i < ulArray.length; i++) {
  mostPopularTag.innerHtml = "";
  liContainer = document.createElement("div");
  liContainer.classList.add("liContainer");
  let isShowing = false;
  liContainer.addEventListener("click", () => {
    mostPopularTag.innerHTML = "";
    if (isShowing) {
      isShowing = true;
      mostPopularTag.style.display = "none";
      return;
    } else {
      menusFilterResult = menus.filter((item) =>
        item.menuCategoryIds.find((item) => item === i + 1)
      );
      boneFunction();
      isShowing = false;
    }
  });

  liContainer.id = "star" + i.toString();
  liContainer.append(ulArray[i].name);
  ulContainerTag.append(liContainer);
}
inputSearchTag.addEventListener("keyup", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "Enter"
  ) {
    myKeyFunction(event.key);
    return;
  }
  infoContainerTag.innerHTML = "";
  const userInput = event.target.value.toLowerCase();
  if (userInput.length === 0) {
    return;
  }
  matchArr = menus.filter((item) =>
    item.name.toLowerCase().includes(userInput)
  );
  let check = matchArr.length > 0;
  if (check) {
    for (let i = 0; i < matchArr.length; i++) {
      const mainDivTag = document.createElement("div");
      mainDivTag.id = matchArr[i].id;
      mainDivTag.classList.add("mainDiv");

      const titleTag = document.createElement("div");
      titleTag.classList.add("title");
      titleTag.append(matchArr[i].name);

      const imageTag = document.createElement("img");
      imageTag.classList.add("imageContainer");
      imageTag.src = matchArr[i].assetUrl;

      mainDivTag.append(titleTag, imageTag);
      infoContainerTag.append(mainDivTag);
    }
  }
});
let playId = -1;
const myKeyFunction = (key) => {
  if (key === "ArrowDown") {
    if (playId === matchArr.length - 1) {
      playId = -1;
      deslect();
      return;
    }
    playId += 1;
    const newCall = matchArr[playId].id;
    const backGroundDiv = document.getElementById(newCall);
    backGroundDiv.style.backgroundColor = "blue";
    backGroundDiv.firstChild.style.color = "white";
    if (playId > 0) {
      deslect();
    }
    backGroundDiv.classList.add("select");
  } else if (key === "ArrowUp") {
    if (playId === 0) {
      deslect();
      playId = -1;
      return;
    }
    playId -= 1;
    const newCall = matchArr[playId].id;
    const backGroundDiv = document.getElementById(newCall);
    backGroundDiv.style.backgroundColor = "blue";
    backGroundDiv.firstChild.style.color = "white";
    deslect();
    backGroundDiv.classList.add("select");
  } else {
    inputSearchTag.value = "";
    const newCall = matchArr[playId].id;
    const filterResult = matchArr.filter((item) => item.id === newCall);

    const filterImageContainer = document.createElement("div");
    const filterImage = document.createElement("img");
    filterImage.classList.add("filterImage");
    filterImage.src = filterResult[0].assetUrl;
    filterImageContainer.append(filterImage);

    const nameAndPriceContainer = document.createElement("div");
    nameAndPriceContainer.classList.add("nameAndPrice");
    const foodName = document.createElement("span");
    foodName.classList.add("foodName");
    foodName.append(filterResult[0].name);

    const foodPrice = document.createElement("span");
    foodPrice.classList.add("foodPrice");
    foodPrice.append(filterResult[0].price.toString() + "$");

    const descriptionContainer = document.createElement("p");
    descriptionContainer.classList.add("description");
    descriptionContainer.append(filterResult[0].description);

    const fontAwesomeContainer = document.createElement("div");
    const love = document.createElement("i");
    love.classList.add("fa-regular", "fa-heart", "common");
    love.append("Like");
    const star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star", "common");
    star.append(" 7.6k");
    const buy = document.createElement("i");
    buy.classList.add("fa-solid", "fa-cart-shopping", "common");
    buy.append(" Buy Now");
    fontAwesomeContainer.append(love, star, buy);

    nameAndPriceContainer.append(
      foodName,
      foodPrice,
      descriptionContainer,
      fontAwesomeContainer
    );

    detailInfoTag.append(filterImageContainer, nameAndPriceContainer);

    infoContainerTag.style.display = "none";
  }
};
const deslect = () => {
  const select = document.getElementsByClassName("select")[0];
  select.style.backgroundColor = "white";
  select.firstChild.style.color = "black";
  select.classList.remove("select");
};
let menusFilterResult;
const boneFunction = () => {
  for (let i = 0; i < menusFilterResult.length; i++) {
    const mainMostPopular = document.createElement("div");
    mainMostPopular.classList.add("mainMostPopular");
    const mainPopularImg = document.createElement("img");
    mainPopularImg.classList.add("mainPopularImg");
    mainPopularImg.src = menusFilterResult[i].assetUrl2;
    const mainPopularText = document.createElement("p");
    mainPopularText.append(menusFilterResult[i].description);
    const cart = document.createElement("i");
    cart.classList.add("fa-solid", "fa-cart-plus", "kella");
    cart.append("AddToCart");
    const detailEye = document.createElement("i");
    detailEye.classList.add("fa-solid", "fa-eye", "hella");
    detailEye.append("Detail");
    mainMostPopular.append(mainPopularImg, mainPopularText, cart, detailEye);
    mostPopularTag.append(mainMostPopular);
  }
};
