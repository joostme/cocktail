import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app.routing.module';
import { CocktailsModule } from './shared/cocktails/cocktails.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({
            maxAge: 25
          }),
        CocktailsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
