import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: any[] = [];

  activarRegion(region:string){
    this.regionActiva = region;
    this.paisService.buscarPorRegion(region)
      .subscribe(paises => {
          this.paises = paises;
      })
  }

  constructor(private paisService:PaisService) { }



}
