import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
  dataFake = dataFake;
  @Input()
  id: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
