# Portfolio - Alex Martin | Développeur Full-Stack

Un portfolio moderne et responsive construit avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icônes**: React Icons

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/username/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🗂️ Structure du projet

```
src/
├── app/
│   ├── globals.css      # Styles globaux et variables CSS
│   ├── layout.tsx       # Layout principal avec Header/Footer
│   └── page.tsx         # Page d'accueil
├── components/
│   ├── Header.tsx       # Navigation responsive
│   ├── Hero.tsx         # Section héro avec CTA
│   ├── About.tsx        # Présentation et services
│   ├── Skills.tsx       # Compétences techniques avec filtres
│   ├── Projects.tsx     # Projets avec filtres par catégorie
│   ├── Experience.tsx   # Timeline des expériences
│   ├── Contact.tsx      # Formulaire de contact
│   └── Footer.tsx       # Pied de page
└── data/
    ├── profile.ts       # Informations personnelles
    ├── projects.ts      # Liste des projets
    ├── skills.ts        # Compétences techniques
    └── experiences.ts   # Expériences professionnelles
```

## ✏️ Personnalisation

### Modifier vos informations

1. **Profil** : Éditez `src/data/profile.ts` pour mettre à jour :
   - Nom, titre, bio
   - Email, téléphone, localisation
   - Liens sociaux (GitHub, LinkedIn, Twitter)
   - Services proposés

2. **Projets** : Éditez `src/data/projects.ts` pour ajouter/modifier vos projets

3. **Compétences** : Éditez `src/data/skills.ts` pour personnaliser vos technologies

4. **Expériences** : Éditez `src/data/experiences.ts` pour votre parcours professionnel

### Ajouter votre photo de profil

Placez votre photo dans `public/images/profile.jpg` et mettez à jour la référence dans `src/data/profile.ts`.

### Ajouter des images de projets

Placez vos images dans `public/images/projects/` et référencez-les dans `src/data/projects.ts`.

## 🎨 Palette de couleurs

Les couleurs sont définies dans `src/app/globals.css` :

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--background` | `#1a1a1a` | Fond principal |
| `--foreground` | `#f5f5f5` | Texte principal |
| `--primary` | `#1e3a3a` | Fond sections alternées |
| `--accent` | `#c9a227` | Accents, boutons, liens |
| `--card-bg` | `#242424` | Cartes et composants |

## 🚀 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Build statique

```bash
npm run build
npm start
```

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm start` | Serveur de production |
| `npm run lint` | Vérification ESLint |

## 📄 Licence

MIT © Alex Martin

---

**Besoin d'aide ?** Ouvrez une issue sur GitHub ou contactez-moi via le formulaire du site.
