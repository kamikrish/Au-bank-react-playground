import React,{useState} from "react";

export default function CompanyChangeFC(){

    const[companyName,setCompanyName]=useState("Au Bank");
    const[countryofOrigin,setCompanyOfOrigin]=useState("India");

    const changeCompany = () =>{
        setCompanyName("AU Small Finance Bank");
    };

    
        return(
            <div>
                <h3>Company Component -- state in class component</h3>
                <br/>
                <br/>
                Company Name : {companyName}
                <br/>
                <br/>
                Contry of Origin : {countryofOrigin}
                <br/>
                <br/>
                <button onClick={changeCompany}>Click Me</button>
            </div>
        );
    
}