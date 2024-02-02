**Projeto Busca**

Este projeto consiste em uma aplicação web integrada com um servidor e um bot, proporcionando uma experiência completa para os usuários. O objetivo principal é oferecer uma plataforma onde o usuário possa realizar buscas através da api do Google de pesquisa.

### Componentes Principais

1. **Frontend Web:**
   - Desenvolvido utilizando tecnologias REACJS com VITE.
   - Interface intuitiva e responsiva para garantir uma ótima experiência em diversos dispositivos.
   - Oferece acesso às funcionalidades do sistema de forma amigável e eficiente.

2. **Servidor:**
   - Construído com tecnologias robustas, como Node.js com NestJS como framework, para garantir desempenho e escalabilidade.
   - Responsável pelo processamento das requisições, gerenciamento de dados, salvamento no MongoDB e lógica de negócio.
   - Utiliza uma arquitetura RESTful para comunicação eficiente com o frontend e outros serviços.

3. **Bot:**
   - Implementado em Golang.
   - Oferece funcionalidades específicas, como responder a consultas utilizando a api do Google customsearch.

### Funcionalidades

- **Integração com APIs Externas:** Incorporar dados de outras fontes por meio de APIs para enriquecer o conteúdo ou ampliar as capacidades do sistema.
- **Gerenciamento de Dados:** Permitir que os usuários criem, editem e excluam informações, garantindo consistência e integridade dos dados.
- **Análise e Relatórios:** Oferecer insights através de análises de dados e relatórios personalizados para auxiliar na tomada de decisões.

### Como Executar o Projeto Localmente

1. **Clone o Repositório:**
   ```
   git clone https://github.com/rafaellrf09/projeto-busca.git
   ```

2. **Configure as Variáveis de Ambiente:**
   - Renomeie o arquivo `.env.example` para `.env` e preencha com as informações necessárias em cada projeto.

3. **Crie os containers no Docker:**
    - Execute o comando: `docker compose up`

5. **Acesse o Sistema:**
   - Abra seu navegador e acesse `http://localhost:5173/` para interagir com a aplicação web.

### Contribuindo

- Sinta-se à vontade para contribuir com novas funcionalidades, correções de bugs ou melhorias na documentação.
- Para contribuir, siga o fluxo usual de Fork -> Alterações -> Pull Request.

### Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).