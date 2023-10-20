/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    numberOfSoldiers = [];
    dictionaryOfSoldiers = Object({})
    indecesOfSmallestK = [];

    count = 0;
    mat.forEach((num)=>
    {
      numberOfOnes = 0;
      count++
      num.forEach((element)=>
      {
          if (element == 1) 
          numberOfOnes = numberOfOnes + 1;

      })
    numberOfSoldiers.push(numberOfOnes)
    numberOfSoldiers.sort();
    dictionaryOfSoldiers[count-1] = numberOfOnes;
    })  
    const dictToArray = Object.entries(dictionaryOfSoldiers)
    dictToArray.sort((x, y) => x[1] - y[1])   
    indecesOfSmallestK.push(dictToArray.map((e) => {return Number(e[0])}))
    return indecesOfSmallestK[0].slice(0,k);
};

