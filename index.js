//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGES
const messageNotification = document.querySelector("#message-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".messages");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelector('.choose-color span') 

// ============ SIDEBAR ===========
// remove active class from all menu items
const changeActivateItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActivateItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

//============ MESSAGE ============
//searches chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((chat) => {
    let name = chat.querySelectorAll("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

// search chat
messageSearch.addEventListener("keyup", searchMessage);

//hightlight messsages  card when messages menu item is cliked
messageNotification.addEventListener("click", () => {
  message.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    message.style.boxShadow = "none";
  }, 2000);
});

// THEME?DISPlAY CUSTOMIZATION
//opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

//closes modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

//closeModal
themeModal.addEventListener("click", closeThemeModal);

//openModal
theme.addEventListener("click", openThemeModal);

//================== FONTS ==================//

//remove active class from spans or font size selectors
const removeSizeSelctor = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelctor();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "10rem");
      root.style.setProperty("--sticky-top-right", "33rem");
    }

    //change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});
