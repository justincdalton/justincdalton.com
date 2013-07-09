<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Justin C Dalton</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="{{ URL::to('css/main.css') }}" />

        <!-- LESS include for dev -->
        <!--<link rel="stylesheet/less" href="css/main.less">
        
        <script type="text/javascript">
            less = {
                env: "development", // or "production"
                async: true,       // load imports async
                fileAsync: true,   // load imports async when in a page under a file protocol
                poll: 1000,         // when in watch mode, time in ms between polls
                functions: {},      // user functions, keyed by name
                dumpLineNumbers: "comments", // or "mediaQuery" or "all"
                relativeUrls: false	// whether to adjust url's to be relative
                                    // if false, url's are already relative to the
                                    // entry less file
            };
        </script>
        <script src="js/vendor/less.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
    <div class="main">
        <div id="content" class="container">
            <header class="row">
                <nav class="span12">
                    <a id="contactNav" href="#contact">Contact</a>
                    <a id="homeNav" href="#home" class="title">Justin C Dalton</a>
                    <a id="projectsNav" href="#projects">Projects</a>
                </nav>
            </header>

            <div id="home" class="row hide page">
                <?php foreach($aboutContents as $aboutContent) { ?>
                    <div class="span3">
                        <div class="drip{{ rand(3,8) }} hidden-phone"></div>
                        <div class="content-box">
                            <a class="content-head" href="#">{{ $aboutContent->Title }}</a>
                            <p class="content-body">{{ $aboutContent->Content }}</p>
                        </div>
                    </div>
                <?php } ?>
                <div class="drip{{ rand(3,8) }} last-drip hidden-phone"></div>
            </div>

            <div id="contact" class="row hide page">
                <?php foreach($contactLinks as $contactLink) { ?>
                    <div class="span3">
                        <div class="drip{{ rand(3,8) }} hidden-phone"></div>
                        <div class="content-box">
                            <a class="content-head" href="{{ $contactLink->Url }}">{{ $contactLink->Text }}</a>		        			
                        </div>
                    </div>
                <?php } ?>
                <div class="drip{{ rand(3,8) }} last-drip hidden-phone"></div>
            </div>

            <div id="projects" class="row hide page"></div>
    </div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src={{ URL::to("js/vendor/jquery-1.9.1.min.js") }}><\/script>')</script>
    <script src="{{ URL::to('js/vendor/google-code-prettify/prettify.js') }}"></script>
    <script src="{{ URL::to('js/main.js') }}"></script>

    <script type="text/javascript">
        home.init();
    </script>
</body>
</html>
