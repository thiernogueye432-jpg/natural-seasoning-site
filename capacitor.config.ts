import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "com.nokoss.app",
  appName: "Sén Universal NOKOSS",
  // Le dossier web par défaut (utilisé uniquement si vous faites un export statique).
  webDir: "out",
  server: {
    // L'app charge votre site publié en ligne.
    // Le contenu reste dynamique et se met à jour automatiquement sans republier l'app.
    url: "https://senuniversalnokoss.com",
    cleartext: false,
  },
  android: {
    backgroundColor: "#fdfaf5",
  },
  ios: {
    backgroundColor: "#fdfaf5",
    contentInset: "always",
  },
}

export default config
