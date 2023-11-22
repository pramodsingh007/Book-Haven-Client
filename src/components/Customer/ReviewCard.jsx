import profile from '../../../src/assets/images/profile.jpg';

export default function ReviewCard() {
  return (
    <div className=' max-w-[15rem] lg:max-w-[22rem] space-y-3  rounded-lg p-8 shadow-slate-500 shadow-xl'>
        <p>⭐⭐⭐⭐⭐</p>
        <p className=' font-normal text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla quaerat consequatur sint ex quas autem dolor maxime eum consequuntur?</p>
        <img className=' w-12 rounded-full' src={profile} alt="profile" />
        <div className=' float-left'>
            <h1 className='font-bold'>Clerk Clant</h1>
            <p className='font-normal text-sm'>Superman</p>
        </div>
    </div>
  )
}
