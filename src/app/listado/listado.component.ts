import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Vivienda } from '../_modelo/Vivienda';
import { ViviendaService } from '../vivienda.service';
import { Observable } from 'rxjs';
import { AltaViviendaComponent } from '../alta-vivienda/alta-vivienda.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [AltaViviendaComponent, RouterModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit{
  viviendas: Vivienda[]=[];
  constructor(private servicio: ViviendaService) { }
  ngOnInit(): void {
    this.servicio.viviendaCambio
      .subscribe((data) => { this.viviendas = data })

    this.servicio.listar()
      .subscribe(datos => {
        this.viviendas = datos;
      })
  }
  eliminar(id:number){
    this.servicio.eliminar(id)
      .subscribe(()=>
        {
          this.servicio.listar()
            .subscribe(data=>this.servicio.viviendaCambio.next(data))
        })

  }

  recibirAviso(listaActualizada: Observable<Vivienda[]>) {
    listaActualizada.subscribe(data => this.viviendas = data);
    this.servicio.listar()
      .subscribe(datos => {
        this.viviendas = datos;
      })
  }
}
