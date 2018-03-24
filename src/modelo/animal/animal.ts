export abstract class Animal {
    // private ,public , protected
    constructor(protected _nombre :string) {
        
    }
   /* setNombre(nombre :string):void{
        this._nombre=nombre;
    }*/
    set nombre (nombre:string){ // por defecto es public
            if(nombre.length<=3){
                console.error('Nombre muy corto',nombre.length);
return ;
            }
        this._nombre=nombre;
    }
   /* getNombre():string{
return this._nombre;

    }*/
    get nombre():string{
        return `el gato ${this._nombre}`;
    }

    abstract desplazar():void ;
        
    
}