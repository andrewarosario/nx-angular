import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from 'modules/layout';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HelloWorldComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    SidenavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
