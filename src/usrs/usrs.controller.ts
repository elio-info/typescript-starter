import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsrsService } from './usrs.service';
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
     */ 
    @Get()
    findAll(){ 
        return this.usrsService.findAll()
    }
    /**
     * usrs/:idk usuario X
     * /////@Param('idk' idk:string ){idk}
     */ 
    @Get()
    findAny(@Query('çargo') cargo?:'Inv'|'Obr'|'Jef'){ 
        return this.usrsService.findAny(cargo)
    }
    /**
     * usrs/:idk usuario X
     */ 
    @Get(':idk')
    findOne(@Param('idk') idk:string ){ 
        return this.usrsService.findOne(+idk)
    }
    /**
     * usrs/:usrsX add usuarios
     * ':usrsX'
     */ 
    @Post()
    create(@Body() usrsX:{cargo:'Inv'|'Obr'|'Jef',    autor:string,    year: number}){ 
        return this.usrsService.create(usrsX) 
    }
    /**
     * usrs/:usrsX modificando usuario X
     */ 
    @Patch(':idk')
    modify(@Param('idk') idk:string, @Body()usrsX:{cargo?:'Inv'|'Obr'|'Jef',    autor?:string,    year?: number}){ 
        let psr=this.usrsService.modify(+idk,usrsX)
        return psr
    }
    /**
     * usrs/:idk usuario X
     */ 
    @Delete(':idk')
    del(@Param('idk') idk:string ){ 
        return this.usrsService.del(+idk)
    }
    
}
