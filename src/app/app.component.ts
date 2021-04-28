import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data for card component
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: "assets/images/nature/tree.jpg",
      handle: '@NeatTree',
      alt: 'Awesome Tree',
      action: 'I saw this incredible giangtic tree'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: "assets/images/nature/mountain.jpg",
      handle: '@SnowyMountain',
      alt: 'Snowy Mountain',
      action: 'Time to ski'
    },
    {
      title: 'Pacific Ocean',
      imageUrl: "assets/images/nature/ocean.jpg",
      handle: '@Pacific Ocean',
      alt: 'Pacific Ocean',
      action: 'Dude, where is my surf board?'
    },
    {
      title: 'Erupting Volcano',
      imageUrl: "assets/images/nature/volcano.jpg",
      handle: '@EruptingVolcano',
      alt: 'Volcano is erupting',
      action: 'Volcano is erupting. Any guesses where? maybe it is Hawaii or Japan? Can you guess?'
    }
  ]

  //data for ngFor<mat-card>
  posts_ngFor =[
    {
      book: "Twenty Thousand Leagues Under the Seas",
      author: "Jules Verne",
      year: '1872',
      language: 'English',
      inStock: '10',
      description: 'Twenty Thousand Leagues Under the Seas: A World Tour Underwater (French: Vingt mille lieues sous les mers: Tour du monde sous-marin) is a classic science fiction adventure novel by French writer Jules Verne.',
      imageUrl: "assets/images/books/thousand.jpg",
    },
    {
      book: "Around the World in Eighty Days",
      author: "Jules Verne",
      year: '1873',
      language: 'English',
      inStock: '20',
      description: 'Around the World in Eighty Days (French: Le tour du monde en quatre-vingts jours) is an adventure novel by the French writer Jules Verne, first published in French in 1872.',
      imageUrl: "assets/images/books/around.jpg",
    },
    {
      book: "Journey to the Center of the Earth",
      author: "Jules Verne",
      year: '1864',
      language: 'English',
      inStock: '0',
      description: 'Journey to the Center of the Earth (French: Voyage au centre de la Terre), also translated with the variant titles A Journey to the Centre of the Earth and A Journey into the Interior of the Earth), is a classic science fiction novel by Jules Verne.',
      imageUrl: "assets/images/books/journey.jpg",
    },
    {
      book: "De la Terre à la Lune",
      author: "Jules Verne",
      year: '1865',
      language: 'French',
      inStock: '23',
      imageUrl: "assets/images/books/from.jpg",
      description: 'De la Terre à la Lune, trajet direct en 97 heures 20 minutes est un roman danticipation de Jules Verne, paru en 1865',
    },
    {
      book: "Around the Moon",
      author: "Jules Verne",
      description: 'Around the Moon (French: Autour de la Lune, 1869), also translated as Circling the Moon and All Around the Moon, is the sequel to Jules Vernes 1865 novel, From the Earth to the Moon.',
      language: 'English',
      inStock: '100',
      imageUrl: "assets/images/books/allaround.jpg",
      year: '1873',
    }
    ]

}
