import { HttpContext } from "@adonisjs/core/http"
import Moment from "../models/moment.js"
import Comment from "../models/comment.js"

export default class CommentsController {
  public async store({request, params, response}: HttpContext){
    const body = request.body()
    const momentId = params.momentId

    await Moment.findOrFail(momentId)

    body.momentId = momentId

    const comment = await Comment.create(body)

    response.status(201)

    return {
      message: "Comentário adicionado com sucesso",
      data: comment
    }
  }
}