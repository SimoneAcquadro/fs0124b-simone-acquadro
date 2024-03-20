import { iPost } from "./ipost";

export interface JsonContent {
  posts:iPost[]
  total:number
  skip:number
  limit:number
}
