import { Component, OnInit } from '@angular/core';
import { GelService, Gel } from '../../services/gel.service';

@Component({
  selector: 'app-gel',
  templateUrl: './gel.component.html',
  styleUrls: ['./gel.component.css']
})
export class GelComponent implements OnInit {

  gel:Gel[] = [];

  constructor( private gelService: GelService) { }

  ngOnInit(): void {
    this.gel = this.gelService.getGel();
  }

}
