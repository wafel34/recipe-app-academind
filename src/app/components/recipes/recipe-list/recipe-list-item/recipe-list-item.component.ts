import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe/recipe-model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  constructor() { }

  ngOnInit() {
  }

}
