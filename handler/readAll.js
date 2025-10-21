const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  try {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
    };

    const result = await dynamodb.scan(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        items: result.Items,
        count: result.Count,
      }),
    };
  } catch (error) {
    console.error("Error reading items:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Could not retrieve items",
        error: error.message,
      }),
    };
  }
};
