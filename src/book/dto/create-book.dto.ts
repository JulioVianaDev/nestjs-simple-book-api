import { Category } from "../schema/book.schema"

export class CreateBookDto{
    readonly title: string
    readonly description: string
    readonly price: number
    readonly category: Category
    readonly author: string

}