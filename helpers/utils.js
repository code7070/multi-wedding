import Cookies from "js-cookie";

export const autoplayOptions = (delay = 1000) => ({
  delay,
  pauseOnMouseEnter: true,
  disableOnInteraction: false,
});

export const setCookie = (name, value, expires = 1) =>
  Cookies.set(name, value, { expires });

export const getCookie = (name) => Cookies.get(name);
