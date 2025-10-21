const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;
    const data = JSON.parse(event.body);

    // Remove id and timestamps from update data if present
    delete data.id;
    delete data.createdAt;

    // Build update expression
    const updateExpressionParts = [];
    const expressionAttributeNames = {};
    const expressionAttributeValues = {};

    Object.keys(data).forEach((key, index) => {
      updateExpressionParts.push(`#attr${index} = :val${index}`);
      expressionAttributeNames[`#attr${index}`] = key;
      expressionAttributeValues[`:val${index}`] = data[key];
    });

    // Add updatedAt timestamp
    updateExpressionParts.push(`#updatedAt = :updatedAt`);
    expressionAttributeNames["#updatedAt"] = "updatedAt";
    expressionAttributeValues[":updatedAt"] = new Date().toISOString();

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: id,
      },
      UpdateExpression: `SET ${updateExpressionParts.join(", ")}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",
    };

    const result = await dynamodb.update(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Item updated successfully",
        item: result.Attributes,
      }),
    };
  } catch (error) {
    console.error("Error updating item:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Could not update item",
        error: error.message,
      }),
    };
  }
};
