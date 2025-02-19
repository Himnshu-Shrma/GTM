document.getElementById("testButton").addEventListener("click", function() {
    console.log("Button clicked - Sending GTM event!");

    // Push event to GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'button_click',
        'button_text': 'Click Me'
    });

    alert("GTM event sent! Check GTM preview mode.");
});
