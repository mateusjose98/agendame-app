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
];

