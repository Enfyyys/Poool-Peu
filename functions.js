export function generateArrayNumber()
{
    let number = [12, 15, 18, 21, 24];
    let array = [];
    let random = Math.round(Math.random() * 5);

    for (let i = 0; i < number[random] - 1; i++)
    {
        array.push(Math.round(Math.random() * 2048));
    }
    let chaineDeNombres = array.join("-");
    console.log(chaineDeNombres);
    return chaineDeNombres;
}
