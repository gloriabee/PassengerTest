import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PassengerDetailView from '@/views/passenger/DetailView.vue'
import AirlineDetailView from '@/views/passenger/AirlineDetailView.vue'
import LayoutView from '@/views/passenger/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import PassengerEditView from '@/views/passenger/EditDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        pageSize: parseInt(route.query.pageSize?.toString() || '5')
      })
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout-view',
      component: LayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail-view',
          component: PassengerDetailView,
          props: true
        },
        {
          path: '',
          name: 'passenger-edit-view',
          component: PassengerEditView,
          props: true
        },
        {
          path: 'airline',
          name: 'airline-detail-view',
          component: AirlineDetailView,
          props: true
        }
      ]
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
