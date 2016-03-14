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
    var self = this;
		return(
			<div>
       <div className="container col-xs-10 col-xs-offset-1">
     <div className="panel panel-info">
       <div className="panel-heading">
         <h3 className="panel-title">Goals</h3>
       </div>
       <div className="panel-body">
         <p>{this.props.intention}</p>
         <div className = 'row'>
         <p>Start Date</p>
         <p>{this.props.startDate}</p>
         </div>
         <div className='row'>
         <p>End Date</p>
         {this.props.endDate}
         </div>
         <div className='row'>
           <ul>
              <li className='checkbox'>
               {this.props.taskList}
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