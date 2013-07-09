<?php

class Slideshow extends Eloquent {

	public function project()
	{
		return $this->belongsTo('Project');
	}	

	public function slides()
	{
		return $this->hasMany('Slide');
	}
	
}

?>
