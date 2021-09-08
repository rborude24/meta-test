import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent,Dialog } from './home/dashboard/dashboard.component';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog'
import { MatButtonModule} from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
