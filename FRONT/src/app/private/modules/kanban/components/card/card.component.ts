import { Component, Input, OnInit } from '@angular/core'
import { CardModel, listCarPerType } from '../../models/card.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() listCard: CardModel[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.listCard)
  }

}
