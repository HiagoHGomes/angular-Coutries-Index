import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-countries-info',
  templateUrl: './countries-info.component.html',
  styleUrls: ['./countries-info.component.css']
})
export class CountriesInfoComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.item = dataFake.find((item) => item.id === id); // Use the variable id here instead of "id"
    });
  }
}
