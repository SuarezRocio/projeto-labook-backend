# projeto-labook-backend

Projeto Labook

O Labook é uma rede social com o objetivo de promover a conexão e interação entre pessoas. Quem se cadastrar no aplicativo poderá criar e curtir publicações.

Agora que temos as bases de criação de APIs e banco de dados, o próximo nível é a implementação de segurança e códigos mais escaláveis. Veremos durante o prazo de entrega desse projeto inúmeros conceitos e formas de desenvolvimento seguindo padrões de design e arquitetura, e seu desafio será unir as funcionalidades com as boas práticas de código. Conteúdos abordados

NodeJS
Typescript
Express
SQL e SQLite
Knex
POO
Arquitetura em camadas
Geração de UUID
Geração de hashes
Autenticação e autorização
Roteamento
Postman

Banco de dados https://dbdiagram.io/d/63d16443296d97641d7c1ae1

Lista de requisitos

Documentação Postman de todos os endpoints (obrigatória para correção)

Endpoints
    signup
    login
    get posts
    create post
    edit post
    delete post
    like / dislike post

Autenticação e autorização
    identificação UUID
    senhas hasheadas com Bcrypt
    tokens JWT

Código
    POO
    Arquitetura em camadas
    Roteadores no Express

Like or dislike post (mesmo endpoint faz as duas coisas)

Endpoint protegido, requer um token jwt para acessá-lo. Quem criou o post não pode dar like ou dislike no mesmo.

Caso dê um like em um post que já tenha dado like, o like é desfeito. Caso dê um dislike em um post que já tenha dado dislike, o dislike é desfeito.

Caso dê um like em um post que tenha dado dislike, o like sobrescreve o dislike. Caso dê um dislike em um post que tenha dado like, o dislike sobrescreve o like.

Para entender a tabela likes_dislikes

no SQLite, lógicas booleanas devem ser controladas via 0 e 1 (INTEGER)

quando like valer 1 na tabela é porque a pessoa deu like no post
    na requisição like é true

quando like valer 0 na tabela é porque a pessoa deu dislike no post
    na requisição like é false

caso não exista um registro na tabela de relação, é porque a pessoa não deu like nem dislike

caso dê like em um post que já tenha dado like, o like é removido (deleta o item da tabela)

caso dê dislike em um post que já tenha dado dislike, o dislike é removido (deleta o item da tabela)

______________________________________________________________________________________________________
Me gusta o no me gusta la publicación (el mismo punto final hace ambas cosas)

Punto final protegido, requiere un token jwt para acceder a él. A quien haya creado la publicación no le puede gustar ni disgustar.

Si le gusta una publicación a la que ya le ha gustado, el me gusta se deshace. Si no te gusta una publicación que ya no te ha gustado, se deshace el disgusto.

Si le gusta una publicación que no le ha gustado, el Me gusta sobrescribe el No me gusta. Si no te gusta una publicación que te gustó, el disgusto sobrescribe el me gusta.

Para entender la tabla likes_dislikes

 en SQLite, la lógica booleana debe controlarse mediante 0 y 1 (INTEGER)

 cuando me gusta vale 1 en la tabla es porque a la persona le gustó la publicación
     en la solicitud similar es verdadera

 cuando me gusta vale 0 en la tabla es porque a la persona no le gustó la publicación
     en la solicitud similar es falsa

 si no hay registro en la tabla de relaciones es porque a la persona no le gusto o no le gusto

 si le gusta una publicación a la que ya le ha gustado, se elimina el me gusta (elimina el elemento de la tabla)

 si no le gusta una publicación que ya no le ha gustado, se elimina el no me gusta (elimina el elemento de la tabla)
