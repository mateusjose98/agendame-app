const MainRoutes = {
    path: '/',
    meta: {
        requiresAuth: true
    },
    redirect: '/',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
       
    ]
};

export default MainRoutes;
