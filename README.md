# Bank-Queue-Ticket

<h2>Lyaouts <h2/>
 
 <h4>Home</h4>
  <p> Na Home  há duas funcionalidades </p>
  <p>1 - Gerar senhas prioritárias e normais, 2 - Chamar a <b>"PROXIMA SENHA"</b>  </p>
 
 
![home](https://user-images.githubusercontent.com/36086251/94809679-5556e500-03c9-11eb-9620-3c3d5bb89942.png)
 
 
 
 <h4>Senhas</h4>
  <p> Em Senhas temos mias duas funcionalidades  </p>
  <p>1 - Reiniciar a contagem das senhas e 2 - Acompanhar os histórico das senhas.  </p>
 
![senhas](https://user-images.githubusercontent.com/36086251/94809682-56881200-03c9-11eb-8ab5-326b67d819d3.png)


<h3>Tecnologias </h3>
<h4> Api - Java</h4></br>
<ul> </br>
 <l1> 1 - Spring-Boot </l1></br>
 <l1> 2 - Lombok </l1></br>
 <l1> 3- Jpa - Hibernate </l1></br>
 <l1> 4- Flyway - migrations </l1></br>
 <l1> 5- Postgres 9.4 </l1></br>
 <l1> 6- Swagger - Docs </l1>
</ul></br>


<h4> App - React.js </h4></br>
<ul> </br>
 <l1> 1- React </l1></br>
 <l1> 2- React-Routes </l1></br>
 <l1> 3- React-Hooks </l1></br>
 <l1> 4- Material-ui. </l1></br>
 <l1> 5- Axios </l1></br>
 <l1> 6- Eslint arbnb +  Prettier</l1></br>
</ul></br>


<h3> Utilizando Docker-Compose  </h3></br>
Para startar o projeto com docker, no diretório raiz do projeto reode o comando. </br>
Isso pode levar alguns minutos.

```````

docker-compose up --build -d


```````

<h3> Manualemnte </h3>

<p> 1 - Certifique-se de configurar o banco de dados corretamento no aplication properties. Importante  que devido ao flyway é necesário usar postgres 9.4 ou maior. </br>
 No ./api temos a Api em java, rode como um projeto springboot. </br>
 No ./app temos o App em react.js. Rode os seguentes scripts<p/></br>
 
 Assim iremos intalar as dependências.
```````

npm install 
 
 or
  
 yarn

```````
 

Agora vamos rodar o projeto com:

```````

npm start 
 
 or
  
yarn start


```````
<p> Apos rodar o  projeto vá no link: http://localhost:3000 e terá acesso ao ReactApp. </p>

<h3> Documentação da Api  </h3>
<p>Após subir o projeto </p>
Acesse swgger: <link ref="http://localhost:8080/swagger-ui.html#/">http://localhost:8080/swagger-ui.html#/</link>




