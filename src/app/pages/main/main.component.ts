import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input()
  id: string = "0";
  @Input()
  flag: string = "";
  @Input()
  alt:string = "";
  @Input()
  CountryName:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
