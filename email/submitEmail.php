<?php
header("Content-Type: text/html; charset=UTF-8");

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['tel']));
$message = strip_tags(htmlspecialchars($_POST['inquiry']));
$company = strip_tags(htmlspecialchars($_POST['company']));
$fax = strip_tags(htmlspecialchars($_POST['fax']));
$product = strip_tags(htmlspecialchars($_POST['product']));
$responseTel= strip_tags(htmlspecialchars($_POST['responseTel']));
$responseFax = strip_tags(htmlspecialchars($_POST['responseFax']));
$responseEmail = strip_tags(htmlspecialchars($_POST['responseEmail']));

// 이메일을 생성하고 메일을 전송하는 부분
$to = 'kedric.me@gmail.com'; // 받는 측의 이메일 주소를 기입하는 부분
$email_subject = "$name 님으로부터 견적문의"; // 메일 제목에 해당하는 부분
$email_body = "'$name' 님으로부터 견적문의 메일입니다.\n\n".
    "세부정보는 다음과 같습니다.\n\n
    필수사항. \n
    담당자: $name\n
    이메일: $email_address\n
    전화 번호: $phone\n
    문의 내용: $message\n\n\n
    ".
    "선택사항.\n
    회사 : $company\n
    팩스 : $fax\n
    문의제품 : $product\n
    회신방법 : 전화 - $responseTel, 팩스 - $responseFax, 이메일 - $responseEmail";
$headers = "Reply-To: $email_address\r"; // 답장 주소

mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers);
echo "<script>
    alert(\"메일이 정상 발송되었습니다.\");
    location.href=\"../index.php\";
    </script>";
?>