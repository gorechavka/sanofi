import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { SidenavPushComponent } from './sidenav/sidenav-push.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { EyeComponent } from './eye/eye.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SidenavPushComponent,
        MenuComponent,
        HeaderComponent,
        EyeComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        SidenavPushComponent,
        MenuComponent,
        HeaderComponent,
        EyeComponent,
    ],
    providers: [Location],
})
export class UiModule {}
