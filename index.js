//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGES
const messageNotification = document.querySelector("#message-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".messages");
const messageSearch = document.querySelector("#message-search");

// THEME 
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')



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
    themeModal.style.display = 'grid'
}

//closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
    }
}

//closeModal
themeModal.addEventListener('click', closeThemeModal)

//openModal
theme.addEventListener('click', openThemeModal)