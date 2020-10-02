import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bh-card',
  templateUrl: './bh-card.component.html',
  styleUrls: ['./bh-card.component.css']
})
export class BhCardComponent implements OnInit {

    @Input() value: string = '-';
    @Input() subTitle: string = '-';

    constructor() { }

    ngOnInit(): void {
    }

}
