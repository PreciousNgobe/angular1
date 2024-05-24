import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[
        HeaderComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: []
})
export class AppModule { }