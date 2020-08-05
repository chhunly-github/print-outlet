import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceComponent} from './invoice/invoice.component';
import {PrintLayoutComponent} from './print-layout/print-layout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'a',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  },
  { path: 'a',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
