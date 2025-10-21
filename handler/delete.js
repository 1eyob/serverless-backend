const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: id,
      },
      ReturnValues: "ALL_OLD",
    };

    const result = await dynamodb.delete(params).promise();

    if (!result.Attributes) {
      return {
        statusCode: 404,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: "Item not found",
        }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Item deleted successfully",
        item: result.Attributes,
      }),
    };
  } catch (error) {
    console.error("Error deleting item:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Could not delete item",
        error: error.message,
      }),
    };
  }
};
