#!/usr/bin/env node

import { TwitterApi } from 'twitter-api-v2';

// const apiKey = process.env.API_KEY;
// const apiKeySecret = process.env.API_KEY_SECRET;
// const bearerToken = process.env.BEARER_TOKEN;

const test = async (bearerToken) => {
  const client = new TwitterApi(bearerToken);
  const rwClient = client.readWrite;
  await client.currentUserV2();
};

test(bearerToken);
