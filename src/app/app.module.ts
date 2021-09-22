import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { TrongnuocService } from './service/trongnuoc.service';
import { AuthordGuard } from './guard/authord.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [TrongnuocService, AuthordGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
