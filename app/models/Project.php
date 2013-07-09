<?php

class Project extends Eloquent {

	public function slides()
	{
		return $this->hasMany('Slide')->orderBy('DisplayOrder');
	}

}

?>
