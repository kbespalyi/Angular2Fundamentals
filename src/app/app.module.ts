import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service'

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //providers: [MailService],
  providers: [
    {provide: 'mail', useClass: MailService},
    {provide: 'api', useValue: 'http://localhost:3020/api/'},
    {provide: 'ws', useValue: 'ws://localhost:3020'},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(
    @Inject('ws') private ws) {

  }

}
