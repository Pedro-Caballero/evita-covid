import { Component, OnInit } from '@angular/core';
import { VariosService, Varios } from '../../services/varios.service';

@Component({
  selector: 'app-varios',
  templateUrl: './varios.component.html',
  styleUrls: ['./varios.component.css']
})
export class VariosComponent implements OnInit {

  varios: Varios[] = [];

  constructor(private variosService: VariosService) { }

  ngOnInit(): void {
    this.varios = this.variosService.getVarios();
  }
}
