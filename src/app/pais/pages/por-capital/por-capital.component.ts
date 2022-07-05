import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: any[] = [];

  constructor(private PaisService: PaisService) {}

  buscar(termino: string) {
    this.hayError=false;
    this.termino = termino;
    this.PaisService.buscarCapital(termino).subscribe((resp) => {
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
