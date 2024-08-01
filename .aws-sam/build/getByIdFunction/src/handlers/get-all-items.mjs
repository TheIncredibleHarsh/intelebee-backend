// Create clients and set shared const values outside of the handler.

// Create a DocumentClient that represents the query to add an item
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import express from 'express';
import serverless from 'serverless-http';
// import express from 'express';
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

export const helloWorldHandler = async () => {
    
    
    const response = {
                statusCode: 200,
                body: JSON.stringify('Hello World!')
            };

    return response;
}


