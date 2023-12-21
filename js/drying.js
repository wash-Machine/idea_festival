
const drymachines = document.querySelectorAll('.drymachine');

const drymachineStatus = new Map();


drymachines.forEach(machine => {
  drymachineStatus.set(machine.id, {
    inUse: false
  });
});


function useDrymachine(event) {
  const selectedDrymachine = event.target; 
  
 
  if (!selectedDrymachine.classList.contains('drymachine')) return;

  const machineId = selectedDrymachine.id;
  
  
  if (drymachineStatus.get(machineId).inUse) {
    alert('이미 사용 중입니다.');
    return;
  }

  const confirmation = confirm('명찰을 등록 하시겠습니까?');
  
  if (confirmation) {
    drymachineStatus.get(machineId).inUse = true; 
    
    if (machineId === 'd3') {
      selectedDrymachine.src = 'svg/검정색건조중.svg'; 
    } else {
      selectedDrymachine.src = 'svg/건조중사진.svg'; 
    }
    
    setTimeout(() => {
      drymachineStatus.get(machineId).inUse = false; 
      if (machineId === 'd3') {
        selectedDrymachine.src = 'svg/검정색건조기.svg'; 
      } else {
        selectedDrymachine.src = 'svg/건조기사진.svg'; 
      }
      alert('건조가 끝났습니다.');
    }, 10000); 
  }
}

// 각 세탁기에 이벤트 리스너 추가
drymachines.forEach(machine => {
  machine.addEventListener('click', useDrymachine);
});
