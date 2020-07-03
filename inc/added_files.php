<?php
//header file
wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/asset/css/bootstrap.min.css');
wp_enqueue_style( 'rtl-bootstrap', get_template_directory_uri() . '/asset/css/rtl/bootstrap.min.css');
wp_enqueue_style( 'style', get_stylesheet_uri() );




//footer file
wp_enqueue_script( 'jQuery', get_template_directory_uri() . '/asset/js/jquery-3.4.1.min.js',array(),'', true);
wp_enqueue_script( 'bootstrapjs', get_template_directory_uri() . '/asset/js/bootstrap.min.js',array(),'', true);
wp_enqueue_script( 'owl', get_template_directory_uri() . '/asset/js/owl.carousel.min.js',array(),'', true);
wp_enqueue_script( 'script', get_template_directory_uri() . '/asset/js/script.js',array(),'', true);