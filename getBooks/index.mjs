import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ScanCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  try {
    const command = new ScanCommand({
      ProjectionExpression: "#id_book, title, description",
      ExpressionAttributeNames: { "#id_book": "id_book" },
      TableName: "Books",
    });

    const books = await docClient.send(command);
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({ books: books['Items'] }),
    };
    
    return response;
  } catch (error) {
    const { message } = error
    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  }
};
