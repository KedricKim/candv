<!DOCTYPE html>
<html>
<head>
    <meta charset="utf8">
    <title>Current & Velocity</title>
</head>

<link rel="stylesheet" type="text/css" href="../style/style.css">
<script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
<?php include "../topmenu/topmenu.php" ?>
<?php
$conn = mysqli_connect(
    '127.0.0.1',
    'cnv',
    '1234',
    'cnv');
mysqli_set_charset($conn, 'utf8');
$sql = "SELECT * FROM product_info";
$result = mysqli_query($conn, $sql);
?>
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
                <td valign="bottom" align="right" style="font-size: 16px;">
                    <div class="wt_right">
                        <small style="padding:20px;">
                            경기도 성남시 분당구 구미동 165번지 포스빌 523호<br>
                            Tel : (031) 782 - 9165/6     Fax : (031) 782 - 9167<br>

                        </small>
                        <table>
                            <tr>
                                <td><input type="button" class="wtButton" value="회사소개" onclick="location.href='../menu/intro.php'"></td>
                                <td><input type="button" class="wtButton" value="제품소개" onclick="location.href='../menu/product.php'"></td>
                                <td><input type="button" class="wtButton" value="카탈로그" onclick="location.href='../menu/catalog.php'"></td>
                                <td><input type="button" class="wtButton" value="온라인견적" onclick="location.href='../menu/help.php'"></td>
                            </tr>
                        </table>
            </tr>
            </tbody>

        </table>
    </div>

    <div class="wrap_middle" id="wrap_middle">

        <?php
            $idx = $_GET['idx'];
        while($row = mysqli_fetch_array($result)) {
            if($row['idx']==$idx){

            ?>

            <!-- 중앙 내용 시작 -->
            <table border="0" cellpadding="0" cellspacing="0" width="645">
                <tbody>

                <tr>
                    <td>

                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tbody><tr>
                                <td>
                                    <!-- 상품 이미지 넣기 시작 -->
                                    <table border="0" cellpadding="0" cellspacing="0" width="645" height="240">
                                        <tbody><tr>
                                            <td width="200" height="240">
                                                <table border="0" cellpadding="0" cellspacing="0" width="200" height="240">
                                                    <tbody>
                                                    <tr>
                                                        <td style="border-width: thin; border-style: solid;">
                                                            <p style="margin:5px;"><img src="/img/product/<?php echo $row["product_name"] ?>.JPG" align="middle" width="200" height="240" border="0" vspace="0" hspace="0"></p>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </td>
                                            <td width="445" height="240" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" width="420" height="240" align="center">
                                                    <tbody><tr>
                                                        <td width="420" height="30" background="/img/bar/bar_detail_product.gif" align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="420" height="30">
                                                                <tbody><tr>
                                                                    <td width="420" height="30">
                                                                        <p style="margin-top: 8px;margin-bottom: 8px;">
                                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><?php echo $row['name'];?></b>
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                </tbody></table>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td width="420" height="210" style="border-width:thin; border-style:solid;" valign="top">
                                                            <p>
                                                            </p>
                                                            <p style="margin:20px;"><font face="굴림" size="2"><?php echo nl2br($row['config']);?></font></p>
                                                        </td>

                                                    </tr>
                                                    </tbody></table>
                                            </td>
                                        </tr>
                                        </tbody></table>
                                    <!-- 상품 이미지 넣기 끝 -->
                                </td>
                            </tr>
                            <tr align="center">
                                <td width="645">

                                    <table border="0" cellpadding="0" cellspacing="0" width="640">
                                        <tbody>
                                            <td width="640" height="30">
                                                <p align="left">
                                                    <a name="a"><img src="/img/bar/bar_product_detail_01.gif" align="middle" width="640" height="30" border="0" vspace="0" hspace="0"></a>
                                                </p>
                                            </td>
                                        </tr>

                                        <tr align="center">
                                            <td width="640">
                                                <table border="0" cellpadding="0" cellspacing="0" width="640">
                                                    <tbody><tr>
                                                        <td width="640" style="border-width: thin; border-style:solid;">
                                                            <p style="margin:20px;"><font face="굴림" size="2"><?php echo nl2br($row['explanation']);?></font></p>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </td>
                                        </tr>

                                        </tbody></table>

                                    <table border="0" cellpadding="0" cellspacing="0" width="640">
                                        <tbody>
                                        <tr>
                                            <td width="640" height="30">
                                                <p align="left">
                                                    <a name="b"><img src="/img/bar/bar_product_detail_02.gif" align="middle" width="640" height="30" border="0" vspace="0" hspace="0"></a>
                                                </p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="640" style="border-width:thin;  border-style:solid;">
                                                <p style="margin:20px;">
                                                    <img src="/img/product/<?php echo $row["product_name"] ?>.png" width="600">
                                                </p>
                                            </td>

                                        </tr>
                                        </tbody></table>

                                </td>
                            </tr>
                            </tbody></table>

                    </td>
                </tr>
                </tbody></table>
            <?php
            }
        }
        ?>
          <p style="padding-bottom:50px;">
              <input type="button" id="hisBack" class="btnBottom" value="뒤로가기" onclick="history.back()">
              <input type="button" id="goCurrent" class="btnBottom" value="유속계" onclick="location.href='/productdetail/current.php'">
              <input type="button" id="goVelocity" class="btnBottom" value="파고계" onclick="history.back()">
          </p>



    </div>

    <div class="wrap_bottom" id="wrap_bottom">

        <font size="2">
            Copyright (c) 2006 C & V Corporation All Rights Reserved
        </font>

    </div>
</div>
</body>
</html>

<style>
    TD
    {
        FONT-SIZE: 9pt;
        COLOR: #000000;
        FONT-FAMILY: 굴림

</style>