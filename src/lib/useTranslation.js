'use client';

import { useTranslation } from 'react-i18next';

export const t = (key) => {
  const { t } = useTranslation();
  const translatedText = t(key);

  return translatedText === key ? key : translatedText;
};

