# Richesse-Uni.github.io

Site personnel (CV / portfolio) de Richesse Otsie, généré avec [Jekyll](https://jekyllrb.com/) et le thème [bulma-clean-theme](https://github.com/chrisrhymes/bulma-clean-theme), déployé automatiquement sur GitHub Pages via GitHub Actions.

## Structure

- [`index.md`](index.md) — page d'accueil
- [`parcours.md`](parcours.md) — formation, expériences, compétences
- [`_products/`](_products) — réalisations/projets
- [`outils/fiche-exploitation-journaliere.html`](outils/fiche-exploitation-journaliere.html) — outil de gestion de caisse développé pour Les Boutiques Louis-Prisque
- [`iec/`](iec) — site d'**Impact Entrepreneurs Chrétiens (IEC)**, accessible sur `/iec/`

## Site IEC (Impact Entrepreneurs Chrétiens)

- Accueil : `/iec/` — vision, sens du sigle, but (1 Pierre 4:10), Romains 8:19, aperçu des entreprises, contact.
- Nos entreprises : `/iec/filiales/` — toutes les sous-entreprises, filtrables par domaine.
- Une page par sous-entreprise : `/iec/filiales/<nom-du-fichier>/` avec sa présentation et ses offres.

**Ajouter une sous-entreprise** : copier un fichier de [`_filiales/`](_filiales) (ex. `iec-accompagnement.md`, qui contient le mode d'emploi en commentaire), le renommer et modifier les champs (`title`, `domaine`, `icone`, `statut`, `ordre`, `accroche`, `offres`). Elle apparaît automatiquement sur l'accueil, la page « Nos entreprises » et le pied de page.

**Infos générales** (slogan, e-mail, réseaux sociaux) : [`_data/iec.yml`](_data/iec.yml).

## Développement local

```
bundle install
bundle exec jekyll serve
```
