import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { randomUUID  } from "crypto";

const client = new DynamoDBClient({ region: 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  try {
    const request = JSON.parse(event.body);
    
    const newBook = {
      title: request.title,
      description: request.description,
      id_book: randomUUID()
    }
  
    const command = new PutCommand({
      TableName: "Books",
      Item: newBook,
    });
    
    await docClient.send(command);
    
    const response = {
      statusCode: 201,
      body: JSON.stringify({ newBook  }),
    };
    
    return response;
  } catch(error) {
    const { message } = error
    return {
      statusCode: 500,
      body: JSON.stringify({ message }),
    };
  }
};
