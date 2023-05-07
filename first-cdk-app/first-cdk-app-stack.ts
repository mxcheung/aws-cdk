import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class MyDynamoDBStack extends Stack {
 constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    //define dynamodb table
    const dynamodb_table = new dynamodb.Table(this, "Table", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
      removalPolicy: RemovalPolicy.DESTROY
      }
    )
  }
}
