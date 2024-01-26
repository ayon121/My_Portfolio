import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
    const [state, handleSubmit] = useForm("mdoqawba");
    if (state.succeeded) {
        return <div>
            <p className="text-2xl md:text-3xl font-extrabold mt-5 text-center">Thanks For Contacting</p>
            <p className="text-xl md:text-2xl font-extrabold mt-5 text-center">I will back to you soon</p>
        </div>
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="text-start px-3">
                <input id="email"
                    type="email"
                    name="email"
                    placeholder="Type your email"
                    className="input input-bordered input-error w-4/5 px-6 my-2"
                    required />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                /><br />
                <textarea id="message"
                    name="message"
                    className="textarea textarea-error  w-4/5 my-2 " placeholder="message" required></textarea>
                <br />
                <input type="submit" disabled={state.submitting} className="btn bg-[#231f20] text-[#FFFFFF] border-[#FFFFFF]" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;