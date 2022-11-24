import React, {useState} from 'react'
import {Formik} from 'formik'
import validate from './validate'

export const FormCreate = () => {

    const [formularioEnviado, setformularioEnviado] = useState(false)

  return (

    <div>
        <h1> Formulario</h1>
        
        <Formik
            initialValues={{
                title:"",
                category:"",
                color:"",
                season:"",
                price:"",
                size:"",
                gender:"",
                stock:"",
                image:"",               
            }}
            validate={(values)=>validate(values)}

            onSubmit={(values,{resetForm})=>{
                resetForm()
                console.log("formulario enviado")
                setformularioEnviado(true)
                setTimeout(()=>setformularioEnviado(false), 5000)
            }}
        >  
            {({handleSubmit, errors, values, handleChange, handleBlur, touched})=>(
                <form onSubmit={handleSubmit}>
                   
                    <div>
                        <label> title</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="title" 
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.title && errors.title&& <div>{errors.title}</div>}
                    </div>
                    <div>

                        <label> Category</label>
                        <input 
                            type="text" 
                            id="category" 
                            name="category" 
                            placeholder="Category" 
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.category && errors.category&& <div>{errors.category}</div>}
                    </div>
                     <div>

                        <label> Season</label>
                        <input 
                            type="text" 
                            id="season" 
                            name="season" 
                            placeholder="season" 
                            value={values.season}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.season && errors.season&& <div>{errors.season}</div>}
                    </div>

                    <div>

                        <label> color</label>
                        <input 
                            type="text" 
                            id="color" 
                            name="color" 
                            placeholder="color" 
                            value={values.color}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.color && errors.color&& <div>{errors.color}</div>}

                    </div>

                    <div>

                        <label> price</label>
                        <input 
                            type="text" 
                            id="price" 
                            name="price" 
                            placeholder="price" 
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.price && errors.price&& <div>{errors.price}</div>}

                    </div>

                    <div>

                        <label> size</label>
                        <input 
                            type="text" 
                            id="size" 
                            name="size" 
                            placeholder="size" 
                            value={values.size}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.size && errors.size&& <div>{errors.size}</div>}

                    </div>
                    <div>

                        <label> stock</label>
                        <input 
                            type="text" 
                            id="stock" 
                            name="stock" 
                            placeholder="stock" 
                            value={values.stock}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.stock && errors.stock&& <div>{errors.stock}</div>}

                    </div>
                    <div>

                        <label> image</label>
                        <input 
                            type="url" 
                            id="image" 
                            name="image"
                            placeholder="image"
                            value={values.image}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.image && errors.image&& <div>{errors.image}</div>}

                    </div>

                    <button type='submit'> Enviar</button>
                    { 
                    formularioEnviado && <p>Prenda creada con exito!!</p>
                        }
                </form>
            )}       
        </Formik>

    </div>
  )
}
