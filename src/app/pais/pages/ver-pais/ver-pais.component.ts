import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
    
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id);
      this.PaisService.getPaisPorAlpha(id).subscribe( pais =>{
        this.pais=pais;
      })
    }
    );
  }

}
