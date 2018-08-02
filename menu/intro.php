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
        <table border=0 width="50%" class="introTable">
            <tr><th colspan="2" bgcolor="#0000ff" height="30px"><font color="#ffffff">회사소개</font></th></tr>
            <tr><td>회사명</td><td>씨앤브이 (Cureent and Velocity)</td></tr>
            <tr><td>대표명</td><td>김태환</td></tr>
            <tr><td>설립일</td><td>2006년 4월 25일</td></tr>
            <tr><td>회사 주소</td><td>경기도 성남시 분당구 구미동 165 분당 포스빌 523호</td></tr>
            <tr><td>주력 사업</td><td>각종 해양/환경 관련 분석 및 측정기기 판매</td></tr>
            <tr><td>연락처</td><td>전화 : 031 - 782 - 9165/6<br>
                    팩스 : 031 - 782 - 9167<br>
                    Homepage : www.candv.co.kr    <br>  E-Mail : thkim@candv.co.kr</td></tr>
            <tr><td>찾아 오시는 길</td><td rowspan="10"align="center"><img src="../img/map.png" border="0"></td></tr>
        </table>
        <style>

            .introTable tr td{
                border-bottom: 1px solid #ddd;
                padding : 10px;
                text-align:center;
            }
        </style>

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
<style>
div#mf_header h1 {
font-size: 24px;
border-bottom: solid 1px #999999;
margin: 0px;
padding: 0px;
}
</style>