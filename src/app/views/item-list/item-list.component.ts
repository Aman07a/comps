import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input() items = [] as any;

  constructor() {}

  ngOnInit() {
    console.log(this.items);
  }
}
