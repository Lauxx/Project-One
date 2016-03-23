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
    console.log(body, 'this is the comment');
    if(!body){
      return;
    }
    this.props.handleCommentFormSubmit({ body: body }, this.props.id );
    this.setState({body: ''});
  },

	render: function(){
		return(

			<div className="container">
			 <div className="row col-lg-8 col-lg-offset-4">
        <form action='' method='POST' onSubmit={ this.handleComment } role='form' >
			     <textarea className="form" rows="6" columns="3" value={ this.state.body } onChange={ this.handleBodyChange } 
           placeholder='Add comments here!' id="comment"></textarea><br/>
            <button type='submit' className="legend button-color">Submit Comment</button>
         </form>   
        </div>
      </div>
			)
	}
});

module.exports = CommentForm;