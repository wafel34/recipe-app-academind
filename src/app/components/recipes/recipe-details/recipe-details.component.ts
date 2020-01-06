import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe/recipe-model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
