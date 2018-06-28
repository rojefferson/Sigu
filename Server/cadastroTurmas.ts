import { Turma } from '../gui/src/app/Turma';

export class CadastroTurmas {
  Turmas: Turma[] = [];
  constructor() {
      
  }
    
  criar(Turma: Turma): Boolean {
      this.Turmas.push(Turma);
    return true;
  }
  
 }