'use client'
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { type Locale, getDict, locales } from './i18n'

type I18nCtx = {
  locale: Locale
  t: Record<string, any>
  setLocale: (l: Locale) => void
}

const Ctx = createContext<I18nCtx>({ locale: 'tr', t: getDict('tr'), setLocale: () => {} })

export function I18nProvider({ children, initial = 'tr' }: { children: ReactNode; initial?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initial)
  const t = getDict(locale)

  // Sync from a previously stored preference after mount (SSR-safe: server & first client render both use `initial`).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('sureneo-locale') as Locale | null
      if (stored && locales.includes(stored)) setLocaleState((prev) => (stored !== prev ? stored : prev))
    } catch {}
  }, [])

  const setLocale = useCallback((l: Locale) => {
    if (locales.includes(l)) {
      setLocaleState(l)
      try { window.localStorage.setItem('sureneo-locale', l) } catch {}
    }
  }, [])

  return <Ctx.Provider value={{ locale, t, setLocale }}>{children}</Ctx.Provider>
}

export function useI18n() {
  return useContext(Ctx)
}
