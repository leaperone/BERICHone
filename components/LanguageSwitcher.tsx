"use client";
import { Select, SelectItem } from "@heroui/react";
import { useTranslation } from "@/i18n/client";
import { languages } from "@/i18n/settings";
import { switchLocaleAction } from "@/i18n/switch-locale";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("home");

  const handleLocaleChange = (value: string) => {
    switchLocaleAction(value);
  };

  return (
    <Select
      onChange={(e) => handleLocaleChange(e.target.value)}
      defaultSelectedKeys={i18n.resolvedLanguage ? [i18n.resolvedLanguage] : []}
      placeholder="Select language">
      {languages.map((language) => (
        <SelectItem key={language.value}>{language.label}</SelectItem>
      ))}
    </Select>
  );
}
