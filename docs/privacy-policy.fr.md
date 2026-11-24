---
title: Politique de confidentialité — HabitQuest
lang: fr
base: privacy-policy
---

# HabitQuest — Politique de confidentialité

*Dernière mise à jour : 15 novembre 2026*

HabitQuest (« l'app ») est éditée par **Battiste Boungo** (« nous »). Cette politique explique quelles données l'app collecte, pourquoi, et quels choix vous avez. Contact : **batto060504@gmail.com**.

## 1. Données collectées

| Donnée | Finalité | Stockage |
|---|---|---|
| Adresse e-mail et mot de passe (haché) | Créer et sécuriser votre compte | Supabase (authentification) |
| Si vous choisissez « Continuer avec Google » : l'adresse e-mail, le nom et le lien de photo de profil transmis par Google | Créer votre compte et vous connecter (nous gardons l'e-mail ; l'app n'utilise ni votre nom ni votre photo Google) | Supabase (authentification) |
| Pseudo, couleurs de l'avatar, niveau, XP, or, objets équipés | Faire fonctionner le jeu et montrer votre héros à vos amis | Supabase |
| Habitudes, validations, séries, notes facultatives | Suivi des habitudes | Supabase, et en cache sur votre appareil |
| Votre humeur du jour (1 à 5), seulement si vous la notez | Vous montrer, dans vos propres stats, quelles habitudes vont avec une meilleure humeur ; jamais partagée ni montrée à quelqu'un d'autre | Supabase |
| Seulement si vous utilisez Pip, le coach IA (Premium) : le nom de vos quêtes, leurs jours, leurs raisons, leurs moments et versions mini, les jours où vous les avez faites sur les 4 dernières semaines, vos séries, votre humeur et vos notes des 14 derniers jours, et ce que vous écrivez à Pip | Rédiger les conseils de Pip, quand vous ouvrez une de ses cartes ou lui écrivez | Envoyé à Anthropic pour rédiger la réponse ; les réponses et votre conversation restent sur votre appareil ; le nombre de demandes par jour est compté sur Supabase |
| Amis, duels, défis, notifications in-app | Fonctions sociales | Supabase |
| Fuseau horaire (ex. Europe/Paris) et langue de l'app | Compter les séries et limites quotidiennes selon votre jour local ; envoyer notifications et e-mails dans votre langue | Supabase |
| Plateforme utilisée (web, iPhone ou Android) et date de dernière ouverture de l'app | Statistiques d'usage globales (ex. combien de joueurs sont sur Android) ; jamais montrées aux autres joueurs | Supabase |
| Événements d'utilisation dans l'app, seulement une fois cette fonction activée : par exemple que vous avez ouvert l'écran Premium et depuis où, commencé un essai ou un achat, ou consulté un récap ; et la version d'un écran qui vous a été montrée quand nous comparons deux versions (test A/B) | Comprendre ce qui aide les joueurs et améliorer l'app ; jamais montrés aux autres joueurs, jamais vendus ni partagés | Supabase |
| Jeton de notifications push | Envoyer les rappels et notifications du jeu | Supabase |
| Réglages des notifications : heures des rappels, ton, heures calmes, notifications des amis activées ou non | Envoyer les rappels au bon moment, jamais pendant vos heures calmes | Supabase, et sur votre appareil |
| Messages envoyés au Support, avec la version de l'app, la plateforme et la langue | Vous répondre et corriger les problèmes | Supabase |
| Sur gethabitquest.com, seulement si vous rejoignez la liste d'attente : votre adresse e-mail, la langue du site et votre consentement | Vous envoyer un seul e-mail quand les apps seront disponibles | Supabase |
| Historique d'achats et statut d'abonnement | Débloquer Premium | RevenueCat, Apple / Google |
| Identifiant publicitaire (IDFA / identifiant Android) — **uniquement si vous autorisez le suivi** | Afficher des publicités aux utilisateurs gratuits | Google AdMob |

Quand l'app ou le site rencontre une erreur, un rapport technique est envoyé à Sentry pour que nous puissions la corriger : l'erreur et l'endroit du code où elle s'est produite, la version de l'app, le modèle d'appareil ou de navigateur et le système d'exploitation. Ces rapports ne contiennent ni nom, ni e-mail, ni habitudes, ni messages (la collecte de données personnelles est désactivée). Nous n'utilisons aucun SDK d'analyse tiers (les événements d'utilisation ci-dessus restent sur nos propres serveurs), et nous ne vendons pas vos données.

### Pip, le coach IA (Premium)

