const EventEmitter = require("events")

const eventEmitter = new EventEmitter();

eventEmitter.on("place_order",function(data){
    console.log("Order placed= ",data)
})

eventEmitter.on("Order_delivered",function(data){
    console.log("Order delivered at",data)
})


eventEmitter.emit("place_order","price:200")
eventEmitter.emit("place_order","price:300")
eventEmitter.emit("Order_delivered","hyd")