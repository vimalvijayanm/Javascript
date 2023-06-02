//for of loops is used in arrays
const names=["youtube","facebook","netflix","amazon","google"];

// for(const n of names)
// {
//     console.log(n);
// }

//for in loops is used in objects

const symbols={
    yt : "youtube",
    fb : "facebook",
    nf : "netflix",
    am : "amazon",
    go : "google",
};

for(const n in symbols)
{
    //console.log(n);
    //console.log(symbols[n]);
    console.log(`key is : ${n} and source is : ${symbols[n]}`);
}



