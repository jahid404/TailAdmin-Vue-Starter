const miscRoutes = [
  {
    path: '/blank',
    name: 'Blank',
    component: () => import('@/views/Misc/BlankPage.vue'),
    meta: {
      title: 'Blank',
    },
  },

  {
    path: '/error-404',
    name: '404 Error',
    component: () => import('@/views/Misc/FourZeroFour.vue'),
    meta: {
      title: '404 Error',
    },
  },
]

export default miscRoutes;