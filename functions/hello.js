// domain/.netlify/functions/hello (npm run dev)
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'Hello World',
  };
};
