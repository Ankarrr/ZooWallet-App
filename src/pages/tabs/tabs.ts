import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { DAppsPage } from '../dapps/dapps';
import { MarketPage } from '../market/market';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab2Root: any = ListPage;
  tab3Root: any = MarketPage;
  tab4Root: any = DAppsPage;

  constructor() {

  }
}