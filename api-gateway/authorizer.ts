export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an AWS Lambda function
    const myLambdaFunction = new lambda.Function(this, 'MyLambdaFunction', {
      // Specify the function properties
      code: lambda.Code.fromAsset('lambda'), // Provide the path to your Lambda code
      handler: 'index.handler', // Specify the entry point of your Lambda code
      runtime: lambda.Runtime.NODEJS_14_X, // Set the runtime environment
    });

    // Create an authorizer function
    const authorizerFunction = new lambda.Function(this, 'MyAuthorizerFunction', {
      // Specify the authorizer function properties
      code: lambda.Code.fromAsset('authorizer'), // Provide the path to your authorizer Lambda code
      handler: 'index.handler', // Specify the entry point of your authorizer Lambda code
      runtime: lambda.Runtime.NODEJS_14_X, // Set the runtime environment
    });

    // Add IAM policy to allow the authorizer function to invoke your Lambda function
    myLambdaFunction.grantInvoke(new iam.ServicePrincipal('apigateway.amazonaws.com'));

    // Create the API Gateway
    const api = new apigateway.RestApi(this, 'MyApi', {
      restApiName: 'My API Gateway',
      description: 'My API Gateway Description',
      defaultMethodOptions: {
        authorizer: new apigateway.TokenAuthorizer(this, 'MyAuthorizer', {
          authorizerName: 'MyTokenAuthorizer',
          handler: authorizerFunction,
          identitySource: apigateway.IdentitySource.header('Authorization'),
        }),
      },
    });

    // Create a resource and attach a Lambda integration
    const resource = api.root.addResource('myresource');
    const integration = new apigateway.LambdaIntegration(myLambdaFunction);
    resource.addMethod('GET', integration);
  }
}
