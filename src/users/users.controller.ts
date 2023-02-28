import { Controller, Get, Header, Param, Post, Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAllUsers(@Req() request: Request): string {
        return 'THis action returns all users';
    }

    @Get(':id')
    findOne(@Param() params): string{
        console.log(params);
        return `This action returns a #${params.id} user`;
    }                                            

    @Post()
    @Header('Cache-Control', 'none')
    createUser(): string {
        return 'This actions adds new user';
    }

}
