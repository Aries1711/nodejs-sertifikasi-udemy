import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message" ,function(message) {
    for (let index = 0; index < message; index++) {
        console.info("thread- " + threadId + "send messages " +index);
        parentPort.postMessage(index);
    }
    parentPort.close();
});