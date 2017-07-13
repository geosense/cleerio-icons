<!DOCTYPE HTML>
<html>
  <head>
    <title>Cleerio Icons - SVG Demo File</title>
    <style type="text/css">
    body {
      text-align: center;
    }
    .sprite {
      padding: 5px 10px;
      border: 1px solid #ccc;
      display: inline-block;
      width: 120px;
      height: 80px;
      text-align: center;
      text-decoration: none;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 0 2px;
    }
    .sprite img {
      margin: 10px auto;
      display: block;
      height: 30px;
    }
    h2 {
      clear: both;
      margin-top: 0;
      padding-top: 40px;
    }
    h1+h2 {
      padding-top: 0;
    }
    </style>
  </head>

  <body>

    <h1>Cleerio Icons - SVG Demo File</h1>

    <?php

    function print_svg_sprites($svg_file) {
      foreach($svg_file->defs->font->glyph  as $a) {
          $glyph_name = $a->attributes()->{'glyph-name'};
          if($glyph_name) {
            echo "<a href='svg/$glyph_name.svg' title='$glyph_name' class='sprite'><img src='svg/$glyph_name.svg'/>$glyph_name</a>";
          }
      }
    }

    echo '<h2>Cleerio MA Icons</h2>';
    $MA_svg = simplexml_load_file("fonts/cleerio-icons.svg");
    print_svg_sprites($MA_svg);

    echo '<h2>Cleerio MoA Icons</h2>';
    $MoA_svg = simplexml_load_file("moa/Cleerio-MoA-Icons.svg");
    print_svg_sprites($MoA_svg);

    echo '<h2>All Cleerio Icons</h2>';
    $folder_path = 'svg/';
    $num_files = glob($folder_path . "*.{svg}", GLOB_BRACE);
    $folder = opendir($folder_path);

    if($num_files > 0) {
     while(false !== ($file = readdir($folder))) {
      $file_path = $folder_path.$file;
      $extension = strtolower(pathinfo($file ,PATHINFO_EXTENSION));

      if($extension=='svg' AND $file != 'icon-mustr.svg') {
        echo "<a href='$file_path' title='$file' class='sprite'><img src='$file_path' height='50'/>$file</a>";
      }
     }
    }
    closedir($folder);
    ?>

  </body>
</html>