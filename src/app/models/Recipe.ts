export interface Recipe{
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
    isFavorite: boolean
}

export interface RecipeHttpResponse{
    limit: number;
    total: number;
    skip: number;
    recipes: Recipe[];
}