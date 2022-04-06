import { HomeHandler } from './handler';
import { Router } from 'express'

const homeRouter = Router()
const homeHandler = new HomeHandler()

// get
homeRouter.get('/', homeHandler.demo);

export {
  homeRouter
}