import { Elenco } from "./Elenco";
import { Goleiro } from "./Goleiro";
import { Jogador } from "./Jogador";
import { Posicao } from "./enumPosicao";

const elenco = new Elenco();

const jogador1 = new Jogador("João", 19, Posicao.ATACANTE, 10, true);
const jogador2 = new Jogador("Pedro", 25, Posicao.MEIA, 8, false);
const jogador3 = new Jogador("Lucas", 27, Posicao.ZAGUEIRO, 4, false);
const goleiro1 = new Goleiro("Fernando", 30, 1, true);


elenco.adicionarJogador(jogador1);
elenco.adicionarJogador(jogador2);
elenco.adicionarJogador(jogador3);
elenco.adicionarGoleiro(goleiro1);


elenco.imprimirElenco();




