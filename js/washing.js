
const washMachines = document.querySelectorAll('.washmachine');


const washMachineStatus = new Map();

washMachines.forEach(machine => {
  washMachineStatus.set(machine.id, {
    inUse: false
  });
});

function useWashMachine(event) {
  const selectedWashMachine = event.target;
  
  if (!selectedWashMachine.classList.contains('washmachine')) return;

  const machineId = selectedWashMachine.id;
  
  if (washMachineStatus.get(machineId).inUse) {
    alert('이미 사용 중입니다.');
    return;
  }

  const confirmation = confirm('명찰을 등록 하시겠습니까?');
  
  if (confirmation) {
    washMachineStatus.get(machineId).inUse = true; 
    selectedWashMachine.src = 'svg/세탁중사진.svg'; 
    
    setTimeout(() => {
      washMachineStatus.get(machineId).inUse = false; 
      selectedWashMachine.src = 'svg/세탁기사진.svg';
      alert('세탁이 끝났습니다.');
    }, 30000); 
  }
}

washMachines.forEach(machine => {
  machine.addEventListener('click', useWashMachine);
});
