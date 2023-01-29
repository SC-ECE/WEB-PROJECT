// Sidebar
const menuItems = document.querySelectorAll(".menu-item");
// Messages
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

// fontSizes
const fontSizes = document.querySelectorAll(".choose-size span");

// html root element where the css variables are
var root = document.querySelector(":root");

// color pallate
const colorPalatte = document.querySelectorAll(".choose-color span");

// Background Color Spans

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// Remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
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

// ================ Messages ================

// searches chats

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    console.log(chat);
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};
// search chat
messageSearch.addEventListener("keyup", searchMessage);

// Highlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// Theme/display customization

// opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// closes modals
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

// ======= FONTS ========

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
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
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    // changing the root html element font-size
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// change primary color

// remove actve class from colors
const removeActiveColorClass = () => {
  colorPalatte.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

colorPalatte.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;

    removeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// theme BACKGROUND Values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);

  root.style.setProperty("--white-color-lightness", whiteColorLightness);

  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  Bg1.classList.add("active");

  // remove active class form the others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  console.log("object");
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  Bg2.classList.add("active");

  // remove active class form the others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  Bg3.classList.add("active");

  // remove active class form the others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
