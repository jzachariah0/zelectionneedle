// Function to draw a needle on the canvas
function drawNeedle(canvasId, angle, isBlue) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    // Clear the canvas for redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Needle properties
    const centerX = canvas.width / 2;
    const centerY = canvas.height - 20;
    const needleLength = 80;
    const needleColor = isBlue ? "blue" : "red";

    // Calculate the needle's end point based on the angle
    const radians = angle * (Math.PI / 180); // Convert angle to radians
    const endX = centerX + needleLength * Math.cos(radians);
    const endY = centerY + needleLength * Math.sin(radians);

    // Draw the needle
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endX, endY);
    ctx.lineWidth = 6;
    ctx.strokeStyle = needleColor;
    ctx.stroke();
}

// Function to update each needle based on specific angles
function updateNeedles() {
    // Define the angle for each needle (in degrees)
    const mainAngle = -60; // Adjust as needed
    const georgiaAngle = -10; // Adjust as needed
    const pennsylvaniaAngle = 30; // Adjust as needed

    // Set color based on the angle direction
    const mainIsBlue = mainAngle < 0;
    const georgiaIsBlue = georgiaAngle < 0;
    const pennsylvaniaIsBlue = pennsylvaniaAngle < 0;

    // Draw needles on each canvas
    drawNeedle("mainElection", mainAngle, mainIsBlue);
    drawNeedle("georgiaElection", georgiaAngle, georgiaIsBlue);
    drawNeedle("pennsylvaniaElection", pennsylvaniaAngle, pennsylvaniaIsBlue);
}

// Initial drawing of needles
updateNeedles();
