PASSO A PASSO DA CONFIGURAÇÃO

- [x] **Plugin ESLINT E PRETTIER** 

​	1- Baixar os plugins no VSCode

​		Para que servem:

​			Prettier = formatação do código

​			EsLinter = age na busca dos erros de formatação para padronizar

​	2- Configure o VSCode: ctrl+ shift+p => Abrir configurações de usuários=> marcar Editor: Format on save.



- [x] **GIT**

  ​	Criar na raiz -> .gitignore

  ​		Inserir: 	node_modules

  ​						 	.env

- [x] **npm/yarn**

  ​	Startando o projeto => yarn init -y

  

- [x] **.editorconfig**

  ​	Botão direito na raiz => generate editorconfig	

  ​			-> alterar:

  ​				ident_size = 2

  ​				end_of_line = lf

  ​		Para que serve?

  ​		 Informar ao editor quais são os padrões de configuração dos arquivos, esteja eles no 			ambiente windows, linux etc..

- [x] **Typescript**

  ​	yarn add typescript -D

  ​	yarn tsc --init

  ​	yarn add ts-node-dev

  

  Configurar o .tsconfig

  {

   "compilerOptions": {

     	"target": "es2017",                  

    	"module": "commonjs",  

    	"allowJs":true,               

    	"esModuleInterop": true,             

    	"forceConsistentCasingInFileNames": true,                        

   	 "skipLibCheck": true,

    	"outDir": "./dist"                 

   	}

  }

  

- [x] **ESLint**

  ​	yarn add eslint -D

  ​	yarn eslint --init

  ​		=> selecione{

  ​			-> to check sintax, find problems and enforce code style

  ​			-> typescript module (import/export)

  ​			-> React ou None of these(se for backend)

  ​			-> yes

  ​			->browse ou node ( a depender  se for front ou back)

  ​			-> use popular style guide -> standard ou airbnb

  ​			-> Json

  ​			-> yes

  } => após isso delete o arquivo packagelock.json e yarn.lock => em seguida de um yarn no terminal

  

- [x] **Prettier**

​		yarm add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

​		=> alterar o arquivo .eslintrc.json{

​			"extends"[

​				"standard", "prettier"

​			],

​		"plugins":[

​			"@types....", "prettier"

​		]

​		"rules":{

​			"prettier/prettier":"error"

​		}

​	}

- [x] **dotenv**

  Variáveis de ambiente servem para resevar informações que não devem ser exposta a vulnerabilidade

  criar na raiz do projeto:

  .env.local (serve de modelo das variaveis sem conter as informações )

  .env( deve ser ocultada no .gitignore)

  

  yarn add dotenv

  

  Incluir no package.json para que o server enxergue  => "scripts":{ "dev": "ts-node-dev -r dotenv/config ./src/server.ts"}

  

- [x] **Script pata desenvolvimento, build e start em produção**

​		Incluir em scripts: "build": "tsc"

​		yarn build

​		=> Isso vai gerar a pasta dist => server.js , onde todo o código ts será transpilado para js

​		

​		Para rodar o projeto no node:

​		Incluir em scripts: "start":"node ts-node-dev -r dotenv/config ./dist/server.js"



