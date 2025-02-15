var punishmentNumber = function (n) {
    return(punishment(n, 1, 0)); // This should return the punishment number

    function punishment(n, k, sum) {
        if (k > n) return sum;  // Base condition

        let statement = condition(k, (k * k).toString(), 0, ""); // Will return true/false
        if (statement) sum += k * k; // Only add when condition is true

        return punishment(n, k + 1, sum); // Recursive call
    }

    function condition(target, numStr, currentSum = 0, path = "") {
        if (numStr.length === 0) return currentSum === target; // If sum matches target

        for (let i = 1; i <= numStr.length; i++) {
            let part = numStr.substring(0, i);
            let remaining = numStr.substring(i);
            let value = parseInt(part, 10);

            if (condition(target, remaining, currentSum + value, path + part + "+")) {
                return true;
            }
        }
        return false;
    }

};