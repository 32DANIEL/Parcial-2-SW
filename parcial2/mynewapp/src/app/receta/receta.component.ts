import { Component, OnInit } from '@angular/core';
import { Receta } from './receta'
import { RecetaService } from './receta.service';


@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css'],
})

export class RecetaComponent implements OnInit {
  recetas: Array<Receta> = [];
  selectedReceta !: Receta;
  selected = false;

  constructor(private recetaService: RecetaService) {}

  getRecetas() {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    })
  }

  onSelected(receta: Receta) {
    this.selected = true;
    this.selectedReceta = receta;
  }
  ngOnInit(){
      this.getRecetas();
  }
}
