#!/bin/bash
cd /home/ubuntu/app
docker compose down || true
docker compose up -d --build
