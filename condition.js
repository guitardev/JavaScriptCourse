let pwd = '1234567';
if(pwd===''){
    console.log('ต้องกรอกรหัสผ่านด้วยครับ')
} 
else if (pwd.length >= 8 && pwd.length <= 12){
    console.log('password ถูกต้อง')
}else{
    console.log('password is ไม่ถูกต้อง');
}