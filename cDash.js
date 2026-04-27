// ── Date Greeting ──
const d = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
document.getElementById('greetDate').textContent =
  `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} · LabCenter Dashboard`;

// ── Modal helpers ──
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(el => {
  el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
});

// ── Nav active state ──
function setActive(el) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
}

// ── Toast notifications ──
function showToast(msg, type = 'info') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3100);
}

// ── Mark all notifications read ──
function markAllRead() {
  document.getElementById('notifBadge').style.display = 'none';
  closeModal('notif-modal');
  showToast('All notifications cleared.', 'success');
}

// ── Catalog filter (stub) ──
function filterCatalog(val) {}

// ── Charts ──
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Sales', 'Finance', 'Marketing', 'HR'],
    datasets: [{
      data: [0, 0, 0, 0],
      backgroundColor: ['#4a6fa5', '#7aa3e5', '#f1c40f', '#a0b4d4'],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          font: { size: 11, family: "'DM Sans',sans-serif" },
          color: '#4a5e7a',
          boxWidth: 12,
          padding: 10
        }
      }
    }
  }
});

const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      { label: 'Desktop', data: [0, 0, 0], backgroundColor: '#2d4a7a', borderRadius: 5, barPercentage: 0.4 },
      { label: 'Mobile',  data: [0, 0, 0], backgroundColor: '#a0b4d4', borderRadius: 5, barPercentage: 0.4 }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 11, family: "'DM Sans',sans-serif" },
          color: '#4a5e7a',
          boxWidth: 10,
          padding: 12
        }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { family: "'DM Sans'" }, color: '#8a9ab8' } },
      y: { grid: { color: '#eef0f5' }, ticks: { font: { family: "'DM Sans'" }, color: '#8a9ab8' }, max: 100 }
    }
  }
});
