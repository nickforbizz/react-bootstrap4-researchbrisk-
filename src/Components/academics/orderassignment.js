import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export default function Orderassignment(props) {
    // decrare states
    const [blogCat, setBlogCat] = useState([]);
    const [blogFormat, setBlogFormat] = useState([]);
    const [blogLang, setBlogLang] = useState([]);
    const [visible, setVisible] = useState(false);
    const [feedback, setFeedback] = useState("processing ...");
    const [wordcount, setWordcount] = useState(275);


    // call data from server
    useEffect(() => {
        // call categories
        callFromServer(`${process.env.REACT_APP_API_URL}fetch_order_cats`, setBlogCat)
        // formats
        callFromServer(`${process.env.REACT_APP_API_URL}fetch_order_formats`, setBlogFormat)
        // lang
        callFromServer(`${process.env.REACT_APP_API_URL}fetch_order_langs`, setBlogLang)
    }, [])

    const { register,reset, handleSubmit, errors } = useForm();
    const onSubmit = data => {

    }

    // functions
    const calcWordcount = (event) => {
        let val = event.target.value * 275
        setWordcount(val)
    }

    const displayOrderCategories = () => {
        // console.log({blogCat})
        
        if(blogCat.length < 1){
            var cats = <option> -- select --</option>
        }else{

            cats = blogCat.map((item, i) =>  (
    
                <option key={i} value={item.id}>{item.name}</option>
     
            ))
        }
        return cats;
    }

    // formats
    const displayOrderFormats = () => {
        // console.log({blogFormat})
        
        if(blogFormat.length < 1){
            var cats = <option> -- select --</option>
        }else{

            cats = blogFormat.map((item, i) =>  (
    
                <option key={i} value={item.id}>{item.name}</option>
     
            ))
        }
        return cats;
    }

    // displayOrderLang
    const displayOrderLang = () => {
        // console.log({blogFormat})
        
        if(blogLang.length < 1){
            var cats = <option> -- select --</option>
        }else{

            cats = blogLang.map((item, i) =>  (
    
                <option key={i} value={item.id}>{item.name}</option>
     
            ))
        }
        return cats;
    }

    // call data from server
    const callFromServer = (url, stateset) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            stateset(data.data)
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-sm-12 -bottom-8">
                        <h5 className="primary-color btr-6 p-3">Order Assignment !!!</h5>
                    </div>

                    <div className="col-sm-12">
                        <div className="card p-3">
                            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" id="nil_order" className="form row">

                                <input type="hidden" value='00' name="user_id" ref={register()} />
                                <input type="hidden" defaultValue={'Y'} name="nil" ref={register()} />


                                <div className="form-group col-sm-4">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="text" className="form-control" placeholder="Enter Email" ref={register({ required: true })} />
                                    {errors.email && <span className="red_message">This field is required</span>}
                                </div>

                                <div className="form-group col-sm-8">
                                    <label htmlFor="title">Title</label>
                                    <input id="title" name="title" type="text" className="form-control" placeholder="Enter Title" ref={register({ required: true })} />
                                    {errors.title && <span className="red_message">This field is required</span>}
                                </div>

                                <div className="form-group col-sm-4">
                                    <label htmlFor="category">Category</label>
                                    <select id="category" className="form-control browser-default" name="category_id" ref={register({ required: true })}>
                                        <option value="" disabled defaultValue>Choose your option</option>
                                        {displayOrderFormats()}
                                    </select>
                                    {errors.category_id && <span className="red_message">This field is required</span>}
                                </div>

                                <div className="form-group col-sm-4">
                                    <label htmlFor="format">Format</label>
                                    <select id="format" className="form-control browser-default" name="format_id" ref={register({ required: true })}>
                                        <option value="" disabled defaultValue>Choose your option</option>
                                        {displayOrderCategories()}

                                    </select>
                                    {errors.format_id && <span className="red_message">This field is required</span>}
                                </div>

                                <div className="form-group col-sm-4">
                                    <label htmlFor="language">Language</label>
                                    <select id="language" className="form-control browser-default" name="language_id" ref={register({ required: true })}>
                                        <option value="" disabled defaultValue>Choose your option</option>
                                        {displayOrderLang()}
                                    </select>
                                </div>

                                <div className="form-group col-sm-4">
                                    <label htmlFor="pages">Page(s)</label>
                                    <input id="pages" name="pages" type="number" className="form-control" placeholder="Enter Pages" ref={register({ required: true })} onChange={(e) => calcWordcount(e)} />
                                    {errors.pages && <span className="red_message">This field is required</span>}
                                </div>

                                <div className="form-group col-sm-4">
                                    <label htmlFor="word_count">Word Count</label>
                                    <input id="word_count" name="word_count" type="number" className="form-control" value={wordcount} ref={register({ required: true })} onChange={(e) => setWordcount(e.target.value)} />
                                    {errors.word_count && <span className="red_message">This field is required</span>}
                                </div>

                                <div className="form-group col-sm-12">
                                    <label htmlFor="notes">Notes</label>
                                    <textarea id="notes" name="notes" className="form-control" placeholder="Enter Additional Info"></textarea>
                                </div>


                                <div className="form-group col-sm-12">

                                    <p> Documents <small> <i> - (hold CTRL to select multiple docs)</i></small> </p>
                                    <input type="file" id="docs" className="form-control" name="file" multiple />

                                </div>




                                <br />
                                <div className="input-field col s12">

                                    <input className="btn btn-success" type="submit" />
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
