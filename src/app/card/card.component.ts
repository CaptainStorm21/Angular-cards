import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //inswtructing a child component how to receive data from parent component
  //1st. import Input on line 1

  @Input() title = '';
  @Input() imageUrl = '';
  @Input() handle = '';
  @Input() alt = '';
  @Input() action = '';

  constructor() { }

  ngOnInit(): void {
  }

}
