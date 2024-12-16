import React from 'react'
import BlogDetails from '@/components/BlogDetails'
const page = async({params} : {params :Promise<{id : string}>}) => {
    const slug = (await params).id
    return (
<BlogDetails slug={slug} /> )
}

export default page