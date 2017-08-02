<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<#include "/common/script.ftl">
<#include "/common/nav.ftl">
<script src="/underscore/collections.js" type="text/javascript"></script>

<div class="container theme-showcase" role="main">
    <div class="row">
        <button type="button" class="btn btn-lg btn-default" onclick="each()">each</button>
        <button type="button" class="btn btn-lg btn-default" onclick="map()">map</button>
        <button type="button" class="btn btn-lg btn-default" onclick="reduce()">reduce</button>
        <button type="button" class="btn btn-lg btn-default" onclick="reduceRight()">reduceRight</button>
        <button type="button" class="btn btn-lg btn-default" onclick="find()">find</button>
        <button type="button" class="btn btn-lg btn-default" onclick="filter()">filter</button>
        <button type="button" class="btn btn-lg btn-default" onclick="whaere()">whaere</button>
        <button type="button" class="btn btn-lg btn-default" onclick="findWhere()">findWhere</button>
        <button type="button" class="btn btn-lg btn-default" onclick="reject()">reject</button>
        <button type="button" class="btn btn-lg btn-default" onclick="every()">every</button>
        <button type="button" class="btn btn-lg btn-default" onclick="some()">some</button>
        <button type="button" class="btn btn-lg btn-default" onclick="contain()">contains</button>
        <button type="button" class="btn btn-lg btn-default" onclick="invoke()">invoke</button>
        <button type="button" class="btn btn-lg btn-default" onclick="plucke()">pluck</button>
        <button type="button" class="btn btn-lg btn-default" onclick="max()">max</button>
        <button type="button" class="btn btn-lg btn-default" onclick="min()">min</button>
        <button type="button" class="btn btn-lg btn-default" onclick="sortBy()">sortBy</button>
        <button type="button" class="btn btn-lg btn-default" onclick="groupBy()">groupBy</button>
        <button type="button" class="btn btn-lg btn-default" onclick="indexBy()">indexBy</button>
        <button type="button" class="btn btn-lg btn-default" onclick="countBy()">countBy</button>
        <button type="button" class="btn btn-lg btn-default" onclick="shuffle()">shuffle</button>
        <button type="button" class="btn btn-lg btn-default" onclick="sample()">sample</button>
        <button type="button" class="btn btn-lg btn-default" onclick="toArray()">toArray</button>
        <button type="button" class="btn btn-lg btn-default" onclick="size()">size</button>
        <button type="button" class="btn btn-lg btn-default" onclick="partition()">partition</button>
    </div>
</div>
</body>
</html>