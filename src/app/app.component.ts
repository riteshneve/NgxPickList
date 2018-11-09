import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selItems: any[];
  selItemsVisible: number;
  selItemsSelected: number;
  selItemsFilterText: String;
  availItems: any[];
  availItemsVisible: number;
  availItemsSelected: number;
  availItemsFilterText: String;

  constructor() {
    this.selItems = [{label: "item1", value: 'item1', selected: false, visible: true}, 
    {label: "item2", value: 'item2', selected: false, visible: true}];
    this.selItemsVisible = this.selItems.length;
    this.selItemsSelected = 0;
    this.selItemsFilterText = '';

    this.availItems = [{label: "item3", value: 'item3', selected: false, visible: true}, 
    {label: "item4", value: 'item4', selected: false, visible: true}];
    this.availItemsVisible = this.selItems.length;
    this.availItemsSelected = 0;
    this.availItemsFilterText = '';
  }

  onSelectedItemCheck(event) {
    if (event.target.checked) {
      for (let i = 0; i < this.selItems.length; i++) {
        if (this.selItems[i].visible) {
          this.selItems[i].selected = true;
          this.selItemsSelected += 1;
        }
      }
    } else {
      for (let i = 0; i < this.selItems.length; i++) {
        if (this.selItems[i].visible) {
          this.selItems[i].selected = false;
          this.selItemsSelected -= 1;
        }
      }
    }
  }

  onAvailableItemCheck(event) {
    if (event.target.checked) {
      for (let i = 0; i < this.availItems.length; i++) {
        if (this.availItems[i].visible) {
          this.availItems[i].selected = true;
          this.availItemsSelected += 1;
        }
      }
    } else {
      for (let i = 0; i < this.availItems.length; i++) {
        if (this.availItems[i].visible) {
          this.availItems[i].selected = false;
          this.availItemsSelected -= 1
        }
      }
    }
  }

  onSelectedItemFilter(event) {
    let targetFilter = event.target.value;
    for (let i = 0; i < this.selItems.length; i++) {
      if (this.selItems[i].label.indexOf(targetFilter) == -1) {
        this.selItems[i].visible = false;
        if (this.selItems[i].selected) {
          this.selItems[i].selected = false;
          this.selItemsSelected -= 1;
        }
      } else {
        this.selItems[i].visible = true;
      }
    }
  }

  onAvailableItemFilter(event) {
    let targetFilter = event.target.value;
    for (let i = 0; i < this.availItems.length; i++) {
      if (this.availItems[i].label.indexOf(targetFilter) == -1) {
        this.availItems[i].visible = false;
        if (this.availItems[i].selected) {
          this.availItems[i].selected = false;
          this.availItemsSelected -= 1;
        }
      } else {
        this.availItems[i].visible = true;
      }
    }
  }

  onSelectedItemClick(index: number) {
    if (this.selItems[index].selected) this.selItemsSelected -= 1;
    else this.selItemsSelected += 1;
    this.selItems[index].selected = !this.selItems[index].selected;
  }

  onAvailableItemClick(index: number) {
    if (this.availItems[index].selected) this.availItemsSelected -= 1;
    else this.availItemsSelected += 1;
    this.availItems[index].selected = !this.availItems[index].selected;
  }

  moveToSelected() {
    for (let i = this.availItems.length - 1; i >= 0; i--) {
      if (this.availItems[i].selected) {
        this.availItems[i].selected = false;
        this.selItems.push(this.availItems[i]);
        this.availItems.splice(i, 1);
        this.availItemsSelected -= 1;
        this.availItemsVisible -= 1;
        this.selItemsVisible += 1;
      }
    }
  }

  moveToAvailable() {
    for (let i = this.selItems.length - 1; i >= 0; i--) {
      if (this.selItems[i].selected) {
        this.selItems[i].selected = false;
        this.availItems.push(this.selItems[i]);
        this.selItems.splice(i, 1);
        this.selItemsSelected -= 1;
        this.selItemsVisible -= 1;
        this.availItemsVisible += 1;
      }
    }
  }

}
