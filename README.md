# TeaTime

# command line terminal

\_\_\_\_en

To do any command in the terminal, you have to follow this rule :

```bash
	[command name] [ARG]*
```

That means, you write the command name first, put a space, then, add as many arguments as you need on the command line.

Here for example :

```bash
	pwett cc bob
```

the command \[pwett] have been launched with two arguments, \[cc] and \[bob]

```bash
	pwett
```

the command \[pwett] have been launched with no arguments.

\_\_\_\_fr

Pour utiliser une commande dans le terminal, tu dois suivre les règles suivantes :

```bash
	[Nom de la commande] [ARG]*
```

Cela veud dire que tu dois d'abord noter le nom de la commande, un espace, et ajouter autant d'arguments que tu veux, toujours séparés par des espaces sur la ligne de commande.

Par example :

```bash
	pwett cc bob
```

la commande \[pwett] a été lancée avec 2 arguments \[cc] et \[bob]

```bash
	pwett
```

la commande \[pwett] a été lancée sans arguments.

## GIT

### What is GIT ?
Git is a software that does "version control" that mean that instead of having you, the user having to save your previous files in some kind of disorganized way, like having a project_02_02_2022, project_03_02_2022 and so on if you want to see the previous state of what you did, GIT will allow you to have access to your changes at all time. It also allow you to share them online with github for example.
Here is how you use it : 
- create an account on github, this need to happen only once, then your account is for life
- Create a repository from github, for each project. If you code an app for doing a to do list app, do not put it in the same repository as the cooking suggestion app you might code, it's just easier for you to find what you did then. Set up public repository for now. Select the option to set up a readme inside the repository from the beginning.
- Clone the repository, or "repo" on your machine, to be able to send stuff to github. So open the terminal from vscode, send ```ls``` command to see in which folder you are, if you want to set up your repo in a specific folder, use the command ```cd``` to move from inside the terminal. Like ```cd ~/Documents``` should put you in the Documents folder if I didn't do a mistake. To clone the repository locally, the command is
```git clone ...``` where ... is the web adress of the repo.
- Then the repository will exist on your computer as a folder, you will write your code in this folder, open vscode from this folder. Might be something like file, open folder.
- I know it sounds complicated, just send me a message if it's too much, might be better for me to explain it to you first directly.
- The command ```git status``` tell you which changes are ready to go online or not.
- The command ```git add``` let you add new file to be sent online (add the path of the file in the command after add)
- The command ``` git commit ``` let you prepare a local save of file, so that you can send them online later add the argument -m"Your commit message" to name your save describing the changes you made
- The command ```git push``` let you send the saves you made locally online.
- 
Read well what git tell you on each command, it might complain or ask you to register on you computer or some other stuff. It gives you valuable information in the terminal.

You can't save changes if you didn't make any ( well you can, but that a story for another day) so add a file into you repo on you computer, and try to send it online

See the rest of this document for more info !

### C'est quoi GIT ?
--- flemme de traduire là
### See the state of what you are about to save locally :

### Voir les fichiers que tu es sur le point de sauvegqrder sur ta machine :

```bash
	git status
```

### Save your work on your computer :

### Faire des sauvegarde de votre travail, localement :

```bash
	git add *
```

or

```bash
	git add thePath/MyFile.extension
```

### Save your staged work :

### sauvegarder ton taf mis dans la sauvegarde grace a git add:

```bash
	git commit -m"Put here a comment saying what you did on that save"
```

You can technically put an empty comment, please refrain to do so.
Vous pouvez techniquement ne pas mettre de commentaire, merci d'en mettre un quand même.

### Send your local saves online :

### Envoyer tes sauvegardes locales sur github :

```bash
	git push
```

### Get your friends online saves:

### Récupèrer les sauvegarde des tes partenaires :

```bash
	git pull
```

### cd

cd is a command that allows you to change directory from the command line terminal available in vscode.
cd te permet de changer de dossier dans ton terminal, et donc d'acceder a des fichiers differents en ligne de commande

### ls

ls will list the file that are where you are currently exploring
ls va te montrer les fichiers voisins de ta position dans le terminal

### pwd

Gives you the full path of where you currently are in the terminal explorer
Te donne la position exacte de ou se trouve ton terminal par rapport a tes fichiers/dossiers sur ta machine

### npm

\_\_\_\_en

npm is a CLI : a Command Line Interface, that mean that, similarly to cd, git, ls, pwd, and so much more, it will do action for you given certains arguments.
This CLI will help you run javascript code, download dependencies, use scripts...

