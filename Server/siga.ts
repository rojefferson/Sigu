import { Pessoa } from '../gui/src/app/pessoa';
import { Turma } from '../gui/src/app/Turma';

export class siga{
  [Pessoa, number][] Ranks;
  var Inscritos;
  constructor() {
  	Inscritos = new Map();
  }
  ranking(aluno: Pessoa): number{
  		var ranking = Math.floor(Math.random() * 11);
  		Ranks.push([aluno, ranking]); //seria do aluno para uma turma (add parametro)
  		return ranking;
  }
  corte(t: Turma): number{
  		Pessoa[] alunos = Inscritos.get(t);
  		alunos.sort(function(a,b) => {ranking(b)-ranking(a)});
  		return alunos[t.vagas];
  }
}