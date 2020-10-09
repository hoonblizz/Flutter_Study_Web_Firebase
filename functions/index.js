const functions = require('firebase-functions');

/// onRequest Test
exports.testOnRequest = functions.https.onRequest((req, res) => {

  if(req.method === 'GET') {
    // Get data from query
    const {message, num1, num2} = req.query;
    console.log(`[GET] Message: ${message} and Data: ${num1}, ${num2}`);

    res.status(200).send({message: "[GET] API called! ", data: {message: message, num1: num1, num2: num2, result: (num1 * num2)}});
  
  } else if(req.method === 'POST') {
    
    const {message, num1, num2} = JSON.parse(req.body);
    console.log(`[POST] Message: ${message} and Data: ${num1}, ${num2}`);
    
    res.status(200).send({message: "[POST] API called! ", data: {message: message, num1: num1, num2: num2, result: (num1 * num2)}});
  
  }

  res.status(400).send({message: "API called error! "});
});

/// onCall Test for cloud functions
exports.testOnCall = functions.https.onCall((data, context) => {

  const {message, num1, num2} = data;

  return {
    message: "[onCall] Function called!",
    data: {
      message: message,
      num1: num1,
      num2: num2,
      result: (num1 * num2)
    }
  };

}); 