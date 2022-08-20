import React    from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {
  state={
    menuItem: sessionStorage.menuItem ? sessionStorage.menuItem : 'home',
    isMobileView:document.body.offsetWidth < 600 ? true:false,
    left:-140
}
  constructor(){
    super();
    let flage=true;
    let timeout;
    window.addEventListener('resize',()=>{
        if(flage){
            this.fnUpdateWindowWidth()
            flage=false
        }
        clearTimeout(timeout)
        timeout=setTimeout(()=>{
            this.fnUpdateWindowWidth()
        },500)
    })
}

fnUpdateWindowWidth(){
  console.log('called')
  let width =document.body.offsetWidth
      this.setState({
          isMobileView:width < 600?true:false
      })
}

fnMenuClick=(eve)=>{
  eve.stopPropagation()
  const {tageName,id}=eve.target
  console.log(eve.target.tageName)
  console.log(eve.target.id)
  if(tageName=='ul')return;
  sessionStorage.menuItem=id;
  this.setState({
     menuItem:id,
     left : -140
  })
}

  render() {
    return template.call(this);
  }
}

export default Menu;
