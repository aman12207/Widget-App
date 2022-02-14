import React, { useState } from 'react';

const Accordion = ({ items }) => {

  const [activeState,setActiveState] = useState(null);

  const handleclick= (idx) =>{
    setActiveState(idx);
  }
  const renderedItems = items.map((item,index) => {
    const active = index===activeState? "active" : ""
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={()=> handleclick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems} {activeState}</div>;
};

export default Accordion;