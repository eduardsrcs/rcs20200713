<?php

function ddv($arr, $die = true, $json = false) {
  if($json) {
    echo (json_encode($arr));
  }
  else {
    echo '<pre>' . print_r($arr, true) . '</pre>';
  }
  if($die) die();
}