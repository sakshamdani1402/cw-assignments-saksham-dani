const base = "https://localhost:7085";

export async function getAll(page,brand,category,price){
    var filter="?";
    if(brand!=='') filter+= `brand=${brand}&`;
    if(category!=='') filter+= `category=${category}&`;
    if(price!=='') filter+= `price=${price}`;
    // return page+""+filter
    const data = await fetch(`${base}/product/getall/${page}${filter}`)
    .then(response => response.json())
    .then(item => {return item})
    return data;
}


export async function getTotal(filter=""){
    const data = await (await fetch(`${base}/product/getTotal/${filter}`))
        .then(response => response.json())
        .then(total => {return total});
        return data;
}