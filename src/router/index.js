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
				{
					path: 'von',
					component: () => import('../views/samples/VOn.vue'),
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
                {
                    path: 'day2',
                    component: () => import('../views/day_jobs/DayJob2.vue'),
                },
                {
                    path: 'day3',
                    component: () => import('../views/day_jobs/DayJob3.vue'),
                },
                // {
                //     path: 'day4',
                //     component: () => import('../views/day_jobs/DayJob4.vue'),
                // },
                // {
                //     path: 'day5',
                //     component: () => import('../views/day_jobs/DayJob5.vue'),
                // },
                // {
                //     path: 'day6',
                //     component: () => import('../views/day_jobs/DayJob6.vue'),
                // },
                // {
                //     path: 'day7',
                //     component: () => import('../views/day_jobs/DayJob7.vue'),
                // },
                // {
                //     path: 'day8',
                //     component: () => import('../views/day_jobs/DayJob8.vue'),
                // },
                // {
                //     path: 'day9',
                //     component: () => import('../views/day_jobs/DayJob9.vue'),
                // },
                // {
                //     path: 'day10',
                //     component: () => import('../views/day_jobs/DayJob10.vue'),
                // },
            ],
        },
    ],
});

export default router;
