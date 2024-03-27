import { PartialType } from "@nestjs/mapped-types";
import { CreateUsrsDto } from "./create-usrs.dto";

export class UpdateUsrsDto extends PartialType(CreateUsrsDto)
    {         
        cargo:'Inv'|'Obr'|'Jef';
        autor:string;
        year:number;
    } 
