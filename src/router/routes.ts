import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/test',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: 'map', component: () => import('pages/Test.vue')},
            {path: 'echarts', component: () => import('pages/Echarts.vue')},
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
