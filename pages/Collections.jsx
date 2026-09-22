import "./overall.css"
import { Link } from 'react-router-dom';

let Collections = () => {
    return (
        <section id="collections">
            <div className="container">
                {collections.map(value => {
                    return (
                        <div className="my-5">
                            <h1>{value.category}</h1>
                            <div className="d-flex justify-content-between my-5">
                                {value.products.map(value => {
                                    return (
                                        <div>
                                            <img src={value.image} alt="" height="177px" width="353px"/>
                                            <p>{value.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link>Explore Our Collections</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Collections;