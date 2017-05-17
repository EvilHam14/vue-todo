import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Task from '@/components/Task'
import Lost from '@/components/Lost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/tasks',
      name: 'Task',
      component: Task
    },
    {
      path: '/*',
      name: 'Lost',
      component: Lost
    }
  ]
})
