import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import AppSideNav from './../dashboard.sidenav';
import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import axios from "axios";
import { toast } from 'react-toastify';

export default function Place_order(props) {


    // states
    const [add_flag, setAdd_flag] = useState('A');
    const [order_miscs, setOrder_miscs] = useState([]);
    const [order_cats, setOrder_cats] = useState([]);
    const [order_formats, setOrder_formats] = useState([]);
    const [order_langs, setOrder_langs] = useState([]);

    // form states
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState('');
    const [wordcount, setWordcount] = useState('');
    const [description, setDescription] = useState('');

    const headers = authHeader();
    const { register, handleSubmit, errors } = useForm();



    useEffect(() => {
        let url = AuthService.API_URL + 'order_miscs';
        axios.get(url, {
            headers: headers
        }).then(res => {
            setOrder_miscs(res.data);
            setOrder_cats(res.data.cats);
            setOrder_formats(res.data.formats);
            setOrder_langs(res.data.langs);
        });
        let user = AuthService.getCurrentUser();
        setEmail(user.email);
    }, []);

    const renderCats = () =>{
        let template = null;
        if(order_cats.length > 0){
            template = order_cats.map((item, i) => (
                <option key={i} value={item.id}> {item.name}</option>
            ))
        }
        return template;
    }

    const renderFormats = () =>{
        let template = null;
        if(order_formats.length > 0){
            template = order_formats.map((item, i) => (
                <option key={i} value={item.id}> {item.name}</option>
            ))
        }
        return template;
    }

    const renderLangs = () =>{
        let template = null;
        if(order_langs.length > 0){
            template = order_langs.map((item, i) => (
                <option key={i} value={item.id}> {item.name}</option>
            ))
        }
        return template;
    }


    // send data
    const onSubmit = data => {
        let url = null;
        let data2 = new FormData(document.querySelector("#order_form"));
        (add_flag === 'A') ? url =  AuthService.API_URL + 'post_order' : url = AuthService.API_URL + 'patchOrder/'+ props.order_id;
        console.log(url);
        axios.post(url, data2, {
            headers: headers
        }).then(res => {
            console.log(res.data);
            if(+res.data.code === 1){
                toast.success(res.data.msg)
            }else{
                toast.error('Order did not add')
            }
            // setShow_modal(false); 
            setTimeout(() => {
                window.location.reload()                
            }, 1500);
        }).catch(err => toast.error('Something went wrong'));
    };

    // find wordcount per page
    const calcWordcount = (event) => {
        let val = event.target.value * 275
        setPages(event.target.value)
        setWordcount(val)
    }

    
    return (
        <section>
            <div className="dashboard-container">
            {/* <ToastContainer /> */}
                <div className="row mr-0">
                    <div className="col-sm-2 sidenav_dashboard">
                        <AppSideNav />
                    </div>

                    <div className="col-sm-10">
                        <h2>Place order</h2> <hr />
                        <form
                            method="post"
                            className="form"
                            id="order_form"
                            encType="multipart/form-data"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="row mr-0">

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={email}
                                            placeholder="Enter email"
                                            ref={register({ required: true })}
                                            onChange={(e) => setEmail(e.target.value)}
                                            readOnly
                                        />
                                        <p className="text_red">{errors.name && " Name is required"}</p>

                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="title">Title:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            value={title}
                                            placeholder="Enter title"
                                            ref={register({ required: true })}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <p className="text_red">{errors.description && "Description is required"}</p>

                                    </div> <hr/>
                                </div>
                                {/* col-md-6 */}

                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="pages">Pages:</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="pages"
                                            name="pages"
                                            value={pages}
                                            placeholder="Enter pages"
                                            ref={register({ required: true })}
                                            onChange = {(e) => calcWordcount(e)}
                                        />
                                        <p className="text_red">{errors.pages && "pages are required"}</p>

                                    </div>
                                </div>
                                {/* col-md-3 */}


                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="wordcount">Word Count:</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="wordcount"
                                            name="wordcount"
                                            value={wordcount}
                                            placeholder="Wordcount"
                                            ref={register({ required: true })}
                                            onChange={(e) => setWordcount(e.target.value)}
                                        />
                                        <p className="text_red">{errors.description && "Word Count is required"}</p>

                                    </div>
                                </div>
                                {/* col-md-3 */}

{/* 
                                <div className="col-md-12">
                                    <div className="row"> */}
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label htmlFor="category">Category:</label>
                                                <select
                                                    className="form-control"
                                                    id="category"
                                                    name="order_category_id"
                                                    ref={register({ required: true })}
                                                    
                                                >
                                                    <option defaultValue> -- select -- </option>
                                                    {renderCats()}
                                                </select>
                                                <p className="text_red">{errors.order_category_id && "Category is required"}</p>

                                            </div>
                                        </div>
                                        {/* col-md-4 */}

                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label htmlFor="format">Format:</label>
                                                <select
                                                    rows={2}
                                                    className="form-control"
                                                    id="format"
                                                    name="order_format_id"
                                                    ref={register({ required: true })}
                                                    // onChange={(e) => setTitle(e.target.value)}
                                                >
                                                    <option defaultValue> -- select -- </option>
                                                    {renderFormats()}
                                                </select>
                                                <p className="text_red">{errors.order_format_id && "Description is required"}</p>

                                            </div>
                                        </div>
                                        {/* col-md-4 */}

                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label htmlFor="lang">Lang:</label>
                                                <select
                                                    rows={2}
                                                    className="form-control"
                                                    id="lang"
                                                    name="order_language_id"
                                                    ref={register({ required: true })}
                                                    // onChange={(e) => setTitle(e.target.value)}
                                                >
                                                    <option defaultValue> -- select -- </option>
                                                    {renderLangs()}
                                                </select>
                                                <p className="text_red">{errors.order_language_id && "Lang is required"}</p>

                                            </div>
                                        </div>
                                        {/* col-md-4 */}

                                    {/* </div>
                                    <hr />

                                </div> */}

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Description:</label>
                                        <textarea
                                            rows={2}
                                            className="form-control"
                                            type="number"
                                            id="description"
                                            name="description"
                                            value={description}
                                            placeholder="Enter description"
                                            ref={register({ required: true })}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <p className="text_red">{errors.description && "Description is required"}</p>

                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Attachments:</label>
                                        <input
                                            multiple
                                            className="form-control"
                                            type="file"
                                            id="attachments"
                                            name="file[]"
                                            // value={attachments}
                                            placeholder="Enter attachments"
                                            ref={register({ required: true })}
                                            // onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <p className="text_red">{errors.file && "attachments  required"}</p>

                                    </div>
                                </div>







                            </div>

                            <div className="row mb-5 mr-0">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-info">Save</button>
                                </div>
                            </div>
                        </form>
                        {/* <!-- .form --> */} 
                    </div>
                </div>
            </div>

        </section>
    )
}
