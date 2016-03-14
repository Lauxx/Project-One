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
	getInitialState: function(){
		return {profileImage: '', bio: ''};
	},

	handlePhotoChange: function(e){
		this.setState({ profileImage: e.target.value});
	},

	handleBioChange: function(e){
		this.setState({ bio: e.target.value});
	},

	handleBioSubmit: function(e){
		console.log("handleBioSubmit being called");
		e.preventDefault();
		var profileImage = this.state.profileImage.trim();
		var bio = this.state.bio.trim();

		console.log(profileImage, bio);
		if (!bio){
			return;
		}
		this.props.ableToUpdateBio({ profileImage: profileImage, bio: bio });
		this.setState({ profileImage: '', bio: ''})
	},


	render: function(){
		return(
				<div className="">
				<div className='container'>
					<legend>Update User Bio</legend>
						<div className='row col-xs-6'>
				  		<form action="" onSubmit={ this.handleBioSubmit } method="" role="form">
				  			<div className="form-group">
				      			<label className="row" htmlFor="">Profile Image</label>
				      			<input type="text" className="form-control" id="" 
				      			value={ this.state.profileImage } onChange={ this.handlePhotoChange }
				      			placeholder="img url goes here"/>
				    			</div>
				    			
				         	

				         		<div className='row'>
				         		<p>Bio Update</p>
				         		<input type="text" name="" id="input" className="form col-xs-3" value={this.state.bio} 
                    			onChange={this.handleBioChange} required="required" title=""/>
				         	</div>


				        		<button type="submit" className="btn btn-primary">Submit</button>
				     
				  		</form>
				  		<br/><br/>
				  	</div>

			</div>
			</div>

			)
	}
});