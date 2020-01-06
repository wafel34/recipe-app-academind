import { Component, OnInit, Input } from '@angular/core';
import { RecipeModelInterface } from 'src/app/models/recipe/recipe-model-interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: RecipeModelInterface[];
  constructor() { }

  ngOnInit() {
  }

}
