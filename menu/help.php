<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Current & Velocity</title>
</head>

<link rel="stylesheet" type="text/css" href="../style/style.css">
<script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
<script>
    function submitCheck(frm){

            if (frm.name.value.length == 0) {
                alert('담당자를 넣어주십시오');

                frm.name.focus();
                return;
            }
            if (frm.email.value.length == 0) {
                alert("이메일을 입력해 주십시오");
                frm.email.focus();
                return false;
            }

            var blnReturn = false;

            emailEx1 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z]+/;
            emailEx2 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z]+/;
            emailEx3 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z]+/;

            if (emailEx1.test(frm.email.value)) blnReturn = true;
            if (emailEx2.test(frm.email.value)) blnReturn = true;
            if (emailEx3.test(frm.email.value)) blnReturn = true;
            if (!blnReturn) {
                alert("이메일을 정확히 입력해 주십시오");
                return;
            }
            if (frm.company.value.length == 0) {
                alert("회사명을 정확히 입력해 주십시오");
                return;
            }

            if (frm.tel.value.length == 0) {
                alert('전화번호를 넣어주십시오');
                frm.tel.focus();
                return;
            }
            if (frm.inquiry.value.length == 0) {
                alert('글내용을 넣어주십시오');
                frm.inquiry.focus();
                return;
            }

        frm.submit();
    }
</script>

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
        <table>
            <tr><td>
                    <div id="mf_wrapper">
                        <div id="mf_header">
                            <h1>온라인견적</h1>
                            <h2>문의나 상담하실 내용이 있으시면 게시판이나 온라인 제품 견적을 활용하여 주십시요.<br>
                                최대한 빨리 처리하도록 하겠습니다.<br>
                                상담을 원하시는 분은 담당자, 상호, 연락처를 필히 남겨 주시기 바랍니다.</h2>
                        </div>
                        <form id="form" method="post" action="../email/submitEmail.php">
                            <table border="0" cellspacing="0" cellpadding="0" class="mailform">
                                <tr>
                                    <th>담당자<span>*</span><p>your name</p></th>
                                    <td><input type="text" name="name" size="30" autocomplete="off" /></td>
                                </tr>
                                <tr>
                                    <th>이메일 주소<span>*</span><p>e-mail address</p></th>
                                    <td><input type="text" name="email" size="40" maxlength="50" class="mf" autocomplete="off" /></td>
                                </tr>
                                <tr>
                                    <th>회사<span>*</span><p>your company</p></th>
                                    <td><input type="text" name="company" size="40" autocomplete="off" /></td>
                                </tr>

                                <tr>
                                    <th>전화 번호<span>*</span><p>tel</p></th>
                                    <td><input type="text" name="tel" size="15" autocomplete="off" /></td>
                                </tr>
                                <tr>
                                    <th>팩스 번호<p>fax</p></th>
                                    <td><input type="text" name="fax" size="15" autocomplete="off" /></td>
                                </tr>
                                <tr>
                                    <th>문의 제품<p>product</p></th>
                                    <td><input type="text" name="product" size="10" autocomplete="off" /></td>
                                </tr>
                                <tr>
                                    <th>회신 방법<span>*</span><p>response</p></th>
                                    <td>
                                        <input type="checkbox" name="responseTel" /> 전화
                                        <input type="checkbox" name="responseFax" /> 팩스
                                        <input type="checkbox" name="responseEmail" checked/> 이메일 - 원하시는 회신방법을 선택해주세요.
                                    </td>
                                </tr>
                                <tr>
                                    <th>내용<span>*</span><p>inquiry body</p></th>
                                    <td><textarea name="inquiry" rows="10" cols="70" autocomplete="off" ></textarea></td>
                                </tr>
                                <tr>
                                    <th>문의하기</th>
                                    <td><input type="button" value="견적문의" onclick="submitCheck(this.form)"/> <input type="reset" name="reset" value="다시쓰기" /></td>
                                </tr>
                            </table>
                        </form>
                        <link rel="stylesheet" href="mailform/mailform.css" type="text/css">
                        <script type="text/javascript" src="mailform/mailform.js" charset="utf-8"></script>
                    </div>
                </td></tr>
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

<style>
    div#mf_wrapper {
        width: 640px;
        text-align: left;
        margin: 0px auto 0px auto;
        font-family: sans-serif;
    }
    div#mf_header h1 {
        font-size: 24px;
        border-bottom: solid 1px #999999;
        margin: 0px;
        padding: 0px;
    }
    div#mf_header h2 {
        font-size: 12px;
        color: #999999;
        font-weight: normal;
        margin: 0px;
        padding: 0px;
    }
    form#mailform {
        padding: 5px;
    }
    table.mailform {
        width: 100%;
    }
    table.mailform tr th,table.mailform tr td {
        text-align: left;
        font-weight: normal;
        font-size: 12px;
        border-bottom: solid 1px #999999;
        padding: 7px 5px 7px 5px;
    }
    table.mailform tr th {
        width: 150px;
    }
    table.mailform tr th span {
        color: #CC0000;
        font-size: 10px;
    }
    table.mailform tr th p {
        margin: 0px;
        padding: 0px;
        font-size: 10px;
        color: #999999;
    }
    table.mailform tr td textarea {
        width: 100%;
        height: 120px;
    }
</style>