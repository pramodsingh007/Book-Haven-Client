import favBook from '../../../src/assets/images/favoritebook.jpg';
import Button from '../../UI/Button';

function FavoriteBook() {
    
  return (
    <section className='lg:mr-10 lg:ml-10 mr-5 ml-5'>
        <div className="grid gap-20 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols-2">
            <div className=' lg:order-1 flex justify-center order-2'>
                <img className=' max-h-[30rem] w-f' src={favBook} alt="fav book" />
            </div>
            <div className=' lg:order-2 order-1 space-y-5'>
                <h1 className='font-bold text-4xl lg:text-6xl'>Find Your Favorite <span className=' text-blue-700'>Book Here!</span></h1>
                <p className=' font-medium text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fugit saepe porro eaque alias dolores provident libero, atque cumque molestias eveniet nostrum ab.</p>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='font-bold text-2xl'>800+</h1>
                        <p>Book Listing</p>
                    </div>
                    <div>
                    <h1 className='font-bold text-2xl'>550+</h1>
                    <p>Registred User</p>
                    </div>
                    <div>
                    <h1 className=' font-bold text-2xl'>1200+</h1>
                    <p>Book Listing</p>
                    </div>
                </div>
                    <Button>Explore Now</Button>
            </div>
        </div>
    </section>
  )
}

export default FavoriteBook