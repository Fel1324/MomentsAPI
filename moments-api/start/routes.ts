import router from '@adonisjs/core/services/router'

router.group(() => {
  router.get('/', async () => {
    return { hello: 'world' }
  })
}).prefix('/api')
