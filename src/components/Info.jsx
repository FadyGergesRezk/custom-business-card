import profile from "../assets/FadySamaan.jpeg"
import linkedin from "../assets/linkedin.png"
export default function Info () {
    const handleButtonClick = () => {
        window.open("https://www.linkedin.com/in/fady-samaan-5530061aa/", '_blank');
      };
    return(
        <div className="card-info-container">
            <img src={profile} />
            <span className="card-info-name">Fady Samaan</span>
            <span className="card-info-title">Web Developer</span>
            <a href="mailto:fady.gerges.rezk@gmail.com" className="card-info-mail">fady.gerges.rezk@gmail.com</a>
            <button className="card-info-linkedinbtn" onClick={handleButtonClick}>
                <img 
                src={linkedin}
                alt="LinkedIn Logo"
                className="linkedin-logo"
                />
                
            LinkedIn
            </button>
        </div>
    )
}