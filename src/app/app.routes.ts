import { RouterModule } from '@angular/router';
import {MonthlyPageComponent} from './monthly-page/monthly-page.component';


export const APP_ROUTER_PROVIDERS = RouterModule.forRoot([
    { path: '', redirectTo: '/month', pathMatch: 'full' },
    { path: 'month', component: MonthlyPageComponent },
], { useHash: true });
