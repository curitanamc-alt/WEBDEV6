// ── Date Greeting ──
const d = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
document.getElementById('greetDate').textContent =
  `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} · Clinic Dashboard`;

// ── Shared Data Variables ──
const completedData  = [142, 168, 155];
const processingData = [38, 45, 41];
const pendingData    = [24, 19, 28];
const flaggedResults = 3;
const outstandingBal = '₱12,400';

// ── Stat Cards ──
document.querySelector('.stat-grid .stat-card:nth-child(1) .stat-value').textContent =
  completedData[2] + processingData[2] + pendingData[2];
document.querySelector('.stat-grid .stat-card:nth-child(2) .stat-value').textContent =
  pendingData[2];
document.querySelector('.stat-grid .stat-card:nth-child(3) .stat-value').textContent =
  flaggedResults;
document.querySelector('.stat-grid .stat-card:nth-child(4) .stat-value').textContent =
  outstandingBal;

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
    labels: ['CBC', 'Urinalysis', 'Lipid Panel', 'Blood Glucose', 'Thyroid (TSH)'],
    datasets: [{
      data: [38, 22, 17, 14, 9],
      backgroundColor: ['#4caf87', '#6dc4a0', '#a8dfc9', '#3dba8c', '#b2ead6'],
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
          color: '#3a6b55',
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
      { label: 'Completed',  data: completedData,  backgroundColor: '#4caf87', borderRadius: 5, barPercentage: 0.4 },
      { label: 'Processing', data: processingData, backgroundColor: '#a8dfc9', borderRadius: 5, barPercentage: 0.4 },
      { label: 'Pending',    data: pendingData,    backgroundColor: '#e8c84a', borderRadius: 5, barPercentage: 0.4 }
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
          color: '#3a6b55',
          boxWidth: 10,
          padding: 12
        }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { family: "'DM Sans'" }, color: '#7aaa93' } },
      y: { grid: { color: '#e0f5ec' }, ticks: { font: { family: "'DM Sans'" }, color: '#7aaa93' }, beginAtZero: true }
    }
  }
});