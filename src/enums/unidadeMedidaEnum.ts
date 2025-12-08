export enum UnidadeMedida {
  UN = 0,
  MG = 1,
  ML = 2
}

export const unidadeMedidaStrings: Record<UnidadeMedida, string> = {
  [UnidadeMedida.UN]: "Un",
  [UnidadeMedida.MG]: "mg",
  [UnidadeMedida.ML]: "ml"
};