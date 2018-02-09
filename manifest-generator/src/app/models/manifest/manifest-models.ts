export class Manifest {
    databases?: (DatabasesEntity)[] =[];
  }
  export class DatabasesEntity {
    server: string;
    database: string;
    security?: Security | null;
    tables?: (TablesEntity)[] =[];
    views?: (ViewsEntity)[] =[];
    storedprocedures?: (StoredproceduresEntity)[] =[];
    functions?: (FunctionsEntity)[] =[];
  }
  export class Security {
    integrated: boolean;
    impersonate?: boolean | null;
    user: string;
    password: string;
  }
  export class TablesEntity {
    table: string;
    permissions?: (string)[] =[];
  }
  export class ViewsEntity {
    view: string;
    permissions?: (string)[] =[];
  }
  export class StoredproceduresEntity {
    storedprocedure: string;
    permissions?: (string)[] =[];
  }
  export class FunctionsEntity {
    function: string;
    permissions?: (string)[] =[];
  }

  export class StringArrayHelper{
    constructor(private target:string[]){
      for(let i = 0; i < target.length; i++)
      {
        this.entities.push({value:target[i],index:i});
      }
    }
    entities:StringEntity[]=[];
  }
  export class StringEntity{
    value: string;
    index:number;
  }
  