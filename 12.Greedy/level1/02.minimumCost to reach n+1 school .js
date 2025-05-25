// Global variable to track the minimum cost
let minCost = Infinity;

/**
 * Recursive function to explore all jump paths from school `i`
 * @param {number[]} costs - cost per unit from each school
 * @param {number} i - current school index
 * @param {number} sum - total cost so far
 */
function fun(costs, i = 0, sum = 0) {
    // Base case: if we've reached the end
    if (i === costs.length) {
        minCost = Math.min(minCost, sum); // update minimum cost
        return;
    }

    // Try jumping to every school ahead of current
    for (let j = i + 1; j <= costs.length; j++) {
        let jumpCost = (j - i) * costs[i]; // cost = distance × cost[i]
        fun(costs, j, sum + jumpCost);     // recursive call
    }
}

// Example usage
let costs = [5, 3, 4, 2]; // You can change this to test other inputs
fun(costs);
console.log("Minimum Cost to reach last school:", minCost);
