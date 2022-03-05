# Deploying from ECR to EB

## Resources used
* Tutorial on ECR to EB: https://medium.com/devops-with-valentine/how-to-deploy-a-docker-container-to-aws-elastic-beanstalk-using-aws-cli-87ccef0d5189

* AWS CLI for S3: https://docs.aws.amazon.com/cli/latest/userguide/cli-services-s3-commands.html#using-s3-commands-managing-objects-copy


### delete prior configuration from s3
aws s3 rm s3://annawandev/what-the-bing/image-service/Dockerrun.aws.json

### copy configuration JSON to s3
aws s3 cp Dockerrun.aws.json s3://annawandev/what-the-bing/image-service/Dockerrun.aws.json
 
