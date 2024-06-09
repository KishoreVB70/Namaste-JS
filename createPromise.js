const isValid = cart => cart.length <= 5

function createOrder(cart) {
    const promise = new Promise((resolve, reject) => {

        // Reject
        if (!isValid(cart)) {
            const error = new Error("cart has more than 5 elements");
            reject(error);
        }

        // Resovle
        const orderId = 1;
        resolve(orderId);
    })
    return promise;
}

