function countEvenNumbers()
{
    let evenNum = 0;

    for(let i=0; i <20; i++)
    {
        let num = prompt(`Enter number ${i + 1} of 20`);
        num = Number(num);

        if(isNaN(num))
        {
        console.log("try again");
        i--;
        }
        
        else
        {
            if(num % 2 === 0)
            {
            evenNum++;
            }
        }
    }
    console.log(evenNum)
}

countEvenNumbers();