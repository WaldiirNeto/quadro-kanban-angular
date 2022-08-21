import { Component, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { CardModel } from '../../models/card.model'
import { ModalDeleteCardComponent } from '../modal-delete-card/modal-delete-card.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() listCard: CardModel[]

  constructor(private readonly _dialog: MatDialog) { }

  public openModalDeleteCard(id: string): void {
    this._dialog.open(ModalDeleteCardComponent, {
      data: { id },
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `1000ms`,
      backdropClass: `backdropBackground`,
      height: `200px`
    })

  }
}
