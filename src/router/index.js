/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PracticeSamples from '@/views/samples/PracticeSamples.vue';

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
			path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
		{
			path: '/samples',
			name: 'samples',
			component: PracticeSamples,
			children: [
				{
					path: '',
					name: 'sample-init-load',
					component: () => import('../views/samples/AddNum.vue'),
				},
				{
					path: 'addnum',
					component: () => import('../views/samples/AddNum.vue'),
				},
				{
					path: 'vmodel',
					component: () => import('../views/samples/VModel.vue'),
				},
				{
					path: 'vbind',
					component: () => import('../views/samples/VBind.vue'),
				},
			]
		},
        {
            path: '/dayjobs',
            name: 'dayjobs',
            component: () => import('../views/day_jobs/DayJobs.vue'),
            children: [
                {
                    path: 'day1',
                    component: () => import('../views/day_jobs/DayJob1.vue'),
                },
            ],
        },
    ],
});

export default router;
