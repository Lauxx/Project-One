var GoalBoxDisplay = React.createClass({
	render: function(){
		return(
			<div>
       <div className="container col-xs-10 col-xs-offset-1">
     <div className="panel panel-info">
       <div className="panel-heading">
       <nav className="navbar navbar-inverse">
         <div className="container-fluid">
           <a className="navbar-brand" href="#">Title</a>
           <ul className="nav navbar-nav">
             <li className="active">
               <a href="#">Goal #1</a>
             </li>
             <li>
               <a href="#">Goal #2</a>
             </li>
           </ul>
         </div>
       </nav>
         <h3 className="panel-title">Goals</h3>
       </div>
       <div className="panel-body">
         <p>View goals here</p>
         <div className = 'row'>
         <p>Start Date</p>
         <input type="date" name="" id="input" className="form col-xs-3" value="" required="required" title=""/>
         </div>
         <div className='row'>
         <p>End Date</p>
         <input type="date" name="" id="input" className="form col-xs-3" value="" required="required" title=""/>
         </div>
         <div className='row'>
           <ul>
             <li className='checkbox'>
               this is one task 
                <label><input type="checkbox" value=""/></label>
             </li>
              <li className='checkbox'>
               this is one task 
                <label><input type="checkbox" value=""/></label>
             </li>
              <li className = 'checkbox'>
               this is one task 
                <label><input type="checkbox" value=""/></label>
             </li>
           </ul>
           
            
           
          </div>
         </div>
       </div> 
     </div>
  </div>
			)
	}
});