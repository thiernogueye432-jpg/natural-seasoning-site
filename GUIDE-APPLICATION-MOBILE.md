# Guide : Publier NOKOSS sur Google Play et App Store

Ce guide vous explique comment transformer le site en application native téléchargeable
sur les stores grâce à **Capacitor** (déjà configuré dans le projet).

> Important : la compilation finale d'une app native NE PEUT PAS se faire dans v0.
> Elle nécessite votre ordinateur avec Android Studio (pour Android) et/ou un Mac avec
> Xcode (pour iPhone). Toute la configuration est déjà prête, il ne reste que les étapes
> sur votre machine.

---

## Pré-requis

1. **Télécharger le projet** : dans v0, cliquez sur les trois points en haut à droite du
   bloc de code → « Download ZIP », OU connectez le projet à GitHub puis clonez-le.
2. Installer **Node.js** (https://nodejs.org).
3. Pour Android : installer **Android Studio** (https://developer.android.com/studio).
4. Pour iPhone : un **Mac** avec **Xcode** (App Store).
5. **Publier le site** au préalable via le bouton Publish, sur le domaine
   `https://senuniversalnokoss.com`. L'app charge ce site en ligne.

---

## Étape 1 — Installer les dépendances

Ouvrez un terminal dans le dossier du projet :

```bash
pnpm install
```

## Étape 2 — Ajouter les plateformes

```bash
# Android
npx cap add android

# iOS (uniquement sur Mac)
npx cap add ios
```

## Étape 3 — Synchroniser la configuration

```bash
npx cap sync
```

## Étape 4 — Ouvrir et compiler

### Android (Google Play)

```bash
npx cap open android
```

- Android Studio s'ouvre.
- Pour tester : cliquez sur **Run** (un émulateur ou téléphone branché).
- Pour publier : menu **Build → Generate Signed Bundle / APK → Android App Bundle (.aab)**.
- Créez une clé de signature quand c'est demandé (gardez-la précieusement).
- Le fichier `.aab` généré est ce que vous téléversez sur la
  **Google Play Console** (https://play.google.com/console — compte développeur 25 $, une seule fois).

### iOS (App Store)

```bash
npx cap open ios
```

- Xcode s'ouvre.
- Sélectionnez votre équipe de développement (compte Apple Developer 99 $/an).
- Menu **Product → Archive** puis **Distribute App** pour envoyer vers
  **App Store Connect** (https://appstoreconnect.apple.com).

---

## Mises à jour du contenu

Comme l'app charge `https://senuniversalnokoss.com`, **toute modification du site
publiée via v0 apparaît automatiquement dans l'app** — sans avoir à recompiler ni
republier sur les stores.

Vous ne devez recompiler l'app que si vous changez :
- l'icône, le nom ou les couleurs de l'app,
- la configuration Capacitor (`capacitor.config.ts`),
- une version d'Android/iOS requise par les stores.

---

## Icônes et écran de démarrage (déjà prêts)

Le dossier `resources/` contient déjà les deux images sources nécessaires :
- `resources/icon.png` — l'icône de l'app (1024x1024)
- `resources/splash.png` — l'écran de démarrage

Pour générer automatiquement TOUTES les tailles d'icônes et de splash screens
requises par Android et iOS, lancez après l'étape 2 (`npx cap add ...`) :

```bash
pnpm add -D @capacitor/assets
npx capacitor-assets generate
```

Cette commande crée et place automatiquement toutes les ressources dans les
dossiers `android/` et `ios/`. Lancez ensuite `npx cap sync`.

---

## Éléments requis pour les fiches des stores

Les stores demandent ces informations lors de la soumission. Tout est prêt à copier :

### Politique de confidentialité (obligatoire)
URL : `https://senuniversalnokoss.com/confidentialite`

### Nom de l'application
`Sén Universal NOKOSS`

### Description courte (max 80 caractères)
`Assaisonnements 100% naturels en poudre, fabriqués au Sénégal.`

### Description longue (à coller dans la fiche)
```
Sén Universal NOKOSS, le goût naturel au coeur de votre cuisine.

Découvrez nos assaisonnements 100% naturels en poudre, sans additifs
chimiques, fabriqués au Sénégal à partir de ressources agricoles locales.

Nos produits :
- Sachet 100g
- Sachet 500g (format familial)
- Cubes naturels (alternative saine aux cubes industriels)
- Pack Découverte

Commandez facilement et faites-vous livrer partout au Sénégal.
Paiement par Wave, Orange Money ou carte bancaire.

Contact : +221 77 895 53 43
```

### Catégorie
Alimentation et boissons (Food & Drink)

### Captures d'écran (à fournir)
Prenez 2 à 5 captures d'écran de l'app sur votre téléphone (page d'accueil,
produits, panier). Tailles recommandées :
- Android : 1080 x 1920 px
- iPhone : 1290 x 2796 px (iPhone 15 Pro Max)

### Coordonnées de support
- E-mail : thiernogueye432@gmail.com
- Téléphone : +221 77 895 53 43

---

## Récapitulatif des coûts

| Plateforme    | Compte développeur        | Outil requis            |
|---------------|---------------------------|-------------------------|
| Google Play   | 25 $ (paiement unique)    | Android Studio          |
| App Store     | 99 $/an                   | Mac + Xcode             |

Pour toute question, contactez le support de chaque store ou un développeur mobile.
