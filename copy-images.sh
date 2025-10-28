#!/bin/bash

# Script to help copy images from project folders to the website

# Create project images directory
mkdir -p images/projects

echo "=== Copy Project Images to Portfolio ==="
echo ""
echo "Instructions:"
echo "1. Copy screenshots/images from your projects to: images/projects/"
echo "2. Name them according to the project name (e.g., medico-chatbot-1.jpg)"
echo ""
echo "Example commands you can run:"
echo ""
echo "# Copy from clothes-fitting-app"
echo "cp ~/Music/'Github Projects'/clothes-fitting-app/screenshots/* images/projects/"
echo ""
echo "# Copy from medico-chatbot"
echo "cp ~/Music/'Github Projects'/medico-chatbot/screenshots/* images/projects/"
echo ""
echo "# Copy from mine-satellite-segformer"
echo "cp ~/Music/'Github Projects'/mine-satellite-segformer/images/* images/projects/"
echo ""
echo "After copying, update the image paths in your HTML files"
echo "from: /images/placeholder.png"
echo "to: /images/projects/project-name.jpg"

