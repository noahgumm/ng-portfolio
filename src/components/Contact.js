import "../styles/Contact.css";

function Contact() {
    return(
        <div className='contact-section' id='contact'>
            <div className="contact">
                <h1>Contact Me</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor='reason'>Reason for Contact</label>
                        <textarea id='reason' name='reason' rows={4}></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;