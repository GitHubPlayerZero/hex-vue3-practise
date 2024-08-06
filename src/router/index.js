/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PracticeSamples from '@/views/samples/PracticeSamples.vue';

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory(import.meta.env.BASE_URL),
	linkActiveClass: "link-active",
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
		// 練習範例
		{
			path: '/samples',
			name: 'samples',
			component: PracticeSamples,
			children: [
				{
					path: '',
					name: 'samples-default',
					component: () => import('../views/samples/VOn.vue'),
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
			],
		},
		// 每日任務
		{
			path: '/dayjobs',
			name: 'dayjobs',
			component: () => import('../views/day_jobs/DayJobs.vue'),
			children: [
				{
					path: '',
					name: 'dayjobs-default',
					component: () => import('../views/day_jobs/DayJob7.vue'),
				},
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
				{
				    path: 'day4',
				    component: () => import('../views/day_jobs/DayJob4.vue'),
				},
				{
				    path: 'day5',
				    component: () => import('../views/day_jobs/DayJob5.vue'),
				},
				{
				    path: 'day6',
				    component: () => import('../views/day_jobs/DayJob6.vue'),
				},
				{
				    path: 'day7',
				    component: () => import('../views/day_jobs/DayJob7.vue'),
				},
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
				// {
				//     path: 'day11',
				//     component: () => import('../views/day_jobs/DayJob11.vue'),
				// },
				// {
				//     path: 'day12',
				//     component: () => import('../views/day_jobs/DayJob12.vue'),
				// },
				// {
				//     path: 'day13',
				//     component: () => import('../views/day_jobs/DayJob13.vue'),
				// },
				// {
				//     path: 'day14',
				//     component: () => import('../views/day_jobs/DayJob14.vue'),
				// },
				// {
				//     path: 'day15',
				//     component: () => import('../views/day_jobs/DayJob15.vue'),
				// },
				// {
				//     path: 'day16',
				//     component: () => import('../views/day_jobs/DayJob16.vue'),
				// },
				// {
				//     path: 'day17',
				//     component: () => import('../views/day_jobs/DayJob17.vue'),
				// },
				// {
				//     path: 'day18',
				//     component: () => import('../views/day_jobs/DayJob18.vue'),
				// },
				// {
				//     path: 'day19',
				//     component: () => import('../views/day_jobs/DayJob19.vue'),
				// },
				// {
				//     path: 'day20',
				//     component: () => import('../views/day_jobs/DayJob20.vue'),
				// },
			],
		},
		// 每週作業
		{
			path: '/homework',
			name: 'homework',
			component: () => import('../views/homework/WorkCatalog.vue'),
			children: [
				{
					path: '',
					name: 'homework-default',
					component: () => import('../views/homework/WorkWeek1.vue'),
				},
				{
					path: 'week1',
					component: () => import('../views/homework/WorkWeek1.vue'),
				},
				// {
				// 	path: 'week2',
				// 	component: () => import('../views/homework/WorkWeek2.vue'),
				// },
				// {
				// 	path: 'week3',
				// 	component: () => import('../views/homework/WorkWeek3.vue'),
				// },
				// {
				// 	path: 'week4',
				// 	component: () => import('../views/homework/WorkWeek4.vue'),
				// },
			],
		},
	],
});

export default router;