<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Current & Velocity</title>
</head>

<link rel="stylesheet" type="text/css" href="../style/style.css">
<script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
<?php include "../topmenu/topmenu.php" ?>
<body bgcolor="ivory">
<!-- 전체 -->
<div class="wrap" id="wrap" align="center">

    <!-- 상단 메뉴탭 -->
    <div class="wrap_top" id="wrap_top">
        <table id="wrap_top_table" align="center">
            <tbody>
            <tr>
                <!-- 로고 -->
                <td><img src="../img/cnv_main_logo.jpg" onclick="location.href='../index.php'" style="width:200px;"></td>
                <!-- 메뉴버튼 -->
                <td valign="bottom" align="right">
                    <div class="wt_right">
                        <small style="padding:20px;">
                            경기도 성남시 분당구 구미동 165번지 포스빌 523호<br>
                            Tel : (031) 782 - 9165/6     Fax : (031) 782 - 9167<br>

                        </small>
                        <table>
                            <tr>
                                <td><input type="button" class="wtButton" value="회사소개" onclick="location.href='./intro.php'"></td>
                                <td><input type="button" class="wtButton" value="제품소개" onclick="location.href='./product.php'"></td>
                                <td><input type="button" class="wtButton" value="카탈로그" onclick="location.href='catalog.php'"></td>
                                <td><input type="button" class="wtButton" value="온라인견적" onclick="location.href='./help.php'"></td>
                            </tr>
                        </table>
            </tr>
            </tbody>
        </table>
    </div>


    <!-- 중단 내용 -->
    <div class="wrap_middle" id="wrap_middle">
        <table cellspacing="20" name="product_table">
            <tbody>
            <tr>
                <td align="center" colspan="4">
                    <img src="../img/bar/icon_arrow_blue.gif">&nbsp;<a href="../productdetail/current.php">유속계</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="/productdetail/currentinfo.php?idx=27"><img src="/img/product/VO1000.JPG" width="140" height="123">
                </td>
                <td>
                    <a href="/productdetail/currentinfo.php?idx=15"><img src="/img/product/LP1100.JPG" width="140" height="123">
                </td>
            </tr>

            </tbody>
        </table>
        <table cellspacing="20" name="product_table">
            <tbody>
            <tr>
                <td align="center" colspan="4">
                    <img src="../img/bar/icon_arrow_blue.gif">&nbsp;<a href="../productdetail/current.php">파고계</a>
                </td>
            </tr>
            <tr>
                <td><img src="../img/product/2.png" width="140" height="123"></td>
                <td><img src="../img/product/2.png" width="140" height="123"></td>
            </tr>

            </tbody>
        </table>

    </div>



    <!-- 하단 내용 -->
    <div class="wrap_bottom" id="wrap_bottom">

        <font size="2">
            Copyright (c) 2006 C & V Corporation All Rights Reserved
        </font>

    </div>
</div>
</body>
</html>