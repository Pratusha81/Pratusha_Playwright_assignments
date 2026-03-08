function launchBrowser(browserName) {
   if (typeof browserName !== "string" || browserName.trim() === "") {
        console.log("Invalid browser name.");
        return;
    }
    browserName = browserName.toLowerCase();

    if (browserName === "chrome") {
        console.log("Launching Google Chrome...");
    } else if (browserName === "firefox") {
        console.log("Launching Mozilla Firefox...");
    } else if (browserName === "edge") {
        console.log("Launching Microsoft Edge...");
    } else {
        console.log(`Browser "${browserName}" is not supported.`);
    }
}

// Function to simulate running tests using switch
function runTests(testType) {
    if (typeof testType !== "string" || testType.trim() === "") {
        console.log("Invalid test type.");
        return;
    }

    switch (testType.toLowerCase()) {
        case "unit":
            console.log("Running unit tests...");
            break;
        case "integration":
            console.log("Running integration tests...");
            break;
        case "end-to-end":
            console.log("Running end-to-end tests...");
            break;
        default:
            console.log(`Unknown test type: "${testType}"`);
    }
}
launchBrowser("Chrome");
runTests("Integration");