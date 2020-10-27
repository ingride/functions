exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World! I am a cactus, and I am cute 🌵"
  });
};
