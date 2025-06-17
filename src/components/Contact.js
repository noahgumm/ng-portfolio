import "../styles/Contact.css";

function Contact() {
    return(
        <div className="contact">
            <h1>Contact</h1>
            <form>
                <label for='name'>Name</label><br />
                <input type='text' id='name' name='name' />
                <label for='email'>Email</label>
                <input type='email' id='email' name='email' />
                <label for='reason'>Reason For Contact</label>
                <input type='text' id='reason' name='reason' />
            </form>
        </div>
    );
}

export default Contact;