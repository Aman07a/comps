import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css'],
})
export class ModulesHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Where is the sky blue?',
      content: 'The sky is blue because it is',
    },
    {
      title: 'What does an orange taste like?',
      content: 'An orange tastes likes an orange',
    },
    {
      title: 'What color is that cat?',
      content: 'The cat is an orange color',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
