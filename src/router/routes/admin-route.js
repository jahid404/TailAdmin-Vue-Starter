const adminRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Backend/Admin/DashboardComponent.vue'),
    meta: {
      title: 'Admin Dashboard',
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Backend/Profile/UserProfile.vue'),
    meta: {
      title: 'Profile',
    },
  },
  {
    path: '/question-bank/question',
    name: 'Question Bank',
    component: () => import('@/views/Backend/Admin/QuestionBank/Question/ManageQustion.vue'),
    meta: {
      title: 'Question Bank',
    },
  },
]

export default adminRoutes;
