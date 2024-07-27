import router from '@adonisjs/core/services/router'

const MomentsController = () => import('#controllers/moments_controller')
const CommentsController = () => import('#controllers/comments_controller')

router.group(() => {
  router.get('/', async () => {
    return { hello: 'world' }
  })

  router.resource('/moments', MomentsController).apiOnly()
  router.resource('/moments/:momentId/comments', CommentsController).apiOnly()
}).prefix('/api')
