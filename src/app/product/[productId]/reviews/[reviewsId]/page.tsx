export default async function ProductReview({
    params
}:{
    params:Promise<{productId: string;  reviewsId: string}>
})
{
   const {productId , reviewsId} = await params; 

   return <h1>Review {reviewsId} from product {productId}</h1>
}