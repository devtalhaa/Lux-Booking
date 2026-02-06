'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import enMessages from '../i18n/locales/en.json';
import esMessages from '../i18n/locales/es.json';

type Locale = 'en' | 'es';

type Messages = typeof enMessages;

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const messages: Record<Locale, Messages> = {
    en: enMessages,
    es: esMessages,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<Locale>('en');

    const t = useCallback((key: string): string => {
        const keys = key.split('.');
        let value: unknown = messages[locale];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = (value as Record<string, unknown>)[k];
            } else {
                return key; // Return the key if translation not found
            }
        }

        return typeof value === 'string' ? value : key;
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
