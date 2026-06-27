"use client"

import { useEffect, useState, useCallback } from "react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

// Stocke l'événement au niveau du module pour qu'il soit partagé
// entre tous les composants (header, bannière) même si l'événement
// se déclenche avant leur montage.
let savedPrompt: BeforeInstallPromptEvent | null = null
const listeners = new Set<() => void>()

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault()
    savedPrompt = e as BeforeInstallPromptEvent
    listeners.forEach((l) => l())
  })
  window.addEventListener("appinstalled", () => {
    savedPrompt = null
    listeners.forEach((l) => l())
  })
}

export function usePwaInstall() {
  const [canInstall, setCanInstall] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Enregistre le service worker (requis pour l'installation)
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {})
    }

    // Mode application déjà installée
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    setIsStandalone(standalone)

    // Détection iOS (pas de beforeinstallprompt sur Safari)
    const ua = window.navigator.userAgent.toLowerCase()
    setIsIOS(/iphone|ipad|ipod/.test(ua))

    const update = () => setCanInstall(savedPrompt !== null)
    update()
    listeners.add(update)
    return () => {
      listeners.delete(update)
    }
  }, [])

  const promptInstall = useCallback(async () => {
    if (!savedPrompt) return "unavailable"
    try {
      await savedPrompt.prompt()
      const { outcome } = await savedPrompt.userChoice
      savedPrompt = null
      listeners.forEach((l) => l())
      return outcome
    } catch {
      return "error"
    }
  }, [])

  return { canInstall, isIOS, isStandalone, promptInstall }
}
