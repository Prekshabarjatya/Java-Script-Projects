let inventory = [];

function findProductIndex(productName) {
    const lowerCaseName = productName.toLowerCase();
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === lowerCaseName) {
            return i;
        }
    }
    return -1;
}

function addProduct(product) {
    const normalizedName = product.name.toLowerCase();
    const index = findProductIndex(normalizedName);

    if (index !== -1) {
        inventory[index].quantity += product.quantity; // Changed to add the quantity
        console.log(`${normalizedName} quantity updated`);
    } else {
        inventory.push({ name: normalizedName, quantity: product.quantity });
        console.log(`${normalizedName} added to inventory`);
    }
}

function removeProduct(productName, quantityToRemove) {
    const normalizedName = productName.toLowerCase();
    const index = findProductIndex(normalizedName);

    if (index === -1) {
        console.log(`${normalizedName} not found`);
        return;
    }

    const currentQuantity = inventory[index].quantity;

    if (currentQuantity < quantityToRemove) {
        console.log(`Not enough ${normalizedName} available, remaining pieces: ${currentQuantity}`);
        return;
    }

    inventory[index].quantity -= quantityToRemove;

    if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
    }

    const remainingQuantity = inventory[index] ? inventory[index].quantity : 0;
    console.log(`Remaining ${normalizedName} pieces: ${remainingQuantity}`);
}
