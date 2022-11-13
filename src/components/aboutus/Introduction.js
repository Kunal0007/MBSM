import React from 'react'
import Card from 'react-bootstrap/Card';

const Intro = () => {
    return (
        <div>
            <div>
                <img width="1600" height="300" src="http://www.bsmbharat.org/wp-content/uploads/2021/02/banner_introduction.jpg" class="attachment-full size-full" alt="" loading="lazy" srcset="http://www.bsmbharat.org/wp-content/uploads/2021/02/banner_introduction.jpg 1600w, http://www.bsmbharat.org/wp-content/uploads/2021/02/banner_introduction-1536x288.jpg 1536w, http://www.bsmbharat.org/wp-content/uploads/2021/02/banner_introduction-600x113.jpg 600w" sizes="(max-width: 1600px) 100vw, 1600px" />
            </div>
            <div className='content'>
                <div className="intro_head">
                    <h2>The Glorious history of the Shikshan Mandal</h2>
                </div>
                <div className='details'>
                    <p>Bharatiya Shikshan Mandal was founded on the auspicious day of Rama Navami in the year 1969 with the objective of accomplishing national resurgence in the field of education. Shikshan Mandal is working in 28 states and 700 districts of Bharat.</p>
                    <p className='subtitle'>Mission Vision</p>
                    <p>To evolve a completely Bharatiya system of education rooted in Bharatiya culture at all levels from primary to the higher education. Based on Bharatiya values with Bharat-centric Objectives, Policy, Curriculum & Pedagogy through a five-fold framework of Research, Awareness, Orientation, Publication & Networking and thus achieve a resurgent Bharat.</p>
                </div>
                <div className='cards'>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="img1">
                    <img width="1000" height="617" src="http://www.bsmbharat.org/wp-content/uploads/2021/10/about_infographic.png" class="attachment-large size-large" alt="" loading="lazy" srcset="http://www.bsmbharat.org/wp-content/uploads/2021/10/about_infographic.png 1000w, http://www.bsmbharat.org/wp-content/uploads/2021/10/about_infographic-600x370.png 600w" sizes="(max-width: 1000px) 100vw, 1000px" /> 
                </div>
                <div className="img2">
					<img width="1024" height="720" src="http://www.bsmbharat.org/wp-content/uploads/2021/10/about-us-image-1024x720.jpg" class="attachment-large size-large" alt="" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default Intro