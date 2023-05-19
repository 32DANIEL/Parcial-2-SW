import { Component, OnInit } from '@angular/core';
import { RecetaDetail } from '../receta-detail'
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css'],
})
export class RecetaListComponent implements OnInit {
  recetas: Array<RecetaDetail> = [];
  selectedReceta!: RecetaDetail;
  selected = false;

  constructor(private recetaService: RecetaService) {}

  getRecetas() {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }

  onSelected(receta: RecetaDetail) {
    this.selected = true;
    this.selectedReceta = receta;
  }

  ngOnInit() {
    this.getRecetas();
  }
}
