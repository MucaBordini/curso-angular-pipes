import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Nineteen Eighty-Four',
    rating: 4.55698,
    numeroPaginas: 328,
    preco: 24.90,
    dataLancamento: new Date(1949, 7, 6)
  };

  constructor() { }

  ngOnInit(): void {
  }

}
