<!-- loop through projects -->
<div class="span12">
<?php foreach($projects as $project) { ?>
    <div class="row">
    	<div class="span5">
	    	<div id="slideshow{{ $project->id }}">
	    		<?php foreach($project->slides as $slide) { ?>
	    			<img src="{{ asset('img/slideshows/' . $slide->Image) }}" alt="" data-description="{{ $slide->Caption }}" />
    				<div class="carousel-caption"><p>{{ $slide->Caption }}</p></div>
	    		<?php } ?>
		    	<a class="carousel-control left" href="#slideshow{{ $project->id }}" data-slide="prev">&lsaquo;</a>
				<a class="carousel-control right" href="#slideshow{{ $project->id }}" data-slide="next">&rsaquo;</a>
	    	</div>
	    </div>

	    <div class="span6 offset1">
	    	<h4>{{ $project->Title }}</h4>
	    	{{ $project->Description }}

	    	<a href="{{ $project->LinkUrl }}">{{ $project->LinkText }}</a>
	    </div>
    </div>
<?php } ?>
</div>

<script src="{{ asset('js/vendor/galleria/galleria-1.2.9.js') }}"></script>

<script type="text/javascript">
	Galleria.loadTheme('{{ asset("js/vendor/galleria/themes/classic/galleria.classic.min.js") }}');
	projects.init();
</script>
