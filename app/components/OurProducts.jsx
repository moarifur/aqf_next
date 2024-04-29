import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const productData = [
    {
        id: 1,
        imgURL: '/images/f01.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
    {
        id: 2,
        imgURL: '/images/f02.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
    {
        id: 3,
        imgURL: '/images/f03.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
    {
        id: 4,
        imgURL: '/images/f04.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
    {
        id: 5,
        imgURL: '/images/f01.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
    {
        id: 6,
        imgURL: '/images/f02.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
    {
        id: 7,
        imgURL: '/images/f03.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
    {
        id: 8,
        imgURL: '/images/f04.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
    {
        id: 9,
        imgURL: '/images/f01.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },
   {
        id: 10,
        imgURL: '/images/f02.jpg',
        title: 'Gown',
        description: 'A woman\'s dress or robe, especially one that is full-length'
    },

]

const OurProducts = () => {
    return (
        <div>
            <h1 className='p-9 text-center text-5xl font-extrabold font-serif'>Our Products</h1>

            {/* Choice Menu */}
            <div>
                <div className="text-center w-full p-3 sticky">
                    <Button className='bg-red-950 mr-3 pr-3'>Man</Button>
                    <Button className='bg-red-950 mr-3 pr-3'>Woman</Button>
                    <Button className='bg-red-950 mr-3 pr-3'>Kid</Button>
                    <Button className='bg-red-950'>Accessories</Button>
                </div>
            </div>

            {/* Product Category Showcase */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 m-5 p-5">
                {productData.map(item => {
                    return (
                        <Card key={item.id} className="col-span-2 rounded-md shadow">
                            <img src={item.imgURL} alt=""/>
                            <CardHeader>
                                <CardTitle className='font-bold'>{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
};

export default OurProducts;