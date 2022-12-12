#!/usr/bin/env node

import { TwitterApi } from 'twitter-api-v2';

const apiKey = 'jXTc6XZC8f9M0evMMgvb6jAjj';
const apiKeySecret = 'zkG123jTMtqothcxrx3cgu4tyQEmqragmvbgqTU1v3JDwxZJH6';
const bearerToken = 'AAAAAAAAAAAAAAAAAAAAADZqkQEAAAAAnJcxy4BPBkihlWs4vYvhTJfn%2Fjg%3DE1NybL7O4sNu4uFkIk52HTyQeVeSQlVl3HBLFyH9qcEePEYlAi';

const test = async (bearerToken) => {
  const client = new TwitterApi(bearerToken);
  const rwClient = client.readWrite;
  await client.currentUserV2();
};

test(bearerToken);
