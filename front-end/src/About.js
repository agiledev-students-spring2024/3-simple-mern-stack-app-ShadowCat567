import './About.css'
import picture from './meImage.jpg'

const About = () => {
    return (
        <>
        <h1>About me</h1>
        <img src={picture} width={300} height={415}></img>
        <p>Hello! I am Leena. I am currently a senior at NYU, double majoring in
         Computer Science and Game Design. Despite studying Game Design, I don't 
         actually play very many games, so please don't come to me asking about 
         recommendations. Of the games I do play, my favorites are currently Dungeons
         and Dragons and Baldur's Gate 3. In both my favorite classes to play are 
         paladins and fighers. 
        </p>
        <p>
        The cat in the picture is my cat, Yin. I adopted him about 2 and a half years
        ago from a shelter in Brooklyn. Yin primarily enjoys lounging in the sun and 
        attempting to convince me that he knows how to write code (he does not but he
        tries). 
        </p>
        </>
    )
}

export default About