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

var CommentForm = React.createClass({
  getInitialState: function(){
    return {body: ''}
  },

  handleBodyChange: function(e){
    this.setState({body: e.target.value});
  },

  handleComment: function (e){
    e.preventDefault();
    var body = this.state.body.trim();
    console.log(body)
    if(!body){
      return;
    }
    this.props.ableToSubmitComment({body: body }, this.props.id );
    this.setState({body: ''});
  },

	render: function(){
		return(

			<div className="container">
			 <div className="row col-xs-4">
        <form onSubmit={ this.handleComment } role='form' >
			     <textarea className="form" rows="5" value={ this.state.body } onChange={ this.handleBodyChange } 
           placeholder='Add comments here!' id="comment"></textarea>
            <button>Submit Comment</button>
         </form>   
        </div>
      </div>
			)
	}
});

module.exports = CommentForm;