import React,{createContext,useState} from "react";

const BlogContext =  createContext();

export const BlogProvider = ({children})=>{
    const [data,setData] = useState([
    {
            id:0,
            blogTitle:"C# Yazılım Dili Nedir?",
            blogDescription:"Bu blog yazımızda C# yazılım dili nedir? C# dili ile neler yapılabilir ve C# bilen yazılımcıların iş bulma olasıklarını anlatacağız.",
            author:"Admin", 
        },
        {
            id:1,
            
            blogTitle:"React ile örnek ToDo List Projesi",
            blogDescription:"Bu projede react kullanarak basit bir todo app yapacağız.",
            author:"Admin"
        },
        {
            id:2,
            
            blogTitle:"Deneme Blog Başlığı ",
            blogDescription:"Deneme Blog Başlığı için açıklama",
            author:"Anonim"
        }
    ])
    const  deletePost = (id)=>{
        const cloned_data = [...data];
        const dataIndex = cloned_data.findIndex((data)=>data.id===id);
        cloned_data.splice(dataIndex,1);
        setData(cloned_data);
    }
    const values = {
        data,setData,deletePost
    }
    return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>
}
export default BlogContext;