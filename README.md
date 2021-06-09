# Process app

Aplicação de gerenciamento de processos.

## Como rodar em desenvolvimento
### Backend
O módulo de backend utiliza o banco de dados H2 e está configurado para ser utilizado na memória, assim a aplicação não necessita de qualquer banco de dados extra, porém os dados não persistirão caso reinicie a aplixação, além disso foram usadas migrations com flyway para criar a estrutura e inserir algumas informações. O context-path sera /process e a porta da aplicação será a 8080.
#### Documentação da API
Foi usado a lib swagger para documentar rapidamente a API do backend o caminho para acessa-la é
- "/swagger-ui.html"

### Frontend
O módulo de frontend foi desenvolvido usando a lib AntDesign, essa lib contém diversos componentes prontos que facilitam o processo de desenvolvimento. A porta da aplicação será a 3000. Existem usuários cadastrados por meio de migrations para realizar login. 
- login:  admin
- senha: 12345678

- login:  triador
- senha: 12345678

- login:  final1
- senha: 12345678

Rodar os seguintes comandos:

```bash
yarn 
#or 
npm install

```
```bash
yarn start
#or 
npm start

```
## Checklist de tarefas cumpridas

-  Backend
	- [x] Login
	- [x] Listar usuários
	- [x] Cadastrar usuários
	- [x] Editar usuários
	- [x] Listar processos
	- [x] Cadastrar processos
	- [x] Editar processos
	- [x] Adicionar usuários para dar parecer a processos
	- [x] Dar parecer a processos
- Frontend
	- [x] Login
	- [x] Listar usuários
	- [x] Cadastrar usuários
	- [x] Editar usuários
	- [x] Listar processos
	- [x] Cadastrar processos
	- [x] Editar processos
	- [x] Adicionar usuários para dar parecer a processos
	- [x] Dar parecer a processos
