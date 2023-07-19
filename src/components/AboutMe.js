export default function AboutMe() {
  return (
    <div className="aboutme__section">
      <div className="aboutme__background">
        <div className="aboutme__card">
          <div className="aboutme__message">
            <div>
              <h2 className="aboutme__greet1 ref2">Pleased to meet you</h2>
              <p className="aboutme__greet2">
                I'm the web developer you are looking for, please feel free to
                contact me.
              </p>
            </div>
          </div>
          <div className="aboutme__action">
            <h3>Contact me</h3>
            <div className="aboutme__info">
              <img className="aboutme__img" src="https://i.pravatar.cc/300" />
              <p>Roberto Camacho</p>
              <div className="aboutme__active">Available 🟢</div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=527225049322"
              className="aboutme__button"
            >
              Send message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
