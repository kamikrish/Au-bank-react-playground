import { Component } from "react";

export default class CompanyComponent extends Component{
    state={
        companyName:"AU Bank",
        countryofOrigin:"India",
    };
    changeCompanyName=()=>{
        
        this.setState({
            companyName:"AU Small Finance Bank",
        });
       
    }
    render(){
        return(
            <div>
                <h3>Company Component -- state in class component</h3>
                <br/>
                <br/>
                Company Name : {this.state.companyName}
                <br/>
                <br/>
                Contry of Origin : {this.state.countryofOrigin}
                <br/>
                <br/>
                <button onClick={this.changeCompanyName}>Click Me</button>
            </div>
        );
    }
}