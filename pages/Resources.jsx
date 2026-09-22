import "./overall.css"

let Resources = () => {
    let certifications = ["https://quartzkraft.com/wp-content/uploads/2026/03/certifcation-02.jpg", "https://quartzkraft.com/wp-content/uploads/2026/03/CE-logo.jpg", "https://quartzkraft.com/wp-content/uploads/2026/03/certifcation-03-1.jpg"]

    return (
        <section id="resources">
            <section id="certifications">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col">
                            <div className="d-flex flex-column">
                                <h1>Certifications</h1>
                                <p>QuartzKraft is an ISO 9001 certified factory, with a strong focus on process, documentation and clear communication cross our multi-disciplinary teams. In addition, our products are CE and NSF certified for both the Europe, and US markets.</p>
                                <div className="d-flex">
                                    {certifications.map(value => {
                                        return <img src={value} height="125px" width="125px" />
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src="https://quartzkraft.com/wp-content/uploads/2026/04/More-Than-a-Supplier-%E2%80%94-A-Strategic-Partner-1024x525.jpg" alt="" height="297px" width="580px" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="specs">
                <div className="container h-100">
                    <div className="d-flex h-100 justify-content-center align-items-center flex-column gap-3">
                        <h1>Technical & Product Specifications</h1>
                        <p className="text-center w-75">Our factory produces jumbo size slabs, measuring 126 x 63 inches with options of 1.5 cm, 2cm and 3cm thickness. Our slab finishes include polished, honed, leather and satin. Samples are custom-made per customer specifications.</p>
                    </div>
                </div>
            </section>
            <section id="supply">
                <div className="container h-100">
                    <div className="d-flex flex-column h-100 align-items-center justify-content-center gap-3">
                        <h1>Supply Chain Management</h1>
                        <div className="d-flex gap-3" id="promise">
                            <div>
                                <p>With three decades of leadership experience in US and Europe markets, our team understands the operational realities in managing efficient global distribution.</p>
                            </div>
                            <div>
                                <p>We support our partners with inventory forecasting, demand planning and efficient logistics coordination to ensure on-time product deliveries.</p>
                            </div>
                            <div>
                                <p>We ship from Krishnapatnam, Chennai, and Nhava Sheva ports, working with leading forwarders to secure competitive freight rates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Resources;