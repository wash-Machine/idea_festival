const dryMachines = document.querySelectorAll('.drymachine');
const dryMachineStatus = new Map();

dryMachines.forEach(machine => {
  dryMachineStatus.set(machine.id, {
    inUse: false,
    roomNumber: ''
  });
});

function useDryMachine(event) {
  const selectedDryMachine = event.target;

  if (!selectedDryMachine.classList.contains('drymachine')) return;

  const machineId = selectedDryMachine.id;

  const confirmation = confirm('명찰을 등록하시겠습니까?');

  if (confirmation) {
    if (dryMachineStatus.get(machineId).inUse) {
      alert('이미 건조기를 사용 중입니다.');
      return;
    }

    let roomNumber = document.getElementById('displayRoomNumber').textContent;

    const currentMachineInUse = Array.from(dryMachineStatus.values()).find(machine => machine.inUse && machine.roomNumber === roomNumber);

    if (currentMachineInUse) {
      alert(`"${roomNumber}"는 이미 건조기 사용 중입니다.`);
      return;
    }

    dryMachineStatus.get(machineId).inUse = true;
    dryMachineStatus.get(machineId).roomNumber = roomNumber;

    if (machineId === 'd3') {
      selectedDryMachine.src = 'svg/검정색건조중.svg';
    } else {
      selectedDryMachine.src = 'svg/건조중사진.svg';
    }

    // 호실 명찰 생성 및 표시
    const roomDisplay = createRoomDisplay(roomNumber, selectedDryMachine);

    setTimeout(() => {
      dryMachineStatus.get(machineId).inUse = false;
      if (machineId === 'd3') {
        selectedDryMachine.src = 'svg/검정색건조기.svg';
      } else {
        selectedDryMachine.src = 'svg/건조기사진.svg';
      }
      alert('건조가 끝났습니다.');

      // 건조가 끝나면 방번호 표시를 삭제합니다.
      roomDisplay.remove();
    }, 10000);
  }
}

dryMachines.forEach(machine => {
  machine.addEventListener('click', useDryMachine);
});
