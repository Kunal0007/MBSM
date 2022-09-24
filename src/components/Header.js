import React from 'react'

const Header = () => {
    return (
        <div className="container text-center">
            <div className="row row-cols-4">
                <div className="col-6 text-start">
                    <a href="http://bsmbharat.org/">
                        <img src="http://bsmbharat.org/wp-content/uploads/elementor/thumbs/rfr-logo-pdxx8z7xf4n5q53w1tjmsomv3eyw7k23bnbw19t5vw.png" title="rfr-logo" alt="rfr-logo" />
                    </a>
                </div>
                <div className="col-6">
                    <img width="348" height="87" src="http://bsmbharat.org/wp-content/uploads/2021/02/letter_head.png" className="attachment-large size-large" alt="" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default Header