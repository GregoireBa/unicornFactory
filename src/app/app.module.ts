import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

//
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UnicornsService } from './factory/unicorns.service';
import { SliderComponent } from './slider/slider.component';
import { FormFactoryComponent } from './form-factory/form-factory.component';

@NgModule({
  declarations: [AppComponent, SliderComponent, FormFactoryComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, SwiperModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule],
  providers: [UnicornsService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
