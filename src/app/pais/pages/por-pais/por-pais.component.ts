import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: any[] = [];

  constructor(private PaisService: PaisService) {}

  buscar(termino: string) {
    this.hayError=false;
    this.termino = termino;
    this.PaisService.buscarPais(termino).subscribe((resp) => {
      this.hayError = false;
      this.paises = resp;
    },(err) => {
      this.hayError = true;
      this.paises= [];
    });
  }

  sugerencias(termino: string) {
    this.hayError=false;
    //TODO: crear sugerencia
  }
}
