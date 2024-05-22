import { Injectable } from '@nestjs/common';
import { CreateUsrsDto } from './dto/create-usrs.dto';
import { UpdateUsrsDto } from './dto/update-usrs.dto';

@Injectable()
export class UsrsService {
    
    private usrs= [
        { 
            "idk":1,
            "cargo":"Jef",
            "autor":"Proyecto",
            "year":2021
        } ,
        { 
            "idk":2,
            "cargo":"Obr",
            "autor":"Proyecto",
            "year":2022
        } ,
        { 
            "idk":3,
            "cargo":"Obr",
            "autor":"Proyecto",
            "year":2023
        } ,
        { 
            "idk":4,
            "cargo":"Inv",
            "autor":"Proyecto",
            "year":2024
        } 
          
    ]
    /**
     * usrs todos los usuarios
     * @Get()
     */    
    findAll(){ 
        return this.usrs
    }
    /**
     * usrs/:idk usuario X
     * /////@Param('idk' idk:string ){idk}
     * @Get()    
     */ 
    findAny(cargo?:'Inv'|'Obr'|'Jef'){ 
        return cargo?this.usrs.filter( usr =>{usr.cargo===cargo}):this.findAll()
    }
    /**
     * usrs/:idk usuario X
    @Get(':idk')@Param('idk') */ 
    
    findOne( idk:number ){ 
        return this.usrs.find(usr=> usr.idk === idk) 
    }
    /**
     * usrs/:usrsX add usuarios
     * ':usrsX'
      
    @Post()@Body() */
    create(createUsrDto: CreateUsrsDto){
            const persnOrdId=[...this.usrs].sort((a,b) => b.idk - a.idk)
            const npersn={ idk:persnOrdId[0].idk+1,...createUsrDto }
        this.usrs.push(npersn)    
        return createUsrDto
    }
    /**
     * usrs/:usrsX modificando usuario X
    
    @Patch(':idk') @Param('idk')@Body()*/ 
    modify( idk:number, updateUsrDto: UpdateUsrsDto){
        
            this.usrs=this.usrs.map(
                pers=>{
                    return pers.idk===idk? {
                        ...pers,...updateUsrDto
                    }:pers
                }//busqueda
            )//fin forman2
        return this.findOne(idk)
    }
    /**
     * usrs/:idk usuario X
     @Delete(':idk')@Param('idk')*/ 
    
    del( idk:number ){ 
        let pers=this.findOne(idk)
        this.usrs= this.usrs.filter( pp=>pp.idk!==idk)
        return pers
    }
    
}
