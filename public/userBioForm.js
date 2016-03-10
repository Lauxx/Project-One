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
 

var UserBioForm = React.createClass({
	render: function(){
		return(
				<div className="">
				<div className='container'>
					<legend>Update User Bio</legend>
						<div className='row col-xs-6'>
				  		<form action="" method="POST" role="form">
				  			<div className="form-group">
				      			<label className="row" for="">Profile Image</label>
				      			<input type="text" className="form-control" id="" placeholder="img url goes here"/>
				    			</div>
				    			<button type="submit" className="btn btn-primary">Upload Photo</button>
				         		<div className="row">
				         		<input placeholder="Edit your Bio"></input>
				        		
				        		<button type="submit" className="btn btn-primary">Submit</button>
				        	</div>
				  		</form>
				  		<br/><br/>
				  	</div>

			</div>
			</div>

			)
	}
});