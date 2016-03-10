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


var GoalBoxForm = React.createClass({
	render: function(){
		return(
			<div className="">
				<div className='container'>
					<legend>Goal</legend>
						<div className='row col-xs-6'>
				  		<form action="" method="POST" role="form">
				  			<div className="form-group">
				      			<label className="row" for="">Intention</label>
				      			<input type="text" className="form-control" id="" placeholder="Intention"/>
				    		</div>
				    		<div className="row">
				      			<p>Start Date</p>
				         		<input type="date" name="" id="input" className="form col-xs-3" value="" required="required" title=""/>
				         	</div>
				         	<div className='row'>
				         		<p>End Date</p>
				         		<input type="date" name="" id="input" className="form col-xs-3" value="" required="required" title=""/>
				         	</div>
				         	<br/>
				         	<div className="row">
				         		<input placeholder="Enter your task here"></input>
				        		<button type="submit" className="btn btn-primary">Add Task</button><br/><br/>
				        		<button type="submit" className="btn btn-primary">Submit</button>
				        	</div>
				  		</form>
				  	</div>

			</div>
			</div>
			)
	}
});