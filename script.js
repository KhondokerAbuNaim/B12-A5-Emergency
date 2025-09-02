const coinEl = document.getElementById('coinCount');
const heartEl = document.getElementById('heartCount');
const copyEl  = document.getElementById('copyCount');
const historyList = document.getElementById('historyList');
const clearBtn = document.getElementById('clearHistory');

let coins = 100, hearts = 0, copies = 0;

function updateCounters(){
  coinEl.textContent = coins;
  heartEl.textContent = hearts;
  copyEl.textContent = copies;
}

function addHistoryItem(name, number){
  const li = document.createElement('li');
  li.className = 'history-item';
  li.innerHTML = `
    <span>${name} (${number})</span>
    <span>${new Date().toLocaleTimeString()}</span>
  `;
  historyList.prepend(li);
}

document.querySelectorAll('.card').forEach(card=>{
  const name = card.dataset.name;
  const number = card.dataset.number;

  card.querySelector('.heart').addEventListener('click',()=>{
    hearts++;
    updateCounters();
  });

  card.querySelector('.copy').addEventListener('click',async()=>{
    try{
      await navigator.clipboard.writeText(number);
      copies++;
      updateCounters();
      alert(`Copied: ${name} - ${number}`);
    }catch(e){ alert('Copy failed'); }
  });

  card.querySelector('.call').addEventListener('click',()=>{
    if(coins<20){alert('Not enough coins!');return;}
    coins-=20;updateCounters();
    alert(`Calling ${name} at ${number}`);
    addHistoryItem(name,number);
  });
});

clearBtn.addEventListener('click',()=>{historyList.innerHTML='';});
