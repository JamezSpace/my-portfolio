import { Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'calculator',
        component: CalculatorComponent
    }
];
