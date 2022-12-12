import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config();

const client = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const sendTwit = async () => {
  try {
    const rwClient = client.readWrite;
    await rwClient.v2.tweet('Third test twit');
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default sendTwit;
