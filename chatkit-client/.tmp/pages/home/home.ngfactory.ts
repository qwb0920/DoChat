/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './home';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import14 from 'ionic-angular/components/content/content';
import * as import15 from '../../components/lc-conversation-list/lc-conversation-list';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import23 from 'ionic-angular/util/keyboard';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from 'ionic-angular/components/tabs/tabs';
import * as import26 from '../../components/lc-conversation-list/lc-conversation-list.ngfactory';
import * as import27 from 'ionic-angular/util/events';
var renderType_HomePage_Host:import0.RenderComponentType = (null as any);
class _View_HomePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HomePage_0_4:import3.HomePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HomePage_Host0,renderType_HomePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-home',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomePage_0_4 = new import3.HomePage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._HomePage_0_4,([] as any[]),compView_0);
    compView_0.create(this._HomePage_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HomePage) && (0 === requestNodeIndex))) { return this._HomePage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_HomePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_HomePage_Host === (null as any))) { (renderType_HomePage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HomePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomePageNgFactory:import10.ComponentFactory<import3.HomePage> = new import10.ComponentFactory<import3.HomePage>('page-home',viewFactory_HomePage_Host0,import3.HomePage);
const styles_HomePage:any[] = ([] as any[]);
var renderType_HomePage:import0.RenderComponentType = (null as any);
class _View_HomePage0 extends import1.AppView<import3.HomePage> {
  _el_0:any;
  _Header_0_3:import11.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import12.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import13.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Content_9_4:import14.Content;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _LCConversationList_11_4:import15.LCConversationList;
  _text_12:any;
  _text_13:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HomePage0,renderType_HomePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Header(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import18.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import19.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import20.App),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import21.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import13.ToolbarTitle(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import11.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'消息',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import22.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import14.Content(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import20.App),this.parentInjector.get(import23.Keyboard),this.parentInjector.get(import24.NgZone),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import25.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'lc-conversation-list',(null as any));
    this._appEl_11 = new import2.AppElement(11,9,this,this._el_11);
    var compView_11:any = import26.viewFactory_LCConversationList0(this.viewUtils,this.injector(11),this._appEl_11);
    this._LCConversationList_11_4 = new import15.LCConversationList(compView_11.ref,this.parentInjector.get(import27.Events));
    this._appEl_11.initComponent(this._LCConversationList_11_4,([] as any[]),compView_11);
    compView_11.create(this._LCConversationList_11_4,([] as any[]),(null as any));
    this._text_12 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n',(null as any));
    compView_9.create(this._Content_9_4,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_12,
        this._text_13
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_11,'convClicked',this.eventHandler(this._handle_convClicked_11_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    const subscription_0:any = this._LCConversationList_11_4.convClicked.subscribe(this.eventHandler(this._handle_convClicked_11_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13
    ]
    ,[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4; }
    if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3; }
    if (((token === import15.LCConversationList) && (11 === requestNodeIndex))) { return this._LCConversationList_11_4; }
    if (((token === import14.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Content_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_9_4.ngOnInit(); }
    const currVal_4:any = this.context.clientId;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._LCConversationList_11_4.clientId = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_9_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.ngOnDestroy();
  }
  private _handle_convClicked_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.navToChat($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_HomePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.HomePage> {
  if ((renderType_HomePage === (null as any))) { (renderType_HomePage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_HomePage,{})); }
  return new _View_HomePage0(viewUtils,parentInjector,declarationEl);
}