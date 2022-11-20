import React from "react";
import './style.scss';
import HeadTitle from '../../components/head-title-text';
import HomeMenuList from './menu-component';
import TwoPartSection from '../../components/two-part-component';
import img1 from '../../assets/images/gallery/01.jpg';
import img2 from '../../assets/images/gallery/02.jpg';
import img3 from '../../assets/images/gallery/03.jpg';
import img4 from '../../assets/images/gallery/04.jpg';
import img5 from '../../assets/images/gallery/05.jpg';
import img6 from '../../assets/images/gallery/06.jpg';
import img7 from '../../assets/images/gallery/07.jpg';
import img8 from '../../assets/images/gallery/08.jpg';

class Home extends React.Component {
    state = {
        menuList: [
            {
                image: img1,
                title: 'Fusce dictum finibus',
                description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: '$45 / $55',
                category: 'salad',
            },
            {
                image: img2,
                title: 'Aliquam sagittis',
                description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: '$65 / $70',
                category: 'pizza',
            },
            {
                image: img3,
                title: 'Sed varius turpis',
                description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: '$30.50',
                category: 'noodle',
            },
            {
                image: img4,
                title: 'Aliquam sagittis',
                description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: '$25.50',
                category: 'pizza',
            },
            {
                image: img5,
                title: 'Maecenas eget justo',
                description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: '$80.25',
                category: 'noodle',
            },
            {
                image: img6,
                title: 'Quisque et felis eros',
                description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: '$20 / $40 / $60',
                category: 'pizza',
            },
            {
                image: img7,
                title: 'Sed ultricies dui',
                description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: '$94',
                category: 'salad',
            },
            {
                image: img8,
                title: 'Donec porta consequat',
                description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: '$15',
                category: 'noodle',
            },
        ],
        filteredProducts: [],
        activeTab: 'all'
    }

    // componentDidMount() {
    //     this.selectProduct(this.state.activeTab)
    // }
    selectProduct = (productName) => {
        let newCategory = []
        if (productName !== 'all') {
            newCategory = this.state.menuList.filter(x => x.category === productName)
            //console.log(newCategory)
        } else {
            newCategory = this.state.menuList
            // tpum e bolory
        }
        this.setState({ filteredProducts: newCategory, activeTab: productName })
    }
    render() {
        return <>
            <section>
                <div className="G-container">
                    <div>
                        <HeadTitle title="Welcome to Simple House"
                            description="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites." />
                        <div className="category-buttons">
                            <ul>
                                <li className={`${this.state.activeTab === 'all' ? 'active' : ''}`}
                                    onClick={() => this.selectProduct('all')}>All
                                    {/* <a href="">All</a> */}
                                </li>
                                <li className={`${this.state.activeTab === 'pizza' ? 'active' : ''}`}
                                    onClick={() => this.selectProduct('pizza')}>Pizza
                                </li>
                                <li className={`${this.state.activeTab === 'salad' ? 'active' : ''}`}
                                    onClick={() => this.selectProduct('salad')}>Salad
                                </li>
                                <li className={`${this.state.activeTab === 'noodle' ? 'active' : ''}`}
                                    onClick={() => this.selectProduct('noodle')}>Noodle
                                </li>
                            </ul>
                        </div>
                        <div className="menu-list">
                            {this.state.menuList.map((item, index) => {
                                return <HomeMenuList key={index}
                                    box={item}>
                                </HomeMenuList>
                            })}
                        </div>
                        <div className="avocado-part">
                            <TwoPartSection
                                title='Maecenas nulla neque'
                                description='Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited.
                                You will need to talk to us for additional permissions about our templates. Thank you.'
                            ></TwoPartSection>

                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}
export default Home