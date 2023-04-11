#!/bin/bash


cd backend
npm install
cd ..
npm install
cd src
npm run build
cd ..
cd backend
node index.js
