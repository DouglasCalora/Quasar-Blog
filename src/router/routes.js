
const routes = [
  {
    path: '/',
    component: () => import('layouts/Application.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/sobre',
        component: () => import('pages/About.vue')
      },
      {
        path: '/contato',
        component: () => import('pages/Contact.vue')
      },
      {
        path: '/tecnologia',
        component: () => import('pages/category/Index.vue')
      },
      {
        path: '/post/:id',
        component: () => import('pages/ShowPost.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
