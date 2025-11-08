class Atleta {
    constructor(nome, idade, peso, altura, notas = []) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        let idade = this.idade;
        if (idade >= 9 && idade <= 11) return 'Infantil';
        if (idade === 12 || idade === 13) return 'Juvenil';
        if (idade === 14 || idade === 15) return 'Intermediário';
        if (idade >= 16 && idade <= 30) return 'Adulto';
        return 'Sem categoria';
    }

    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    calculaMediaValida() {
        let ordernar = [...this.notas].sort((a, b) => a - b);
        let validaNotas = ordernar.slice(1, -1);
        let soma = validaNotas.reduce((soma, nota) => soma + nota, 0);
        let mediaValida = soma / validaNotas.length;
        let mediaFormatada = Number(mediaValida.toFixed(6)).toString().replace('.', ',');
        return mediaFormatada;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas.slice();
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

const atletas = [
    new Atleta('Maria', 10, 40, 1.40, [9.0, 8.5, 7.0, 8.5, 8.0]),
    new Atleta('Bruno', 13, 55, 1.60, [7.5, 8.0, 9.0, 7.0, 7.0, 8.5]),
    new Atleta('João', 17, 60, 1.65, [8.0, 9.5, 7.5, 8.5, 9.0]),
];

for (let atleta of atletas) {
    atleta.notas = atleta.obtemNotasAtleta();
    console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
    console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
    console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
    console.log(`Altura: ${atleta.altura}`);
    console.log(`Notas: ${atleta.obtemNotasAtleta().join(',')}`);
    console.log(`Categoria: ${atleta.obtemCategoria()}`);
    console.log(`IMC: ${atleta.obtemIMC()}`);
    console.log(`Média válida: ${atleta.obtemMediaValida()}`);
    console.log('');
}

