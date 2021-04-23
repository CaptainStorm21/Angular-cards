import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: "assets/images/tree.jpg",
      handle: '@NeatTree',
      alt: 'Awesome Tree',
      action: 'I saw this incredible giangtic tree'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: "assets/images/mountain.jpg",
      handle: '@SnowyMountain',
      alt: 'Snowy Mountain',
      action: 'Time to ski'
    },
    {
      title: 'Pacific Ocean',
      imageUrl: "assets/images/ocean.jpg",
      handle: '@Pacific Ocean',
      alt: 'Pacific Ocean',
      action: 'Dude, where is my surf board?'
    },
    {
      title: 'Erupting Volcano',
      imageUrl: "assets/images/volcano.jpg",
      handle: '@EruptingVolcano',
      alt: 'Volcano is erupting',
      action: 'Volcano is erupting. Any guesses where?'
    }
  ]
}
