document.querySelector('.Rct30 button').addEventListener('click', function(e) {
  e.preventDefault(); 

  let roomNumber = document.getElementById('roomNumber').value.trim();
  let password = document.getElementById('password').value.trim();
  let userID = document.getElementById('userID').value.trim();

  if (roomNumber === '' || password === '' || userID === '') {
    alert('호실, 비밀번호, 아이디를 모두 입력하세요.');
    if (roomNumber === '') {
      document.getElementById('roomNumber').style.borderColor = 'red';
    } else {
      document.getElementById('roomNumber').style.borderColor = '';
    }
    if (password === '') {
      document.getElementById('password').style.borderColor = 'red';
    } else {
      document.getElementById('password').style.borderColor = '';
    }
    if (userID === '') {
      document.getElementById('userID').style.borderColor = 'red';
    } else {
      document.getElementById('userID').style.borderColor = '';
    }
  } else if (!(roomNumber >= 301 && roomNumber <= 320)) {
    alert('호실은 301부터 320 사이의 숫자만 입력하세요.');
    document.getElementById('roomNumber').style.borderColor = 'red'; 
    document.getElementById('password').style.borderColor = ''; 
    document.getElementById('userID').style.borderColor = '';
  } else {
    alert('로그인 성공!');
    window.location.href = 'mainscreen.html';
  }
});
