import { Body, Controller, Delete, Get, Param, Patch, Post, Query , ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsrsService } from './usrs.service';
import { CreateUsrsDto } from './dto/create-usrs.dto';
import { UpdateUsrsDto } from './dto/update-usrs.dto';
/**
 * GET /usrs todos los usuarios
 * GET /usrs/:idk usuario X
 * POST /usrs add usuario
 * PATCH /usrs/:idk mpdificar un usuario idk
 * DELETE /usrs/
 * ;idk eliminar usuario idk
 */
@Controller('usrs')
export class UsrsController {
   //
   constructor( private readonly usrsService:UsrsService){}
    /**
     * usrs todos los usuarios
    
    @Get()
    findAll(){ 
        return this.usrsService.findAll()
    } 
    */ 
    /**
     * usrs/:idk usuario X
     * /////@Param('idk' idk:string ){idk}
     */ 
    @Get()
    findAny(@Query('cargo') cargo?:'Inv'|'Obr'|'Jef'){         
        return this.usrsService.findAny(cargo)
    }
    /**
     * usrs/:idk usuario X
     */ 
    @Get(':idk')
    findOne(@Param('idk',ParseIntPipe) idk:number ){ 
        return this.usrsService.findOne(idk)
    }
    /**
     * usrs/:usrsX add usuarios
     * ':usrsX'
     */ 
    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUsrsDto){ 
        return this.usrsService.create(createUserDto) 
    }
    /**
     * usrs/:usrsX modificando usuario X
     */ 
    @Patch(':idk')
    modify(@Param('idk', ParseIntPipe) idk:number, @Body(ValidationPipe)userUpdateDto: UpdateUsrsDto){ 
        let psr=this.usrsService.modify(idk,userUpdateDto)
        return psr
    }
    /**
     * usrs/:idk usuario X
     */ 
    @Delete(':idk')
    del(@Param('idk', ParseIntPipe) idk:number ){ 
        return this.usrsService.del(idk)
    }
    
}
