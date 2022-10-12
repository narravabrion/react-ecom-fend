import React from "react"
import ImageViewer from "../components/product_detail/ImageViewer"
import ProductDescription from "../components/product_detail/ProductDescription"

const ProductDetailPage = () => {
	return (
		<>
			<div className='w-full  h-full flex flex-col items-center max-w-7xl '>
				<div className='w-full md:flex md:mt-36 md:shadow md:mb-4 md:max-w-5xl'>
					<ImageViewer />
					<ProductDescription />
				</div>
			</div>
		</>
	)
}

export default ProductDetailPage
