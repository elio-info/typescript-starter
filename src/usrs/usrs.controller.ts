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
   //constructor()
    private readonly usrsService:UsrsService
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
    findOne(@Param('idk') idk:number ){ 
        return {idk}
    }
    /**
     * usrs/:usrsX add usuarios
     * ':usrsX'
     */ 
    @Post()
    create(@Body() usrsX:{}){ 
        return usrsX
    }
    /**
     * usrs/:usrsX modificando usuario X
     */ 
    @Patch(':idk')
    modify(@Param('idk') idk:number, @Body()usrsX:{}){ 
        let psr=this.usrsService.modify(idk,usrsX)
        return {indx:idk,msg:"Modificado!!",prs:this.usrsService.findAll()}
    }
    /**
     * usrs/:idk usuario X
     */ 
    @Delete(':idk')
    del(@Param('idk') idk:number ){ 
        return this.usrsService.del(idk)
    }
    
}
