# Richesse-Uni.github.io

Site personnel (CV / portfolio) de Richesse Otsie, généré avec [Jekyll](https://jekyllrb.com/) et le thème [bulma-clean-theme](https://github.com/chrisrhymes/bulma-clean-theme), déployé automatiquement sur GitHub Pages via GitHub Actions.

## Structure

- [`index.md`](index.md) — page d'accueil
- [`parcours.html`](parcours.html) — CV en ligne (expériences, formation, compétences…) ; **le contenu se modifie dans [`_data/cv.yml`](_data/cv.yml)**, styles dans [`assets/css/cv.css`](assets/css/cv.css)
- [`realisations.html`](realisations.html) + [`_products/`](_products) — portfolio « Mes réalisations » : un fichier par projet (champs `categorie`, `filtre` = pro / web / academique, `ordre`, `icone`, `tags`, `lien`, `image` facultative) ; styles dans [`assets/css/realisations.css`](assets/css/realisations.css)
- [`outils/fiche-exploitation-journaliere.html`](outils/fiche-exploitation-journaliere.html) — outil de gestion de caisse développé pour Les Boutiques Louis-Prisque
- [`iec/`](iec) — site d'**Impact Entrepreneurs Chrétiens (IEC)**, accessible sur `/iec/`
- [`icc-amiens/`](icc-amiens) — site de l'église locale **Impact Centre Chrétien Amiens**, accessible sur `/icc-amiens/`

## Site IEC (Impact Entrepreneurs Chrétiens)

- Accueil : `/iec/` — vision, sens du sigle, but (1 Pierre 4:10), Romains 8:19, aperçu des entreprises, contact.
- Nos entreprises : `/iec/filiales/` — toutes les sous-entreprises, filtrables par domaine.
- Une page par sous-entreprise : `/iec/filiales/<nom-du-fichier>/` avec sa présentation et ses offres.

**Ajouter une sous-entreprise** : copier un fichier de [`_filiales/`](_filiales) (ex. `iec-accompagnement.md`, qui contient le mode d'emploi en commentaire), le renommer et modifier les champs (`title`, `domaine`, `icone`, `statut`, `ordre`, `accroche`, `offres`). Elle apparaît automatiquement sur l'accueil, la page « Nos entreprises » et le pied de page.

**Infos générales** (slogan, e-mail, réseaux sociaux) : [`_data/iec.yml`](_data/iec.yml).

## Site ICC Amiens (Impact Centre Chrétien — église locale)

Page unique sur `/icc-amiens/` : accueil, qui sommes-nous, « ICC, c'est un centre de… » (12 piliers), cultes et lieu, vie d'église, première visite, dons, contact.

**Tout se modifie dans [`_data/icc_amiens.yml`](_data/icc_amiens.yml)** : adresse (une carte et un bouton « Itinéraire » apparaissent dès qu'elle est remplie), horaires des cultes, pasteurs/responsables, e-mail, téléphone, WhatsApp, réseaux sociaux, lien de dons. Un champ vide n'est pas affiché (ou affiche « à confirmer »).

Fichiers : layout [`_layouts/icc-amiens.html`](_layouts/icc-amiens.html), styles [`assets/css/icc-amiens.css`](assets/css/icc-amiens.css), images [`assets/imgs/icc-amiens/`](assets/imgs/icc-amiens).

## Développement local

```
bundle install
bundle exec jekyll serve
```
