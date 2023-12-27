export abstract class FiguraGemometrica {
    abstract calcularElPerimetro(): number
}

export class Circulo extends FiguraGemometrica {
    private radio: number

    constructor(radio: number) {
        super();
        this.radio = radio
    }

    calcularElPerimetro():number{
        return 2 * Math.PI * this.radio
    }
    
}

export class TrianguloEscaleno extends FiguraGemometrica {
    private ladoA: number
    private ladoB: number
    private ladoC: number 

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super();
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    calcularElPerimetro():number{
        return this.ladoA + this.ladoB + this.ladoC
    }
}

export class TrianguloEquilatero extends FiguraGemometrica {
    private ladoA: number;
  
    constructor(lado: number) {
      super();
      this.ladoA = lado;
    }
  
    calcularElPerimetro(): number {
      return 3 * this.ladoA;
    }
  }
  