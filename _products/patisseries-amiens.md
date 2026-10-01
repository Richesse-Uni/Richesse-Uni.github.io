---
title: Planificateur de gâteau d'anniversaire à Amiens
subtitle: Projet personnel — application web
description: "Annuaire des pâtisseries d'Amiens et planificateur : à partir d'une date d'anniversaire, l'outil recommande la pâtisserie la plus adaptée et calcule la date limite de commande pour que le gâteau soit prêt à temps."
layout: product
robots: noindex
---

**Contexte** : commander un gâteau d'anniversaire chez un artisan se fait souvent au dernier moment. Or un number cake ou un gâteau personnalisé demande plusieurs jours, voire deux semaines, de préparation, et certaines boutiques sont fermées le jour de la fête.

**Objectif** : anticiper. À partir de la date d'anniversaire, savoir **quelle pâtisserie d'Amiens choisir** et **avant quelle date commander** pour que le gâteau soit prêt (ou livré) à temps, et pouvoir organiser la fête quelques jours plus tôt.

**Réalisation** :
- Annuaire des pâtisseries d'Amiens (adresse, téléphone, spécialités, jours de fermeture), avec recherche, lien vers la carte et ajout de nouvelles adresses.
- Planificateur : prochaine date d'anniversaire, choix de la date de fête (le jour même, le samedi précédent ou une autre date), type de gâteau, nombre de personnes, retrait ou livraison et marge de sécurité.
- Classement des pâtisseries selon la spécialité, la faisabilité dans les délais, la livraison et les notes personnelles, avec un statut clair : dans les temps, urgent ou trop tard.
- Rétroplanning par boutique (prise de contact, date limite de commande, confirmation, retrait) et export des rappels vers l'agenda du téléphone (fichier `.ics`).
- Carnet d'anniversaires enregistré sur l'appareil, trié par date limite de commande.

**Compétences mobilisées** : analyse du besoin et des contraintes de délais (logique de rétroplanning, proche de la planification en supply chain), conception d'interface, JavaScript (calcul de dates, classement multicritère, persistance locale), intégration à un site Jekyll/GitHub Pages.

[Ouvrir l'outil en ligne →]({{ site.baseurl }}/outils/patisseries-amiens/)
