import { Component } from '@angular/core';
import {Projet} from "../../models/Projet";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  projets: Projet[] = [

    // 🔒 PROJETS PROFESSIONNELS
    {
      titre: 'Gestion de parc automobile',
      description: 'Conception et développement complet d’une application métier pour la gestion du parc automobile de La Poste.\nL’application couvre l’ensemble du cycle métier avec des tableaux de bord adaptés aux profils utilisateurs :.\nDéploiement de l’application sur un serveur de test Apache Tomcat.',
      technologies: [
        "Angular",
        "PrimeNG",
        "Keycloak",
        "Springboot",
        "MySQL"
      ],
      fonctionnalites:['Gestion des paramètres','Gestion des conducteurs', 'Gestion des vehicules', 'Gestion des cartes carburants', 'Gestion des bons carburants','Gestion des  missions', 'Gestion des sinistres',' Gestion des contrats'],
      type: "profesionnel",
      githubUrl: undefined, // Code confidentiel
      demoUrl: undefined,   // Application interne
      image: "assets/images/projets/patrimoine-poste.png"
    },
    {
      titre: 'Gestion du patrimoine immobilier',
      description: 'Conception et développement complet d’une application métier pour la gestion du patrimoine immobilier de La Poste.\nL’application couvre l’ensemble du cycle métier avec des tableaux de bord adaptés aux profils utilisateurs.\nDéploiement de l’application sur un serveur de test Apache Tomcat.',
      technologies: [
        "Angular",
        "PrimeNG",
        "Keycloak",
        "Springboot",
        "MySQL",
      ], fonctionnalites:['Gestion des paramètres','Gestion des biens immobiliers', 'Gestion des demandes', 'Gestion des contrats', 'Gestion des facturation', 'paiements et reporting'],
      type: "profesionnel",
      githubUrl: undefined, // Code confidentiel
      demoUrl: undefined,   // Application interne
      image: "assets/images/projets/patrimoine-poste.png"
    },
    {
      titre: 'JOTNACI',
      description: 'Système de\"envois de colis avec validation et rôles.Fonctionnalités principales :\n•',
      technologies: [ "Angular",
        "PrimeNG",
        "Keycloak",
        "Springboot",
        "MySQL"],
      fonctionnalites:['Gestion des paramètres', 'Envoi de colis', 'réception de colis', 'expédition au centre de tri','expédition au bureau destinataire',
'Réception du bureau destinataire', 'Livraision','location de véhicules'],
      type: 'profesionnel'
    },
    {
      titre: 'Gestion de stock',
      description: 'Système de gestion des stocks des bureaux de poste avec validation et rôles• ',
      technologies: [ "Angular",
        "PrimeNG",
        "Keycloak",
        "Springboot",
        "MySQL"],
      fonctionnalites:['Gestion des paramètres',' commande de produits', 'retour de produits, vente de produits','Amélioration continue de l’interface utilisateur', 'Support et accompagnement des utilisateurs'],
      type: 'profesionnel'
    },

    // 🌍 PROJETS PERSONNELS
    {
      titre: 'Portfolio personnel',
      description: 'Portfolio développé avec Angular et déployé sur GitHub Pages.',
      technologies: ['Angular'],
      fonctionnalites:[],
      type: 'personnel',
      githubUrl: 'https://github.com/mbayangndao1'
    },
    {
      titre: 'E-services',
      description: 'API REST avec authentification JWT.',
      technologies: ['Angular', 'Spring Boot','MySql'],
      fonctionnalites:['Gestion des comptes utilisateurs','Gestion des catégories','Gestion des commandes','Gestion des commentaires','Gestion des services','Disponibilité','Role','StatutCommande','Gestion des utilisateurs' ],
      type: 'personnel',
      githubUrl: 'https://github.com/mbayangndao1'
    },
    {
      titre: 'E-vote',
      description: 'API REST avec authentification JWT.',
      technologies: ['Angular', 'Django','Postgress'],
      fonctionnalites:[' Authentification des utilisateurs  ','Gestion des candidats','Gestion des citoyens','Gestion des électeurs','Gestion des élections','Gestion des lieux','Gestion des votes',' Participation au vote et visualisation des résultats en temps réel'],
      type: 'personnel',
      githubUrl: 'https://github.com/mbayangndao1'
    }
  ];

  projetProfessionnels = this.projets.filter(p => p.type === 'profesionnel');
  projetPersonnels = this.projets.filter(p => p.type === 'personnel');

}
