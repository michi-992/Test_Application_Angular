import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})

export class InfoBoxComponent {
  text = "Additional Text";
  hidden = true;
  constructor() {}
}
