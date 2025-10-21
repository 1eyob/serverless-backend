const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const timestamp = new Date().toISOString();
    const item = {
      id: uuidv4(),
      ...data,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: item,
    };

    await dynamodb.put(params).promise();

    return {
      statusCode: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Item created successfully",
        item: item,
      }),
    };
  } catch (error) {
    console.error("Error creating item:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Could not create item",
        error: error.message,
      }),
    };
  }
};
