pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Satyamkumar078/devquiz-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devquiz-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name devquiz devquiz-app'
            }
        }

    }
}