\_\_\_\_fr

npm est un CLI: Une interface en ligne de commande, c'est pas bien différent de cd, git, ls, pwd, et d'autres, c'est juste un outil qui te permet de faire des trucs directement depuis le terminal, selon les arguments que tu lui donne.
Ce CLI va t'aider a lancer du code javascript, télécharger des dépendances (librairies), lancer des scripts...

#### npm i

If you want to launch the projet locally (without docker), you have to install dependencies by doing npm i, from ./front folder. npm install is a synonymous command, it's exactly the same.

Si tu veux lancer le projet localement (sans docker), tu devras d'abord installer les dépendances en faisant npm i depuis ./front, alternativement, tu peux faire npm install, c'est un synonime, c'est strictement la même chose.

#### npm run

\_\_\_\_en

npm run allows you to run scripts that exists in the package.json file where you are, from ./front, you can see that you have this :
"scripts": {
"dev": "tsc && vite -- host",
"build": "tsc && vite build",
"lint": "eslint src --ext .js,.jsx,.ts,.tsx",
"lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
"format": "prettier \"src/\*_/_.{js,jsx,ts,tsx,css,scss}\" --write",
"compile": "tsc",
"preview": "vite preview"
},

Those are script you can call by npm run.
So you can do :

```bash
	npm run dev
```

or

```bash
	npm run build

```

this other one you won't really want to use them so far.

dev allows you to run the project for development purpose, where build is for "production purpose", we will see that later.

\_\_\_\_fr

npm te permet de lancer des scripts qui existent dans le fichier package.json ou tu te trouve, par exemple, depuis ./front, tu as ceci :
"scripts": {
"dev": "tsc && vite -- host",
"build": "tsc && vite build",
"lint": "eslint src --ext .js,.jsx,.ts,.tsx",
"lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
"format": "prettier \"src/\*_/_.{js,jsx,ts,tsx,css,scss}\" --write",
"compile": "tsc",
"preview": "vite preview"
},

Ce sont des scripts que tu peux lancer, en les préfixant avec npm run :
Donc tu peux faire :

```bash
	npm run dev
```

ou

```bash
	npm run build
```

ce dernier tu voudras pas vraiment l'utiliser pour le moment.

le script dev te permet de lancer le projet dans le cadre de son développement, c'est ce qui t'interesse, là où l'autre servira plus pour la production, mais c'est un concept qu'on verra plus tard.

# starting to develop actual code

# commencer a développer pour de vrai

\_\_\_\_en

As said up there, you can launch the app from ./front by doing

```bash
	npm run dev
```

then, you can see what it does by doing there :
http://localhost:5173/

once your started the "development server" you can do changes in the code from ./front/src, and see what it does on screen, from your webbrowser. You don't need to restart npm run dev command, it will update as you save your code files.

\_\_\_\_fr

Comme dit plus haut, tu peux lancer l'app depuis ./front en faisant

```bash
	npm run dev
```

ensuite, tu peux voir ce que ça fait en allant ici :
http://localhost:5173/

Une fois que tu as lancé le "serveur de développement", tu peux faire des modifications dans le code depuis ./front/src et voir en direct tes changements, en sauvegardant ton code (ctrl s, pas git), depuis ton navigateur web. Pas besoin de relancer la commande.

# A few miscelaneous tips :

# quelques conseils en vrac :

## ctrl c in terminal

Kill the current command.
Arrete la commande en cours de fonctionnement.

## ctrl k then ctrl f

format your code. You might need to install prettier linter to have the possibility to choose a linter, and for the force format to actually work. It's an ongoing bug from vscode for years now.

Indente ton code, qu'il soit plus lisible. Tu risque d'avoir besoin d'installer le linter prettier pour que ça fonctionne, et que tu ai la boite de dialogue pour choisir un linter, et ainsi forcer la mise en forme de ton code. C'est un bug courant de vscode depuis quelques années maintenant.

## dot in github.com repos

Allows to open a vscode interface from your browser when you click on the dot button on your keyboard -> .

Ca ouvre une interface de vscode directement depuis ton navigateur web quand tu click sur la touche "point" sur la clavier -> .

## ctrl + right or left arrow

This key combination allows to move from word to word instead of char to char, with the "suppr" touch or "delete", it also delete words per words

Cette combinaison de touche permet de se déplacer de mot en mot au lieu de character par character, avec la touche "suppr" ou "delete" ça suppr par mot aussi

## Add yours below to remember them :)

## Ajoute les tiens ici, pour s'en souvenir :)
