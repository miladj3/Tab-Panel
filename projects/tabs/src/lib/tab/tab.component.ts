import { Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input('tab-title') public title: string;
  @Input() public isCloseable: boolean = false;
  @Input() public component: any;
  @Input() public dataContext: any;
  @Input() public active: boolean;
  @ViewChild('container', { read: ViewContainerRef }) private container: ViewContainerRef;

  constructor(
    private readonly _componentFactoryResolver: ComponentFactoryResolver) { }

  async ngOnInit() {
    const _type: Type<any> = await this.getTypeOfComponent(this.component);
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(_type);
    const viewContainerRef: ViewContainerRef = this.container;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance['title'] = this.title;
    componentRef.instance['data'] = this.dataContext;
    componentRef.instance['dataChange'].subscribe(c => {
      this.dataContext = c;
    });
  }
  public async getTypeOfComponent(component: string) {
    const factories = Array.from(this._componentFactoryResolver['_factories'].values());
    const factoryClass: any = factories.find((x: any) => x.componentType.name === component);
    return factoryClass.componentType;
  }
}
