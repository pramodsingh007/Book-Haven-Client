import Button from '../../UI/Button';
import awardBooks from '../../assets/images/awardbooks.png';

export default function AwardWinningBoosk() {
  return (
    <section className='lg:mr-10 lg:ml-10 mr-5 ml-5 lg:p-12 p-3 mt-32 mb-32 bg-emerald-300'>
        <div className='flex justify-between  items-center'>
            <div className=' space-y-2'>
                <h1 className=' font-bold text-2xl lg:text-3xl'>2023 National Book Awards for Fiction <br /> Shortlist</h1>
                <Button>Explore</Button>
            </div>
            <div>
                <img className='max-h-[14rem]' src={awardBooks} alt="award book" />
            </div>
        </div>
    </section>
  )
}
