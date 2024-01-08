// src/App.js
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/languageSwitcher";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting")}</p>
      <LanguageSwitcher />
    </div>
  );
}

export default App;
