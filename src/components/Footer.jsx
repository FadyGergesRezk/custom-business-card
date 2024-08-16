import facebookIcon from "../assets/facebookIcon.svg"
import instagramIcon from "../assets/InstagramIcon.svg"
import githubIcon from "../assets/GitHubIcon.svg"
import TwitterIcon from "../assets/TwitterIcon.svg"

export default function Footer () {
    const handleTwitterClick = () => {
        window.open("https://x.com/home", '_blank');
      };
      const handleFacebookClick = () => {
        window.open("https://www.facebook.com/fady.rezk.3152", '_blank');
      };
      const handleInstagramClick = () => {
        window.open("https://www.instagram.com/fady_rezkkkk/", '_blank');
      };
      const handleGithubClick = () => {
        window.open("https://github.com/FadyGergesRezk", '_blank');
      };
    return(
        <div className="card-footer-container">
            
                <img 
                src={TwitterIcon}
                alt="Twitter Logo"
                onClick={handleTwitterClick}
                />    
                <img 
                src={facebookIcon}
                alt="Facebook Logo"
                onClick={handleFacebookClick}
                />
                <img 
                src={instagramIcon}
                alt="Instagram Logo"
                onClick={handleInstagramClick}
                />
                <img 
                src={githubIcon}
                alt="GitHub Logo"
                onClick={handleGithubClick}
                />
        </div>
    )
}