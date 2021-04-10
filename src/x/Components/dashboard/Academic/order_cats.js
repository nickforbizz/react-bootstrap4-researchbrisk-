import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import { useForm } from "react-hook-form";
import axios from "axios";

import AppSideNav from './../dashboard.sidenav';
import { tb_options } from '../../../HOC/helpers/tables';
import AuthService from '../../../HOC/helpers/authservice';
import { authHeader } from '../../../HOC/helpers/authheader';
import Modal from './../../../Widgets/modal'
import { toast } from 'react-toastify';


export default function Order_cats(props) {

    // states
    const [order_cats, setOrder_cats] = useState([]);
    const [show_modal, setShow_modal] = useState(false);
    const [cat_title, setCat_title] = useState('');
    const [cat_descr, setCat_descr] = useState('');
    const [add_flag, setAdd_flag] = useState('A');
    const [category_id, setCategory_id] = useState('');


    const headers = authHeader();
    const { register, handleSubmit, errors } = useForm();

    console.log(AuthService.API_URL);
    // fetch order formats data 
    const fetch_order_cats = AuthService.API_URL + 'fetch_order_cats';
    const post_order_cats = AuthService.API_URL + 'post_order_cat';
    useEffect(() => {
        axios.get(fetch_order_cats, {
            headers: headers
        }).then(res => {
            setOrder_cats(res.data.data)
        });

    }, []);

    const addCat = () => {
        setAdd_flag('A');
        setCat_title('')
        setCat_descr('')
        setShow_modal(true);
    }

    const editCat = (id) => {
        setAdd_flag('E');
        setCategory_id(id);
        axios.get(AuthService.API_URL + 'get_order_cat/' + id).then(res => {
            console.log(res.data);
            setCat_title(res.data.name)
            setCat_descr(res.data.description)
        })
        setShow_modal(true);
    }

    const delCat = (id) => {
        let data = '';
        axios.post(AuthService.API_URL + 'delOrder_cat/' + id, data, {
            headers: headers
        }).then(res => {
            if (res.data.code === 1) {
                toast.success(res.data.msg);
            } else {
                toast.error('Failed to remove Item');
            }
            setTimeout(() => { window.location.reload() }, 1500)
        }).catch(
            err => toast.error('Something went wrong')
        )
    }




    const tb_columns = [
        {
            name: "id",
            label: "#",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Title",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "description",
            label: "Description",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "active",
            label: "Active",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "created_at",
            label: "Created At",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'Action',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (dataIndex, rowData) => {
                    return (
                        <>
                            <button onClick={() => editCat(rowData.rowData[0])} className="mr-1 btn btn-success btn-sm"><i className="fa fa-edit"></i> </button>
                            <button onClick={() => delCat(rowData.rowData[0])} className="btn btn-danger btn-sm"> <i className="fa fa-trash"></i> </button>
                        </>
                    );
                }
            },
        }
    ];

    const tb_data = order_cats;


    // send data
    const onSubmit = data => {
        let url = null;
        (data.add_flag === 'A') ? url = post_order_cats : url = AuthService.API_URL + 'patchOrder_cat/' + category_id;
        axios.post(url, data, {
            headers: headers
        }).then(res => {
            setOrder_cats(res.data.data);
            setShow_modal(false);
            window.location.reload()
        });
    };

    return (
        <div className=" dashboard-container">
            <div className="row mr-0">
                <AppSideNav />

                <div className="col-sm-9">
                    <h2 className="mt-4">Order Categories</h2> <hr />

                    <Modal isOpen={show_modal}
                        close={() => setShow_modal(false)}
                        title={'Add|Edit Order Format'}
                    >
                        <article>
                            <form
                                method="post"
                                className="form"
                                encType="multipart/form-data"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="hidden" value={add_flag} name="add_flag" ref={register()} />
                                        <div className="form-group">
                                            <label htmlFor="cat_title">Title:</label>
                                            <input
                                                className="form-control"
                                                id="cat_title"
                                                name="name"
                                                value={cat_title}
                                                placeholder="Enter title of format"
                                                ref={register({ required: true })}
                                                onChange={(e) => setCat_title(e.target.value)}
                                            />
                                            <p className="text_red">{errors.name && " Name is required"}</p>

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="cat_descr">Description:</label>
                                            <textarea
                                                rows={2}
                                                className="form-control"
                                                id="cat_descr"
                                                name="description"
                                                value={cat_descr}
                                                placeholder="Enter title of description"
                                                ref={register({ required: true })}
                                                onChange={(e) => setCat_descr(e.target.value)}
                                            />
                                            <p className="text_red">{errors.description && "Description is required"}</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-info">Save</button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- .form --> */}
                        </article>
                    </Modal>

                    <div className="table-responsive mb-4">
                        <button className="btn btn-info btn-sm mb-2" onClick={addCat}>
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>  Add
                        </button>
                        <MUIDataTable
                            title={"Order Formats Table"}
                            data={tb_data}
                            columns={tb_columns}
                            options={tb_options}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
