import { PartialType } from "@nestjs/mapped-types";
import { CreateUsrsDto } from "./create-usrs.dto";

export class UpdateUsrsDto extends PartialType
    {         
        cargo:'Inv'|'Obr'|'Jef';
        autor:string;
        year:number;
    } 
