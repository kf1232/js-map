## Technologies Used
Frontend: React, TypeScript, D3.js
Backend: Node.js, Express
Database: MongoDB
Build Tool: Vite

## Features

Real-Time Data Visualization: Displays live metrics with automatic updates.

## Prerequisites
Node.js
npm or yarn

## Install / Run
cd api
npm i
npm run dev

cd web
npm i
npm run dev

## Next Steps
Process Management - PM2 service launch commands to auto-start service without terminal
Graph view enhancement - Allow the user to select on the graph time-frames to explore
Multi Table Render - Understand the maximum capacity of the frontend service, how much updating before it breaks down?
>> As-is after 10 minutes at 1ms inserts the web UI starts to slow down. : Solution : Cull old data to limit the in-memory footprint (buy a better computer?)
