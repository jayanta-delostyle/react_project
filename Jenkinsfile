pipeline {
    agent any

    stages {
        stage('build') {
            agent {
                docker {
                    image "node:20-alpine"
                    reuseNode true
                }
            }
            steps {
                sh '''
                ls -la
                node --version
                npm --version
                echo "This is a test by jay"
                npm ci
                npm run build
                ls -la

                '''
            }
        }
        stage('test')  {
            steps {
            sh ''' 
                echo "This is a test by jay"
                test -f dist/jjj.html
            '''
            }
        }
    }
}
