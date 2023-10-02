import express from 'express';
import dotenv from 'dotenv';
import redis from 'redis';
dotenv.config();

// Redis 연결
const redisClient = redis.createClient({ 
    url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`,
    legacyMode: true
}); // legacy 모드 설정 (v4 업데이트 버전이 콜백 기반이 아닌 Promise 비동기로 동작되도록 변경되어 옛날 콜백 버전을 사용할 경우 legacy를 반드시 설정해주어야 한다.)

redisClient.on('connect', () => {
    console.info('Redis connected!');
});
redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});
redisClient.connect().then(); // redis v4 연결 (비동기)
const redisCli = redisClient.v4;

export default redisClient;

