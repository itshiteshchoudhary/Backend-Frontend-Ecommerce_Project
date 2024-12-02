export const registerFormControls =[
    {
        name : "username",
        label : "User Name",
        placeholder : "Enter your name",
        componenttype : "input",
        type : "text"
    },
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componenttype : "input",
        type : "email"
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your password",
        componenttype : "input",
        type : "password"
    },
]

export const loginFormControls =[
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componenttype : "input",
        type : "email"
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your password",
        componenttype : "input",
        type : "password"
    },
]

export const AddProductFormData =[
    {
        label : "Title",
        name : "title",
        componenttype : "input",
        type : "text",
        placeholder : "Enter Product Title"
    },
    {
        label : "Description",
        name : "description",
        componenttype : "textarea",
        placeholder : "Enter Product Description"
    },
    {
        label : "Category",
        name : "category",
        componenttype : "select",
        options : [
            {id : "men" , label : "Men"},
            {id : "women" , label : "women"},
            {id : "kids" , label :"kids"},
            {id : "accessories" , label : "Accessories"},
            {id : "footware" , label : "Footware"}
        ]
    },
    {
        label : "Brand",
        name : "brand",
        componenttype : "select",
        options :[
            {id : "nike" , label : "Nike"},
            {id : "adidas" , label : "Adidas"},
            {id : "puma" , label : "Puma"},
            {id : "redchief" , label : "Red Chief"},
            {id : "zara" , label : "Zara"},
            {id : "h&m" , label : "H&M"}
        ]
    },
    {
        label : "Price",
        name : "price",
        componenttype : "input",
        type : "number",
        placeholder : "Enter Product Price"
    },
    {
        label : "Sale Price",
        name : "salePrice",
        componenttype : "input",
        type : "number",
        placeholder : "Enter Product Sale Price"
    },
    {
        label : "Total Stock",
        name : "totalStock",
        componenttype : "input",
        type : "number",
        placeholder : "Enter Product Total Stock"
    },
    
]