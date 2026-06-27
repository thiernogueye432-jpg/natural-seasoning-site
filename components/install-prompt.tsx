"use client"

import { useEffect, useState } from "react"
import { Download, X, Share, Plus } from "lucide-react"
import { usePwaInstall } from "@/hooks/use-pwa-install"

export function InstallPrompt() {
  const { canInstall, isIOS, isStandalone, promptInstall } = usePwaInstall()
  const [visible, setVisible] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  useEffect(() => {
    if (isStandalone) return
    if (sessionStorage.getItem("nokoss-install-dismissed") === "true") return
    // Afficher la bannière sur iOS, ou quand l'installation Android est possible
    if (isIOS || canInstall) {
      setVisible(true)
    }
  }, [isIOS, canInstall, isStandalone])

  const handleInstall = async () => {
    if (isIOS) {
      setShowGuide((v) => !v)
      return
    }
    const result = await promptInstall()
    if (result === "accepted") {
      setVisible(false)
    } else if (result === "unavailable" || result === "error") {
      setShowGuide(true)
    }
  }

  const handleClose = () => {
    setVisible(false)
    setShowGuide(false)
    sessionStorage.setItem("nokoss-install-dismissed", "true")
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-card border border-border rounded-sm shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
            <Download className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-base text-foreground mb-1">
              Installer l&apos;application NOKOSS
            </h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Ajoutez NOKOSS à votre écran d&apos;accueil pour commander plus rapidement.
            </p>

            {isIOS && showGuide && (
              <div className="mt-3 text-sm text-muted-foreground font-sans space-y-2">
                <p className="flex items-center gap-2">
                  <span>1. Appuyez sur</span>
                  <Share className="w-4 h-4 text-primary inline" />
                  <span>(Partager)</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>2. Choisissez</span>
                  <Plus className="w-4 h-4 text-primary inline" />
                  <span>« Sur l&apos;écran d&apos;accueil »</span>
                </p>
              </div>
            )}

            {!isIOS && showGuide && (
              <div className="mt-3 text-sm text-muted-foreground font-sans space-y-2">
                <p>1. Ouvrez le menu du navigateur (⋮ en haut à droite)</p>
                <p>2. Choisissez « Installer l&apos;application » ou « Ajouter à l&apos;écran d&apos;accueil »</p>
              </div>
            )}

            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleInstall}
                className="px-4 py-2 text-xs tracking-widest uppercase bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors font-sans"
              >
                {isIOS ? (showGuide ? "Masquer" : "Comment faire ?") : "Installer"}
              </button>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
