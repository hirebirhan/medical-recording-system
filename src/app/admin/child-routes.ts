export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },

  // {
  //   path: 'charts',
  //   loadChildren: () =>
  //     import('./charts/charts.module').then(m => m.ChartsModule),
  //   data: { icon: 'bar_chart', text: 'Charts' }
  // },
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
    path: 'labratory',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'local_hospital', text: 'Labratory' }
  },
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
  },
  {
    path: 'mat-grid',
    loadChildren: () =>
      import('./mat-grid/mat-grid.module').then(m => m.MatGridModule),
    data: { icon: 'grid_on', text: 'Flex Grid' }
  },
  {
    path: 'mat-components',
    loadChildren: () =>
      import('./mat-components/mat-components.module').then(
        m => m.MatComponentsModule
      ),
    data: { icon: 'code', text: 'Material Components' }
  },
  // {
  //   path: 'google-maps',
  //   loadChildren: () =>
  //     import('./google-map-demo/google-map-demo.module').then(
  //       m => m.GoogleMapDemoModule
  //     ),
  //   data: { icon: 'place', text: 'Google Maps' }
  // }
];
