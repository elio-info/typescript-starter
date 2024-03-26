import { Controller } from "@nestjs/common";

@Controller('pers')
export class PersonsController{
    @Get()
    findAll(){
        return []
    }
}