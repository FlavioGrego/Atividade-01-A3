FICHA RESUMO

Padrão de Projeto: MCV (Model-View-Controller) 

O MCV é um padrão que organiza o código em 3 camadas, sendo elas Model, View e Controller, é bastante utilizado na criação de aplicações escaláveis e estruturadas, normalmente com o framework Express. 

A função de seus componentes são: 

- Model: Gerencia os dados, lógica de negócios e interage com o banco de dados. 

- View: É a resposta em HTTP, normalmente no formato JSON. 

- Controller: Processa as requisições HTTP, chamando os métodos do Model e retornando as respostas através do View. 

Vantagens do MCV: 

- Fácil manutenção, escalabilidade facilitando a adição de novas funcionalidades, estrutura clara e bem definida. 

Desvantagens do MCV: 

- Muito complexo para projetos pequenos, dificuldade na configuração inicial. 

No geral, o padrão MCV é uma boa escolha para desenvolver APIs REST com o Node, pois sua estrutura é clara e modular, o que facilita sua manutenção e escalabilidade, sendo ideal principalmente para projetos de média a alta escala. 
