import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    // service_sa74wso
    const handleSubmit = async (e) => { 
        e.preventDefault()
        setLoading(true)

        try {
           await emailjs.send(
                'service_sa74wso',
                'template_hdb8o4m',
                {
                    from_name: form.name,
                    to_name: 'Chloe Nguyen',
                    from_email: form.email,
                    to_email: 'vanguyen.work@gmail.com',
                    message: form.message
                },
                'cp32L9to6PSrj2Wsy'
            )
            alert('Your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            console.log(error)
            alert('Something went wrong!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
                <div className="contact-container">
                    <h3 className='head-text'>Let&apos;s talk</h3>
                    <p className='text-white-600 text-lg mt-3'>I&apos;m always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out to me. I&apos;ll do my best to get back to you as soon as possible.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" placeholder='John Doe' name="name" value={form.name} onChange={handleChange} required className="field-input" />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" placeholder='john@doe.com' name="email" value={form.email} onChange={handleChange} required className="field-input" />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea type="text" placeholder="Hi, I'm interested interested in..." name="message" value={form.message} onChange={handleChange} rows={5} required className="field-input" />
                        </label>
                        <button type="submit" disabled={loading} className="field-btn">
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact