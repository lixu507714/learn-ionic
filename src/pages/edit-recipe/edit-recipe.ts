import {Component, OnInit} from '@angular/core';
import {ActionSheetController, AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipesService} from "../../services/recipes";
import {Recipes} from "../../models/recipe";

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {

  mode = 'New';
  selectionOptions = ['Easy', 'hard', 'good'];
  recipeForm :FormGroup;
  recipe: Recipes;
  index : number;
  constructor(public navParams: NavParams,
              private actionSheetController: ActionSheetController,
              private alertController: AlertController,
              private toastController: ToastController,
              private recipesService: RecipesService,
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    if(this.mode === 'Edit') {
      this.recipe = this.navParams.get('recipe');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  private initializeForm() {
    let title = null;
    let description = null;
    let difficulty = 'Medium';
    let ingredients = [];
    if(this.mode === 'Edit') {
      title = this.recipe.title;
      description = this.recipe.description;
      difficulty = this.recipe.difficulty;
      for(let ingredient of this.recipe.ingredients) {
          ingredients.push(new FormControl(ingredient.name, Validators.required));
      }
    }
    this.recipeForm = new FormGroup({
      'title':new FormControl(title, Validators.required),
      'description':new FormControl(description, Validators.required),
      'difficulty':new FormControl(difficulty, Validators.required),
      'ingredients': new FormArray(ingredients)
    })
  }

  onSubmit() {
    const value = this.recipeForm.value;
    let ingredient = [];
    if(value.ingredients.length > 0) {
      ingredient = value.ingredients.map(name => {
        return {name: name, amount: 1};
      })
    }
    if(this.mode === 'Edit') {
      this.recipesService.updateRecipe(this.index,value.title, value.description, value.difficulty, ingredient);
    }else {
      this.recipesService.addRecipe(value.title, value.description, value.difficulty, ingredient);
    }
    this.recipeForm.reset();
    this.navCtrl.popToRoot(); // 返回上一个页面
  }

  // 点击出现覆盖层按钮
  onManageIngredients() {
    const actionSheet = this.actionSheetController.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          role: 'add Ingredient',
          handler: () => {
           this.createNewIngredientAlert();
          }
        },
        {
          text: 'Remove Add Ingredient',
          role: 'destructive',
          handler: () => {
            console.log('Remove Add Ingredient');
            const array: FormArray = <FormArray>this.recipeForm.get('ingredients');
               let len = array.length;
               for(let i = len;i >= 0; i--) {
                  array.removeAt(i);
               }
            const toast = this.toastController.create({
              message: 'All Ingredient were delete!',
              duration: 3000,
              position: 'top'
            });
            toast.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  private createNewIngredientAlert() {
    const newIngredientAlert = this.alertController.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            if(data.name.trim() == '' || data.name == null) {
              const toast = this.toastController.create({
                message: 'Please enter a valid value!',
                duration: 3000,
                position: 'top'
              });
              toast.present();
                return;
            }
            (<FormArray>this.recipeForm.get('ingredients'))
              .push(new FormControl(data.name, Validators.required));
            const toast = this.toastController.create({
              message: 'add item',
              duration: 3000,
              position: 'top'
            });
            toast.present();
          }
        }
      ]
    });
    newIngredientAlert.present();
  }


}
