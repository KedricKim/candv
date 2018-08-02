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
                <td><img src="../img/cnv_main_logo.jpg" onclick="location.href='../index.php'" style="width:200px;">
                </td>
                <!-- 메뉴버튼 -->
                <td valign="bottom" align="right">
                    <div class="wt_right">
                        <small style="padding:20px;">
                            경기도 성남시 분당구 구미동 165번지 포스빌 523호<br>
                            Tel : (031) 782 - 9165/6 Fax : (031) 782 - 9167<br>

                        </small>
                        <table>
                            <tr>
                                <td><input type="button" class="wtButton" value="회사소개"
                                           onclick="location.href='../menu/intro.php'"></td>
                                <td><input type="button" class="wtButton" value="제품소개"
                                           onclick="location.href='../menu/product.php'"></td>
                                <td><input type="button" class="wtButton" value="카탈로그"
                                           onclick="location.href='../menu/catalog.php'"></td>
                                <td><input type="button" class="wtButton" value="온라인견적"
                                           onclick="location.href='../menu/help.php'"></td>
                            </tr>
                        </table>
            </tr>
            </tbody>

        </table>
    </div>


    <!-- 중단 내용 -->
    <div class="wrap_middle" id="wrap_middle">
        <table cellspacing="0" bordercolordark="white" cellpadding="0" width="100%" border="0" align="center">
            <!-- 시작 -->
            <tr align="center">
                <td>
                    <table cellpadding="0" cellspacing="0" width="620" style="border-collapse:collapse;" border="0"
                           height="70">
                        <tr>
                            <td width="620" style="border-width:1; border-color:rgb(186,184,247); border-style:solid;"
                                height="70">
                                <p style="margin-right:5; margin-left:5;"><font color="#666666" face="돋움" size="2">&nbsp;C
                                        &amp; V에서는 계측계 측량계등 다양한 분야의 제품들을 소개 및 공급하고 있습니다. 세계 유수의 첨단 기기 제품들을 가장 저렴한 가격과
                                        차별화된 서비스 및 기술지원으로 C &amp; V의 독특한 고객만족 서비스를 제공받으실 수 있습니다.</font></p>
                            </td>
                        </tr>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="0" width="620">
                        <tr>
                            <td width="620" height="10" colspan="2">
                                <p align="center" style="line-height:1px;">&nbsp;</p>
                            </td>
                        </tr>
                        <tr align="center">
                            <td width="620">
                                <table style="border-collapse:collapse;" cellpadding="0" cellspacing="0" width="620"
                                       border="0">
                                    <tr>
                                        <td width="620" height="25"
                                            style="border-bottom-width:1px; border-bottom-color:rgb(186,184,247); border-bottom-style:solid;">
                                            <table cellpadding="0" cellspacing="0" width="620" height="25"
                                                   style="border-collapse:collapse;">
                                                <tr>
                                                    <td width="25" height="25"
                                                        style="border-top-width:1; border-left-width:1; border-top-color:rgb(186,184,247); border-left-color:rgb(186,184,247); border-top-style:solid; border-left-style:solid;">
                                                        <p><font face="굴림" size="2">&nbsp;</font></p>
                                                    </td>
                                                    <td width="10" height="25"
                                                        style="border-top-width:1; border-top-color:rgb(186,184,247); border-top-style:solid;">
                                                        <p><font face="굴림" size="2"><img
                                                                        src="/images/image/traingle.gif" align="middle"
                                                                        width="10" height="10" border="0" vspace="0"
                                                                        hspace="0"></font></p>
                                                    </td>
                                                    <td width="585" height="25"
                                                        style="border-top-width:1; border-right-width:1; border-top-color:rgb(186,184,247); border-right-color:rgb(186,184,247); border-top-style:solid; border-right-style:solid;">

                                                        <p><font face="굴림" size="2">&nbsp; OCEAN_RIVER (유속 측정 장치)</font>
                                                        </p>

                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!-- 상품 내용 시작 -->

                                <table border="0" cellpadding="0" cellspacing="0" width="620">

                                    <tr>
                                        <td width="620" height="5" colspan="8">
                                            <p></p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <?php
                                        $i = 0;
                                        while ($row = mysqli_fetch_array($result)) {
                                        ;
                                        ?>
                                        <td width="205" height="140" align=center>
                                            <table border="0" cellpadding="0" cellspacing="0" width="200" height="140"
                                                   align=center>
                                                <tr>

                                                    <td width="200" height="80">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="80"
                                                               height="80" align=center>
                                                            <tr>
                                                                <td width="80" height="80"
                                                                    style="border-width:1; border-color:rgb(186,184,247); border-style:solid;">
                                                                    <p align="center">
                                                                        <A href="./currentinfo.php?idx=<?php echo $row["idx"] ?>">
                                                                            <img src="/img/product/<?php echo $row["product_name"] ?>.JPG" align="middle" height="80" border="0" vspace="0" hspace="0" alt="<?php echo $row["product_name"] ?>">
                                                                        </a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td width="200" height="60">
                                                        <p style="margin-top:0; margin-bottom:0;" align="center">
                                                            <A href="./currentinfo.php?idx=<?php echo $row["idx"] ?>">
                                                                <font face="굴림">
                                                                    <span style="font-size:9pt;">
                                                                        <?php echo nl2br($row["name"]); ?>

                                                                    </span>
                                                                </font>
                                                            </A>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>

                                        <?php
                                        $i++;
                                        if (is_int($i / 5)){
                                        ?>
                                    </tr>
                                    <tr>
                                        <?php
                                        } else {
                                            ?>
                                            <td width="1" height="140">
                                                <p><img src="../img/bar/bar_main_line.jpg" align="middle" width="1"
                                                        height="140" border="0" vspace="0" hspace="0"></p>
                                            </td>
                                            <?php
                                        }
                                        }
                                        ?>
                                    </tr>


                                    <tr>
                                        <td width="620" height="5" colspan="8">
                                            <p></p>
                                        </td>
                                    </tr>

                                </table>

                                <!-- 상품 내용 끝 -->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <!-- 끝 -->
        </table>
        <p style="padding-bottom:50px;">
            <input type="button" id="hisBack" class="btnBottom" value="뒤로가기" onclick="history.back()">
            <input type="button" id="goCurrent" class="btnBottom" value="유속계" onclick="location.href='/productdetail/current.php'">
            <input type="button" id="goVelocity" class="btnBottom" value="파고계" onclick="history.back()">
        </p>

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
