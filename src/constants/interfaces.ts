export interface Grupo {
  id: number;      // A API disse que é Integer
  nome: string;    // A API disse que é String
  cor: string;     // A API disse que é String (preciso adicionar o #)
  tipo: number;    
  status: number;  
}

export interface Ingrediente {
  id: number;               
  nome: string;           
  unidade_medida: string; 
  grupo?: Grupo;     
  status: number;         
}

export interface Ficha {
  id: number;
  nome: string;
  descricao: string;
  grupo?: Grupo;
  status?: number;
}
export interface IngredienteFicha {
  id: number;
  ingrediente: Ingrediente;
  ficha: Ficha;
  unidadeMedida: number;
  quantidade: number;
  status?: number;
}

export interface Estoque {
  id: number;
  quantidade: number;
  entrada: string;
  validade: string;
  ingrediente: Ingrediente;
  status?: number;
}


export interface ProducaoDia {
  id: number;
  data: string;
  status?: number;
}

export interface Producao {
  id: number;
  quantidade: number;
  estoque: Estoque;
  producaoDia: ProducaoDia;
  status?: number;
}

