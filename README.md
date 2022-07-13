# RSA Node.js

## Como rodar

- Instalar as dependências

```bash
yarn install
```

- Descriptografar

```bash
node decrypt.js <CHAVES_PRIVADAS> <TEXTO_ENCRIPTADO> <DESTINO>
```

- Encriptografar

```bash
node encrypt.js <CHAVES_PUBLICAS> <TEXTO> <DESTINO>
```

## Planejamento e Operação

Escolhemos fazer o projeto em Javascript por já possuirmos familiaridade com a linguagem e termos usado ela durante o semestre em outras matérias. A implementação foi realizada seguindo o pseudo-código que foi criado em aula e alguns metódos encontrados no arquivo `utils/index.js` foram abstraidos do arquivo `text_chunk.js` fornecido pelo professor via Microsoft Teams.

Também utilizamos a biblioteca [`big-integer`](https://www.npmjs.com/package/big-integer) para calcularmos o `ModPow`.

## Testes

Os testes foram realizados utilizando chaves geradas pela classe Java `GetKeys` encontrada nos materiais de referência e também com a chave utilizada pelo professor na vídeo aula fazendo a implementação em Go que se encontra [neste repositório](https://github.com/gregori/rsago).


Para criptografar criamos alguns textos de exemplo e descriptografamos os mesmos, além de usarmos o arquivo `dest.txt` disponibilizado via Teams.

## Conclusões

O projeto nos ajudou a entendermos melhor como funciona a criptografia RSA e também são metódos e aplicações mais simples. Se pudessemos alterar algo no projeto fariamos em Typescript ou alguma outra linguagem com tipagem estática para conseguirmos visualizar melhor o que é `BigInt` e o que é `string`, além de tentar implementar o `ModPow` por conta.

## Alunos

- Henrique de Castilhos ([@henrilhos](https://github.com/henrilhos))
- Vinícius Souza Ferri ([@vini-ferri](https://github.com/vini-ferri))