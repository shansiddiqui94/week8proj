class ShanBodega {
    constructor(price) {
        this.price = price;
        this.items = [];
    };
    ledger(item = null) {
        const productName = item;
        const price = this.price;
        const quanity = this.quanity
        if (item !== null) {
            this.items.push({ item: item, price: price, quanity: quanity });
        }
    }
}
class basement extends ShanBodega {
    constructor(price, quanity) {
        super(price);
        this.quanity = quanity;
    }
}

const eggnCheese = new basement();
eggnCheese.quanity = 25;
eggnCheese.price = 2.25;
eggnCheese.ledger('eggnCheese');
eggnCheese.items;