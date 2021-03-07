if ("ServiceWorker" in navigator) {
    navigator.serviceworker.register("sworker.js").then("registration" => {
        console.log("service worker registerd");
        console.log("registration");
    }).catch(error => {
        console.log("service worker error")
        console.log("error")
    })
}
else {
    alert("service worker not working")
}
