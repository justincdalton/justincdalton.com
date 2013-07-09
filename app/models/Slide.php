<?php

class Slide extends Eloquent {

	public function project()
	{
		return $this->belongsTo('Project');
	}

}

?>
