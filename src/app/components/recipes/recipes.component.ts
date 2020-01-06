import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe/recipe-model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  private recipes: RecipeModel[] = [
    new RecipeModel('Scrambled eggs', 'Good for breakfast', 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/image/2017/01/main/creamy-soft-scrambled-eggs.jpg?itok=42x9Mojh'),
    new RecipeModel('Bruschetta', 'Nice one', 'https://hips.hearstapps.com/hmg-prod/images/190508-bruschetta-horizontal-2-1558014808.png')
  ];
  private selectedRecipe: RecipeModel = this.recipes[0];
  constructor() { }

  ngOnInit() {
  }

}
