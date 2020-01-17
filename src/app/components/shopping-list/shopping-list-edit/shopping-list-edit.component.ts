import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { IngridientModel } from 'src/app/models/ingridient/ingridient-model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
  @Output() shoppingListItemAdded = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.shoppingListItemAdded.emit(new IngridientModel(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    ));
  }

}
