# aws-cdk

# cdk deploy

[100%] success: Published f26bd099f36f71e8ea755bdd0cf3dafb042b64e98808991f1c62740bebe8b86a:current_account-current_region
FirstCdkAppStack: creating CloudFormation changeset...
[██████████████████████▎···································] (5/13)

1:49:14 AM | CREATE_IN_PROGRESS   | AWS::CloudFormation::Stack  | FirstCdkAppStack
1:49:34 AM | CREATE_IN_PROGRESS   | AWS::IAM::Policy            | function/ServiceRole/DefaultPolicy


✨  Deployment time: 73.29s

Outputs:
FirstCdkAppStack.RestAPIEndpointB14C3C54 = https://tw7ypv7kd0.execute-api.us-east-1.amazonaws.com/prod/
Stack ARN:
arn:aws:cloudformation:us-east-1:813587675374:stack/FirstCdkAppStack/3102c530-ebb0-11ed-b75c-0e5e6e89f46f

✨  Total time: 85.18s


# test 

curl https://tw7ypv7kd0.execute-api.us-east-1.amazonaws.com/prod/scan



```
cloud_user:~/environment/first-cdk-app (master) $ curl https://tw7ypv7kd0.execute-api.us-east-1.amazonaws.com/prod/scan
{"Items":[],"Count":0,"ScannedCount":0}

cloud_user:~/environment/first-cdk-app (master) $ 

cloud_user:~/environment/first-cdk-app (master) $ curl https://tw7ypv7kd0.execute-api.us-east-1.amazonaws.com/prod/scan
{"Items":[{"id":"my-cdk"}],"Count":1,"ScannedCount":1}

cloud_user:~/environment/first-cdk-app (master) $ 

```
# DynamoDb 

MyDynamoDbStackStack-TableCD117FA1-1E53L1ZUGIOAL

# resources
https://github.com/DavidBlocher/cdk-lab-1
