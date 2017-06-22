import {ProductsComponent} from './products/products.component';
import {Routes} from '@angular/router';
import {PendingOrdersComponent} from './pending-orders/pending-orders.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'pendingOrders',
        component: PendingOrdersComponent
    }
];
