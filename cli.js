#!/usr/bin/env node

import { execSync } from "child_process";
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const command = process.argv[2];

if (command === "init") {
  inquirer
    .prompt([
      {
        type: "input",
        name: "projectName",
        message: "Qual será o nome do seu projeto?",
        default: "project-name",
      },
    ])
    .then((answers) => {
      const projectName = answers.projectName.trim();

      try {
        console.log(
          chalk.blue(`Criando o projeto '${projectName}', aguarde...`)
        );

        execSync(`npm create vite@latest ${projectName} -- --template react`, {
          stdio: "inherit",
        });

        execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

        console.log(chalk.yellow("Instalando e configurando dependências..."));

        execSync(
          `cd ${projectName} && npm install -D tailwindcss postcss autoprefixer`,
          {
            stdio: "inherit",
          }
        );

        execSync(`cd ${projectName} && npx tailwindcss init -p`, {
          stdio: "inherit",
        });

        execSync(`cd ${projectName} && npm install hexa-core@latest`, {
          stdio: "inherit",
        });

        const filesToCopy = [
          "src/lib",
          "src/index.css",
          "components.json",
          "jsconfig.json",
          "tailwind.config.js",
          "vite.config.js",
        ];

        filesToCopy.forEach((file) => {
          const templateFilePath = path.resolve(__dirname, file);
          const destinationPath = path.join(process.cwd(), projectName, file);

          if (fs.existsSync(templateFilePath)) {
            if (fs.statSync(templateFilePath).isDirectory()) {
              fs.copySync(templateFilePath, destinationPath);
            } else {
              fs.copyFileSync(templateFilePath, destinationPath);
            }
          } else {
            console.log(
              chalk.red(`Arquivo ou diretório '${file}' não encontrado!`)
            );
          }
        });

        console.log(
          chalk.green("Hexa Core instalado e configurado com sucesso!")
        );

        console.log(
          chalk.blue(
            `Para começar, acesse o diretório do projeto com: cd ${projectName}`
          )
        );
      } catch (error) {
        console.error(chalk.red("Ocorreu um erro ao criar o projeto:"), error);
      }
    });
} else if (command === "add") {
  const componentName = process.argv[3];

  const components = {
    router: "hexa-core",
    theme: "hexa-core",
    button: "hexa-core",
    dropdown: "hexa-core",
    navbar: "hexa-core",
    bottombar: "hexa-core"
  };

  if (componentName in components) {
    const packageName = components[componentName];
    const sourcePath = path.join(
      "node_modules",
      packageName,
      "src/components/",
      `${componentName}.jsx`
    );
    const destinationPath = path.join(
      process.cwd(),
      "src/components/",
      `${componentName}.jsx`
    );

    try {
      console.log(
        chalk.yellow(`Instalando o componente '${componentName}', aguarde...`)
      );

      execSync(`npm install ${packageName}`, { stdio: "inherit" });

      if (fs.existsSync(sourcePath)) {
        fs.copySync(sourcePath, destinationPath);
        console.log(
          chalk.green(`Componente '${componentName}' adicionado com sucesso!`)
        );
      } else {
        console.log(chalk.red(`Componente '${componentName}' não encontrado!`));
      }
    } catch (error) {
      console.error(
        chalk.red(
          `Ocorreu um erro ao adicionar o componente '${componentName}': ${error.message}`
        )
      );
    }
  } else {
    console.log(chalk.red(`Componente '${componentName}' não encontrado!`));
  }
} else {
  console.log(
    'Comando não reconhecido. Use "hexa-core init" ou "hexa-core add [componente]" para iniciar.'
  );
}
