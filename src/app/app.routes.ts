import { Routes } from '@angular/router';
import {Home} from './shared/presentation/views/home/home';


const about = () => import('./shared/presentation/views/about/about').then(m => m.About);
const goals =() => import('./shared/presentation/views/goals/goals').then(m => m.Goals);
const reviews=()=>import('./shared/presentation/views/reviews/reviews').then(m => m.Reviews);
const pageNotFound = () => import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound);
const baseTitle = 'IndieNest';
export const routes: Routes = [
  { path: 'home',     component:      Home,                         title: `${baseTitle} - Home`  },
  { path: 'about',    loadComponent:  about,                        title: `${baseTitle} - About`  },
  { path: 'goals',    loadComponent:  goals,                        title: `${baseTitle} - Goals`  },
  { path: 'reviews',    loadComponent:  reviews,                        title: `${baseTitle} - Reviews`  },
  { path: '',         redirectTo:     '/home', pathMatch: 'full'  },
  { path: '**',       loadComponent:  pageNotFound,                 title: `${baseTitle} - Page Not Found`  },
];
