import { Component, OnInit } from '@angular/core';
import { TermometrosService, Termometros } from '../../services/termometros.service';

@Component({
  selector: 'app-termometros',
  templateUrl: './termometros.component.html',
  styleUrls: ['./termometros.component.css']
})
export class TermometrosComponent implements OnInit {

  termometros: Termometros[] = [];

  constructor(private termometrosService: TermometrosService) { }

  ngOnInit(): void {
    this.termometros = this.termometrosService.getTemometros();
  }

}
