export function handler(event, context, callback) {
  console.log(event);
  console.log(context.clientContext);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!', user: context }),
  });
}
