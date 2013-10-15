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

        <!-- <link rel="stylesheet" href="{{ URL::to('css/main.css') }}" /> -->

        <!-- LESS include for dev -->
        <link rel="stylesheet" href="css/main.css">
        
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
        <![endif]

        <!-- Add your site or application content here -->
        <header class="skyline">
            Justin C Dalton
        </header>
        <section id="skills">
            <div class="container hidden">
                <div class="row">
                    <div class="span10 offset2">
                        <h4>Who am I?</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="span3 offset1">
                        <h5 class="left">Web Developer</h5>
                        <ul>
                            <li>Javscript</li>
                            <li>jQuery</li>
                            <li>CSS3 / LESS</li>
                            <li>HTML5</li>
                            <li>MVC</li>
                            <li>C#</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    <div class="span4">
                        <canvas id="fragmentChart" height="400" width="400" data-type="Pie"></canvas> 
                    </div>
                    <div class="span4"></div>
                </div>
            </div>
        </section>


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
    <script src="{{ URL::to('js/vendor/Chart.js') }}"></script>
    <script src="{{ URL::to('js/vendor/jquery.inview.js') }}"></script>
    <script src="{{ URL::to('js/main.js') }}"></script>

    <script type="text/javascript">
        window.setTimeout(about.init, 1000);
    </script>
</body>
</html>
