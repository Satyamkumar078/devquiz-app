pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Satyamkumar078/devquiz-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t devquiz-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name devquiz devquiz-app'
            }
        }

    }
}