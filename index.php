<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Current & Velocity</title>
  </head>
  <body bgcolor="ivory">
    <!-- 전체 -->
    <div class="wrap" id="wrap" align="center">

      <!-- 상단 메뉴탭 -->
      <div class="wrap-top" id="wrap-top">
        <table id="wrap-top-table" align="center">
          <tbody>
            <tr>
              <!-- 로고 -->
              <td><img src="./img/cnv_main_logo.jpg" onclick="location.href='index.php'" style="width:200px;"></td>
              <!-- 메뉴버튼 -->
              <td valign="bottom" align="right">
                <div class="wt-right">
                  <small style="padding:20px;">
                    경기도 성남시 분당구 구미동 165번지 포스빌 523호<br>
                    Tel : (031) 782 - 9165/6     Fax : (031) 782 - 9167<br>

                  </small>
                  <table>
                    <tr>
                      <td><input type="button" class="wtButton" value="회사소개" onclick="location.href='./intro.php'"></td>
                      <td><input type="button" class="wtButton" value="제품소개" onclick="location.href='./product.php'"></td>
                      <td><input type="button" class="wtButton" value="카탈로그" onclick="location.href='./cat.php'"></td>
                      <td><input type="button" class="wtButton" value="온라인견적" onclick="location.href='./help.php'"></td>
                    </tr>
                  </table>
            </tr>
          </tbody>
        </table>
      </div>


      <!-- 중단 내용 -->
      <div class="wrap-middle" id="wrap-middle">
        <img src="./img/main-img.png" style="padding-top:20px">

        <table cellspacing="20" name="product_table">
          <tbody>
            <tr>
              <td align="center" colspan="4">
                Products
              </td>
            </tr>
            <tr>
              <td><img src="./img/1.png"></td>
              <td><img src="./img/2.png"></td>
              <td><img src="./img/1.png"></td>
              <td><img src="./img/2.png"></td>
            </tr>
            <tr>
              <td><img src="./img/2.png"></td>
              <td><img src="./img/1.png"></td>
              <td><img src="./img/2.png"></td>
              <td><img src="./img/1.png"></td>
            </tr>

          </tbody>
        </table>
      </div>


      <!-- 하단 내용 -->
      <div class="wrap-bottom" id="wrap-bottom">

          <font size="2">
            Copyright (c) 2006 C & V Corporation All Rights Reserved
          </font>

      </div>
    </div>
  </body>
</html>
<style>
html,body { height: 100%; margin: 0; padding: 0; }
.wtButton{
  margin-left:20px;
}
.wrap-bottom{
  margin-top: 20px;
  position: dynamic;
  bottom:0;
  width: 100%;
}
.product_table.img{
  width:100px;
  height:auto;
}
</style>
