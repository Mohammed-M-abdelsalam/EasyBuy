export function calculateProductDiscount(oldPrice, newPrice) {
    const discount = ((oldPrice - newPrice) / oldPrice) * 100;
    return discount.toFixed(0);
}
