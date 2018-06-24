import { CoordenacaoModule } from './coordenacao.module';

describe('CoordenacaoModule', () => {
  let coordenacaoModule: CoordenacaoModule;

  beforeEach(() => {
    coordenacaoModule = new CoordenacaoModule();
  });

  it('should create an instance', () => {
    expect(coordenacaoModule).toBeTruthy();
  });
});
