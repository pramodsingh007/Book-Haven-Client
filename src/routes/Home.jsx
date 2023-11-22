import BestSeller from "../components/BestSeller/BestSeller"
import FavoriteBook from "../components/FavoriteBook/FavoriteBook"
import Hero from "../components/Hero/Hero"
import AwardWinningBooks from '../components/AwardWinningBooks/AwardWinningBook';
import OtherBooks from "../components/OtherBooks/OtherBooks";
import Customer from "../components/Customer/Customer";

function Home() {
  return (
    <main>
    <Hero/>
    <BestSeller/>
    <FavoriteBook/>
    <AwardWinningBooks/>
    <OtherBooks/>
    <Customer/>
    </main>
  )
}

export default Home