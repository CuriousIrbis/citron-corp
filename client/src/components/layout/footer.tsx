import VK from '/src/assets/svg/VK.svg'
import TG from '/src/assets/svg/TG.svg'
import Insta from '/src/assets/svg/Instagram.svg'

import '../../style/footer.scss'

export default function Footer(){
    return (
        <footer>
            <a href="https://t.me/exchron0s"><img src={TG} alt="" /></a>
            <a href="https://vk.com/exchron0s"><img src={VK} alt="" /></a>
            <a href="https://www.instagram.com/exchron0s/"><img src={Insta} alt="" /></a>
        </footer>
    )
}