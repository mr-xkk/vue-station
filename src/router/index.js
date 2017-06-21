import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import cli from '@/components/cli/cli'
import stylus from '@/components/stylus/stylus'
import jade from '@/components/jade/mjade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'cli',
          component: cli
        },
        {
          path: 'stylus',
          component: stylus
        },
        {
          path: 'jade',
          component: jade
        }
      ]
    }
  ]
})
