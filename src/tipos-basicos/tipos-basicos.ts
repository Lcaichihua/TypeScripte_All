let numeroEstudiantes:number ;
numeroEstudiantes= 30;
console.log('numeroEstudiantes',numeroEstudiantes );


/*let cursoIniciado:boolean = true;*/
let cursoIniciado = true; /*infiere el tipo de dato de la variable*/
cursoIniciado =false;

// string
let nombreCurso  : string = 'Angular desde cero';
let ContenidoCurso :string = `
Herramientas de Desarrollo 
Introduccion a TypeScript
Introduccion a Angular     

`;

    console.log('nombre curso',nombreCurso);

    console.log('Contenido curso',ContenidoCurso);
    let bienvenida:string =`Bienvenidos al Curso  ${nombreCurso}`  ;
    

    console.log("Bienvenidos ",bienvenida);
// Arrays 
    let arregloA:string[] =['Larry','jordy','Davy'];
    let     ArregloB:Array<string> = ['Larry','jordy','Davy'];  

    //Enums
    enum DiaCurso {MARTES,VIERNES};
    enum DiaSemana {LUNAES,MARTES,MIERCOLES };

    let primerDiaClase :DiaCurso ;
    primerDiaClase=DiaCurso.VIERNES;
    console.log('PrimerDia',primerDiaClase); /* Regresa la posicion*/
    console.log('PrimerDia',DiaCurso[0]); /* Regresa la el nombre*/

    /* Any  */

    let mivariable :any;
    mivariable=5;
    mivariable='larry xd';
    mivariable =true;

    /*cons*/

    const PI = 3.14;
    //PI=5;    Error porque es constante

    let persona:any={
        nombre : 'Larry',
        curso : 'Angular'
    } ;
    
    const PERSONA:any={
        nombre : 'Jordy',
        curso : 'Angular'
    } ;
    console.log('PERSONA :',PERSONA);
    /*
    PERSONA ={
        nombre : 'Jordsy',
        curso : 'Angulssar'
        
    }  Error no puedes cambiar el valor */
PERSONA.nombre='Kiavet';
PERSONA.curso ='JAVA';
console.log('PERSONA :',PERSONA);

    /*funciion*/

    function holaMundo() : string {

        return 'hola mundo';
    }

    // procedimiento sin retorno
    function saludar (mensaje:string):void{

        return console.log('saludo',mensaje);   
    }
    // procedimiento con retorno

    function saludarString(mensaje:string):string{

        return mensaje;
    } 
    saludar('Me gusta TypeScript');
    let holis =saludarString('Me gusta TypeScript XD');
    console.log(holis);