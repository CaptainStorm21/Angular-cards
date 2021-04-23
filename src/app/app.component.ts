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
      book: "",
      author: "",
      year: '',
      language: '',
      inStock: '10',
      description: '',
      imageUrl:''
    },
    {
      book: "",
      author: "",
      year: '',
      language: '',
      inStock: '20',
      description: '',
      imageUrl:''
    },
    {
      book: "",
      author: "",
      year: '',
      language: '',
      inStock: '0',
      description: '',
      imageUrl:''
    },
    {
      book: "",
      author: "",
      year: '',
      language: '',
      inStock: '23',
      imageUrl: '',
      description: '',
    },
    {
      book: "",
      author: "",
      year: '',
      language: '',
      inStock: '100',
      imageUrl: '',
      description: '',
    }
    ]

}
