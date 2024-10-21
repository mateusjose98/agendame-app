import { useAuthStore } from '@/stores/auth';

const MainRoutes = {
    path: '/',
    beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (!authStore.isLoggedIn) {
            next({ name: 'login' })
        } else {
            next()
        }
    },
    redirect: '/',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },

    ],
};

export default MainRoutes;
