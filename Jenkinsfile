pipeline {
    agent any

    stages {
        stage('Clonar el Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/AdrianaBetancurR/automatizacionjenkins.git'
            }
        }
        stage('Construir imagen de Docker') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')]) {
                        // Construir la imagen de Docker con el argumento de build MONGO_URI
                        docker.build('proyectos-micro:v1', '--build-arg MONGO_URI=${MONGO_URI} .')
                    }
                }
            }
        }
        stage('Desplegar contenedores Docker') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')]) {
                        // Desplegar los contenedores usando docker-compose
                        sh 'docker-compose up -d'
                    }
                }
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Status del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build. Puede detallar en: ${env.BUILD_URL}",
                to: "adrianabetancur99@gmail.com",
                from: "jenkins@iudigital.edu.co"
            )
        }
    }
}
