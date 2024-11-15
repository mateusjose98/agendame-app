import { useAuthStore } from '@/stores/auth';

export default [
    {
        path: '/login',
        beforeEnter: (to, from, next) => {
            const authStore = useAuthStore();
            if (!authStore.isLoggedIn) {
                next()
            } else {
                next({ name: 'Dashboard' })
            }
        },
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        meta: {
            requiresAuth: false
        },
        children: [
            {
                name: 'login',
                path: '',
                component: () => import('@/views/auth/Login.vue')
            },
        ]
    },
  {
    path: '/esqueci-senha',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
      requiresAuth: false
    },
    children: [
      {
        name: 'forgotPassword',
        path: '',
        component: () => import('@/views/auth/ForgotPassword.vue')
      },
    ]
  },
    {
        path: '/cadastrar',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        children: [
            {
                name: 'cadastrar',
                path: '',
                component: () => import('@/views/auth/Register.vue')
            }

        ]

    },
  {
    path: '/verificar-email',
    beforeEnter: (to, from, next) => {
      to.query?.token ? next() : next({ name: 'login' });
    },
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    children: [
      {
        name: 'verify-email',
        path: '',
        component: () => import('@/views/auth/VerifyEmail.vue')
      }

    ]

  },
];

