import { Component, OnInit } from '@angular/core';
import { TapeteService, Tapetes } from '../../services/tapete.service';

@Component({
  selector: 'app-tapetes',
  templateUrl: './tapetes.component.html',
  styleUrls: ['./tapetes.component.css']
})
export class TapetesComponent implements OnInit {

  tapetes: Tapetes[] = [];
  constructor(private tapeteService: TapeteService) { }

  ngOnInit(): void {
    this.tapetes = this.tapeteService.getTapetes();
  }

}
