import { UsersModule } from './users/users.module';
export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'person', text: 'Patients' }
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'calendar_month', text: 'Appointment' }
  }, 
  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./users/users.module').then(m => m.UsersModule),
  //   data: { icon: 'person', text: 'users' }
  // }, 
  // {
  //   path: 'labratory',
  //   loadChildren: () =>
  //     import('./tables/tables.module').then(m => m.TablesModule),
  //   data: { icon: 'local_hospital', text: 'Labratory' }
  // },
  {
    path: 'labratory',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'local_hospital', text: 'Billing' }
  },
  {

    path: 'labratory',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'local_hospital', text: 'Room' }
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'person', text: 'Doctors' }
  }
];
