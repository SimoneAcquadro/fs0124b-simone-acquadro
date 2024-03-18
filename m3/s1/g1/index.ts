interface iSmartphone {
    credito:number;
    numeroChiamate:number;
    
}



class User implements iSmartphone {
    nome: string;
    cognome: string;
    credito: number = 0;
    numeroChiamate: number = 0;
}