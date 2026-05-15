pipeline {
  agent any
  tools { nodejs 'NodeJS-20' }

  environment {
    EC2_HOST = '34.225.113.128'
    EC2_USER = 'ubuntu'
    DEPLOY_PATH = '/var/www/myapp'
  }

  stages {
    stage('Get code') {
      steps { checkout scm }
    }
    stage('Install packages') {
      steps { sh 'npm install' }
    }
    stage('Build app') {
      steps { sh 'npm run build' }
    }
    stage('Deploy to EC2') {
      steps {
        sshagent(['ec2-ssh-key']) {
          sh '''
            scp -o StrictHostKeyChecking=no -r dist/*               $EC2_USER@$EC2_HOST:$DEPLOY_PATH/
            ssh -o StrictHostKeyChecking=no               $EC2_USER@$EC2_HOST               "sudo systemctl reload nginx"
          '''
        }
      }
    }
  }

  post {
    success { echo 'Deployed!' }
    failure  { echo 'Something went wrong.' }
  }
}