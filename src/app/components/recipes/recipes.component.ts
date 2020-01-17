import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe/recipe-model';
import { RecipeModelInterface } from 'src/app/models/recipe/recipe-model-interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: RecipeModelInterface[] = [
    new RecipeModel('Scrambled eggs', 'Good for breakfast', 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/image/2017/01/main/creamy-soft-scrambled-eggs.jpg?itok=42x9Mojh'),
    new RecipeModel('Bruschetta', 'Nice one', 'https://hips.hearstapps.com/hmg-prod/images/190508-bruschetta-horizontal-2-1558014808.png')
  ];
  selectedRecipe: RecipeModelInterface = this.recipes[0];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeModelInterface) {
    this.selectedRecipe = recipe;
  }

}
