import photo from '../images/IMG_0100-min.JPG'

export default function Home() {
    return (
        <section className='Home'>
            <h1>Hello! My name is George Holst.</h1>
            <p>I am currently enrolled in the University of Washington bootcamp learning how to create and use web apps. I decided to make a career change and I am super excited to continue my career and learning in this industry! Thank you for checking out my portfolio!</p>
            <img className='Home-img' src={photo} alt="me holding a fish"/>
            
        </section>
    )
}