import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AboutComponent } from './component/about/about.component';
import { NewsComponent } from './component/news/news.component';
import { HelpComponent } from './component/help/help.component';
import { MecatroniqueComponent } from './component/mecatronique/mecatronique.component';
import { WebComponent } from './component/web/web.component';
import { MobileComponent } from './component/mobile/mobile.component';
import { SoftskillsComponent } from './component/softskills/softskills.component';
import { TechniqueComponent } from './component/technique/technique.component';
import { ProlemsolvingComponent } from './component/prolemsolving/prolemsolving.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mecatronique', component: MecatroniqueComponent},
  {path: 'web', component: WebComponent},
  {path: 'mobile', component: MobileComponent},
  {path: 'softskills', component: SoftskillsComponent},
  {path: 'technique', component: TechniqueComponent},
  {path: 'problemsolving', component: ProlemsolvingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'help', component: HelpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:NotfoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
