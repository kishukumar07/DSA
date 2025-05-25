//you have given two string and you have to  tell the length of the longest common subsequence of these two string ;



function lcs(str1, str2, n = str1.length, m = str2.length) {

    if (n === 0 || m === 0) return 0;


    if (str1[n - 1] === str2[m - 1]) {
        return 1 + lcs(str1, str2, n - 1, m - 1);
    }
    else {
        return lcs(str1, str2, n - 1, m) || lcs(str1, str2, n, m - 1);
    }
}




console.log(lcs("niket sahu","disha singh"));






























