import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DataBaseService } from './database.service';
import { ShowPostitsComponent } from './show-postits/show-postits.component';
import { EditPostitsComponent } from './edit-postits/edit-postits.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowPostitsComponent,
    EditPostitsComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
