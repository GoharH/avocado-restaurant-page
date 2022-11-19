import React from "react";
import './style.scss';
import HeadTitle from "../../components/head-title-text";
import phoneIcon from '../../assets/images/phone-icon.png';
import emailIcon from '../../assets/images/email-icon.png';
import fbIcon from '../../assets/images/fbIcon.png';
import twetIcon from '../../assets/images/twIcon.png';
import instIcon from '../../assets/images/insticon.png';
import ModalPart from "./modal-part";
//import SocialIcons from '../../components/social-icons';

class ContactUs extends React.Component {
    state = {
        modalList: [
            {
                title: '1. Fusce eu lorem et dui #09C maximus varius?',
                text: '#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.',
                hidden: true
            },
            {
                title: '2. Vestibulum #999 ante ipsum primis in faucibus orci?',
                text: 'Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.'
            },
            {
                title: '3. Can I redistribute this template as a ZIP file?',
                text: 'Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you.'
            },
            {
                title: '4. Ut ac erat sit amet neque efficitur faucibus et in lectus?',
                text: 'Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.'
            },
        ]
    }

    render() {
        return <section>
            <div className="G-container">
                <HeadTitle title='Contact Page'
                    description='You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.'>
                </HeadTitle>
                <div className="G-flex contact-part">
                    <div className="G-padding-50">
                        <div className="input-part">
                            <label htmlFor="name">
                                <input type="text" name="name" placeholder="Name" />
                            </label>
                            <label htmlFor="email">
                                <input type="text" name="email" placeholder="Email" />
                            </label>
                            <label htmlFor="text-area">
                                <textarea className="text-area" name="text-area" id="text_area" placeholder="Message"></textarea>
                            </label>
                            <div className="contact-btn">
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="G-padding-50">
                        <div className="address-part">
                            <h3>Our Address</h3>
                            <p className="address-text">180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                            <div className="G-flex  contact-link">
                                <span style={{ backgroundImage: `url(${phoneIcon})` }}></span>
                                <a href="tel://+080-090-0110">+080-090-0110</a>                            </div>
                            <div className="G-flex contact-link">
                                <span style={{ backgroundImage: `url(${emailIcon})` }}></span>
                                <a href="#">info@company.co</a>
                            </div>
                            <div className="social-icons">
                                <span className="social-icon" style={{ backgroundImage: `url(${fbIcon})` }}></span>
                                <span className="social-icon" style={{ backgroundImage: `url(${twetIcon})` }}></span>
                                <span className="social-icon" style={{ backgroundImage: `url(${instIcon})` }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-frame">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24372.243096476694!2d44.47953865496613!3d40.21950807186876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a9819fc213331%3A0x592823c41827a8a6!2z0JTQsNCy0YLQsNGI0LXQvSwg0JXRgNC10LLQsNC9LCDQkNGA0LzQtdC90LjRjw!5e0!3m2!1sru!2s!4v1668802342702!5m2!1sru!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <HeadTitle title='FAQs'
                    description='This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666'>
                </HeadTitle>

                <div className="modal-part">
                    {this.state.modalList.map((item, index) => {
                        return <ModalPart
                            key={index}
                            box={item}>
                            <p className="modal-hidden-text">{item.text}</p>
                        </ModalPart>
                    })}
                </div>
            </div>
        </section>
    }
}
export default ContactUs