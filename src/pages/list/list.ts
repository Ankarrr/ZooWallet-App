import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SendPage } from '../send/send';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string, amount: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'ZOO',
        amount: '' + i,
        icon: 'logo-bitcoin'
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SendPage, {
      item: item
    });
  }
}
