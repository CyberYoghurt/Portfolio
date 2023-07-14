import mexico from '../images/mexico.png';
import LinkedInIcon from '../images/linkedin.png';
import CVIcon from '../images/cv.png';

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className=" contact__field">
        <div>Location</div>
        <div>
          Mexico, Mexico <img width={15} src={mexico} alt="Mexico flag" />
        </div>
      </div>
      <div className="contact__field">
        <div> Telephone </div>
        <div> +52 1 722 504 9322 </div>
      </div>
      <div className="contact__field">
        <div> E-mail</div>
        <div>
          <a className="contact__link" href="robertocr.21@hotmail.com">
            robertocr.21@hotmail.com
          </a>
        </div>
      </div>
      <div className="contact__field">
        <div> LinkedIn </div>
        <div>
          <a
            className="contact__link"
            href="https://www.linkedin.com/in/robertcrdev/"
          >
            linkedin.com/in/robertcrdev/{' '}
            <img alt="A LinkedIn icon" width={15} src={LinkedInIcon}></img>
          </a>
        </div>
      </div>
      <div className="contact__field">
        <div> Resume </div>
        <div>
          <a
            className="contact__link"
            href="https://drive.google.com/file/d/1IhVvQWnGCDrStMWEntT1BfVgPAluJs9y/view?usp=drive_link"
          >
            Download CV <img alt="Resume icon" width={15} src={CVIcon}></img>
          </a>
        </div>
      </div>
    </section>
  );
}
