import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HelpComponent } from './component/help/help.component';
import { NewsComponent } from './component/news/news.component';
import { AboutComponent } from './component/about/about.component';
import { ViewComponent } from './component/main/view/view.component';
import { FieldComponent } from './component/main/field/field.component';
import { LocationComponent } from './component/main/location/location.component';
import { EvenementComponent } from './component/main/evenement/evenement.component';
import { MecatroniqueComponent } from './component/mecatronique/mecatronique.component';
import { WebComponent } from './component/web/web.component';
import { MobileComponent } from './component/mobile/mobile.component';
import { SoftskillsComponent } from './component/softskills/softskills.component';
import { ProlemsolvingComponent } from './component/prolemsolving/prolemsolving.component';
import { TechniqueComponent } from './component/technique/technique.component';
import { TeamComponent } from './component/main/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    HelpComponent,
    NewsComponent,
    AboutComponent,
    ViewComponent,
    FieldComponent,
    LocationComponent,
    EvenementComponent,
    MecatroniqueComponent,
    WebComponent,
    MobileComponent,
    SoftskillsComponent,
    ProlemsolvingComponent,
    TechniqueComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
