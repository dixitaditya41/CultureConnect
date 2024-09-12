

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());

//Connectivity....
mongoose.connect('mongodb://localhost:27017/cultureconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});


const storySchema = new mongoose.Schema({
  title: String,
  image: String,
  content: String,
});

const Story = mongoose.model('Story', storySchema);



//API
app.get('/api/stories', async (req, res) => {
  const stories = await Story.find();
  res.json(stories);
});


app.post('/api/stories', async (req, res) => {
  const newStory = new Story(req.body);
  await newStory.save();
  res.json(newStory);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.delete('/api/stories/:id', async (req, res) => {
  try {
    const story = await Story.findByIdAndDelete(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting story', error });
  }
});
