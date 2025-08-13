export default async function productDetail({
    params,
}:{
    params: Promise<{productId: string}>;
}){
    const productId = (await params).productId;
    return(
        <div>
            product detail {productId}
        </div>
    )
}

