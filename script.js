```javascript
"use strict";

/*
 * Solar Powered Ironing System
 * Demo Monitoring Script
 *
 * This version uses simulated sensor values.
 * It does NOT control a real electric iron.
 */

// ------------------------------
// Demo sensor values
// ------------------------------

const solarVoltage = 24.0;
const solarCurrent = 4.5;

const batteryVoltage = 25.2;
const batteryCapacity = 80;

// ------------------------------
// Calculate solar power
// ------------------------------

const solarPower = solarVoltage * solarCurrent;

// ------------------------------
// Display values in the console
// ------------------------------

console.log("Solar Powered Ironing System");
console.log("-----------------------------");
console.log("Solar Voltage:", solarVoltage.toFixed(2), "V");
console.log("Solar Current:", solarCurrent.toFixed(2), "A");
console.log("Solar Power:", solarPower.toFixed(2), "W");
console.log("Battery Voltage:", batteryVoltage.toFixed(2), "V");
console.log("Battery Level:", batteryCapacity + "%");

// ------------------------------
// Create dashboard
// ------------------------------

function createDashboard() {
    const dashboard = document.createElement("section");

    dashboard.id = "dashboard";

    dashboard.innerHTML = `
        <div class="container">

            <div class="section-title">
                <h2>Solar Energy Dashboard</h2>
                <p>Current system demonstration values</p>
            </div>

            <div class="cards">

                <div class="card">
                    <h3>☀️ Solar Voltage</h3>
                    <p>
                        <span id="solar-voltage">
                            ${solarVoltage.toFixed(2)}
                        </span>
                        V
                    </p>
                </div>

                <div class="card">
                    <h3>⚡ Solar Current</h3>
                    <p>
                        <span id="solar-current">
                            ${solarCurrent.toFixed(2)}
                        </span>
                        A
                    </p>
                </div>

                <div class="card">
                    <h3>🔌 Solar Power</h3>
                    <p>
                        <span id="solar-power">
                            ${solarPower.toFixed(2)}
                        </span>
                        W
                    </p>
                </div>

                <div class="card">
                    <h3>🔋 Battery Voltage</h3>
                    <p>
                        <span id="battery-voltage">
                            ${batteryVoltage.toFixed(2)}
                        </span>
                        V
                    </p>
                </div>

                <div class="card">
                    <h3>🔋 Battery Level</h3>
                    <p>
                        <span id="battery-level">
                            ${batteryCapacity}
                        </span>
                        %
                    </p>
                </div>

                <div class="card">
                    <h3>🌱 System Status</h3>
                    <p id="system-status">
                        Solar System Active
                    </p>
                </div>

            </div>

        </div>
    `;

    document.body.insertBefore(
        dashboard,
        document.querySelector(".contact")
    );
}

// ------------------------------
// Update dashboard
// ------------------------------

function updateDashboard() {
    const voltageElement =
        document.getElementById("solar-voltage");

    const currentElement =
        document.getElementById("solar-current");

    const powerElement =
        document.getElementById("solar-power");

    const batteryVoltageElement =
        document.getElementById("battery-voltage");

    const batteryLevelElement =
        document.getElementById("battery-level");

    if (
        !voltageElement ||
        !
