{/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
    - GoalBoxForm
    - CommentBox
      - CommentList
        - Comment
      - CommentForm

  - UserBioApp
    - UserBioDisplay
    - UserBioForm

 */}


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
         <p>{this.props.intention}</p>
         <div className = 'row'>
         <p>Start Date</p>
         <input type="date" name="" id="input" className="form col-xs-3" value="" required="required" title=""/>
         <p>{this.props.startDate}</p>
         </div>
         <div className='row'>
         <p>End Date</p>
         <input type="date" name="" id="input" className="form col-xs-3" value="" required="required" title=""/>
         {this.props.endDate}
         </div>
         <div className='row'>
           <ul>
             <li className='checkbox'>
               this is one task 
                <label><input type="checkbox" value=""/></label>
             </li>
              <li className='checkbox'>
               {this.props.taskList}
                <label><input type="checkbox" value=""/></label>
             </li>
              <li className = 'checkbox'>
               
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