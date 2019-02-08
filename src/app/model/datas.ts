import { Card } from './card';
import { Timeline } from './timeline';
import { Categorie } from './Categorie';

export const CARD_DATA: Card[] = [
    {
        id: 1,
        titre: 'Windows',
        annee: 1976,
        imageUrl: 'assets/images/windows.jpg',
        description: 'Invention de Windows',
        timeline: 'Histoire du numérique'
    },
    {
        id: 2,
        titre: 'Twitter',
        annee: 2006,
        imageUrl: 'assets/images/twitter.png',
        description: 'Invention de Twitter',
        timeline: 'Histoire du numérique'
    },
    {
        id: 3,
        titre: 'Minitel',
        annee: 1980,
        imageUrl: 'assets/images/minitel.jpg',
        description: 'Invention du Minitel',
        timeline: 'Histoire du numérique'
    },
    {
        id: 4,
        titre: 'Facebook',
        annee: 2004,
        imageUrl: 'assets/images/facebook.png',
        description: 'Création de Facebook',
        timeline: 'Histoire du numérique'
    },
    {
        id: 5,
        titre: 'Botruc',
        annee: 1700,
        imageUrl: 'assets/images/botruc.jpg',
        description: 'Découverte du Botruc',
        timeline: 'Animaux fantastiques'
    },
    {
        id: 6,
        titre: 'Demiguise',
        annee: 1700,
        imageUrl: 'assets/images/demiguise.jpg',
        description: 'Découverte du Demiguise',
        timeline: 'Animaux fantastiques'
    },
    {
        id: 7,
        titre: 'Niffleur',
        annee: 1700,
        imageUrl: 'assets/images/niffleur.jpg',
        description: 'Découverte du Niffleur',
        timeline: 'Animaux fantastiques'
    }
  ];

export const TIMELINE_DATA: Timeline[] = [
    {
        id: 1,
        nom: 'Histoire du numérique',
        categorie: 'CNF',
        dateCreation: new Date(2019, 12, 4),
        dateMiseAJour: new Date(2019, 12, 4)},
    {
        id: 2,
        nom: 'Animaux fantastiques',
        categorie: 'FILMS',
        dateCreation: new Date(2019, 12, 5),
        dateMiseAJour: new Date(2019, 12, 5)}
  ];

export const CATEGORIES: Categorie[] = [
    {
        id: 1,
        nom: 'CNF',
        description: 'Connaissances Numériques Fondamentales',
        dateCreation: new Date(2019, 12, 4),
        dateMiseAJour: new Date(2019, 12, 4)},
    {
        id: 2,
        nom: 'FILMS',
        description: 'Catégorie de films',
        dateCreation: new Date(2019, 12, 4),
        dateMiseAJour: new Date(2019, 12, 4)}
    ];
