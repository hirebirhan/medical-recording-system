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
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then(m => m.UsersModule),
    data: { icon: 'person', text: 'users' }
  },
  {
    path: 'labratory',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'local_hospital', text: 'Labratory' }
  },
  {
    path: 'finance',
    loadChildren: () =>
      import('./forms/forms.module').then(m => m.FormsModule),
    data: { icon: 'local_hospital', text: 'Billing' }
  },
  {

    path: 'radiology',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'local_hospital', text: 'Radiology' }
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'person', text: 'Doctors' }
  },
  {
    path: 'Reports',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'print', text: 'Reports' }
  },
  {
    path: 'systemsettings',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'person', text: 'System settings', childRoutes: [] }
  },
];
