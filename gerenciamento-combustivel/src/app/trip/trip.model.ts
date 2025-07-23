export interface Trip {
  id?: number;
  roteiro: string;
  dataViagem: string;
  horaSaida: string;
  kmSaida: number;
  horaChegada: string;
  kmChegada: number;
  kmRodados: number;
  kmBomba: number;
  combustivel: string;
  litrosGeral: number;
  precoLitro: number;
  valorTotal: number;
  media: number;
  motorista: string;
  cupom: string;
  destino: string;
}
