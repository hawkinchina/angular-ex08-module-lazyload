import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  //在子模块中，配置路由 （在自定义模块中，还有其他的其他的子组件。）
  //和模块的根组件，配置成兄弟路由： 访问的地址为/product ，后面加上/list
  {
    path: 'list',
    component: ListComponent,
  },
];

@NgModule({
  //特别注意： forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
