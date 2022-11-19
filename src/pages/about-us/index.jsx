import React from "react";
import HeadTitle from "../../components/head-title-text";
import './style.scss';
import StuffList from "./component/stuff";
import Feature from './component/feature';
import TwoPartSection from '../../components/two-part-component';
import userImg1 from '../../assets/images/about-01.jpg';
import userImg2 from '../../assets/images/about-02.jpg';
import userImg3 from '../../assets/images/about-03.jpg';
import userImg4 from '../../assets/images/about-04.jpg';
import aboutBanner from '../../assets/images/about-05.jpg';
import fbIcon from '../../assets/images/fbIcon.png';
import twetIcon from '../../assets/images/twIcon.png';
import instIcon from '../../assets/images/insticon.png';
import image1 from '../../assets/images/peper-icon.jpg';
import image2 from '../../assets/images/leave-icon.png';
import image3 from '../../assets/images/coctail-icon.png';
import aboutBanner1 from '../../assets/images/about-06.jpg';


class AboutUs extends React.Component {
    state = {
        stuffList: [
            {
                image: userImg1,
                title: 'Jennifer Soft',
                position: 'Founder and CEO',
                description: 'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
                fbIcon: fbIcon,
                twIcon: twetIcon,
                instIcon: instIcon,
            },
            {
                image: userImg2,
                title: 'Daisy Walker',
                position: 'Executive Chef',
                description: 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
                fbIcon: fbIcon,
                twIcon: twetIcon,
                instIcon: null,
            },
            {
                image: userImg3,
                title: 'Florence Nelson',
                position: 'Kitchen Manager',
                description: 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
                fbIcon: fbIcon,
                twIcon: null,
                instIcon: instIcon,
            },
            {
                image: userImg4,
                title: 'Valentina Martin',
                position: 'Culinary Director',
                description: 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
                fbIcon: fbIcon,
                twIcon: twetIcon,
                instIcon: null,
            }
        ],
        featureBox: [
            {
                image: image1,
                main: 'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.',
                colorValue: '#2D99CC'
            },
            {
                image: image2,
                main: 'Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.',
                colorValue: '#319966'
            },
            {
                image: image3,
                main: 'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.',
                colorValue: '#993332'
            },

        ]
    }
    render() {
        return <section>
            <div className="G-container">
                <HeadTitle title='About Simple House'
                    description='This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.'>

                </HeadTitle>
                <div className="stuff-list">
                    {this.state.stuffList.map((item, index) => {
                        return <StuffList box={item}
                            key={index}>
                        </StuffList>
                    })}
                </div>
                <div className="about-banner" style={{ backgroundImage: `url(${aboutBanner})` }}> </div>
                <div className="feature-list">
                    {this.state.featureBox.map((item, index) => {
                        return <Feature
                            key={index}
                            fbox={item}></Feature>
                    })}
                </div>
                <div className="G-flex">
                    <div className="G-padding-50">
                        <div className="two-part-image" style={{ backgroundImage: `url(${aboutBanner1})` }}></div>
                    </div>
                    <div className="G-padding-50">
                        <div className="two-part-text">
                            <h3>History of our restaurant</h3>
                            <p>
                                Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.

                                Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    }
}
export default AboutUs