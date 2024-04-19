import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeHttpResponse } from '../models/Recipe';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {
  recipeList: Recipe[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    this.httpClient.get<RecipeHttpResponse>('https://dummyjson.com/recipes')
      .subscribe((responseData: RecipeHttpResponse) => {
        this.recipeList = responseData.recipes;
      })
  }

}
