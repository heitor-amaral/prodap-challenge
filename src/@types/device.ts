export interface Device {
  usuario: string;
  nomeUsuario: string;
  token: string;
  fazendaSelecionada: number;
  nomeFazendaSelecionada: string;
  plataforma?: string;
  modelo?: string;
  fabricante?: string;
  versao?: string;
}
