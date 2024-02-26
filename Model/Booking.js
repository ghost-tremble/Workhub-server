const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema({
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lesson',
    required: true,
  },
durationStart : {type:Number},
durationEnd : {type:Number},
capacity : {type:Number},



}, { timestamps: true });


const User = mongoose.model('User', BookingsSchema);


module.exports = User;



const model = tf.sequential();
model.add(tf.layers.dense({ units: 10, inputShape: [], activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'linear' }));
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Training data (replace this with your actual data)
const trainingData = tf.tensor(/* your training data */);
const targetData = tf.tensor(/* your target data */);

// Train the model
model.fit(trainingData, targetData, { epochs: 10 });

exports.getRecommendations = async (req, res) => {
  try {
    // Assuming req.query contains user preferences or relevant data for recommendations
    const userInput = req.query;

    // Preprocess the user input (replace this with your preprocessing logic)
    const processedInput = preprocessUserInput(userInput);

    // Make a prediction using the trained TensorFlow model
    const prediction = model.predict(tf.tensor(processedInput));

    // Convert the TensorFlow tensor to a JavaScript array
    const recommendations = Array.from(prediction.dataSync());

    // Get actual workspace recommendations based on TensorFlow predictions
    const workspaceRecommendations = await workspaceService.getRecommendations(recommendations);

    res.json(workspaceRecommendations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve workspace recommendations' });
  }
};
