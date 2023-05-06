# Install the latest version of the Node Package Manager (npm):
npm install -g npm
# Install the AWS CDK library:

npm install aws-cdk-lib 
# Make the directory in which the application will live:

mkdir first-cdk-app
# Go into the newly made directory:

cd first-cdk-app/     
# Initialize our CDK application:

cdk init app --language typescript
# Bootstrap the CDK to provision all the infrastructure needed for the CDK to make changes to your AWS account:

cdk bootstrap
# Install the AWS SDK dependency:

npm install -D aws-sdk
# Install the AWS X-Ray SDK:

npm install -D aws-xray-sdk
# Install a dependency for types for AWS Lambda, allowing you to use typescript as the language to write the Lambda function code:

npm install -D @types/aws-lambda

# install aws lambda
