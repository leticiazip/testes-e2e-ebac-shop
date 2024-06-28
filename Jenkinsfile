pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'pipeline', url: 'https://github.com/leticiazip/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependencia') {
            steps {
                sh 'npm install'
            }
        }
        stage('Executar teste') {
            steps {
                sh 'npx cypress open'
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}