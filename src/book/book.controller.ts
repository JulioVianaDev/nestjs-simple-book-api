import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book.schema';
import mongoose from 'mongoose';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    async getAllBooks():Promise<Book[]>{
        return this.bookService.findAll()
    }

    @Post()
    async createBook(
        @Body()
        book: CreateBookDto
    ):Promise<Book>{
        console.log(book);
        return this.bookService.createBook(book)    
    }
}
