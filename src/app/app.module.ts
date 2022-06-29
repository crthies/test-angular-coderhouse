import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { TestCoderhouseComponent } from './component/formularios/test-coderhouse/test-coderhouse.component';
import { TestCoderhouseVersionDosComponent } from './component/formularios/test-coderhouse-version-dos/test-coderhouse-version-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    TestCoderhouseComponent,
    TestCoderhouseVersionDosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
