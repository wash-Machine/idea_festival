const washMachines = document.querySelectorAll('.washmachine');
const washMachineStatus = new Map();

washMachines.forEach(machine => {
  washMachineStatus.set(machine.id, {
    inUse: false,
    roomNumber: ''
  });
});

function useWashMachine(event) {
  const selectedWashMachine = event.target;

  if (!selectedWashMachine.classList.contains('washmachine')) return;

  const machineId = selectedWashMachine.id;

  const confirmation = confirm('명찰을 등록하시겠습니까?');

  if (confirmation) {
    if (washMachineStatus.get(machineId).inUse) {
      alert('이미 세탁기를 사용 중입니다.');
      return;
    }

    let roomNumber = document.getElementById('displayRoomNumber').textContent;

    const currentMachineInUse = Array.from(washMachineStatus.values()).find(machine => machine.inUse && machine.roomNumber === roomNumber);

    if (currentMachineInUse) {
      alert(`"${roomNumber}"는 이미 세탁기 사용 중입니다.`);
      return;
    }

    washMachineStatus.get(machineId).inUse = true;
    washMachineStatus.get(machineId).roomNumber = roomNumber;

    selectedWashMachine.src = 'svg/세탁중사진.svg';

    // 호실 명찰 생성 및 표시
    const roomDisplay = createRoomDisplay(roomNumber, selectedWashMachine);

    setTimeout(() => {
      washMachineStatus.get(machineId).inUse = false;
      selectedWashMachine.src = 'svg/세탁기사진.svg';
      alert('세탁이 끝났습니다.');

      // 세탁이 끝나면 방번호 표시를 삭제합니다.
      roomDisplay.remove();
    }, 30000);
  }
}

function createRoomDisplay(roomNumber, selectedWashMachine) {
  const roomDisplay = document.createElement('div');
  roomDisplay.textContent = roomNumber;
  roomDisplay.classList.add('room-number-display');

  roomDisplay.style.position = 'absolute';
  roomDisplay.style.color = 'black';
  roomDisplay.style.fontWeight = 'bold';
  roomDisplay.style.fontSize = '1.3rem';

  // 세탁기 이미지의 위치 및 크기 정보 가져오기
  const machineRect = selectedWashMachine.getBoundingClientRect();
  const machineWidth = machineRect.width;
  const machineHeight = machineRect.height;

  // 호실 번호를 세탁기 이미지 중앙 위에 표시하기 위한 위치 계산
  const roomDisplayWidth = roomDisplay.offsetWidth;
  const roomDisplayHeight = roomDisplay.offsetHeight;

  // 호실 번호가 세탁기 이미지 중앙 위에 오도록 left 및 top 값을 조정합니다.
  const leftOffset = -28; // left 값을 조정할 경우에 사용할 오프셋
  const topOffset = -80; // top 값을 조정할 경우에 사용할 오프셋

  const machineCenterX = machineRect.left + machineWidth / 2 - roomDisplayWidth / 2 + leftOffset;
  const machineTop = machineRect.top - roomDisplayHeight - topOffset;

  roomDisplay.style.left = `${machineCenterX}px`;
  roomDisplay.style.top = `${machineTop}px`;

  selectedWashMachine.parentElement.appendChild(roomDisplay);

  return roomDisplay;
}



washMachines.forEach(machine => {
  machine.addEventListener('click', useWashMachine);
});
