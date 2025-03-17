function eTopowerX(x, n) {
    if (n === 0) return 1; // Base case: first term is 1
    return (power(x , n) / fact(n)) + eTopowerX(x, n - 1); // Recursive sum
}

// * Function to compute power using Exponentiation by Squaring.
// * Time Complexity: O(log n)
// */
function power(a, b) {
    if (b === 0) return 1; // Base case: a^0 = 1

    let halfPower = power(a, Math.floor(b / 2)); // Recursive call for a^(b/2)

    if (b % 2 === 0) {
        return halfPower * halfPower; // If even, return (a^(b/2))^2
    } else {
        return a * halfPower * halfPower; // If odd, return a * (a^(b/2))^2
    }
}

/**
 * Function to compute factorial recursively.
 * Time Complexity: O(n)
 */
function fact(n) {
    if (n === 0 || n === 1) return 1;  // Base case
    return n * fact(n - 1);  // Recursive factorial calculation
}
/**
 * Overall Time Complexity Analysis:
 * - Each recursive call of `eTopowerX(x, n)` computes:
 *   - `power(x, n)`: O(log n)
 *   - `fact(n)`: O(n)
 * - There are `n` recursive calls in total.
 * - Therefore, the total complexity is:
 *   T(n) = O(n * (log n + n)) = O(n^2)
 */



// Example usage
console.log(eTopowerX(2, 10));  // Approximate value of e^2
console.log(eTopowerX(1, 10));  // Approximate value of e^1
console.log(eTopowerX(3, 10));  // Approximate value of e^3



