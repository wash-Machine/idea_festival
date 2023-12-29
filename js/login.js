document.querySelector('.Rct30 button').addEventListener('click', function(e) {
  e.preventDefault(); 

  let roomNumber = document.getElementById('roomNumber').value.trim();
  let password = document.getElementById('password').value.trim();
  let userID = document.getElementById('userID').value.trim();
  let name = document.getElementById('name').value.trim(); // Adding the name field

  if (roomNumber === '' || password === '' || userID === '' || name === '') {
    alert('아이디, 비밀번호, 이름, 호실을 모두 입력하세요.');

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

    if (name === '') {
      document.getElementById('name').style.borderColor = 'red';
    } else {
      document.getElementById('name').style.borderColor = '';
    }

  } else if (!(roomNumber >= 301 && roomNumber <= 320)) {
    alert('호실은 301부터 320 사이의 숫자만 입력하세요.');
    document.getElementById('roomNumber').style.borderColor = 'red'; 
    document.getElementById('password').style.borderColor = ''; 
    document.getElementById('userID').style.borderColor = '';
    document.getElementById('name').style.borderColor = '';
  } else {
    alert('로그인 성공!');

// 여기서 roomNumber와 name 변수는 어디서 가져오는지 명확하게 해야 합니다.
// roomNumber와 name 변수가 이미 존재한다고 가정합니다.

// 방 번호와 이름을 이용한 리다이렉트 함수
function redirectWithRoomNumberAndName(roomNumber, name) {
    window.location.href = `mainscreen.html?roomNumber=${roomNumber}&name=${encodeURIComponent(name)}`;
}

// 방 번호가 있는 경우 방 번호와 이름을 이용한 리다이렉트 실행
if (roomNumber) {
    redirectWithRoomNumberAndName(roomNumber, name);
} else {
    // 방 번호가 없는 경우에 대한 기본 리다이렉트(이름만 사용)
    redirectWithName(name);
}

// 이름을 이용한 리다이렉트 함수
function redirectWithName(name) {
    window.location.href = `mainscreen.html?name=${encodeURIComponent(name)}`;
}
}

  }
);
