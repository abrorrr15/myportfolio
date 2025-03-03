import { create } from "zustand";

interface LanguageState {
  language: "en" | "ru";
  setLanguage: (language: "en" | "ru") => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  language: "en", //Default language
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },
}));

export default useLanguageStore;
