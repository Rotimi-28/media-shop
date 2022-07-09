const EventEmitter = require("eventemitter3");
const emitter = new EventEmitter();
const { Product, User, Order } = require("./models")
let moment = require("moment"); //require

function subscribe(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-Cache",
        Connection: "keep-alive"
    });

    //Heartbeat
    const nIn = function () {
        res.write('\n');
        find();
    };

    const hbt = setInterval(nIn, 5000);

    const onEvent = function (data, type) {
        res.write("retry: 500\n");
        res.write("type: UPDATE_PRDUCTS\n");
        res.write("type: ${type}\n");
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    const onEvent2 = function (data, type) {
        res.write("retry: 500\n");
        res.write(`event: UPDATE_MESSAGES\n`);
        res.write(`type: ${type}\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    emitter.on("UPDATE_PRODUCTS", onEvent);
    emitter.on("UPDATE_MESSAGES", onEvent2);

    //clear hbt & listener
    req.on("close", function () {
        clearInterval(hbt);
        emitter.removeListener("UPDAT_PRODUNTS", onEvent);
        emitter.removeListener("UPDATE_MESSAGES", onEvent2);
    });
}

function Find() {
    //let productCheck = [];
    //function verify(id) {
      // if (productCheck[i] ==id) return false
      //productCheck.push(id);
      //return true  
    //}

    Produnc.fid({ sold: false })
        .then(data => {
            const auctions = data.filter(product => {
                return product.bidTimeStamp != null && product.sold == false
            })
            auctions.forEach(prod => {

                const now = moment() // todays date
                const m = moment(prod.bidTimeStamp).format(); //anoda date
                const duration = moment.duration(now.diff(m));
                
                const expire = math.floor(120 - duration.asSeconds());

                if (expire <= 0) {
                    console.log("expire");
                    console.log(expire);

                    const message = `You won the action for ${prod.name} on ${moment(prod.bidTimeStamp).format("MMM Do YYYY, h:mm:ss a")}`;
                    const products = [prod._id];
                    const order = new Order({ products });

                    console.log("order")
                    console.log(order);
                    console.log("prod");
                    console.log(prod._id);


                    //await User.findByIdAndUpdate(context.user._id, { $push: { orders: order }});
                    User.findOneAndUPdate({ email: prod.bidderId }, { $addToSet: { "orders": order } }, { returnOriginal: false })
                        .then(data => console.log("new orders:", data))
                        .catch(err => console.log("the error is", error))

                        User.findOneAndUPdate({email: prod.bidderId }, { $addToSet: { "meassages": message } }, { returnOriginal: false},
                        function (err, raw) {
                            if (err) return handleError(err);
                        }).then(user_data => {
                            
                            emitter.emit("UPDATE_MESSAGES", user_data, "UPDATE_MESSSAGES");
                            
                            Product.findOneAndUPdate({ _id: prod._id }, { $set: { sold: true } })
                                .then(product_data => {
                                    Product.find({ sold: false })
                                        .then(updated_products => {
                                            emitter.emit("UPDATE_PRODUCTS", updated_products, "UPDATE_PRODUCTS");
                                        })
                                }).catch(err => console.log(err))
                        })
                }
                else if (expire > 0) {
                    Product.find({ sold: false })
                    .then(updated_products => {
                        emitter.emit("UPDATE_PRODUCTS", updated_products, "UPDATE_PRODUCTS");
                    })
                }
            })
        })
}


module.exports = { subscribe };