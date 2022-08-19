import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  constructor(private readonly _snackBar: MatSnackBar) { }

  open(type: 'error' | 'success' | 'info', message: string): void {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: `snack-${type}`,
      duration: 2000
    })
  }
}