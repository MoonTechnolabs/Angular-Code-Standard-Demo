import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from 'src/app/modules/root/components/navigation-sidebar/navigation.module';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TokenInterceptor } from 'src/app/interceptors/token/token.interceptor';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [AppRoutingModule,
        BrowserModule,
        FormsModule,
        NavigationModule,
        NgbModule,
        ReactiveFormsModule,
        SharedModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        NgbActiveModal,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
