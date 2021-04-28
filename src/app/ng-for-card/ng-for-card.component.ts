import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-for-card',
  templateUrl: './ng-for-card.component.html',
  styleUrls: ['./ng-for-card.component.css']
})
export class NgForCardComponent implements OnInit {
  @Input() book = '';
  @Input() author = '';
  @Input() year = '';
  @Input() inStock = '';
  @Input() description = '';
  @Input() imageUrl = '';
  @Input() language = '';

  constructor() { }

  ngOnInit(): void {
  }

}

