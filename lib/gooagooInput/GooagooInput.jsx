import React from 'react';
import './gooagooInput.less';

let currentStream;

class GooagooInput extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:this.props.value||'',
    }
  }

  onChange=(e)=>{
    let value=e.target.value;
    this.setState({
      value:value,
    });

    //输入优化
    if(currentStream){
      clearTimeout(currentStream);
    }
    currentStream = setTimeout(()=>{
      if(this.props.onChange)this.props.onChange(value,this.props.label);
      },500);
  };

  render(){
    return(
      <div className={this.props.noBottomBorder?'gooagoo-input gooagoo-input-noBorder':'gooagoo-input'}>
        <label htmlFor="goagoInput">
          <span className="required" style={{display:this.props.required?'inline-block':'none'}}>*</span>
          {this.props.label}：<span/></label>
        <input id="goagoInput"
               placeholder={this.props.placeholder}
               value={this.state.value}
               onChange={this.onChange}
               onBlur={this.props.onBlur}
               onFocus={this.props.onFocus}
               type={this.props.type||'text'}
               maxLength={this.props.maxLength}
        />
        <span className="rightImg"
              style={{backgroundImage:"url("+this.props.imgUrl+")"}}
              onClick={this.props.imgClick}
        >{this.props.rightText}</span>
      </div>
    )
  }
}


export default GooagooInput;

