import { Component, OnInit } from '@angular/core';
import { IngridientModelInterface } from 'src/app/models/ingridient/ingridient-model-interface';
import { IngridientModel } from 'src/app/models/ingridient/ingridient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  private ingridients: IngridientModelInterface[] = [
    new IngridientModel('onion', 2),
    new IngridientModel('bread', 1)
  ];
  constructor() { }

  ngOnInit() {
  }

}
