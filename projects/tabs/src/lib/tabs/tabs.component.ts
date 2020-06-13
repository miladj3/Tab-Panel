import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { TabComponent } from '../tab/tab.component';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'lib-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @Input('component-name') public componentName: string;
  @ViewChild('container', { read: ViewContainerRef }) private container: ViewContainerRef;
  public tabs: Array<TabComponent> = [];

  constructor(
    private readonly tabsService: TabsService,
    private readonly _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const data = this.tabsService.getData();
    for (const _data of data) {
      this.openTab(_data.title, 'TableComponent', _data.data);
    }
  }

  ngAfterContentInit(): void {
    const activeTabs: Array<TabComponent> = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0)
      this.selectTab(this.tabs[0]);
  }

  public closeTab(tab: TabComponent): void {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] === tab) {
        this.tabs.splice(i, 1);
        const viewContainerRef = this.container;
        viewContainerRef.remove(i);
        this.selectTab(this.tabs[0]);
        break;
      }
    }
  }

  public selectTab(tab: TabComponent): void {
    if (!tab)
      return;
    this.tabs.forEach(x => x.active = false);
    tab.active = true;
  }

  public openTab(title: string, componentName: string, data: any, isCloseable = false): void {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(TabComponent);
    const viewContainerRef: ViewContainerRef = this.container;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.title = title;
    instance.component = componentName;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;
    this.tabs.push(componentRef.instance as TabComponent);
    this.selectTab(this.tabs[this.tabs.length - 1]);
  }
}
