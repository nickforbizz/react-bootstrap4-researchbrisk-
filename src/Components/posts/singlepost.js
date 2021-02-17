import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PostHighlight from '../posts/posthighlight'
import Modal from '../../Widgets/modal/'

export default function SinglePost(props) {

    const [show_modal, setShow_modal] = useState(false);

    // addComment
    const addComment = () => {
        setShow_modal(true)
        console.log(show_modal);
    }
    // addComment.end

    return (
        <React.Fragment>
            <div className="p-2 mt-4">
                <div className="row">
                    <div className="col-sm-8">
                        <article>

                            <Modal isOpen={show_modal}
                                close={() => setShow_modal(false)}
                                title={'Add Comment'} >

                                <form className="form row">
                                    <div className="form-group col-sm-6">
                                        <label for="name">Name</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Enter name ..." />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label for="email">Email</label>
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Enter email ..." />
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <label for="msg">Message</label>
                                        <textarea class="form-control" name="message" id="msg" rows="3" placeholder="Type you message ..."></textarea>
                                    </div>
                                </form>

                            </Modal>


                            <div className="container" style={{ paddingLeft: '5rem' }}>
                                <div className="nav_article">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item "> <Link to="" className="text-uppercase letter-span"> Category </Link>  </li>
                                            <li className="breadcrumb-item nav_article-breadcrumb "> 24 April 2010 </li>
                                            <li className="breadcrumb-item nav_article-breadcrumb active" aria-current="page">
                                                by: <Link to="" className="text-uppercase letter-span"> Admin </Link>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4 className="text-justify text-capitalize mt-2 lh-2">The title of the blog post</h4> <hr />
                                    </div>
                                    <div className="col-sm-12">
                                        <figure className="figure w-100">
                                            <img src="/images/blog_grid_03.jpg" className="figure-img img-fluid rounded w-100" alt="..." />
                                            <figcaption className="figure-caption">A caption for the above image.</figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-sm-12">
                                        <p className="text-justify">
                                            0
                                            172
                                            Instagram didn’t exist when I was in high school, but I imagine I’d be pretty fascinated by the beautiful, leggy 17-year-old with more than 174,000 followers and a Wilhelmina Models contract, too. For the legions of aspiring Cool Teens™, D’Alessio, who has been modeling full-time for the last year, is living the dream — though her Cinderella story has been anything but conventional.

                                            At Coachella in 2015, pictures of D’Alessio (above, right) and her friend, 18-year-old model Josie Canseco (left), flooded the Internet, winding up on places like the festival’s official Twitter and The Cobra Snake’s Instagram, among others. BuzzFeed spoke to D’Alessio soon after, resulting in a viral article that has since garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from there, and the rest is history. In the 12 months since D’Alessio was discovered, the Canada native has landed a slew of commercial campaigns, left Beverly Hills High School to pursue homeschooling and launched a YouTube channel with her friend and fellow model, Abby Champion. And with a secret project in the works for this summer, I imagine that D’Alessio’s stake in the California modeling pantheon will only deepen.

                                            On the eve of Coachella 2016’s first weekend, I hopped on the phone with D’Alessio to get caught up on the last year of her life, from her social media strategy to her dream campaign.

                                            You obviously gained a lot of attention at Coachella last year. What can you tell me about your experience there?

                                            I went with my friend Josie — it was my first year going — and we barely took photos. I think we took 10 photos, but people really responded to them. They ended up everywhere. I saw them on Facebook, and not just [from] friends, but random people posting them. And then The Weeknd and the Coachella Twitter reposted [one of their photos]. It was so surreal because I was just a normal girl from Canada who was going to Coachella. I had, like, 16,000 [Instagram] followers, and now it’s [174,000].

                                            Coachella really got me started in modeling. Wilhelmina reached out to me from the [BuzzFeed] article — that’s how they saw me.

                                            Fragrance is great, but it’s hard to write or read about because your computer screen isn’t scratch and sniff—also because I can’t talk about base notes or top notes without feeling like a fancy sommelier. I prefer to think of fragrance in terms of anthropology, which is much more fun. Have you ever thought about your personal fragrance history? Well, here’s mine.

                                            02

                                            And when Wilhelmina reached out to you, how did you feel about going forward with the process?

                                            Basically every single one of my friends in L.A. is a model, with Next or Wilhelmina or whatever it is. I was the non-model in the friend group because I wanted to go to UCLA. I didn’t have that much of an interest — well, I had an interest, but I didn’t think I would be successful so I didn’t really pursue it.

                                            When they asked me to come in, I went with my dad because I was 16. I almost didn’t sign because I was so scared. But I’m happy I ended up signing with them, because they’ve been a really great agency. I had the contract in my room for two days — like, I was scared they were going to tell me to cut my hair or lose weight or something like that, but they’ve been so supportive. They never told me to change anything.

                                            Fifth Grade: Tommy Boy

                                            I’m not kidding, I won Tommy Boy after I aced a quiz contest in Sunday School. The ultimate bounty. If you find yourself deep in the attic of my parent’s house, and you pay close attention, you might be able to smell it.

                                            Puberty: Abercrombie and Fitch Fierce

                                            Don’t even pretend like you didn’t.

                                            College: Kenzo Homme Sport

                                            My college years were timed with the heyday of the Kenzo sweatshirt, so this was a very fancy scent to own. You can now buy it for $30 on Amazon.

                                            I can look back at them like a tiny museum of me that smells really good—literally, because I still have them all. But enough about me and how (great) I smell. I want to know your fragrance history—tell me what scents you love and why you love them. Tell me when you wear them, and how you apply them, and why they’re special to you. Tell me everything.
                                        </p>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="bootstrap snippets bootdey card mt-5">
                                            <div className="card-img-top">
                                                <button className="btn btn-info float-right" onClick={addComment}>
                                                    <i className="fa fa-plus"></i> Add Comment
                                                </button>
                                                <h3 className="primary-color p-3 text-white btr-6">Comments</h3>
                                                <hr />
                                            </div>
                                            <div className="row p-4">
                                                <div className="col-md-12">
                                                    <div className="blog-comment">
                                                        <ul className="comments card-body">
                                                            <li className="clearfix">
                                                                <img src="https://bootdey.com/img/Content/user_1.jpg" className="avatar" alt="" />
                                                                <div className="post-comments">
                                                                    <p className="meta">Dec 18, 2014 <a href="#">JohnDoe</a> says : <i className="pull-right"><a href="#"><small>Reply</small></a></i></p>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                        Etiam a sapien odio, sit amet
				                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li className="clearfix">
                                                                <img src="https://bootdey.com/img/Content/user_2.jpg" className="avatar" alt="" />
                                                                <div className="post-comments">
                                                                    <p className="meta">Dec 19, 2014 <a href="#">JohnDoe</a> says : <i className="pull-right"><a href="#"><small>Reply</small></a></i></p>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                        Etiam a sapien odio, sit amet
				                                                    </p>
                                                                </div>

                                                                <ul className="comments">
                                                                    <li className="clearfix">
                                                                        <img src="https://bootdey.com/img/Content/user_3.jpg" className="avatar" alt="" />
                                                                        <div className="post-comments">
                                                                            <p className="meta">Dec 20, 2014 <a href="#">JohnDoe</a> says :</p>
                                                                            <p>
                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                                Etiam a sapien odio, sit amet
				                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* .container */}
                        </article>
                    </div>
                    <div className="col-sm-4">
                        <div className="sticky-top top-nav">
                            <div className="row">
                                <div className="col-sm-12 -bottom-8">
                                    <h6 className="p-3 text-white primary-color btr-6">Related Posts</h6>
                                </div>
                                <PostHighlight />
                            </div>
                        </div>
                    </div>
                </div>
                {/* .row */}

                <div className="row mt-5 p-4">
                    <div className="col-sm-12">
                        <h6 className="primary-color p-3 text-white btr-6"> You may Also Like </h6>
                    </div>

                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_02.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* .row */}
            </div>
        </React.Fragment>
    )
}
