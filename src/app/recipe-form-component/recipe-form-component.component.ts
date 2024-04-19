import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-recipe-form-component',
  templateUrl: './recipe-form-component.component.html',
  styleUrls: ['./recipe-form-component.component.css']
})
export class RecipeFormComponentComponent implements OnInit {
  recipeToCreate!: Recipe;
  @Output() newRecipeEmitter = new EventEmitter<string>();

  recipeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    ingredients: new FormControl(),
    instructions: new FormControl(),
    prepTimeMinutes: new FormControl(),
    cookTimeMinutes: new FormControl(),
    servings: new FormControl(),
    difficulty: new FormControl(),
    cuisine: new FormControl(),
    caloriesPerServing: new FormControl(),
    tags: new FormControl(),
    userId: new FormControl(),
    image: new FormControl(),
    rating: new FormControl(),
    reviewCount: new FormControl(),
    mealType: new FormControl(),
    isFavorite: new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
  }

  recipeFormSubmit(form: FormGroup) {
    let result:Recipe = {
      name: form.value.name as string,
      ingredients: (form.value.ingredients as string).split(","),
      id: 0,
      instructions: [],
      prepTimeMinutes: 0,
      cookTimeMinutes: 0,
      servings: 0,
      difficulty: '',
      cuisine: '',
      caloriesPerServing: 0,
      tags: [],
      userId: 0,
      image: '',
      rating: 0,
      reviewCount: 0,
      mealType: [],
      isFavorite: false
    }
    console.log(result);
    this.recipeToCreate = result;
  }

}
