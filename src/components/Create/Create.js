import React,{useContext} from 'react'
import BlogContext from '../Context/Context';
import {Formik,Field,Form} from "formik";
import {v4 as uuidv4} from "uuid";
import {useNavigate} from "react-router-dom"

function Create() {
  const {data,setData} = useContext(BlogContext);
  const navigate = useNavigate();
  return (
    <div className='create'>
      <h2 style={{color:"#ff793f"}}>Create a new Post</h2>
      <div className='formik-form'>
        <Formik
        initialValues={{
          blogSubject:"",
          blogTitle: "",
          blogDescription:"",
          blogAuthor:""
          }}
          onSubmit={(values,bag)=>{
            setData(()=>[...data,{id:uuidv4(),blogSubject:values.blogSubject,blogTitle:values.blogTitle,blogDescription:values.blogDescription,author:values.blogAuthor}]);
            alert("Post has been successfully added!")
            navigate("/");
            bag.resetForm();
          }}
        >
        <Form>
          
          <label>Blog Title :</label>
          <Field name="blogTitle" required/>
          <label>Blog Description :</label>
          <Field name="blogDescription" required/>
          <label>Blog Author :</label>
          <Field name="blogAuthor"/>
          <button type='submit'>Add</button>
        </Form>
        </Formik>
        </div>
    </div>
  )
}

export default Create;