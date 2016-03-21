/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
      - CommentForm
    - GoalBoxForm
   

  - UserBioApp
    - UserBioDisplay
    - UserBioForm
 */
var React = require('react');

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
		
		this.props.ableToUpdateBio({ profileImage: profileImage, bio: bio });
		this.setState({ profileImage: '', bio: ''})
	},


	render: function(){
		return(
				<div>
				<div className='container'>
					
						<div className='row col-xs-4 col-lg-offset-4'>
						<legend>Update User Bio</legend>
				  		<form action="" onSubmit={ this.handleBioSubmit } method="" role="form">
				  			<div className="form-group">
				      			<label className="row" htmlFor="">Profile Image</label>
				      			<input type="text" className="form-control col-xs-4" id="" 
				      			value={ this.state.profileImage } onChange={ this.handlePhotoChange }
				      			placeholder="img url goes here"/>
				    			</div>
				    			
				         	

				         		<div className='form-group'>
				         		<p>Bio Update</p>
				         		<input type="text" name="" id="input" className="form-control col-xs-4" value={this.state.bio} 
                    			onChange={this.handleBioChange} placeholder="update your bio here" title=""/>
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

module.exports = UserBioForm;