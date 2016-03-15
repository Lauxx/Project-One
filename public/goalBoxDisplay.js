{/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
       - CommentBox
        - CommentList
          - Comment
        - CommentForm
    - GoalBoxForm
   

  - UserBioApp
    - UserBioDisplay
    - UserBioForm

 */}


var GoalBoxDisplay = React.createClass({
	render: function(){
    console.log(this.props.id, "this is goal id");
    console.log(this.props.activeGoal, "this is activeGoal id");
    if (this.props.activeGoal == this.props.id ) {
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
    return (

      <div>
      <h3> hello goals </h3>
      </div>




      ) 
  }
});