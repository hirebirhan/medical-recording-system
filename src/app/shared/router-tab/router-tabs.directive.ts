import {
  AfterContentInit,
  ContentChildren,
  Directive,
  OnDestroy,
  QueryList
} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTabDirective } from './router-tab.directive';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[routerTabs]'
})
export class RouterTabsDirective implements AfterContentInit, OnDestroy {
  subscription = new Subscription();

  @ContentChildren(RouterTabDirective) routerTabs: QueryList<RouterTabDirective>;

  constructor(private host: MatTabGroup, private router: Router) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterContentInit(): void {
    this.setIndex();
    this.subscription.add(
      this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          this.setIndex();
        }
      })
    );
    this.subscription.add(
      this.host.selectedTabChange.subscribe(() => {
        const tab = this.routerTabs.find(item => item.tab.isActive);
        if (!tab) {
          return;
        }
        this.router.navigateByUrl(tab.link.urlTree);
        return true;
      })
    );
  }

  private setIndex() {
    this.routerTabs.find((tab, i) => {
      if (!this.router.isActive(tab.link.urlTree, false)) return false;
      tab.tab.isActive = true;
      this.host.selectedIndex = i;
      return true;
    });
  }
}
