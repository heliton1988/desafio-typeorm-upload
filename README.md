<img src="./.github/banner.png">

<h2 align="center">Desafio 06: Banco de dados e upload de arquivos no Node.js</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/helitonoliveiraa/desafio-typeorm-upload?color=%23#04d361">

  <a href="https://www.linkedin.com/in/helitonoliveira/">
    <img alt="Made by Héliton Oliveira" src="https://img.shields.io/badge/made%20by-Héliton Oliveira-%23#04d361">
  </a>
</p>

<br />
<br />
<br />

## :memo: **Sobre o desafio**

Nesse desafio, eu tive de contiuar desenvolvendo a aplicação de gestão de transações, a qual comecei a desenvolver no desafio anterior [desafio 05](https://github.com/helitonoliveiraa/desafio-fundamentos-node), mas agora implementei o uso de banco de dados com o `TypeORM` e envio de arquivos com o `Multer`.

Uma das coisas muito bacana que aprendi com esse desafio, foi de fato conseguir diferenciar quando se dever os seguintes métodos do TypeORM: `getRepository` & `getCustomRepository`. O primeiro normalmente é usando quando vamos fazer uso dos métodos que já veem por padrão no TypeORM, como create, delete etc..., já o segundo é usado quando temos a necessidade criar um método próprio, um método personalizado como `findByDate` por exemplo.



