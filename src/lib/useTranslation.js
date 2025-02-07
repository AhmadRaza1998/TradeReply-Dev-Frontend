"use client"; // Since hooks use client-side state

import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

export const t = (key) => {
  const { t } = useTranslation();
  return t(key) || key; // Return key if translation is missing
};

// Hook to get and change language
export const useSetLanguage = () => {
  return useLanguage(); // Returns { language, changeLanguage }
};
