import styled from "styled-components"

export const FormSearch = styled.form`

width: 100%;
max-width: 280px;

display: flex;
align-items:center;
justify-content: space-between;
gap: 20px;

padding: 8px;
border-radius: 8px;
 
  transition: 0.4s;

  input {
    width: 100%;
   
    height: 40px;
  }

  input:focus {
    outline: none;
  }

  :has(input:focus) {
    border-color:red;
    
  }

`

export default FormSearch