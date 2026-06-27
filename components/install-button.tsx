"use client"

import { useState } from "react"
import { Download, Share, Plus, X } from "lucide-react"
import { usePwaInstall } from "@/hooks/use-pwa-install"

export function InstallButton({ className }: { className?: string }) {
  const { isIOS, isStandalone, promptInstall } = usePwaInstall()
  const [showGuide, setShowGuide] = useState(false)

  // Déjà installée : on cache le bouton
  if (isStandalone) return null

  const handleClick = async () => {
    if (isIOS) {
      setShowGuide(true)
      return
    }
    const result = await promptInstall()
    // Si le prompt natif n'est pas disponible, afficher le guide manuel
    if (result === "unavailable" || result === "error") {
      setShowGuide(true)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={
          className ??
          "inline-flex items-center gap-2 px-4 py-2 text-sm tracking-widest uppercase border border-primary text-primary rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        }
      >
        <Download className="w-4 h-4" />
        Installer l&apos;app
      </button>

      {showGuide && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-foreground/40 p-4">
          <div className="bg-card border border-border rounded-sm shadow-lg p-6 max-w-sm w-full relative">
            <button
              onClick={() => setShowGuide(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-3">
              Installer l&apos;application NOKOSS
            </h3>
            {isIOS ? (
              <div className="text-sm text-muted-foreground font-sans space-y-3">
                <p className="flex items-center gap-2">
                  <span>1. Appuyez sur</span>
                  <Share className="w-4 h-4 text-primary inline" />
                  <span>(Partager) en bas de Safari</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>2. Choisissez</span>
                  <Plus className="w-4 h-4 text-primary inline" />
                  <span>« Sur l&apos;écran d&apos;accueil »</span>
                </p>
                <p>3. Appuyez sur « Ajouter »</p>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground font-sans space-y-3">
                <p>1. Ouvrez le menu du navigateur (⋮ en haut à droite)</p>
                <p>2. Choisissez « Installer l&apos;application » ou « Ajouter à l&apos;écran d&apos;accueil »</p>
                <p>3. Confirmez l&apos;installation</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
