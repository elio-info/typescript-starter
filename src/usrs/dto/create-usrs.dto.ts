import { IsEnum, IsNotEmpty, IsString, IsInt} from 'class-validator'
export class CreateUsrsDto
    {         
        @IsEnum(['Inv','Obr','Jef'],{   message: 'Dato Cargo: Entrar cargo valido'  }   )
        cargo:'Inv'|'Obr'|'Jef';
        @IsString({   message: 'Dato Autor: Debe de entrar una cadena'  })
        @IsNotEmpty({   message: 'Dato Autor: Debe de entrar una cadena, no vacio'  })
        autor:string;
        @IsInt({   message: 'Dato Año: Debe de entrar un numero'  })
        @IsNotEmpty({   message: 'Dato Año: Debe de entrar un numero, no vacio'  })
        year:number;
    } 
