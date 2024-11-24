import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import ru from "./configs/locales/ru.json"
import uz from "./configs/locales/uz.json"

const resources = {
  "ru": {
    translation: ru,
  },
  "uz": {
    translation: uz,
  },
}

const language = localStorage.getItem("lang")
if (!language) {
  localStorage.setItem("lang", "ru")
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "ru",
    fallbackLng: "ru",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
