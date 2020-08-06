import { Component, OnInit } from '@angular/core';
import { LentesService, Lentes } from '../../services/lentes.service';

@Component({
  selector: 'app-lentes',
  templateUrl: './lentes.component.html',
  styleUrls: ['./lentes.component.css']
})
export class LentesComponent implements OnInit {

  lentes: Lentes[] = [];

  constructor(private lentesService: LentesService) { }

  ngOnInit(): void {
    this.lentes = this.lentesService.getLentes();
  }

}
