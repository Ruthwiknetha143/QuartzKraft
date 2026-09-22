import "./overall.css"
import { Link } from "react-router-dom";

let Home = () => {
    let EngImages = ["https://quartzkraft.com/wp-content/uploads/2026/04/Stone-Heritage-08-1.jpg", "https://quartzkraft.com/wp-content/uploads/2026/03/Stone-Heritage-07.jpg", "https://quartzkraft.com/wp-content/uploads/2026/03/Stone-Heritage-05.jpg", "https://quartzkraft.com/wp-content/uploads/2026/03/Stone-Heritage-02.jpg"]

    let surfaces = [
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/04/3.24-Sahara_QK1266-2048x1029.jpg",
            title: "Sahara"
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/04/3.26-Sitka_QK9121-2048x1031.jpg",
            title: "Sitka"
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/04/3.41.Ocean-Mist_QK1190-2048x1020.jpg",
            title: "Ocean Mist"
        }
    ]

    let collections = [
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/foundation-menu-thumb-nail.jpg",
            title: "Foundation"
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/Persephone-menu-thumb.jpg",
            title: "Persephone"
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/Midnight-menu-thumbnail.jpg",
            title: "Midnight Hues"
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/diffusion-menu-thumb.jpg",
            title: "Diffusion"
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/Elan-thumbnail-menu.jpg",
            title: "Elan"
        }
    ]

    let offerings = ["https://quartzkraft.com/wp-content/uploads/2026/03/Our-Quartz-Offerings-02-2048x1365.jpg", "https://quartzkraft.com/wp-content/uploads/2026/03/Our-Quartz-Offerings-2048x1365.jpg"]

    let difference = [
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/Engineered-Quartz-Surfaces.jpg",
            title: "Engineered Quartz Surfaces",
            desc: "Quartz surfaces that are dependable and durable."
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/Cut-to-Size-Fabrication-1.jpg",
            title: "Cut-to-Size Fabrication",
            desc: "Fabrication for custom projects."
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/Cut-to-Size-Fabrication.jpg",
            title: "Low & Zero Silica Surfaces",
            desc: "Proven capabilities to support the future of safe engineered surfaces."
        },
        {
            image: "https://quartzkraft.com/wp-content/uploads/2026/03/granite.jpg",
            title: "Natural Stone (Granite)",
            desc: "Learn more about Ravileela Granites."
        }
    ]

    return (
        <section id="home">
            <section id="craftsmanship">
                <div className="container h-100">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <h1>Built on Craftsmanship.</h1>
                        <h2>Driven by Partnership.</h2>
                        <button className="text-capitalize text-white my-3">explore our collections</button>
                    </div>
                </div>
            </section>
            <section id="engineered">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col">
                            <div className="d-flex flex-column gap-3">
                                <h1>Engineered Surfaces. Crafted with Purpose.</h1>
                                <p>QuartzKraft creates engineered surfaces that bring together craftsmanship, precision, and global expertise. Rooted in deep industry expertise, we blend manufacturing with a strong sense of craftsmanship to deliver surfaces that elevate spaces across the world.</p>
                                <p>Inspired by the depth and movement of natural stone, our surfaces are thoughtfully developed using carefully selected materials, skilled handcrafting, and modern production techniques. Our collections span a versatile range of designs and finishes—crafted to meet the evolving needs of residential and commercial spaces while maintaining exceptional quality standards and dependable supply.</p>
                                <h4>Partner Success</h4>
                                <p>At QuartzKraft, we go beyond manufacturing to support our partners’ success. Through collaborative product development, disciplined supply chain management, and dedicated sample and design support, we help our customers build differentiated offerings in their markets. Every slab reflects our commitment to precision, innovation, and the belief that strong partnerships create lasting impact.</p>
                                <h4><Link to="/about-us">Our Story</Link></h4>
                            </div>
                        </div>
                        <div className="col">
                            {EngImages.map(value => {
                                return <img src={value} height="350px" width="300px" />
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section id="trusted">
                <div className="container h-100">
                    <div className="row h-100 align-items-center text-white gap-3">
                        <div className="col">
                            <img src="https://quartzkraft.com/wp-content/uploads/2026/03/Customer-Testimonials.jpg" alt="" />
                        </div>
                        <div className="col">
                            <h1>Trusted by Global Partners</h1>
                            <p>QuartzKraft works closely with distributors, wholesalers, and designers worldwide. Our commitment to quality, reliability, and long-term partnerships has helped us build trusted relationships across North America, Europe, and India.</p>
                            <h4><Link to="/about-us">The QuartzKraft Difference</Link></h4>
                        </div>
                    </div>
                </div>
            </section>
            <section id="trending">
                <div className="container h-100">
                    <div className="d-flex flex-column h-100 justify-content-center">
                        <h1 className="text-center">Trending Quartz Surfaces</h1>
                        <div className="d-flex justify-content-center gap-4 my-4">
                            {surfaces.map(value => (
                                <aside>
                                    <img src={value.image} alt="" height="185px" width="369px" />
                                    <p>{value.title}</p>
                                </aside>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="voice">
                <div className="container h-100">
                    <div className="d-flex flex-column h-100 justify-content-center align-items-center gap-3">
                        <h1>The Voice of Our Customers</h1>
                        <p className="text-center w-50">Throughout our long-standing relationship, QuartzKraft has been a trusted partner in providing a wide range of quartz colors that meet both the aesthetic and performance standards our brand is known for. Their materials have been integral to the success of our Quartz line, and we deeply value the consistency and quality they bring to our production. More than half our palette of 80 colors comes from them.</p>
                        <span className="text-center">
                            <h4>National Distributor</h4>
                            <p>USA</p>
                        </span>
                    </div>
                </div>
            </section>
            <section id="explore">
                <div className="container h-100">
                    <div className="d-flex flex-column h-100 justify-content-center">
                        <h1>Explore Our Collections</h1>
                        <p>Explore our designs, which range from our foundation collection suitable for commercial and builder projects, to our luxury collections which focus on quartzite inspired patterns with warm hues, depth and movement.</p>
                        <div className="d-fl my-4">
                            <div className="d-flex justify-content-center gap-4 my-4">
                                {collections.map(value => (
                                    <aside>
                                        <p>{value.title}</p>
                                        <img src={value.image} alt="" height="143px" width="240px" />
                                    </aside>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="q360">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-5 p-5 d-flex flex-column gap-3">
                            <h4>QuartzKraft 360</h4>
                            <h2>
                                Crafted to specification.<br />
                                Delivered with confidence.
                            </h2>
                            <h5><Link to="/offerings">Explore Cut to Size</Link></h5>
                        </div>
                    </div>
                </div>
            </section>
            <section id="difference">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col">
                            <div className="d-flex flex-column">
                                <h1 className="my-4">The QuartzKraft Difference</h1>
                                <div className="d-flex gap-5">
                                    <h1>01</h1>
                                    <div>
                                        <p className="m-0">Premium Raw Materials</p>
                                        <p>Quartz grit, resin and raw materials sourced from trusted partners.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                                <div className="d-flex gap-5">
                                    <h1>02</h1>
                                    <div>
                                        <p className="m-0">Handcrafted Techniques</p>
                                        <p>Hand crafted premium colors, with an emphasis on quality and consistency.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                                <div className="d-flex gap-5">
                                    <h1>03</h1>
                                    <div>
                                        <p className="m-0">Low & Zero Silica Innovation</p>
                                        <p>Proven low and zero silica capability for durable slabs.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                                <div className="d-flex gap-5">
                                    <h1>04</h1>
                                    <div>
                                        <p className="m-0">Customer Centricity</p>
                                        <p>Disciplined production, consistent deliveries, sample support, product strategy, and more.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                                <div className="d-flex gap-5">
                                    <h1>05</h1>
                                    <div>
                                        <p className="m-0">Transparency & Honesty</p>
                                        <p>Promises that are delivered upon, with a team that is easy and professional to work with.</p>
                                    </div>
                                </div>
                                <hr className="mt-1" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                {difference.map(value => {
                                    return (
                                        <>
                                            <div className="col-6 d-flex flex-column gap-1">
                                                <img src={value.image} height="142px" />
                                                <h5>{value.title}</h5>
                                                <p className="w-75">{value.desc}</p>
                                            </div>
                                        </>
                                    )
                                })}
                                <Link to="https://www.ravileelagranites.com/">Explore Granite</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="offerings">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col">
                            <div className="d-flex flex-column gap-4">
                                <h1>Our Quartz Offerings</h1>
                                <p>Behind every QuartzKraft surface is a team of skilled crafters, engineers, and production specialists working together to create quartz slabs of exceptional quality. Our in-house technology lab continuously works to develop new, niche techniques and patterns to share with our customers.</p>
                                <img src={offerings[0]} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column gap-4">
                                <img src={offerings[1]} alt="" />
                                <div>
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>01</h1>
                                        <p>Traditional Engineered Quartz Surfaces</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>02</h1>
                                        <p>Low Silica Quartz Surfaces (less than 30% crystalline silica)</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>03</h1>
                                        <p>Zero Silica Quartz Surfaces (zero crystalline silica)</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex gap-3 align-items-center">
                                        <h1>04</h1>
                                        <p>Cut to Size Fabrication</p>
                                    </div>
                                    <hr className="m-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home;