Pip est une intelligence artificielle. Quand vous ouvrez une de ses cartes ou lui écrivez, et seulement après votre accord dans l'app, les données listées ci-dessus sont envoyées à Anthropic, qui rédige sa réponse avec son modèle Claude. Votre adresse e-mail et votre pseudo ne sont pas envoyés. Anthropic agit comme notre sous-traitant : il n'utilise ces données que pour répondre et, selon ses conditions commerciales, ne s'en sert pas pour entraîner ses modèles ([confidentialité](https://www.anthropic.com/legal/privacy)). Anthropic est établi aux États-Unis ; le transfert est encadré par ses conditions de traitement des données, qui incluent les clauses contractuelles types de la Commission européenne. Pip ne fait que proposer : une modification de vos quêtes n'est faite que si vous la touchez. Ses réponses peuvent être fausses et ne sont pas un avis médical. Vous pouvez retirer votre accord à tout moment depuis la page de Pip ; plus rien n'est alors envoyé à Anthropic.

## 2. Publicité et suivi

L'app n'affiche ni bannière ni publicité plein écran imposée. Les utilisateurs gratuits peuvent choisir de regarder une publicité récompensée fournie par Google AdMob, par exemple pour gagner un gel de série : aucune publicité ne se lance sans que vous la demandiez. Les publicités récompensées ne sont pour l'instant disponibles que sur Android. Si elles arrivent sur iOS, l'app demandera votre autorisation (App Tracking Transparency) avant toute publicité personnalisée ; en cas de refus, seules des publicités non personnalisées seront demandées. Les utilisateurs Premium ne voient aucune publicité. Voir la [politique de confidentialité de Google](https://policies.google.com/privacy).

## 3. Sous-traitants

- **Supabase** — base de données, authentification et fonctions serveur ([confidentialité](https://supabase.com/privacy))
- **Anthropic** — réponses de Pip (coach IA, Premium), seulement si vous l'utilisez ([confidentialité](https://www.anthropic.com/legal/privacy))
- **RevenueCat** — gestion des abonnements ([confidentialité](https://www.revenuecat.com/privacy))
- **Google AdMob** — publicité ([confidentialité](https://policies.google.com/privacy))
- **Sentry** — rapports d'erreurs et de plantages, hébergés dans l'Union européenne ([confidentialité](https://sentry.io/privacy/))
- **Expo** — envoi des notifications push et hébergement du site ([confidentialité](https://expo.dev/privacy))
- **Resend** — e-mails du compte, comme la réinitialisation du mot de passe ([confidentialité](https://resend.com/legal/privacy-policy))
- **Apple / Google** — paiements via l'App Store et Google Play
- **Google** — connexion, uniquement si vous choisissez « Continuer avec Google » ([confidentialité](https://policies.google.com/privacy))

## 4. Qui voit vos données

Les autres joueurs peuvent vous trouver par votre pseudo et voir votre profil public : pseudo, avatar et objets équipés, niveau, XP, rang, or, meilleure série et date d'inscription (classement global, recherche d'amis). Vos amis voient aussi vos résultats de duels et de défis. Vos habitudes, vos notes, votre fuseau horaire, votre abonnement et vos messages au Support sont privés. Votre conversation avec Pip l'est aussi.

## 5. Conservation et suppression

Vos données sont conservées tant que votre compte existe. Les réponses de Pip et votre conversation avec lui restent sur votre appareil et sont effacées à la déconnexion ; Anthropic ne garde ce qu'il reçoit que pendant la durée limitée prévue par ses conditions. Vous pouvez supprimer votre compte à tout moment depuis **Réglages → Supprimer mon compte** : le compte et toutes les données associées sont définitivement effacés de nos serveurs. Un abonnement actif doit être résilié séparément dans les réglages de l'App Store ou de Google Play. Les adresses de la liste d'attente servent une seule fois, pour l'e-mail de sortie, puis sont supprimées ; vous pouvez demander à retirer la vôtre plus tôt, à tout moment.

## 6. Vos droits

Conformément au RGPD, vous pouvez accéder à vos données, les rectifier, les exporter, les supprimer et vous opposer à leur traitement. Écrivez-nous à **batto060504@gmail.com**. Vous pouvez aussi saisir la CNIL.

## 7. Enfants

HabitQuest ne s'adresse pas aux enfants de moins de 13 ans (moins de 14 ans en Corée du Sud, comme le fixe sa loi sur les données personnelles) et nous ne collectons pas sciemment leurs données.

## 8. Modifications

Nous mettrons cette page à jour en cas de changement et modifierons la date ci-dessus.
