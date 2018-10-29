import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-articulosbusqueda',
  templateUrl: './articulosbusqueda.component.html',
  styleUrls: ['./articulosbusqueda.component.css'],
})
export class ArticulosbusquedaComponent implements OnInit {
  selected = 'option2';
  listacategorias: string[] = ['categoria 1', 'categoria 2', 'categoria 3', 'categoria 4', 'categoria 5', 'categoria 6', 'categoria 7', 'categoria 8', 'categoria 9', 'categoria 10'];
  listaarticulos: string[]=['Articulo 1','Articulo 2','Articulo 3','Articulo 4','Articulo 5','Articulo 6','Articulo 5','Articulo 6','Articulo 7'];
  //slider
  value = 0;
  min = 0;
  max=10000;
  autoTicks = false;
  showTicks = false;
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  //
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;
  //fin slider

  constructor() { }
  
  ngOnInit() {
  }
}
