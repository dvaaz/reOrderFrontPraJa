export interface Grupo {
  id: number;      // A API disse que é Integer
  nome: string;    // A API disse que é String
  cor: string;     // A API disse que é String (precisaremos adicionar o #)
  tipo: number;    // A API disse que é Integer
  status: number;  // A API disse que é Integer
}

export interface Ingrediente {
  id: number;               // A API disse que é Integer
  nome: string;            // A API disse que é String
  unidade_medida: string;  // A API disse que é String
  grupo: Grupo | null;     // A API disse que é um objeto do tipo Grupo ou null
  status: number;          // A API disse que é Integer
}