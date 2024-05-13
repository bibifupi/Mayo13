import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ViviendaService } from '../vivienda.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Vivienda } from '../_modelo/Vivienda';

@Component({
  selector: 'app-alta-vivienda',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './alta-vivienda.component.html',
  styleUrl: './alta-vivienda.component.css'
})
export class AltaViviendaComponent {

  alta: FormGroup;
  id: number = 0;
  edicion: boolean = false;
  constructor(private servicio: ViviendaService,
    private route: ActivatedRoute,
    private router: Router) {
    this.alta = new FormGroup({
      'idVivienda': new FormControl(0),
      'gasNatural': new FormControl(false),
      'nHabitaciones': new FormControl(0),
      'piso': new FormControl(0),
      'tamano': new FormControl(0)

    });
  }
  ngOnInit(): void {
    this.route.params
      .subscribe(data => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.formaFormulario();

      });
  }

  formaFormulario() {
    if (this.edicion) {
      this.servicio.listarPorId(this.id)

        .subscribe(data => {
            this.alta = new FormGroup({
              'idVivienda': new FormControl(data.idVivienda),
              'gasNatural': new FormControl(data.gasNatural),
              'nHabitaciones': new FormControl(data.nHabitaciones),
              'piso': new FormControl(data.piso),
              'tamano': new FormControl(data.tamano)
            });
          })
      }
    }
  


enviarFormulario(){
    let v: Vivienda = {
      'idVivienda': this.alta.value['idVivienda'],
      'gasNatural': this.alta.value['gasNatural'],
      'nHabitaciones': this.alta.value['nHabitaciones'],
      'piso': this.alta.value['piso'],
      'tamano': this.alta.value['tamano']
    }
    if (this.edicion) {
      this.servicio.actualizar(v)
        .subscribe(() => {
          this.servicio.listar()
            .subscribe(data => {
              this.servicio.viviendaCambio.next(data);
            });
        });
    } else {
      this.servicio.alta(v)
        .subscribe(() => {
          this.servicio.listar()
            .subscribe(data => {
              this.servicio.viviendaCambio.next(data);
            });
        });
    }
    this.router.navigate([''])

}

}
