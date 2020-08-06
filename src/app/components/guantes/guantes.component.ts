import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { GuantesService, Guantes } from '../../services/guantes.service';

@Component({
  selector: 'app-guantes',
  templateUrl: './guantes.component.html',
  styleUrls: ['./guantes.component.css']
})
export class GuantesComponent implements OnInit {

  guantes:Guantes[] = [];

  constructor( private guantesService: GuantesService) { }

  ngOnInit(): void {
    this.guantes = this.guantesService.getGuantes();
  }

}
