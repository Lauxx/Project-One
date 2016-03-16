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

var GoalBoxForm = React.createClass({
  getInitialState: function() {
    return {intention: '', startDate: '', endDate: '', taskList: ''};
  },

  handleIntentionChange: function(e) {
    this.setState({intention: e.target.value});
  },

  handleStartDateChange: function(e) {
    this.setState({startDate: e.target.value});
  },

  handleEndDateChange: function(e) {
    this.setState({endDate: e.target.value});
  },

  handleTaskListChange: function(e) {
    this.setState({taskList: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var intention = this.state.intention.trim();
    var startDate = this.state.startDate.trim();
    var endDate = this.state.endDate.trim();
    var taskList = this.state.taskList.trim();
    
      console.log(intention, startDate, endDate, taskList);

    if(!intention && !startDate && !taskList) {
      return;
    }
    this.props.ableToSubmit({intention: intention, startDate: startDate, endDate: endDate, taskList: taskList});
    this.setState({intention: '', startDate: '', endDate: '', taskList: ''})

  },

	render: function(){
		return(
			<div className="">
				<div className='container'>
					<legend>Goal</legend>
						<div className='row col-xs-6'>
				  		<form action="" method="POST" role="form" onSubmit={this.handleSubmit}>
				  			<div className="form-group">
				      			<label className="row" for="">Intention</label>
				      			<input type="text" className="form-control" id="" value={this.state.intention} 
                    onChange={this.handleIntentionChange} placeholder="Intention"/>
				    		</div>
				    		<div className="row">
				      			<p>Start Date</p>
				         		<input type="date" name="" id="input" className="form col-xs-3" value={this.state.startDate} 
                    onChange={this.handleStartDateChange} required="required" title=""/>
				         	</div>
				         	<div className='row'>
				         		<p>End Date</p>
				         		<input type="date" name="" id="input" className="form col-xs-3" value={this.state.endDate} 
                    onChange={this.handleEndDateChange} required="required" title=""/>
				         	</div>
				         	<br/>
				         	<div className="row">
				         		<input value={this.state.taskList} onChange={this.handleTaskListChange} placeholder="Enter your task here"></input>
				        		<button type="submit" className="btn btn-primary">Add Task</button><br/><br/>
				        		<button type="submit" className="btn btn-primary" >Submit</button>
				        	</div>
				  		</form>
				  	</div>

			</div>
			</div>
			)
	}
});

module.exports = GoalBoxForm;